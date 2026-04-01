import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { PrimaryCta } from "@/components/primary-cta";
import { Reveal } from "@/components/reveal";
import { eventDateLabel } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      id="topo"
      className="section-warm relative overflow-hidden pb-24 pt-36 sm:pb-28 sm:pt-40 lg:min-h-[960px] lg:pb-32 lg:pt-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(255,255,255,0.5),transparent_24%),linear-gradient(90deg,rgba(255,253,250,0.62),rgba(255,253,250,0.06)_60%)]" />
      <div className="absolute right-[-5%] top-[12%] hidden h-[680px] w-[680px] rounded-full border border-white/60 lg:block" />
      <div className="absolute right-[7%] top-[5%] hidden h-[520px] w-[520px] rounded-full border border-white/60 lg:block" />
      <div className="absolute right-[18%] top-[18%] hidden h-[420px] w-[420px] rounded-full border border-white/60 lg:block" />

      <div className="section-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="max-w-xl pt-14 lg:pt-10">
          <span className="eyebrow">Relançamento oficial</span>
          <div className="mt-8">
            <BrandMark size="hero" />
          </div>
          <h1 className="display-copy mt-6 max-w-[12ch] text-[3.2rem] text-[var(--coffee-900)] sm:text-[4.4rem] lg:text-[5.5rem]">
            Uma nova era do atacado começa ao vivo.
          </h1>
          <p className="body-copy mt-6 max-w-[34rem]">
            A antiga Madagi Pratas Atacado se reposiciona e apresenta a LISS em
            uma estreia feita para gerar desejo, presença e decisão.
          </p>

          <div className="note-line mt-7 max-w-[23rem]" />

          <div className="mt-5 flex flex-wrap items-center gap-3 text-[0.82rem] font-medium uppercase tracking-[0.18em] text-[rgba(53,14,9,0.72)]">
            <span>{eventDateLabel}</span>
            <span>|</span>
            <span>Live de relançamento</span>
            <span>|</span>
            <span>10 kits + 20% OFF</span>
          </div>

          <div className="mt-8">
            <PrimaryCta label="Garantir minha presença" />
          </div>

          <p className="mt-4 text-[0.8rem] uppercase tracking-[0.2em] text-[rgba(53,14,9,0.56)]">
            Ao vivo | estreia da nova fase LISS
          </p>
        </Reveal>

        <Reveal delay={0.12} className="relative min-h-[560px] lg:min-h-[760px]">
          <div className="absolute bottom-[6%] left-[8%] z-10 hidden h-[310px] w-[250px] rounded-[2rem] bg-white/40 p-3 shadow-[0_24px_44px_rgba(89,50,40,0.1)] backdrop-blur-sm md:block">
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
              <Image
                src="/manual/app-24.png"
                alt="Aplicação de papelaria da LISS"
                fill
                className="object-cover object-center"
                sizes="250px"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-full">
            <div className="absolute inset-x-[10%] top-[8%] z-0 h-[72%] rounded-[2.5rem] bg-[rgba(255,255,255,0.18)]" />
            <div className="absolute bottom-0 right-[6%] z-20 h-[84%] w-[78%] overflow-hidden rounded-[2.8rem]">
              <Image
                src="/manual/app-21.png"
                alt="Embalagem premium da LISS com joias"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
            <div className="absolute right-[2%] top-[22%] z-30 hidden h-[380px] w-[190px] lg:block">
              <Image
                src="/manual/app-25.png"
                alt="Pouch e caixa da LISS"
                fill
                className="object-contain object-center"
                sizes="190px"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="section-notch" />
    </section>
  );
}
