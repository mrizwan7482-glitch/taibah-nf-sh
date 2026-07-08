import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import { houseConfig } from "@/config/houseConfig";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: houseConfig.website.title,
  description: houseConfig.website.description,
  applicationName: houseConfig.website.title,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#241a14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href={houseConfig.images.gateWall}
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href={houseConfig.images.houseFront}
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className={`${playfair.variable} ${poppins.variable}`}>
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
