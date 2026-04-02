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
      <RevealHeader />

      <main className="overflow-x-hidden bg-[linear-gradient(180deg,#f8f4ef_0%,#fefcf9_60%,#f8f3ee_100%)] text-[var(--foreground)]">
        <header className="fixed inset-x-0 top-[4.65rem] z-40 flex justify-center border-b border-[rgba(53,14,9,0.08)] bg-[rgba(248,244,239,0.84)] px-6 py-5 backdrop-blur-sm">
          <BrandMark size="header" variant="positive" />
        </header>

        <section className="relative min-h-screen overflow-hidden pt-48 sm:pt-52">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/brand/logo-positive.png')] bg-center bg-no-repeat opacity-[0.06] blur-[2px]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,244,239,0.88),rgba(248,244,239,0.68),#f8f4ef)]" />
          </div>

          <div className="section-shell relative z-10 grid items-center gap-10 py-10 md:min-h-[calc(100svh-7rem)] md:grid-cols-[0.88fr_1.12fr] md:gap-14 lg:gap-18">
            <Reveal className="order-2 max-w-xl text-center md:order-1 md:text-left">
              <p className="mb-5 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[rgba(58,58,58,0.48)]">
                Evento exclusivo
              </p>
              <h1 className="display-copy text-[3.1rem] leading-[0.92] text-[var(--coffee-900)] sm:text-[4.3rem] lg:max-w-[9ch] lg:text-[5.15rem]">
                Uma nova fase pensada para quem quer chegar primeiro.
              </h1>
              <p className="mx-auto mt-6 max-w-[32rem] text-[1rem] leading-8 text-[rgba(58,58,58,0.76)] md:mx-0 md:text-[1.05rem]">
                A Madagi Atacado esta preparando uma nova fase. Participe da live
                exclusiva e descubra em primeira mao a mudanca, os beneficios e
                as condicoes especiais reservadas para quem entrar cedo.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
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

            <Reveal delay={0.15} className="order-1 flex justify-center md:order-2">
              <div className="relative w-full max-w-[38rem]">
                <div className="absolute right-[6%] top-[4%] h-[72%] w-[66%] rounded-[2.4rem] bg-[rgba(153,125,97,0.28)]" />
                <div className="relative mx-auto w-[18rem] md:ml-auto md:mr-0 md:w-[22rem] lg:w-[24rem]">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_rgba(58,58,58,0.18)]">
                    <Image
                      src="/oportunidade/expert-1.jpg"
                      alt="Especialista da Madagi Atacado"
                      fill
                      priority
                      sizes="(max-width: 768px) 72vw, 420px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="relative mx-auto -mt-8 w-full max-w-[22rem] rounded-[1.8rem] bg-white p-4 shadow-[0_28px_80px_rgba(58,58,58,0.14)] md:absolute md:bottom-[3%] md:left-0 md:mt-0 md:max-w-[21rem] lg:max-w-[22rem]">
                  <div className="rounded-[1.45rem] border border-[rgba(53,14,9,0.08)] bg-[linear-gradient(180deg,rgba(248,244,239,0.9),rgba(255,255,255,0.98))] p-5 sm:p-6">
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
              </div>
            </Reveal>
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
              <PrimaryCta label="Quero participar da live" />
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
              <PrimaryCta label="Entrar agora" />
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
