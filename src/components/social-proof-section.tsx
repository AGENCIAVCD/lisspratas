import { Reveal } from "@/components/reveal";
import { visualShowcaseSlides } from "@/lib/site-data";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

export function SocialProofSection() {
  return (
    <section id="autoridade" className="section-warm relative py-24 sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Por que essa nova fase vende melhor</span>
          <h2 className="display-copy mt-7 text-[3rem] text-[var(--coffee-900)] sm:text-[4rem]">
            Quando a marca transmite mais valor, vender fica mais fácil.
          </h2>
          <p className="body-copy mt-6 max-w-[42rem] mx-auto">
            Na live, você vai entender por que essa nova fase ajuda a chamar
            mais atenção, despertar mais desejo e vender com mais segurança.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-16">
          <div className="rounded-[2.8rem] border border-[rgba(199,199,199,0.44)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,0.96))] p-5 shadow-[0_24px_60px_rgba(58,58,58,0.08)] sm:p-8 lg:p-10">
            <CircularTestimonials
              testimonials={visualShowcaseSlides}
              autoplay
              colors={{
                name: "#350e09",
                designation: "rgba(58,58,58,0.62)",
                testimony: "rgba(58,58,58,0.86)",
                arrowBackground: "#350e09",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#3a3a3a",
              }}
              fontSizes={{
                name: "clamp(2rem, 3vw, 2.8rem)",
                designation: "0.78rem",
                quote: "1.02rem",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
