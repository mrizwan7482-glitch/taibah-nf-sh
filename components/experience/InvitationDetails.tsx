"use client";

import { motion } from "framer-motion";
import { InvitationCard } from "./InvitationCard";
import { StorySection } from "./StorySection";
import { CountdownTimer } from "./CountdownTimer";
import { LocationSection } from "./LocationSection";
import { Footer } from "./Footer";
import { ParticlesCanvas } from "./ParticlesCanvas";

export function InvitationDetails() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="invitation-details-layout"
    >
      <ParticlesCanvas className="details-particles-canvas" count={30} colorTheme="bokeh" />
      <InvitationCard />
      <StorySection />
      <CountdownTimer />
      <LocationSection />
      <Footer />
    </motion.div>
  );
}
