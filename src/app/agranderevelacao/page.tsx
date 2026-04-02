import type { Metadata } from "next";
import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { ImageRevealOverlay } from "@/components/image-reveal-overlay";
import { PrimaryCta } from "@/components/primary-cta";

export const metadata: Metadata = {
  title: "A Grande Revelacao",
  description:
    "Participe da live e acompanhe a grande revelacao da nova marca.",
};

export default function AGrandeRevelacaoPage() {
  return (
    <main className="section-warm min-h-screen">
      <section className="section-shell flex min-h-screen items-center justify-center py-16 sm:py-20">
        <div className="flex w-full max-w-4xl flex-col items-center gap-8 text-center sm:gap-10">
          <BrandMark size="hero" variant="positive" className="mx-auto" />

          <h1 className="display-copy max-w-[12ch] text-[3rem] text-[var(--coffee-900)] sm:text-[4.4rem]">
            A grande revelacao esta chegando.
          </h1>

          <div className="soft-panel relative w-full max-w-3xl overflow-hidden rounded-[2.6rem] p-3 sm:p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] sm:aspect-[16/10]">
              <Image
                src="/manual/app-21.png"
                alt="Imagem teaser da revelacao"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 960px"
                className="scale-110 object-cover object-center blur-[18px]"
              />
              <ImageRevealOverlay />
            </div>
          </div>

          <PrimaryCta label="Garantir meu lugar" />
        </div>
      </section>
    </main>
  );
}
