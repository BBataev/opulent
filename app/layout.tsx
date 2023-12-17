import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OPULENT",
  description:
    "OPULENT AIMS TO REDEFINE THE MODERN WARDROBE BY OFFERING EDITED COLLECTIONS THAT SEAMLESSLY BLEND LUXURY WITH EVERYDAY STYLE, SPANNING A DIVERSE RANGE OF CATEGORIES AND STYLES. BY COLLABORATING WITH ICONIC BRANDS AND GLOBAL DESIGNERS, WE HOPE THAT OPULENT WILL BE A PLATFORM THAT DELIVERS ACCESS TO INCREDIBLE FASHION FOR EVERYONE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
