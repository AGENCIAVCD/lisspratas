import type { Metadata } from "next";
import { BenefitsSection } from "@/components/benefits-section";
import { CountdownBar } from "@/components/countdown-bar";
import { FinalCtaSection } from "@/components/final-cta-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SocialProofSection } from "@/components/social-proof-section";
import { StarterKitSection } from "@/components/starter-kit-section";
import { StorySection } from "@/components/story-section";

export const metadata: Metadata = {
  title: "LISS | Live de relançamento",
  description:
    "Participe da estreia da LISS em 16 de abril de 2026. Conheça a nova fase do atacado, concorra a 10 Starter Kits e desbloqueie 20% OFF ao vivo.",
};

export default function Home() {
  return (
    <>
      <CountdownBar />
      <main className="overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <HeroSection />
        <StorySection />
        <BenefitsSection />
        <StarterKitSection />
        <SocialProofSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
