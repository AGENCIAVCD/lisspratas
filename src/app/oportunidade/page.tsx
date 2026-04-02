import type { Metadata } from "next";
import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { ImageRevealOverlay } from "@/components/image-reveal-overlay";
import { PrimaryCta } from "@/components/primary-cta";
import { Reveal } from "@/components/reveal";
import { RevealHeader } from "@/components/reveal-header";
import { Gift, Sparkles, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Oportunidade | Madagi Atacado",
  description:
    "Uma nova fase esta chegando. Participe da live e descubra tudo em primeira mao.",
};

const benefits = [
  {
    icon: Sparkles,
    title: "A nova marca, primeiro para voce",
    description:
      "A live apresenta a nova fase antes do restante do mercado e mostra como entrar nela com mais clareza.",
  },
  {
    icon: Gift,
    title: "Condicoes liberadas ao vivo",
    description:
      "Quem acompanhar a transmissao participa do sorteio dos kits e recebe o cupom especial liberado no momento.",
  },
  {
    icon: Zap,
    title: "Argumento novo para vender melhor",
    description:
      "Voce sai da live com repertorio, apresentacao e mais seguranca para comunicar a mudanca com valor percebido.",
  },
];

export default function OportunidadePage() {
  return (
    <>
      <RevealHeader />

      <main className="overflow-x-hidden bg-[linear-gradient(180deg,#f7f2ee_0%,#ffffff_45%,#f6f1ec_100%)] text-[var(--foreground)]">
        <header className="fixed inset-x-0 top-[4.65rem] z-40 flex justify-center px-5 sm:px-8">
          <div className="rounded-full border border-[rgba(53,14,9,0.08)] bg-[rgba(255,255,255,0.74)] px-5 py-3 backdrop-blur-xl">
            <BrandMark size="header" variant="positive" />
          </div>
        </header>

        <section className="relative min-h-screen overflow-hidden pt-44 sm:pt-48">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(53,14,9,0.09),transparent_34%)]" />
          <div className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full border border-[rgba(53,14,9,0.05)]" />

          <div className="section-shell relative z-10 grid min-h-[calc(100svh-11rem)] items-center gap-12 py-10 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="max-w-xl text-center lg:text-left">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[rgba(53,14,9,0.46)]">
                Live exclusiva
              </p>
              <h1 className="display-copy mt-5 text-[3rem] leading-[0.9] text-[var(--coffee-900)] sm:text-[4.6rem] lg:max-w-[10ch]">
                Uma nova era esta chegando para quem quer vender primeiro.
              </h1>
              <p className="mt-5 max-w-[34rem] text-[1.02rem] leading-8 text-[rgba(58,58,58,0.76)]">
                A Madagi Atacado entra em um novo capitulo. Nesta live, voce
                entende a mudanca em primeira mao, acessa condicoes especiais e
                sai pronta para aproveitar a melhor janela.
              </p>

              <div className="mt-8 flex justify-center lg:justify-start">
                <PrimaryCta label="Quero entrar na live" />
              </div>

              <p className="mt-4 text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-[rgba(53,14,9,0.46)]">
                Ao vivo • vagas limitadas • beneficios liberados durante a transmissao
              </p>
            </Reveal>

            <Reveal delay={0.1} className="relative min-h-[24rem] sm:min-h-[32rem]">
              <div className="absolute inset-x-[8%] top-[8%] h-[74%] rounded-[2.6rem] bg-[rgba(53,14,9,0.06)]" />
              <div className="absolute left-[2%] top-[18%] hidden h-[13rem] w-[10rem] overflow-hidden rounded-[2rem] border border-[rgba(53,14,9,0.08)] bg-white/70 p-2 backdrop-blur-sm md:block">
                <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
                  <Image
                    src="/manual/app-24.png"
                    alt="Aplicacao teaser"
                    fill
                    sizes="160px"
                    className="scale-110 object-cover object-center blur-[18px]"
                  />
                  <ImageRevealOverlay compact />
                </div>
              </div>
              <div className="absolute bottom-0 right-[2%] h-[82%] w-[84%] overflow-hidden rounded-[2.7rem] border border-[rgba(53,14,9,0.08)] bg-white p-3 shadow-[0_30px_80px_rgba(58,58,58,0.12)]">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src="/manual/app-21.png"
                    alt="Imagem teaser da oportunidade"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="scale-110 object-cover object-center blur-[20px]"
                  />
                  <ImageRevealOverlay />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-shell py-20 sm:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[rgba(53,14,9,0.46)]">
              O que te espera
            </p>
            <h2 className="display-copy mt-5 text-[2.6rem] text-[var(--coffee-900)] sm:text-[4rem]">
              Por que essa oportunidade pode mudar sua largada.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Reveal
                key={benefit.title}
                delay={index * 0.08}
                className="rounded-[2rem] border border-[rgba(53,14,9,0.08)] bg-[rgba(255,255,255,0.72)] p-8 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(53,14,9,0.08)] text-[var(--coffee-900)]">
                  <benefit.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-[1.55rem] leading-tight text-[var(--coffee-900)]">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-8 text-[rgba(58,58,58,0.76)]">
                  {benefit.description}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden py-20 sm:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(53,14,9,0.02),rgba(53,14,9,0.08))]" />
          <Reveal className="section-shell relative z-10 text-center">
            <h2 className="display-copy mx-auto max-w-[11ch] text-[2.6rem] text-[var(--coffee-900)] sm:text-[4rem]">
              Entre agora e veja a revelacao antes de todo mundo.
            </h2>
            <p className="mx-auto mt-5 max-w-[40rem] text-[1rem] leading-8 text-[rgba(58,58,58,0.76)]">
              O acesso e gratuito, mas os beneficios e a comunicacao da live
              vao para quem estiver dentro no momento certo.
            </p>
            <div className="mt-8 flex justify-center">
              <PrimaryCta label="Garantir minha vaga" />
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
