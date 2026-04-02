import type { Metadata } from "next";
import { BrandMark } from "@/components/brand-mark";
import { vipGroupUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Obrigado | Madagi Atacado",
  description:
    "Cadastro realizado com sucesso. Entre agora no grupo VIP da live.",
};

export default function ObrigadoPage() {
  return (
    <main className="section-warm min-h-screen text-[var(--foreground)]">
      <section className="section-shell flex min-h-screen items-center justify-center py-12 sm:py-16">
        <div className="soft-panel w-full max-w-2xl rounded-[2.5rem] p-8 text-center sm:p-12">
          <BrandMark size="header" variant="positive" className="mx-auto" />

          <p className="mt-8 text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[rgba(53,14,9,0.46)]">
            Cadastro realizado
          </p>
          <h1 className="display-copy mt-4 text-[2.5rem] text-[var(--coffee-900)] sm:text-[3.8rem]">
            Seu acesso esta quase completo.
          </h1>
          <p className="mx-auto mt-5 max-w-[32rem] text-[1rem] leading-8 text-[rgba(58,58,58,0.74)]">
            Seus dados foram enviados com sucesso. Agora entre no grupo VIP da
            live para receber os avisos, o acesso e as condicoes especiais.
          </p>

          <div className="mt-8">
            <a
              href={vipGroupUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[linear-gradient(135deg,#350e09,#3a3a3a)] px-8 py-4 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white shadow-[0_18px_36px_rgba(53,14,9,0.16)] hover:-translate-y-0.5"
            >
              Participar do grupo VIP
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
