"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import gateWallImg from "../../public/images/actual-gate-wall.webp";

type GateSceneProps = {
  onNext: () => void;
};

export function GateScene({ onNext }: GateSceneProps) {
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

    // Particle class
    class Particle {
      x = Math.random() * width;
      y = Math.random() * height + height;
      size = Math.random() * 2 + 1;
      speedY = Math.random() * 0.4 + 0.1;
      speedX = Math.random() * 0.3 - 0.15;
      opacity = Math.random() * 0.5 + 0.2;
      fadeSpeed = Math.random() * 0.005 + 0.002;

      update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        // Reset if goes off screen
        if (this.y < -10) {
          this.y = height + 10;
          this.x = Math.random() * width;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(189, 145, 64, ${this.opacity})`;
        context.shadowBlur = 4;
        context.shadowColor = "#e6cf93";
        context.fill();
      }
    }

    const particles: Particle[] = Array.from({ length: 40 }, () => new Particle());

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
  }, [prefersReducedMotion]);

  return (
    <div className="scene-container gate-scene" role="region" aria-label="Gate View">
      {/* Background Image with Zoom */}
      <motion.div
        className="scene-bg-wrapper"
        initial={{ scale: prefersReducedMotion ? 1 : 1.05 }}
        animate={{ scale: prefersReducedMotion ? 1 : 1.15 }}
        transition={{ duration: 12, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src={gateWallImg}
          alt="Taibah House Gate Wall"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="scene-bg-image"
        />
        <div className="scene-overlay-dark" />
      </motion.div>

      {/* Floating Particles Canvas */}
      {!prefersReducedMotion && (
        <canvas ref={canvasRef} className="particles-canvas" aria-hidden="true" />
      )}

      {/* Content Frame */}
      <div className="scene-content">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 }}
          className="gate-card"
        >
          <span className="gate-subtitle">GREETINGS<span className="emoji-sparkle">✨</span></span>
          <h1 className="gate-title">An Invitation Awaits</h1>
          <p className="gate-text">
            Step through our doors and join us in celebrating a new chapter.
          </p>
          <Button onClick={onNext} className="gate-button animate-pulse-subtle">
            Step Inside →
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
