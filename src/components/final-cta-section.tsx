import { BrandMark } from "@/components/brand-mark";
import { PrimaryCta } from "@/components/primary-cta";
import { Reveal } from "@/components/reveal";
import { eventDateLabel, finalInfo } from "@/lib/site-data";

export function FinalCtaSection() {
  return (
    <section id="inscricao" className="section-light relative py-24 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal className="max-w-lg">
          <span className="eyebrow">Informações importantes</span>
          <h2 className="mt-7 text-[2.7rem] leading-[1.02] text-[var(--coffee-900)] sm:text-[3.7rem]">
            Entre na live com tudo claro antes da estreia começar.
          </h2>
          <div className="mt-8 space-y-4">
            {finalInfo.map((item) => (
              <div
                key={item}
                className="flex gap-4 text-[1rem] leading-8 text-[rgba(58,58,58,0.82)]"
              >
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[var(--coffee-900)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-7 text-sm uppercase tracking-[0.24em] text-[rgba(58,58,58,0.58)]">
            Data oficial | {eventDateLabel}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="soft-panel rounded-[2.8rem] bg-[rgba(255,255,255,0.96)] p-8 sm:p-12">
          <div className="flex flex-col items-center text-center">
            <BrandMark size="footer" variant="positive" className="mx-auto" />
            <div className="note-line mt-8 max-w-[28rem]" />
            <div className="mt-8 max-w-[34rem] space-y-5 text-[1.1rem] leading-9 text-[rgba(58,58,58,0.82)]">
              <p>
                No atacado, quem chega cedo entende a novidade primeiro, usa a
                melhor condição e começa a vender com mais argumento.
              </p>
              <p>
                A live da LISS não é só uma apresentação de marca. É o momento
                em que você conhece a nova fase antes, concorre aos kits e
                libera o cupom ao vivo.
              </p>
              <p className="font-semibold text-[var(--coffee-900)]">
                Se faz sentido vender com mais força, essa live faz sentido
                para você.
              </p>
            </div>
            <div className="mt-10">
              <PrimaryCta label="Garantir meu lugar na estreia" />
            </div>
            <p className="mt-4 text-[0.8rem] uppercase tracking-[0.2em] text-[rgba(58,58,58,0.56)]">
              Ao vivo | 10 starter kits | cupom de 20% off
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
