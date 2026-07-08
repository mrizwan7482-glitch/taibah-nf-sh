"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { houseConfig } from "@/config/houseConfig";

type LoadingScreenProps = {
  onComplete?: () => void;
};

// Minimum time the loading screen stays visible (ms)
const MIN_DISPLAY_MS = 1600;

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();

    const completeLoading = async () => {
      const fontsReady =
        "fonts" in document ? document.fonts.ready : Promise.resolve();

      const gateWallReady = new Promise<void>((resolve) => {
        const img = new window.Image();
        img.src = houseConfig.images.gateWall;
        if (img.complete) resolve();
        else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });

      const houseFrontReady = new Promise<void>((resolve) => {
        const img = new window.Image();
        img.src = houseConfig.images.houseFront;
        if (img.complete) resolve();
        else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });

      try {
        await Promise.all([
          fontsReady.catch(() => undefined),
          gateWallReady,
          houseFrontReady,
        ]);
      } catch {
        // Proceed regardless
      }

      if (!isMounted) return;

      // Always stay visible for MIN_DISPLAY_MS so the animation plays
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      setTimeout(() => {
        if (isMounted) {
          requestAnimationFrame(() => setIsVisible(false));
        }
      }, remaining);
    };

    if (document.readyState === "complete") {
      completeLoading();
    } else {
      window.addEventListener("load", completeLoading, { once: true });
    }

    return () => {
      isMounted = false;
      window.removeEventListener("load", completeLoading);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible ? (
        <motion.div
          className="loading-screen"
          role="status"
          aria-live="polite"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: "easeOut" }}
        >
          <div className="loading-content">
            {/* Animated crest — purely CSS-driven so it shows immediately */}
            <div className="loading-crest" aria-hidden="true">
              <svg
                viewBox="0 0 80 80"
                fill="none"
                className="loading-crest-svg"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Outer spinning dashed ring — CSS animated */}
                <circle
                  cx="40" cy="40" r="34"
                  stroke="rgba(197,160,89,0.4)"
                  strokeWidth="1.2"
                  strokeDasharray="6 4"
                  className="loading-ring-outer"
                />
                {/* Inner counter-spinning ring — CSS animated */}
                <circle
                  cx="40" cy="40" r="26"
                  stroke="rgba(197,160,89,0.22)"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                  className="loading-ring-inner"
                />
                {/* House — static, always visible */}
                {/* Ground line */}
                <line x1="16" y1="60" x2="64" y2="60" stroke="#c5a059" strokeWidth="1.6" />
                {/* Body */}
                <path
                  d="M 20 60 L 20 38 L 40 20 L 60 38 L 60 60 Z"
                  stroke="#c5a059"
                  strokeWidth="1.6"
                  fill="rgba(197,160,89,0.07)"
                />
                {/* Roof overhang */}
                <path d="M 14 40 L 40 16 L 66 40" stroke="#c5a059" strokeWidth="1.6" />
                {/* Door */}
                <path d="M 35 60 L 35 47 L 45 47 L 45 60" stroke="#c5a059" strokeWidth="1.4" />
                {/* Left window */}
                <rect x="22" y="42" width="8" height="7" rx="1"
                  stroke="#c5a059" strokeWidth="1.3" fill="rgba(197,160,89,0.12)" />
                {/* Right window */}
                <rect x="50" y="42" width="8" height="7" rx="1"
                  stroke="#c5a059" strokeWidth="1.3" fill="rgba(197,160,89,0.12)" />
              </svg>
            </div>

            <p className="loading-text">{houseConfig.messages.loading}</p>
            <span className="loading-line" aria-hidden="true" />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
