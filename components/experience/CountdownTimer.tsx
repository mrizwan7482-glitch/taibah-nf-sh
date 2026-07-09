"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { houseConfig } from "@/config/houseConfig";
import { Container } from "@/components/ui/Container";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const targetDate = new Date(houseConfig.event.countdownDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="countdown-section">
      <Container>
        <div className="countdown-header">
          <span className="countdown-subtitle">THE COUNTDOWN</span>
          <h2 className="countdown-title">Counting The Moments</h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 } },
          }}
          className="countdown-grid"
        >
          {/* Days Card */}
          <motion.div variants={cardVariants} className="countdown-card">
            <div className="countdown-number">{timeLeft.days}</div>
            <div className="countdown-label">Days</div>
          </motion.div>

          {/* Hours Card */}
          <motion.div variants={cardVariants} className="countdown-card">
            <div className="countdown-number">{timeLeft.hours}</div>
            <div className="countdown-label">Hours</div>
          </motion.div>

          {/* Minutes Card */}
          <motion.div variants={cardVariants} className="countdown-card">
            <div className="countdown-number">{timeLeft.minutes}</div>
            <div className="countdown-label">Minutes</div>
          </motion.div>

          {/* Seconds Card */}
          <motion.div variants={cardVariants} className="countdown-card">
            <div className="countdown-number">{timeLeft.seconds}</div>
            <div className="countdown-label">Seconds</div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
