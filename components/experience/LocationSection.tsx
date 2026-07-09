"use client";

import { motion, useReducedMotion } from "framer-motion";
import { houseConfig } from "@/config/houseConfig";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";

export function LocationSection() {
  const prefersReducedMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="location-section">
      <Container>
        <div className="location-header">
          <span className="location-subtitle">THE LOCATION</span>
          <h2 className="location-title">Find Our Home</h2>
        </div>

        <div className="location-content-grid">
          {/* Address Details & QR Code */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="location-card-container"
          >
            <Card className="luxury-address-card">
              <div className="address-info-block">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="address-icon"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="address-details">
                  <h3>Address</h3>
                  <p>{houseConfig.event.address}</p>
                </div>
              </div>

              {/* Stylized QR Code SVG */}
              <div className="qr-code-wrapper">
                <div className="qr-code-frame">
                  <svg
                    viewBox="0 0 29 29"
                    className="qr-code-svg"
                    aria-label="Google Maps QR Code"
                  >
                    {/* Finder Patterns (Nested Theme Colors) */}
                    {/* Top-Left */}
                    <rect x="2" y="2" width="7" height="7" fill="var(--color-emerald)" />
                    <rect x="3" y="3" width="5" height="5" fill="var(--color-white)" />
                    <rect x="4" y="4" width="3" height="3" fill="var(--color-gold)" />
                    
                    {/* Top-Right */}
                    <rect x="20" y="2" width="7" height="7" fill="var(--color-emerald)" />
                    <rect x="21" y="3" width="5" height="5" fill="var(--color-white)" />
                    <rect x="22" y="4" width="3" height="3" fill="var(--color-gold)" />
                    
                    {/* Bottom-Left */}
                    <rect x="2" y="20" width="7" height="7" fill="var(--color-emerald)" />
                    <rect x="3" y="21" width="5" height="5" fill="var(--color-white)" />
                    <rect x="4" y="22" width="3" height="3" fill="var(--color-gold)" />

                    {/* QR Code Pixel Matrix Dots */}
                    <g fill="var(--color-emerald)">
                      <rect x="11" y="2" width="1" height="1" />
                      <rect x="14" y="2" width="1" height="1" />
                      <rect x="15" y="2" width="1" height="1" />
                      <rect x="16" y="2" width="1" height="1" />
                      <rect x="10" y="3" width="1" height="1" />
                      <rect x="12" y="3" width="1" height="1" />
                      <rect x="13" y="3" width="1" height="1" />
                      <rect x="14" y="3" width="1" height="1" />
                      <rect x="15" y="3" width="1" height="1" />
                      <rect x="16" y="3" width="1" height="1" />
                      <rect x="10" y="4" width="1" height="1" />
                      <rect x="12" y="4" width="1" height="1" />
                      <rect x="13" y="4" width="1" height="1" />
                      <rect x="16" y="4" width="1" height="1" />
                      <rect x="10" y="5" width="1" height="1" />
                      <rect x="11" y="5" width="1" height="1" />
                      <rect x="14" y="5" width="1" height="1" />
                      <rect x="15" y="5" width="1" height="1" />
                      <rect x="18" y="5" width="1" height="1" />
                      <rect x="11" y="6" width="1" height="1" />
                      <rect x="12" y="6" width="1" height="1" />
                      <rect x="16" y="6" width="1" height="1" />
                      <rect x="18" y="6" width="1" height="1" />
                      <rect x="11" y="7" width="1" height="1" />
                      <rect x="14" y="7" width="1" height="1" />
                      <rect x="16" y="7" width="1" height="1" />
                      <rect x="18" y="7" width="1" height="1" />
                      <rect x="10" y="8" width="1" height="1" />
                      <rect x="12" y="8" width="1" height="1" />
                      <rect x="14" y="8" width="1" height="1" />
                      <rect x="16" y="8" width="1" height="1" />
                      <rect x="18" y="8" width="1" height="1" />
                      <rect x="10" y="9" width="1" height="1" />
                      <rect x="11" y="9" width="1" height="1" />
                      <rect x="12" y="9" width="1" height="1" />
                      <rect x="16" y="9" width="1" height="1" />
                      <rect x="17" y="9" width="1" height="1" />
                      <rect x="18" y="9" width="1" height="1" />
                      <rect x="2" y="10" width="1" height="1" />
                      <rect x="8" y="10" width="1" height="1" />
                      <rect x="10" y="10" width="1" height="1" />
                      <rect x="13" y="10" width="1" height="1" />
                      <rect x="16" y="10" width="1" height="1" />
                      <rect x="19" y="10" width="1" height="1" />
                      <rect x="20" y="10" width="1" height="1" />
                      <rect x="23" y="10" width="1" height="1" />
                      <rect x="24" y="10" width="1" height="1" />
                      <rect x="25" y="10" width="1" height="1" />
                      <rect x="2" y="11" width="1" height="1" />
                      <rect x="6" y="11" width="1" height="1" />
                      <rect x="7" y="11" width="1" height="1" />
                      <rect x="9" y="11" width="1" height="1" />
                      <rect x="13" y="11" width="1" height="1" />
                      <rect x="15" y="11" width="1" height="1" />
                      <rect x="16" y="11" width="1" height="1" />
                      <rect x="17" y="11" width="1" height="1" />
                      <rect x="18" y="11" width="1" height="1" />
                      <rect x="19" y="11" width="1" height="1" />
                      <rect x="21" y="11" width="1" height="1" />
                      <rect x="22" y="11" width="1" height="1" />
                      <rect x="23" y="11" width="1" height="1" />
                      <rect x="24" y="11" width="1" height="1" />
                      <rect x="25" y="11" width="1" height="1" />
                      <rect x="3" y="12" width="1" height="1" />
                      <rect x="5" y="12" width="1" height="1" />
                      <rect x="6" y="12" width="1" height="1" />
                      <rect x="8" y="12" width="1" height="1" />
                      <rect x="10" y="12" width="1" height="1" />
                      <rect x="11" y="12" width="1" height="1" />
                      <rect x="12" y="12" width="1" height="1" />
                      <rect x="13" y="12" width="1" height="1" />
                      <rect x="14" y="12" width="1" height="1" />
                      <rect x="15" y="12" width="1" height="1" />
                      <rect x="16" y="12" width="1" height="1" />
                      <rect x="17" y="12" width="1" height="1" />
                      <rect x="18" y="12" width="1" height="1" />
                      <rect x="20" y="12" width="1" height="1" />
                      <rect x="21" y="12" width="1" height="1" />
                      <rect x="23" y="12" width="1" height="1" />
                      <rect x="25" y="12" width="1" height="1" />
                      <rect x="26" y="12" width="1" height="1" />
                      <rect x="3" y="13" width="1" height="1" />
                      <rect x="4" y="13" width="1" height="1" />
                      <rect x="7" y="13" width="1" height="1" />
                      <rect x="11" y="13" width="1" height="1" />
                      <rect x="13" y="13" width="1" height="1" />
                      <rect x="18" y="13" width="1" height="1" />
                      <rect x="23" y="13" width="1" height="1" />
                      <rect x="26" y="13" width="1" height="1" />
                      <rect x="2" y="14" width="1" height="1" />
                      <rect x="4" y="14" width="1" height="1" />
                      <rect x="6" y="14" width="1" height="1" />
                      <rect x="8" y="14" width="1" height="1" />
                      <rect x="10" y="14" width="1" height="1" />
                      <rect x="11" y="14" width="1" height="1" />
                      <rect x="12" y="14" width="1" height="1" />
                      <rect x="13" y="14" width="1" height="1" />
                      <rect x="17" y="14" width="1" height="1" />
                      <rect x="18" y="14" width="1" height="1" />
                      <rect x="20" y="14" width="1" height="1" />
                      <rect x="26" y="14" width="1" height="1" />
                      <rect x="2" y="15" width="1" height="1" />
                      <rect x="3" y="15" width="1" height="1" />
                      <rect x="6" y="15" width="1" height="1" />
                      <rect x="7" y="15" width="1" height="1" />
                      <rect x="10" y="15" width="1" height="1" />
                      <rect x="11" y="15" width="1" height="1" />
                      <rect x="14" y="15" width="1" height="1" />
                      <rect x="16" y="15" width="1" height="1" />
                      <rect x="17" y="15" width="1" height="1" />
                      <rect x="18" y="15" width="1" height="1" />
                      <rect x="21" y="15" width="1" height="1" />
                      <rect x="25" y="15" width="1" height="1" />
                      <rect x="2" y="16" width="1" height="1" />
                      <rect x="4" y="16" width="1" height="1" />
                      <rect x="5" y="16" width="1" height="1" />
                      <rect x="7" y="16" width="1" height="1" />
                      <rect x="8" y="16" width="1" height="1" />
                      <rect x="9" y="16" width="1" height="1" />
                      <rect x="10" y="16" width="1" height="1" />
                      <rect x="12" y="16" width="1" height="1" />
                      <rect x="15" y="16" width="1" height="1" />
                      <rect x="16" y="16" width="1" height="1" />
                      <rect x="17" y="16" width="1" height="1" />
                      <rect x="20" y="16" width="1" height="1" />
                      <rect x="21" y="16" width="1" height="1" />
                      <rect x="22" y="16" width="1" height="1" />
                      <rect x="23" y="16" width="1" height="1" />
                      <rect x="25" y="16" width="1" height="1" />
                      <rect x="26" y="16" width="1" height="1" />
                      <rect x="2" y="17" width="1" height="1" />
                      <rect x="9" y="17" width="1" height="1" />
                      <rect x="10" y="17" width="1" height="1" />
                      <rect x="11" y="17" width="1" height="1" />
                      <rect x="12" y="17" width="1" height="1" />
                      <rect x="14" y="17" width="1" height="1" />
                      <rect x="16" y="17" width="1" height="1" />
                      <rect x="19" y="17" width="1" height="1" />
                      <rect x="21" y="17" width="1" height="1" />
                      <rect x="23" y="17" width="1" height="1" />
                      <rect x="24" y="17" width="1" height="1" />
                      <rect x="26" y="17" width="1" height="1" />
                      <rect x="2" y="18" width="1" height="1" />
                      <rect x="4" y="18" width="1" height="1" />
                      <rect x="5" y="18" width="1" height="1" />
                      <rect x="6" y="18" width="1" height="1" />
                      <rect x="8" y="18" width="1" height="1" />
                      <rect x="9" y="18" width="1" height="1" />
                      <rect x="14" y="18" width="1" height="1" />
                      <rect x="15" y="18" width="1" height="1" />
                      <rect x="17" y="18" width="1" height="1" />
                      <rect x="18" y="18" width="1" height="1" />
                      <rect x="19" y="18" width="1" height="1" />
                      <rect x="20" y="18" width="1" height="1" />
                      <rect x="21" y="18" width="1" height="1" />
                      <rect x="22" y="18" width="1" height="1" />
                      <rect x="24" y="18" width="1" height="1" />
                      <rect x="10" y="19" width="1" height="1" />
                      <rect x="11" y="19" width="1" height="1" />
                      <rect x="12" y="19" width="1" height="1" />
                      <rect x="16" y="19" width="1" height="1" />
                      <rect x="18" y="19" width="1" height="1" />
                      <rect x="22" y="19" width="1" height="1" />
                      <rect x="12" y="20" width="1" height="1" />
                      <rect x="14" y="20" width="1" height="1" />
                      <rect x="16" y="20" width="1" height="1" />
                      <rect x="18" y="20" width="1" height="1" />
                      <rect x="20" y="20" width="1" height="1" />
                      <rect x="22" y="20" width="1" height="1" />
                      <rect x="26" y="20" width="1" height="1" />
                      <rect x="13" y="21" width="1" height="1" />
                      <rect x="16" y="21" width="1" height="1" />
                      <rect x="17" y="21" width="1" height="1" />
                      <rect x="18" y="21" width="1" height="1" />
                      <rect x="22" y="21" width="1" height="1" />
                      <rect x="11" y="22" width="1" height="1" />
                      <rect x="12" y="22" width="1" height="1" />
                      <rect x="13" y="22" width="1" height="1" />
                      <rect x="17" y="22" width="1" height="1" />
                      <rect x="18" y="22" width="1" height="1" />
                      <rect x="19" y="22" width="1" height="1" />
                      <rect x="20" y="22" width="1" height="1" />
                      <rect x="21" y="22" width="1" height="1" />
                      <rect x="22" y="22" width="1" height="1" />
                      <rect x="24" y="22" width="1" height="1" />
                      <rect x="25" y="22" width="1" height="1" />
                      <rect x="26" y="22" width="1" height="1" />
                      <rect x="11" y="23" width="1" height="1" />
                      <rect x="12" y="23" width="1" height="1" />
                      <rect x="14" y="23" width="1" height="1" />
                      <rect x="15" y="23" width="1" height="1" />
                      <rect x="16" y="23" width="1" height="1" />
                      <rect x="19" y="23" width="1" height="1" />
                      <rect x="20" y="23" width="1" height="1" />
                      <rect x="25" y="23" width="1" height="1" />
                      <rect x="26" y="23" width="1" height="1" />
                      <rect x="12" y="24" width="1" height="1" />
                      <rect x="15" y="24" width="1" height="1" />
                      <rect x="16" y="24" width="1" height="1" />
                      <rect x="18" y="24" width="1" height="1" />
                      <rect x="23" y="24" width="1" height="1" />
                      <rect x="24" y="24" width="1" height="1" />
                      <rect x="26" y="24" width="1" height="1" />
                      <rect x="12" y="25" width="1" height="1" />
                      <rect x="14" y="25" width="1" height="1" />
                      <rect x="15" y="25" width="1" height="1" />
                      <rect x="18" y="25" width="1" height="1" />
                      <rect x="19" y="25" width="1" height="1" />
                      <rect x="21" y="25" width="1" height="1" />
                      <rect x="22" y="25" width="1" height="1" />
                      <rect x="26" y="25" width="1" height="1" />
                      <rect x="10" y="26" width="1" height="1" />
                      <rect x="12" y="26" width="1" height="1" />
                      <rect x="13" y="26" width="1" height="1" />
                      <rect x="14" y="26" width="1" height="1" />
                      <rect x="15" y="26" width="1" height="1" />
                      <rect x="17" y="26" width="1" height="1" />
                      <rect x="18" y="26" width="1" height="1" />
                      <rect x="23" y="26" width="1" height="1" />
                      <rect x="26" y="26" width="1" height="1" />
                    </g>
                  </svg>
                </div>
                <p className="qr-subtext">Scan QR to Navigate</p>

                <a
                  href={houseConfig.event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="open-maps-btn animate-pulse-subtle"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" className="maps-logo-icon" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#ea4335" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 3.17 2.5 6.8 5 9.8V9c0-1.66 1.34-3 3-3h3.7c-.55-1.97-2.2-3.47-4.2-3.88z" fill="#fabc05" />
                    <path d="M13 6c-1.66 0-3 1.34-3 3v9.8c1 .8 2.2 1.5 3 2.2v-12c0-1.66 1.34-3 3-3h1.7c-.85-.6-1.9-.9-2.7-1z" fill="#34a853" />
                    <path d="M12 9c0-1.66 1.34-3 3-3h4c.55 0 1 .45 1 1v4c0 1.66-1.34 3-3 3h-4c-.55 0-1-.45-1-1V9z" fill="#4285f4" />
                  </svg>
                  <span>Open in Maps</span>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
