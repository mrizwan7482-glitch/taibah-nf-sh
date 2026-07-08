"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { GateScene } from "./GateScene";
import { InvitationDetails } from "./InvitationDetails";

type ExperienceState = "GATE" | "DETAILS";

export function InvitationExperience() {
  const [state, setState] = useState<ExperienceState>("GATE");

  return (
    <div className="app-shell relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {state === "GATE" && (
          <GateScene
            key="gate"
            onNext={() => {
              setState("DETAILS");
            }}
          />
        )}

        {state === "DETAILS" && <InvitationDetails key="details" />}
      </AnimatePresence>
    </div>
  );
}
