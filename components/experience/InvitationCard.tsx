"use client";

import { motion, useReducedMotion } from "framer-motion";
import { houseConfig } from "@/config/houseConfig";
import { Card } from "@/components/ui/Card";

export function InvitationCard() {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 40, scale: prefersReducedMotion ? 1 : 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      className="invitation-card-wrapper"
    >
      <Card className="luxury-invitation-card">
        {/* Decorative Gold Corners */}
        <div className="card-corner corner-tl" />
        <div className="card-corner corner-tr" />
        <div className="card-corner corner-bl" />
        <div className="card-corner corner-br" />

        <div className="card-inner-border">
          {/* Bismillah Section */}
          <motion.div variants={itemVariants} className="card-bismillah-container">
            <span className="arabic-bismillah" lang="ar" dir="rtl">
              {houseConfig.messages.bismillahArabic}
            </span>
            <div className="bismillah-translation">
              {houseConfig.messages.bismillahEnglishLines.map((line, idx) => (
                <p key={idx} className="bismillah-line">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="card-gold-divider">
            <div className="divider-diamond" />
          </motion.div>

          {/* Greeting Section */}
          {/* <motion.div variants={itemVariants} className="card-greeting-container">
            <span className="arabic-greeting" lang="ar" dir="rtl">
              {houseConfig.messages.greetingArabic}
            </span>
            <p className="card-opening-msg">{houseConfig.messages.invitation.opening}</p>
          </motion.div> */}

          {/* Main Invitation Message */}
          <motion.div variants={itemVariants} className="card-body-msg">
            {houseConfig.messages.invitation.body}
          </motion.div>

          {/* Event Details Card Section */}
          <motion.div variants={itemVariants} className="card-event-details">
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Hosts</span>
                <span className="detail-value">
                  {houseConfig.event.owners.join(" & ")}
                </span>
                {houseConfig.event.children && houseConfig.event.children.length > 0 && (
                  <span className="detail-children">
                    with {houseConfig.event.children.slice(0, -1).join(", ")} & {houseConfig.event.children[houseConfig.event.children.length - 1]}
                  </span>
                )}
              </div>

              <div className="detail-divider-h" />

              <div className="detail-item">
                <span className="detail-label">Date</span>
                <span className="detail-value">{houseConfig.event.date}</span>
              </div>

              <div className="detail-divider-h" />

              <div className="detail-item">
                <span className="detail-label">Venue</span>
                <span className="detail-value venue-text">
                  {houseConfig.event.venue}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}
