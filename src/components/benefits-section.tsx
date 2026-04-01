import { PrimaryCta } from "@/components/primary-cta";
import { Reveal } from "@/components/reveal";
import { audienceItems } from "@/lib/site-data";

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section-light relative py-24 sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Esse evento é para você que</span>
          <h2 className="display-copy mt-7 text-[3.1rem] text-[var(--coffee-900)] sm:text-[4.2rem]">
            quer entrar na nova fase da LISS com vantagem.
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audienceItems.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.05}
              className="soft-panel rounded-[2rem] p-7"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(53,14,9,0.1)] bg-[rgba(244,228,214,0.58)] text-[var(--coffee-700)]">
                ↗
              </div>
              <p className="text-[1rem] leading-8 text-[rgba(53,29,23,0.82)]">{item}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18} className="mt-12 flex flex-col items-center">
          <PrimaryCta label="Garantir meu lugar" />
          <p className="mt-4 text-[0.8rem] uppercase tracking-[0.2em] text-[rgba(53,14,9,0.56)]">
            Ao vivo | relançamento LISS
          </p>
        </Reveal>
      </div>

      <div className="section-notch" />
    </section>
  );
}
