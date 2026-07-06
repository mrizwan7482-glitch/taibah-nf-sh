# Taibah Housewarming Invitation Website
Version: 1.0

Author: Mohammed Rizwan

---

# 1. PROJECT OVERVIEW

This project is an interactive premium digital housewarming invitation website.

This is NOT a normal invitation webpage.

This is NOT a landing page.

The website should feel like an immersive digital experience.

When the guest opens the website from WhatsApp, they should feel like they are actually arriving at our home.

The experience should be cinematic, elegant, premium, modern and memorable.

The entire project must be mobile-first because almost every visitor will open the invitation from WhatsApp on their mobile phones.

Desktop support is required but mobile experience has the highest priority.

---

# 2. TARGET USERS

Primary Users

- Friends
- Relatives
- Family Members
- Guests

Expected Device Usage

95% Mobile
5% Desktop

Target Browsers

- Chrome Android
- Samsung Internet
- Safari iPhone
- WhatsApp In-App Browser
- Chrome Desktop

---

# 3. PROJECT GOAL

The visitor should never feel they opened a website.

Instead, the visitor should feel they are walking towards our home.

The website should create an emotional experience.

The entire flow should be simple enough for elderly relatives while still looking premium enough to impress younger guests.

---

# 4. DESIGN LANGUAGE

The design should be

Luxury

Minimal

Elegant

Warm

Modern

Premium

Islamic Inspired

Do NOT make it look like a wedding template.

Do NOT make it look like a generic invitation.

Avoid flashy colors.

Avoid unnecessary decorations.

Use subtle Islamic geometric patterns only where appropriate.

---

# 5. COLOR PALETTE

Primary

Deep Emerald

Secondary

Warm Gold

Background

Warm Ivory

Cream

Soft Beige

Text

Dark Gray

White

Accent

Brown

---

# 6. TYPOGRAPHY

Headings

Playfair Display

Body

Poppins

Use generous spacing.

Large typography.

Readable text.

---

# 7. MOBILE FIRST REQUIREMENT

This project MUST be designed mobile-first.

Everything should be optimized for portrait orientation.

The UI should feel like a premium mobile application.

Desktop should simply expand the layout.

Never build desktop first.

Every interaction must work without hover.

Everything should be touch friendly.

Minimum touch size

44px

Support

320px

375px

390px

414px

768px

1024px

1440px

---

# 8. WEBSITE EXPERIENCE

The experience is divided into scenes.

Scene 1

Loading

↓

Scene 2

Gate View

↓

Scene 3

House View

↓

Scene 4

Door Interaction

↓

Scene 5

Door Opens

↓

Scene 6

Camera Enters House

↓

Scene 7

Invitation Appears

↓

Scene 8

Welcome Message

↓

Scene 9

Gallery

↓

Scene 10

Countdown

↓

Scene 11

Location

↓

Scene 12

Thank You

---

# 9. LOADING SCREEN

Luxury loading animation.

Soft background.

Animated logo.

Loading text

Preparing your invitation...

Fade out smoothly.

No fake loading.

---

# 10. HERO

The hero section is our actual house.

I already have

✔ House Front Image

✔ Gate Wall Image

These are the only images currently available.

The website must use these images.

No stock images.

---

# 11. GATE VIEW

Initially show the gate wall image.

Subtle camera zoom.

Small floating particles.

Very subtle movement.

Then transition to the full house image.

---

# 12. HOUSE VIEW

Display the complete designer house image.

The image should occupy the entire screen.

Slow cinematic zoom.

Soft lighting effects.

No excessive animation.

---

# 13. DOOR INTERACTION

The user should interact with the front door.

Desktop

Mouse drag supported.

Mobile

Swipe to Open.

Do NOT depend on hover.

The user sees

Swipe to Open Our Door →

The handle moves naturally.

The lock unlocks.

Door opens.

Smooth animation.

---

# 14. CAMERA ANIMATION

Once the door opens

Camera slowly moves forward.

Screen slightly brightens.

White fade.

Invitation appears.

The transition should feel cinematic.

---

# 15. INVITATION CARD

The invitation card appears beautifully.

