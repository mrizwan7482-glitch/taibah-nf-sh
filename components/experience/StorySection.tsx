"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useMotionValue, useTransform, animate } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedHouseIcon } from "./AnimatedHouseIcon";

export function StorySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const trackWidthRef = useRef(300);
  const thumbWidth = 52;
  const prefersReducedMotion = useReducedMotion();

  // Declarative MotionValues — no React state during drag
  const x = useMotionValue(0);

  // maxDrag as MotionValue so transforms stay in sync with resize
  const maxDragRef = useRef(trackWidthRef.current - thumbWidth - 8);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        trackWidthRef.current = trackRef.current.clientWidth;
        maxDragRef.current = trackWidthRef.current - thumbWidth - 8;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Progress 0→1 based on x, dynamically clamped to maxDrag at drag-time
  const dragProgress = useTransform(x, () => {
    const max = maxDragRef.current;
    return Math.min(1, Math.max(0, x.get() / max));
  });

  const handleDragEnd = () => {
    // Re-read from DOM in case of resize
    const max = trackRef.current
      ? trackRef.current.clientWidth - thumbWidth - 8
      : maxDragRef.current;
    maxDragRef.current = max;

    const currentX = x.get();
    if (currentX > max * 0.72) {
      animate(x, max, { type: "spring", stiffness: 350, damping: 35 });
    } else {
      animate(x, 0, { type: "spring", stiffness: 350, damping: 35 });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  // All transforms are purely derived from dragProgress — no React re-renders during swipe
  const fillWidth = useTransform(dragProgress, (p) => `calc(${p * 100}% + ${thumbWidth / 2}px)`);
  const textOpacity = useTransform(dragProgress, [0, 0.55], [1, 0]);
  const coverOpacity = useTransform(dragProgress, [0, 0.7], [1, 0]);
  const clipPathValue = useTransform(
    dragProgress,
    (p) => `inset(0 ${((1 - p) * 100).toFixed(2)}% 0 0)`
  );

  return (
    <section className="story-section-outer">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="story-content"
        >
          {/* Paragraph 1 */}
          <motion.p variants={lineVariants} className="story-line">
            A home is more than bricks and walls. It is where prayers are offered,
            dreams are nurtured, and memories are created. By the grace of Almighty Allah,
            our dream has become reality.
          </motion.p>

          {/* Paragraph 2 - Highlight */}
          <motion.p variants={lineVariants} className="story-line-highlight">
            Your presence and duas will make this occasion even more special.
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={lineVariants}
            className="card-gold-divider"
            style={{ width: "80%", marginBlock: "20px 8px" }}
          >
            <div className="divider-diamond" />
          </motion.div>

          {/* House Name Revealer Plaque Box Viewport */}
          <motion.div variants={lineVariants} className="revealer-viewport">
            {/* Cover — fades out as image is revealed, fades back when closed */}
            <motion.div
              className="revealer-cover"
              style={{ opacity: coverOpacity, pointerEvents: "none" }}
            >
              <AnimatedHouseIcon />
              <p className="cover-text">Our new beginning is named...</p>
            </motion.div>

            {/* Revealed House Name Board Image — clips in from left as progress increases */}
            <motion.div
              className="revealer-image-wrapper"
              style={{ clipPath: clipPathValue }}
            >
              <Image
                src="/images/actual-house-name-board.webp"
                alt="Taibah House Name Board"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="revealer-image"
              />
            </motion.div>
          </motion.div>

          {/* Draggable Slider track */}
          <motion.div variants={lineVariants} className="revealer-slider-wrapper">
            <div ref={trackRef} className="revealer-track">
              <motion.div
                className="revealer-track-fill"
                style={{ width: fillWidth }}
              />

              <motion.span
                className="revealer-track-text"
                style={{ opacity: textOpacity }}
              >
                Swipe Right to Unveil →
              </motion.span>

              <motion.div
                drag="x"
                dragElastic={0.04}
                dragMomentum={false}
                dragConstraints={trackRef}
                style={{ x }}
                onDragEnd={handleDragEnd}
                className="revealer-thumb"
                whileHover={{ scale: 1.05 }}
                whileDrag={{ scale: 0.97, cursor: "grabbing" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="revealer-thumb-icon"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
