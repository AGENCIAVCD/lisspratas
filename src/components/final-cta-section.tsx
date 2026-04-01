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
            Tudo o que você precisa saber para entrar na estreia da LISS.
          </h2>
          <div className="mt-8 space-y-4">
            {finalInfo.map((item) => (
              <div
                key={item}
                className="flex gap-4 text-[1rem] leading-8 text-[rgba(53,29,23,0.8)]"
              >
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[var(--coffee-700)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-7 text-sm uppercase tracking-[0.24em] text-[rgba(53,14,9,0.58)]">
            Data oficial | {eventDateLabel}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="soft-panel rounded-[2.8rem] bg-[rgba(248,237,228,0.58)] p-8 sm:p-12">
          <div className="flex flex-col items-center text-center">
            <BrandMark size="footer" className="justify-center" />
            <div className="note-line mt-8 max-w-[28rem]" />
            <div className="mt-8 max-w-[34rem] space-y-5 text-[1.1rem] leading-9 text-[rgba(53,29,23,0.8)]">
              <p>
                Você sabe quando uma marca muda de nome, de linguagem e de
                postura, o mercado inteiro começa a olhar diferente.
              </p>
              <p>
                A LISS estreia ao vivo para marcar exatamente esse momento.
                Presença, oportunidade e incentivo comercial no mesmo palco.
              </p>
              <p className="font-semibold text-[var(--coffee-900)]">
                Essa é a hora de assistir de perto, entrar cedo e agir com mais
                vantagem.
              </p>
            </div>
            <div className="mt-10">
              <PrimaryCta label="Garantir meu lugar na live" />
            </div>
            <p className="mt-4 text-[0.8rem] uppercase tracking-[0.2em] text-[rgba(53,14,9,0.56)]">
              Ao vivo | 10 kits | cupom ao vivo
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
