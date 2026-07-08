"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/loading/LoadingScreen";
import { InvitationExperience } from "@/components/experience/InvitationExperience";

export default function Home() {
  const [showExperience, setShowExperience] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setShowExperience(true)} />
      {showExperience && <InvitationExperience />}
    </>
  );
}
