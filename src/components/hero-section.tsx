import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { PrimaryCta } from "@/components/primary-cta";
import { Reveal } from "@/components/reveal";
import { eventDateLabel } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      id="topo"
      className="section-warm relative overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-30 lg:min-h-[calc(100svh-112px)] lg:pb-16 lg:pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(199,199,199,0.36),transparent_24%),linear-gradient(90deg,rgba(255,255,255,0.92),rgba(255,255,255,0.28)_60%)]" />
      <div className="absolute right-[-5%] top-[12%] hidden h-[680px] w-[680px] rounded-full border border-[rgba(199,199,199,0.5)] lg:block" />
      <div className="absolute right-[7%] top-[5%] hidden h-[520px] w-[520px] rounded-full border border-[rgba(199,199,199,0.45)] lg:block" />
      <div className="absolute right-[18%] top-[18%] hidden h-[420px] w-[420px] rounded-full border border-[rgba(199,199,199,0.38)] lg:block" />

      <div className="section-shell relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <Reveal className="max-w-xl">
          <span className="eyebrow">Estreia oficial da nova marca</span>
          <div className="mt-8">
            <BrandMark size="hero" variant="positive" />
          </div>
          <h1 className="display-copy mt-6 max-w-[13ch] text-[2.65rem] text-[var(--coffee-900)] sm:text-[3.4rem] lg:text-[4.35rem]">
            A nova fase da LISS estreia ao vivo para quem quer vender primeiro.
          </h1>
          <p className="body-copy mt-6 max-w-[34rem]">
            A Madagi Pratas Atacado evoluiu. Agora o atacado ganha identidade
            própria, posicionamento mais forte e benefícios exclusivos para
            quem acompanhar essa virada desde o começo.
          </p>

          <div className="note-line mt-7 max-w-[23rem]" />

          <div className="mt-5 flex flex-wrap items-center gap-3 text-[0.82rem] font-medium uppercase tracking-[0.18em] text-[rgba(58,58,58,0.72)]">
            <span>{eventDateLabel}</span>
            <span>|</span>
            <span>Live de relançamento</span>
            <span>|</span>
            <span>10 kits + 20% OFF</span>
          </div>

          <div className="mt-7">
            <PrimaryCta label="Quero garantir meu lugar" />
          </div>

          <p className="mt-4 text-[0.8rem] uppercase tracking-[0.2em] text-[rgba(58,58,58,0.56)]">
            Ao vivo | revendedoras, lojistas e novas empreendedoras
          </p>
        </Reveal>

        <Reveal delay={0.12} className="relative min-h-[420px] lg:min-h-[560px]">
          <div className="absolute bottom-[6%] left-[8%] z-10 hidden h-[220px] w-[180px] rounded-[1.6rem] border border-[rgba(199,199,199,0.5)] bg-[rgba(255,255,255,0.8)] p-3 shadow-[0_24px_44px_rgba(58,58,58,0.1)] backdrop-blur-sm md:block">
            <div className="relative h-full w-full overflow-hidden rounded-[1.6rem]">
              <Image
                src="/manual/app-24.png"
                alt="Aplicação de papelaria da LISS"
                fill
                className="object-cover object-center"
                sizes="180px"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-full">
            <div className="absolute inset-x-[10%] top-[8%] z-0 h-[72%] rounded-[2.2rem] bg-[rgba(199,199,199,0.22)]" />
            <div className="absolute bottom-0 right-[6%] z-20 h-[82%] w-[76%] overflow-hidden rounded-[2.4rem]">
              <Image
                src="/manual/app-21.png"
                alt="Embalagem premium da LISS com joias"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
            </div>
            <div className="absolute right-[2%] top-[18%] z-30 hidden h-[280px] w-[148px] lg:block">
              <Image
                src="/manual/app-25.png"
                alt="Pouch e caixa da LISS"
                fill
                className="object-contain object-center"
                sizes="148px"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
