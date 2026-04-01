import { PrimaryCta } from "@/components/primary-cta";
import { Reveal } from "@/components/reveal";
import { manifestoPoints, transitionParagraphs } from "@/lib/site-data";

export function StorySection() {
  return (
    <section id="historia" className="section-light relative py-24 sm:py-28">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[rgba(53,14,9,0.5)]">
            A história mudou. A oportunidade também.
          </p>
          <div className="mt-8 space-y-6">
            {transitionParagraphs.map((paragraph) => (
              <p key={paragraph} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8">
            <PrimaryCta label="Quero ver essa virada ao vivo" />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="grid gap-10 border-l border-[rgba(53,14,9,0.1)] pl-0 lg:pl-12">
          {manifestoPoints.map((item) => (
            <div key={item.title}>
              <h2 className="display-copy text-[2.6rem] text-[var(--coffee-900)] sm:text-[3.4rem]">
                {item.title}
              </h2>
              <p className="body-copy mt-5 max-w-[28rem]">{item.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
