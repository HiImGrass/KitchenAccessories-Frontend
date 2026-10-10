import type { Metadata } from "next";
import AboutView from "@/components/AboutComponent/AboutView";

export const metadata: Metadata = {
  title: "About Us | Ladle & Co.",
  description:
    "Discover the story, materials, artisan guilds, and mindful sourcing philosophy behind Ladle & Co.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-canvas-cream">
      <AboutView />
    </div>
  );
}
