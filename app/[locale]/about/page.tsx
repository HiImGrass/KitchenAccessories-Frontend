import type { Metadata } from "next";
import AboutView from "@/components/AboutComponent/AboutView";
import { PageIntlProvider } from "@/components/providers/PageIntlProvider";
import { getScopedMessages } from "@/lib/intlMessages";

export const metadata: Metadata = {
  title: "About Us | Ladle & Co.",
  description:
    "Discover the story, materials, artisan guilds, and mindful sourcing philosophy behind Ladle & Co.",
};

export default async function AboutPage() {
  const messages = await getScopedMessages("about");
  return (
    <PageIntlProvider messages={messages}>
      <div className="flex flex-col w-full bg-canvas-cream">
        <AboutView />
      </div>
    </PageIntlProvider>
  );
}
