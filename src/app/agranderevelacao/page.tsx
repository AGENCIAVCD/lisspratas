import type { Metadata } from "next";
import Image from "next/image";
import { BrandMark } from "@/components/brand-mark";
import { ImageRevealOverlay } from "@/components/image-reveal-overlay";
import { PrimaryCta } from "@/components/primary-cta";
import { RevealHeader } from "@/components/reveal-header";

export const metadata: Metadata = {
  title: "A Grande Revelacao",
  description:
    "Acompanhe a live que apresenta a nova fase da Madagi Atacado.",
};

const attractives = [
  "Sorteio de 10 Starter Kits para quem acompanhar a live.",
  "Cupom de 20% OFF liberado ao vivo.",
  "Apresentacao completa da nova marca em primeira mao.",
];

export default function AGrandeRevelacaoPage() {
  return (
    <>
      <RevealHeader />

      <main className="min-h-screen bg-[linear-gradient(180deg,#f8f4f1_0%,#ffffff_52%,#f5f1ed_100%)] text-[var(--foreground)]">
        <section className="relative overflow-hidden px-5 pb-14 pt-30 sm:px-8 sm:pb-20 sm:pt-34">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(53,14,9,0.08),transparent_38%)]" />
          <div className="absolute left-1/2 top-8 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-[rgba(53,14,9,0.06)]" />

          <div className="relative mx-auto flex w-full max-w-md flex-col items-center text-center sm:max-w-lg">
            <BrandMark
              size="hero"
              variant="positive"
              className="mx-auto w-[8.5rem] sm:w-[10rem]"
            />

            <p className="mt-5 text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[rgba(53,14,9,0.48)] sm:text-[0.68rem]">
              16 de abril de 2026
            </p>

            <h1 className="display-copy mt-4 max-w-[9ch] text-[2.55rem] leading-[0.92] text-[var(--coffee-900)] sm:text-[4rem]">
              O nome muda. Quem ver primeiro, sai na frente.
            </h1>

            <p className="mt-4 max-w-[28rem] text-[0.98rem] leading-7 text-[rgba(58,58,58,0.74)] sm:text-[1.05rem]">
              Uma live curta, direta e pensada para quem quer entender a nova
              fase antes do mercado inteiro.
            </p>

            <div className="mt-7 w-full max-w-[21rem]">
              <PrimaryCta label="Garantir meu lugar" className="w-full" />
            </div>

            <div className="soft-panel relative mt-8 w-full max-w-[24rem] overflow-hidden rounded-[2rem] p-2.5 sm:mt-10 sm:max-w-[27rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/manual/app-21.png"
                  alt="Imagem teaser da revelacao"
                  fill
                  priority
                  sizes="(max-width: 640px) 92vw, 432px"
                  className="scale-110 object-cover object-center blur-[20px]"
                />
                <ImageRevealOverlay compact />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[rgba(53,14,9,0.08)] px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto grid w-full max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-[rgba(53,14,9,0.46)]">
                A historia ate aqui
              </p>
              <h2 className="display-copy mt-4 max-w-[12ch] text-[2.1rem] leading-[0.94] text-[var(--coffee-900)] sm:text-[3.2rem]">
                A Madagi Atacado construiu base. Agora abre um novo capitulo.
              </h2>
              <div className="mt-5 max-w-[33rem] space-y-4 text-[1rem] leading-8 text-[rgba(58,58,58,0.78)]">
                <p>
                  A Madagi cresceu no atacado criando relacao, repertorio e
                  confianca com quem vende joias no dia a dia.
                </p>
                <p>
                  Essa live marca a virada: uma nova marca, uma nova
                  apresentacao e uma nova forma de entrar nessa fase desde o
                  comeco.
                </p>
              </div>
            </div>

            <div>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.34em] text-[rgba(53,14,9,0.46)]">
                O que voce vai encontrar na live
              </p>
              <div className="mt-5 divide-y divide-[rgba(53,14,9,0.08)] border-y border-[rgba(53,14,9,0.08)]">
                {attractives.map((item) => (
                  <div key={item} className="py-5">
                    <p className="max-w-[34rem] text-[1rem] leading-8 text-[rgba(58,58,58,0.82)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <PrimaryCta label="Entrar na live" className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
