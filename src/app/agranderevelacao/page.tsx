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
      <section className="section-shell flex min-h-screen items-center justify-center py-6 sm:py-10">
        <div className="flex w-full max-w-md flex-col items-center gap-5 text-center sm:gap-7">
          <BrandMark
            size="hero"
            variant="positive"
            className="mx-auto w-[8.5rem] sm:w-[10.5rem]"
          />

          <h1 className="display-copy max-w-[10ch] text-[2.15rem] text-[var(--coffee-900)] sm:text-[3.1rem]">
            A grande revelacao esta chegando
          </h1>

          <div className="soft-panel relative w-full overflow-hidden rounded-[2rem] p-2.5 sm:p-3">
            <div className="relative aspect-[1/1] overflow-hidden rounded-[1.5rem] sm:aspect-[4/5]">
              <Image
                src="/manual/app-21.png"
                alt="Imagem teaser da revelacao"
                fill
                priority
                sizes="(max-width: 640px) 92vw, 420px"
                className="scale-110 object-cover object-center blur-[18px]"
              />
              <ImageRevealOverlay compact />
            </div>
          </div>

          <PrimaryCta label="Garantir meu lugar" className="w-full" />
        </div>
      </section>
    </main>
  );
}