Use glassmorphism.

Rounded corners.

Soft shadows.

Elegant spacing.

Display

بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ

Below

In the name of Allah,
The Most Gracious,
The Most Merciful

Greeting

السلام عليكم ورحمة الله وبركاته

Invitation Message

With the blessings of Almighty Allah,

We warmly invite you and your family to grace the occasion of our Housewarming Ceremony.

Display

House Name

Owners

Date

Time

Venue

---

# 16. STORY

Create a heartfelt section.

Example

A home is more than bricks and walls.

It is where prayers are offered,
dreams are nurtured,
and memories are created.

By the grace of Almighty Allah,
our dream has become reality.

Your presence and duas
will make this occasion even more special.

---

# 17. GALLERY

No family photos.

Only house images.

Current Images

House Front

Gate Wall

Later I may add

Living Room

Prayer Room

Terrace

Garden

Night View

Gallery should automatically support adding more images without code changes.

---

# 18. COUNTDOWN

Display

Days

Hours

Minutes

Seconds

Live countdown until housewarming date.

Elegant animation.

---

# 19. LOCATION

Display

QR Code

Google Maps Button

Open in Maps

Copy Address

When opened on mobile

Maps application should open directly.

---

# 20. THANK YOU

Display

Jazakum Allahu Khairan

Looking forward to welcoming you.

---

# 21. CONFIGURATION SYSTEM

Create

config/houseConfig.ts

Everything must come from this file.

House Name

Owners

Date

Time

Address

Maps URL

Gallery

Countdown Date

Messages

Website Title

Website Description

Changing invitation details should require editing ONLY this file.

---

# 22. IMAGE STRUCTURE

public/

images/

house-front.webp

gate-wall.webp

logo.svg

gallery/

house-front.webp

gate-wall.webp

audio/

icons/

overlays/

door-overlay.png

door-handle.png

---

# 23. COMPONENT STRUCTURE

LoadingScreen

Hero

GateScene

HouseScene

Door

DoorHandle

CameraTransition

InvitationCard

StorySection

Gallery

Countdown

QRCodeCard

LocationSection

Footer

AnimatedSection

Container

Button

Card

---

# 24. ANIMATIONS

Framer Motion

Fade

Scale

Reveal

Slide

GSAP

Door

Handle

Camera Movement

Everything should maintain 60 FPS.

---

# 25. PERFORMANCE

Target Lighthouse

95+

Optimize images.

Use Next Image.

Lazy Loading.

Dynamic Imports.

No layout shifts.

Minimal JavaScript.

---

# 26. ACCESSIBILITY

Semantic HTML

Keyboard Support

Reduced Motion

Proper ARIA Labels

High Contrast

---

# 27. SEO

Metadata

OpenGraph

Twitter Cards

robots.txt

manifest

sitemap.xml

favicon

---

# 28. DEPLOYMENT

Deploy on Vercel.

Everything should work without additional configuration.

---

# 29. DEVELOPMENT STRATEGY

Build the project in three milestones.

Milestone 1

Foundation

- Next.js setup
- Theme
- Folder Structure
- Config System
- Responsive Layout
- Loading Screen

Milestone 2

Interactive Experience

- Gate Scene
- House Scene
- Door Animation
- Camera Movement
- Invitation Reveal

Milestone 3

Content & Polish

- Story
- Gallery
- Countdown
- QR Code
- Google Maps
- Footer
- SEO
- Performance
- Accessibility

Do not move to the next milestone until the current milestone is production-ready.

---

# 30. CODING STANDARDS

Use TypeScript.

Use reusable components.

No duplicate code.

Use custom hooks where appropriate.

Follow clean architecture.

Keep components small.

Avoid prop drilling.

Prefer composition over inheritance.

Follow modern React best practices.

---

# 31. FINAL GOAL

The final website should feel like a premium Apple product launch combined with a luxury housewarming invitation.

It should be elegant.

Minimal.

Modern.

Fast.

Beautiful.

Mobile-first.

Emotionally engaging.

The visitor should remember the experience long after closing the website.

Never sacrifice performance for unnecessary animations.

The house should always remain the hero of the experience.