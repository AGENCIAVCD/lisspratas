import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { BrandMark } from "@/components/brand-mark";
import { OportunidadeForm } from "@/components/oportunidade-form";
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
      <Script id="gtm-oportunidade" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PD587Q7V');`}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PD587Q7V"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <RevealHeader
        ctaHref="#oportunidade-formulario"
        highlightTargetId="oportunidade-formulario"
      />

      <main className="overflow-x-hidden bg-[linear-gradient(180deg,#f8f4ef_0%,#fefcf9_60%,#f8f3ee_100%)] pt-[4.7rem] text-[var(--foreground)]">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/brand/logo-positive.png')] bg-center bg-no-repeat opacity-[0.06] blur-[2px]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,244,239,0.88),rgba(248,244,239,0.68),#f8f4ef)]" />
          </div>

          <div className="section-shell relative z-10 py-10 sm:py-12 lg:py-14">
            <div className="flex justify-center">
              <BrandMark size="header" variant="positive" />
            </div>

            <div className="mt-10 grid items-center gap-10 lg:min-h-[calc(100svh-13rem)] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
              <Reveal className="max-w-[34rem] text-center lg:text-left" y={20}>
                <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(58,58,58,0.48)]">
                  Evento exclusivo
                </p>
                <h1 className="display-copy max-w-[10.5ch] text-[3.05rem] leading-[0.92] text-[var(--coffee-900)] sm:max-w-[11.2ch] sm:text-[4rem] lg:max-w-none lg:text-[4.45rem]">
                  <span className="lg:block">Uma nova fase</span>{" "}
                  <span className="lg:block">pensada para</span>{" "}
                  <span className="lg:block">quem quer chegar</span>{" "}
                  <span className="lg:block">primeiro.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-[31rem] text-[1rem] leading-8 text-[rgba(58,58,58,0.76)] lg:mx-0 md:text-[1.05rem]">
                  A Madagi Atacado esta preparando uma virada importante. Entre
                  na live exclusiva para ver em primeira mao a mudanca, os
                  beneficios e as condicoes reservadas para quem agir antes.
                </p>
                <div className="mt-8">
                  <PrimaryCta
                    label="Quero participar da live"
                    href="#oportunidade-formulario"
                    highlightTargetId="oportunidade-formulario"
                    className="mx-auto lg:mx-0"
                  />
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
                  <span className="rounded-full border border-[rgba(53,14,9,0.1)] bg-white/70 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[rgba(53,14,9,0.56)]">
                    Ao vivo
                  </span>
                  <span className="rounded-full border border-[rgba(53,14,9,0.1)] bg-white/70 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[rgba(53,14,9,0.56)]">
                    Acesso gratuito
                  </span>
                  <span className="rounded-full border border-[rgba(53,14,9,0.1)] bg-white/70 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[rgba(53,14,9,0.56)]">
                    Vagas limitadas
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.12} className="flex justify-center lg:justify-end" y={24}>
                <div className="relative w-full max-w-[44rem]">
                  <div className="absolute right-[3%] top-[11%] hidden h-[74%] w-[56%] rounded-[3rem] bg-[rgba(153,125,97,0.22)] lg:block" />
                  <div className="relative grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] md:items-end">
                    <div
                      id="oportunidade-formulario"
                      className="opportunity-form-anchor relative z-10 mx-auto w-full max-w-[24rem] scroll-mt-40 rounded-[1.8rem] bg-white p-4 shadow-[0_28px_80px_rgba(58,58,58,0.14)] md:mx-0 md:max-w-none"
                    >
                      <div className="rounded-[1.45rem] border border-[rgba(53,14,9,0.08)] bg-[linear-gradient(180deg,rgba(248,244,239,0.92),rgba(255,255,255,0.98))] p-5 sm:p-6">
                        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.3em] text-[rgba(58,58,58,0.46)]">
                          Garanta seu acesso
                        </p>
                        <h3 className="mt-3 text-[1.65rem] leading-[1.02] text-[var(--coffee-900)]">
                          Entre na lista da live
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[rgba(58,58,58,0.68)]">
                          Preencha para receber a comunicacao e entrar antes da
                          abertura geral.
                        </p>
                        <OportunidadeForm />
                      </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-[17.5rem] md:max-w-none">
                      <div className="absolute inset-0 rounded-[2.2rem] bg-[rgba(153,125,97,0.12)] blur-2xl" />
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-white/60 bg-[rgba(153,125,97,0.12)] shadow-[0_30px_80px_rgba(58,58,58,0.18)]">
                        <Image
                          src="/oportunidade/expert-1.jpg"
                          alt="Especialista da Madagi Atacado"
                          fill
                          priority
                          sizes="(max-width: 768px) 72vw, 420px"
                          className="object-cover object-[center_42%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-[rgba(199,199,199,0.12)] px-6 py-24">
          <div className="mx-auto max-w-5xl text-center">
            <Reveal>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[rgba(58,58,58,0.5)]">
                O que te espera
              </p>
              <h2 className="display-copy text-[2.5rem] text-[var(--coffee-900)] sm:text-[3.6rem]">
                Por que entrar cedo nessa live?
              </h2>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Reveal
                  key={benefit.title}
                  delay={index * 0.15}
                  className="rounded-xl bg-white p-8 shadow-[0_18px_40px_rgba(58,58,58,0.08)] transition-shadow hover:shadow-[0_24px_50px_rgba(58,58,58,0.12)]"
                >
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(53,14,9,0.08)] text-[var(--coffee-900)]">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[1.4rem] font-medium leading-tight text-[var(--coffee-900)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[rgba(58,58,58,0.7)]">
                    {benefit.description}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.45} className="mt-12">
              <PrimaryCta
                label="Quero participar da live"
                href="#oportunidade-formulario"
                highlightTargetId="oportunidade-formulario"
              />
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden px-6 py-24">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,244,239,0),rgba(199,199,199,0.12),rgba(248,244,239,0))]" />
          <Reveal className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="display-copy text-[2.6rem] text-[var(--coffee-900)] sm:text-[3.8rem]">
              Nao fique de fora dessa transformacao
            </h2>
            <p className="mt-6 text-[1rem] leading-8 text-[rgba(58,58,58,0.74)]">
              O acesso a live e as condicoes especiais serao liberados para quem
              estiver dentro no momento certo. Quem deixar para depois pode ficar
              sem essa vantagem.
            </p>
            <p className="mt-4 text-sm font-medium text-[rgba(53,14,9,0.7)]">
              As vagas sao limitadas e podem fechar a qualquer momento.
            </p>
            <div className="mt-8">
              <PrimaryCta
                label="Entrar agora"
                href="#oportunidade-formulario"
                highlightTargetId="oportunidade-formulario"
              />
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
