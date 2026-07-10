

export type GalleryImage = {
  id: string;
  label: string;
  src: string;
  alt: string;
  priority?: boolean;
};

export type HouseConfig = {
  website: {
    title: string;
    description: string;
  };
  event: {
    houseName: string;
    owners: readonly string[];
    children?: readonly string[];
    date: string;
    venue: string;
    address: string;
    mapsUrl: string;
    countdownDate: string;
  };
  images: {
    gateWall: string;
    gallery: readonly GalleryImage[];
  };
  messages: {
    loading: string;
    doorPrompt: string;
    bismillahArabic: string;
    bismillahEnglishLines: readonly string[];
    greetingArabic: string;
    invitation: {
      opening: string;
      body: string;
    };
    storyLines: readonly string[];
    thankYou: string;
    thankYouSubtext: string;
  };
};

export const houseConfig = {
  website: {
    title: "Housewarming Invitation | Taibah",
    description:
      "A premium digital housewarming invitation created for a warm, elegant arrival experience.",
  },
  event: {
    houseName: "A New Beginning",
    owners: ["Shuhaib KC", "Nafeesath P"],
    children: ["Zuhra Shazmin", "Maryam Mehrish", "Muhammed Habib Ali"],
    date: "Sunday, August 16, 2026",
    venue: "Padne, Kasaragod",
    address: "Padne, Kasaragod",
    mapsUrl: "https://www.google.com/maps/place/12%C2%B010'26.3%22N+75%C2%B009'00.3%22E/@12.173962,75.1475171,17z/data=!3m1!4b1!4m4!3m3!8m2!3d12.173962!4d75.150092?entry=ttu&g_ep=EgoyMDI2MDcwNi4wIKXMDSoASAFQAw%3D%3D",
    countdownDate: "2026-08-16T00:00:00",
  },
  images: {
    gateWall: "/images/actual-gate-wall.webp",
    gallery: [
      {
        id: "house-side",
        label: "Taibah Villa Side View",
        src: "/images/actual-gate-wall.webp",
        alt: "Angled side view of Taibah Villa showing the brown gate and architecture",
      },
      {
        id: "house-name-board",
        label: "Taibah Villa Name Board",
        src: "/images/actual-house-name-board.webp",
        alt: "Name board of Taibah Villa with warm stonework and metal script",
      },
    ],
  },
  messages: {
    loading: "Preparing your invitation...",
    doorPrompt: "Swipe to Open Our Door \u2192",
    bismillahArabic:
      "\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u064e\u0651\u062d\u0650\u064a\u0652\u0645\u0650",
    bismillahEnglishLines: [
      "In the name of Allah,",
      "The Most Gracious,",
      "The Most Merciful",
    ],
    greetingArabic:
      "\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064a\u0643\u0645 \u0648\u0631\u062d\u0645\u0629 \u0627\u0644\u0644\u0647 \u0648\u0628\u0631\u0643\u0627\u062a\u0647",
    invitation: {
      opening: "With the blessings of Almighty Allah,",
      body: "We warmly invite you and your family to grace the occasion of our Housewarming Ceremony.",
    },
    storyLines: [
      "A home is more than bricks and walls.",
      "It is where prayers are offered,",
      "dreams are nurtured,",
      "and memories are created.",
      "By the grace of Almighty Allah,",
      "our dream has become reality.",
      "Your presence and duas",
      "will make this occasion even more special.",
    ],
    thankYou: "We can't wait to welcome you!",
    thankYouSubtext: "We look forward to celebrating this new beginning with you.",
  },
} as const satisfies HouseConfig;
