"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { AnimatedHouseIcon } from "./AnimatedHouseIcon";

export function StorySection() {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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
          {/* Qur'an Dua and Translation */}
          <motion.div variants={lineVariants} className="dua-container">
            <h2 className="dua-arabic">رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا وَأَنْتَ خَيْرُ الْمُنْزِلِينَ</h2>
            <p className="dua-translation">
              &ldquo;My Lord, let me land at a blessed place, for You are the Best to accommodate us.&rdquo;
            </p>
            <span className="dua-reference">(Qur&apos;an 23:29)</span>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={lineVariants}
            className="card-gold-divider"
            style={{ width: "80%", marginBlock: "8px 8px" }}
          >
            <div className="divider-diamond" />
          </motion.div>

          {/* Subheading: We named our Home... */}
          <motion.h3
            variants={lineVariants}
            className="revealer-subheading"
          >
            We named our Home...
          </motion.h3>

          {/* House Name Revealer Plaque Box Viewport */}
          <motion.div
            variants={lineVariants}
            className="revealer-viewport"
            onClick={() => setIsOpen(!isOpen)}
            style={{ 
              perspective: "1200px", 
              transformStyle: "preserve-3d" 
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            role="button"
            aria-expanded={isOpen}
            aria-label="Reveal house name board"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsOpen(!isOpen);
              }
            }}
          >
            {/* Background Revealed Image */}
            <div className="revealer-image-wrapper" style={{ transform: "translate3d(0, 0, 0px)" }}>
              <Image
                src="/images/actual-house-name-board.webp"
                alt="Taibah House Name Board"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="revealer-image"
              />
              <div className="revealer-image-overlay" />
            </div>

            {/* Left Door Panel */}
            <motion.div
              className="revealer-door door-left"
              animate={{
                rotateY: prefersReducedMotion ? 0 : (isOpen ? -115 : 0),
                x: prefersReducedMotion ? (isOpen ? "-100%" : "0%") : "0%",
                opacity: prefersReducedMotion && isOpen ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 15,
                mass: 0.9,
              }}
              style={{
                originX: 0,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "translate3d(0, 0, 5px)",
              }}
            >
              <div className="door-panel-border" />
            </motion.div>

            {/* Right Door Panel */}
            <motion.div
              className="revealer-door door-right"
              animate={{
                rotateY: prefersReducedMotion ? 0 : (isOpen ? 115 : 0),
                x: prefersReducedMotion ? (isOpen ? "100%" : "0%") : "0%",
                opacity: prefersReducedMotion && isOpen ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 85,
                damping: 15,
                mass: 0.9,
              }}
              style={{
                originX: 1,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "translate3d(0, 0, 5px)",
              }}
            >
              <div className="door-panel-border" />
            </motion.div>

            {/* Center Content Overlay (fades out as doors open) */}
            <motion.div
              className="revealer-content-overlay"
              animate={{
                opacity: isOpen ? 0 : 1,
                scale: isOpen ? 0.9 : 1,
              }}
              style={{
                pointerEvents: isOpen ? "none" : "auto",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "translate3d(0, 0, 10px)",
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <div className="revealer-crest-wrapper" style={{ marginBottom: "16px" }}>
                <AnimatedHouseIcon />
              </div>

              {/* Shimmering Tap Badge */}
              <motion.div
                className="tap-to-open-badge"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <span className="pulse-dot" />
                <span>Tap to Open</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Meaning of the name Taybah - revealed below the box when open */}
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0, paddingBottom: 0 }}
            animate={isOpen ? {
              opacity: 1,
              height: "auto",
              marginTop: 24,
              paddingBottom: 24,
            } : {
              opacity: 0,
              height: 0,
              marginTop: 0,
              paddingBottom: 0,
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ 
              overflow: "hidden", 
              width: "calc(100% + 24px)",
              paddingInline: "12px",
              marginInline: "-12px",
            }}
          >
            <div className="name-meaning-container">
              <p className="meaning-line-sub">
                A name inspired by the city beloved to the Prophet <span className="arabic-glyphet">ﷺ</span>...
              </p>
              <p className="meaning-line-sub">
                A home we pray is filled with barakah.
              </p>
              <p className="meaning-welcome">Welcome to</p>
              <h3 className="meaning-name-title">Taybah</h3>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
