"use client";

import { houseConfig } from "@/config/houseConfig";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="experience-footer">
      <Container>
        <div className="footer-content">
          <h2 className="footer-title">{houseConfig.messages.thankYou}</h2>
          <div className="footer-divider" aria-hidden="true" />
          <p className="footer-text">{houseConfig.messages.thankYouSubtext}</p>
        </div>
      </Container>
    </footer>
  );
}
