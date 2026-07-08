"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type ParticlesCanvasProps = {
  className?: string;
  count?: number;
  colorTheme?: "gold" | "bokeh";
};

export function ParticlesCanvas({ className, count = 40, colorTheme = "gold" }: ParticlesCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const isBokeh = colorTheme === "bokeh";
    const particlesCount = isBokeh ? 18 : count;

    class Particle {
      x = Math.random() * width;
      y = Math.random() * height; // start distributed on screen
      size = isBokeh ? Math.random() * 50 + 30 : Math.random() * 2 + 1; // large, out-of-focus orbs for bokeh
      speedY = isBokeh ? Math.random() * 0.12 + 0.04 : Math.random() * 0.8 + 0.4; // extremely slow drift for bokeh
      speedX = isBokeh ? Math.random() * 0.08 - 0.04 : Math.random() * 0.3 - 0.15;
      opacity = isBokeh ? Math.random() * 0.08 + 0.03 : Math.random() * 0.4 + 0.2; // very translucent for bokeh

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        const limit = isBokeh ? -this.size : -10;
        if (this.y < limit) {
          this.y = height + this.size;
          this.x = Math.random() * width;
          this.speedY = isBokeh ? Math.random() * 0.12 + 0.04 : Math.random() * 0.8 + 0.4;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        if (isBokeh) {
          // Draw a luxurious, warm golden out-of-focus bokeh light orb
          const gradient = context.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size
          );
          // Soft golden-white center, fading out to fully transparent
          gradient.addColorStop(0, `rgba(255, 245, 218, ${this.opacity})`);
          gradient.addColorStop(0.3, `rgba(240, 215, 168, ${this.opacity * 0.4})`);
          gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

          context.beginPath();
          context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          context.fillStyle = gradient;
          context.fill();
        } else {
          // Classic crisp glowing gold particle (perfect on dark background)
          context.beginPath();
          context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          context.fillStyle = `rgba(197, 160, 89, ${this.opacity})`;
          context.shadowBlur = 4;
          context.shadowColor = "#eddca4";
          context.fill();
        }
      }
    }

    const particles: Particle[] = Array.from({ length: particlesCount }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion, count, colorTheme]);

  if (prefersReducedMotion) return null;

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
