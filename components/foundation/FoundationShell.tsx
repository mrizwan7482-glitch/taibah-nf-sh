import { houseConfig } from "@/config/houseConfig";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function FoundationShell() {
  return (
    <main className="foundation-shell" aria-label="Housewarming invitation">
      <Container>
        <AnimatedSection className="foundation-content">
          <div className="foundation-crest-frame" aria-hidden="true">
            <svg
              viewBox="0 0 80 80"
              fill="none"
              className="foundation-crest-svg"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="40" cy="40" r="34" stroke="rgba(197,160,89,0.35)" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="16" y1="60" x2="64" y2="60" stroke="var(--color-gold)" strokeWidth="1.5" />
              <path d="M 20 60 L 20 38 L 40 20 L 60 38 L 60 60 Z" stroke="var(--color-gold)" strokeWidth="1.5" fill="rgba(197,160,89,0.06)" />
              <path d="M 14 40 L 40 16 L 66 40" stroke="var(--color-gold)" strokeWidth="1.5" />
              <path d="M 35 60 L 35 47 L 45 47 L 45 60" stroke="var(--color-gold)" strokeWidth="1.4" />
              <rect x="22" y="42" width="8" height="7" rx="1" stroke="var(--color-gold)" strokeWidth="1.3" fill="rgba(197,160,89,0.1)" />
              <rect x="50" y="42" width="8" height="7" rx="1" stroke="var(--color-gold)" strokeWidth="1.3" fill="rgba(197,160,89,0.1)" />
            </svg>
          </div>

          <p className="foundation-arabic" lang="ar" dir="rtl">
            {houseConfig.messages.bismillahArabic}
          </p>

          <h1 className="foundation-title">{houseConfig.website.title}</h1>

          <p className="foundation-description">
            {houseConfig.website.description}
          </p>

          <Card className="foundation-blessing">
            <p className="foundation-greeting" lang="ar" dir="rtl">
              {houseConfig.messages.greetingArabic}
            </p>
            <p className="foundation-opening">
              {houseConfig.messages.invitation.opening}
            </p>
          </Card>
        </AnimatedSection>
      </Container>
    </main>
  );
}
