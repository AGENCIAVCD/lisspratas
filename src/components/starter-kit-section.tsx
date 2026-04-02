import Image from "next/image";
import { ImageRevealOverlay } from "@/components/image-reveal-overlay";
import { PrimaryCta } from "@/components/primary-cta";
import { Reveal } from "@/components/reveal";
import { experienceColumns, starterKitPoints } from "@/lib/site-data";

export function StarterKitSection() {
  return (
    <section id="starter-kit" className="section-warm relative py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-2">
          {experienceColumns.map((column, index) => (
            <Reveal
              key={column.title}
              delay={index * 0.08}
              className="border-t border-[rgba(53,14,9,0.18)] pt-8"
            >
              <span className="eyebrow">{column.eyebrow}</span>
              <h2 className="mt-6 max-w-[12ch] text-[2.5rem] leading-[1.02] text-[var(--coffee-900)] sm:text-[3.3rem]">
                {column.title}
              </h2>
              <ul className="mt-6 space-y-4">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-[1.02rem] leading-8 text-[rgba(58,58,58,0.82)]"
                  >
                    <span className="mt-3 h-2 w-2 rounded-full bg-[var(--coffee-900)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18} className="mt-16 grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="soft-panel rounded-[2.4rem] bg-[rgba(255,255,255,0.96)] p-8 sm:p-10">
            <span className="eyebrow">Starter Kit</span>
            <h3 className="mt-6 text-[2.5rem] leading-[1.02] text-[var(--coffee-900)] sm:text-[3.3rem]">
              Os Starter Kits foram pensados para quem quer começar vendendo, e não apenas assistindo.
            </h3>
            <div className="mt-7 space-y-4">
              {starterKitPoints.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 text-[1rem] leading-8 text-[rgba(58,58,58,0.82)]"
                >
                  <span className="mt-3 h-2.5 w-2.5 rounded-full bg-[var(--coffee-900)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <PrimaryCta label="Quero concorrer aos kits" />
            </div>
          </div>

          <div className="relative min-h-[440px]">
            <div className="absolute left-[8%] top-8 h-[250px] w-[66%] overflow-hidden rounded-[2.2rem] border border-[rgba(199,199,199,0.44)] shadow-[0_22px_40px_rgba(58,58,58,0.12)]">
              <Image
                src="/manual/app-22.png"
                alt="Tag e cartão da nova marca"
                fill
                className="scale-110 object-cover object-center blur-[18px]"
                sizes="(max-width: 1024px) 100vw, 34vw"
              />
              <ImageRevealOverlay compact />
            </div>
            <div className="absolute bottom-0 right-[4%] h-[320px] w-[58%] overflow-hidden rounded-[2.2rem] border border-[rgba(199,199,199,0.44)] shadow-[0_22px_40px_rgba(58,58,58,0.12)]">
              <Image
                src="/manual/app-23.png"
                alt="Joia e embalagem da nova marca"
                fill
                className="scale-110 object-cover object-center blur-[18px]"
                sizes="(max-width: 1024px) 100vw, 28vw"
              />
              <ImageRevealOverlay />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
