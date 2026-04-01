import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { authorityPoints } from "@/lib/site-data";

export function SocialProofSection() {
  return (
    <section id="autoridade" className="section-warm relative py-24 sm:py-28">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal className="max-w-xl">
          <span className="eyebrow">A verdade por trás da nova identidade</span>
          <h2 className="display-copy mt-7 text-[3rem] text-[var(--coffee-900)] sm:text-[4rem]">
            Uma marca mais refinada cria uma percepção mais forte.
          </h2>
          <p className="body-copy mt-6">
            A LISS nasce com linguagem visual própria, aplicações reais e um
            desenho de marca que comunica valor antes mesmo da venda acontecer.
          </p>

          <div className="mt-9 grid gap-6">
            {authorityPoints.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 0.05}
                className="border-l border-[rgba(53,14,9,0.12)] pl-6"
              >
                <h3 className="text-[1.55rem] leading-tight text-[var(--coffee-900)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[1rem] leading-8 text-[rgba(53,29,23,0.78)]">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative min-h-[620px]">
          <div className="absolute left-[4%] top-[8%] z-10 h-[70%] w-[56%] overflow-hidden rounded-[2.4rem]">
            <Image
              src="/manual/app-25.png"
              alt="Pouch e caixa da LISS"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 28vw"
            />
          </div>
          <div className="absolute bottom-[2%] right-[2%] z-20 h-[72%] w-[52%] overflow-hidden rounded-[2.4rem] bg-white/70 p-3 shadow-[0_24px_50px_rgba(89,50,40,0.14)]">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/manual/app-21.png"
                alt="Apresentação premium da embalagem LISS"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 24vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
