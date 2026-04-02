import {
  ChatIcon,
  CompassIcon,
  GemIcon,
  ShieldIcon,
  SparkIcon,
  TicketIcon,
} from "@/components/benefit-icons";
import { PrimaryCta } from "@/components/primary-cta";
import { Reveal } from "@/components/reveal";
import { audienceItems } from "@/lib/site-data";

const benefitIcons = [
  GemIcon,
  SparkIcon,
  ChatIcon,
  ShieldIcon,
  TicketIcon,
  CompassIcon,
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section-light relative py-24 sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Essa live foi feita para quem quer vender melhor</span>
          <h2 className="display-copy mt-7 text-[3.1rem] text-[var(--coffee-900)] sm:text-[4.2rem]">
            Se você quer revender com mais desejo, mais confiança e mais vantagem, esse é o seu lugar.
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {audienceItems.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.05}
              className="soft-panel rounded-[2rem] p-7"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-[1.35rem] border border-[rgba(53,14,9,0.14)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(199,199,199,0.16))] text-[var(--coffee-900)] shadow-[0_10px_24px_rgba(58,58,58,0.08)]">
                {(() => {
                  const Icon = benefitIcons[index % benefitIcons.length];
                  return <Icon />;
                })()}
              </div>
              <p className="text-[1rem] leading-8 text-[rgba(58,58,58,0.82)]">{item}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18} className="mt-12 flex flex-col items-center">
          <PrimaryCta label="Quero participar da live" />
          <p className="mt-4 text-[0.8rem] uppercase tracking-[0.2em] text-[rgba(58,58,58,0.56)]">
            Ao vivo | benefícios liberados durante a transmissão
          </p>
        </Reveal>
      </div>
    </section>
  );
}
