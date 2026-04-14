"use client";

import { FormEvent, useState } from "react";
import { vipGroupUrl } from "@/lib/site-data";

export function OportunidadeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(form);
    const url = new URL(window.location.href);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      whatsapp: String(formData.get("whatsapp") ?? "").trim(),
      utm_source: url.searchParams.get("utm_source") ?? "",
      utm_medium: url.searchParams.get("utm_medium") ?? "",
      utm_campaign: url.searchParams.get("utm_campaign") ?? "",
      utm_content: url.searchParams.get("utm_content") ?? "",
      utm_term: url.searchParams.get("utm_term") ?? "",
      landing_page: `${url.origin}${url.pathname}`,
    };

    try {
      const response = await fetch("/api/opportunity-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar o cadastro.");
      }

      window.location.href = vipGroupUrl;
    } catch {
      window.location.href = vipGroupUrl;
    }
  }

  return (
    <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
      <label className="block text-left">
        <span className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[rgba(53,14,9,0.46)]">
          Nome
        </span>
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          required
          autoComplete="name"
          className="w-full rounded-[1rem] border border-[rgba(53,14,9,0.12)] bg-white px-4 py-3 text-[0.98rem] text-[var(--foreground)] outline-none transition focus:border-[rgba(53,14,9,0.34)]"
        />
      </label>

      <label className="block text-left">
        <span className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[rgba(53,14,9,0.46)]">
          Email
        </span>
        <input
          type="email"
          name="email"
          placeholder="voce@email.com"
          required
          autoComplete="email"
          className="w-full rounded-[1rem] border border-[rgba(53,14,9,0.12)] bg-white px-4 py-3 text-[0.98rem] text-[var(--foreground)] outline-none transition focus:border-[rgba(53,14,9,0.34)]"
        />
      </label>

      <label className="block text-left">
        <span className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[rgba(53,14,9,0.46)]">
          WhatsApp
        </span>
        <input
          type="tel"
          name="whatsapp"
          placeholder="(00) 00000-0000"
          required
          autoComplete="tel"
          className="w-full rounded-[1rem] border border-[rgba(53,14,9,0.12)] bg-white px-4 py-3 text-[0.98rem] text-[var(--foreground)] outline-none transition focus:border-[rgba(53,14,9,0.34)]"
        />
      </label>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 inline-flex w-full items-center justify-center rounded-[1rem] bg-[linear-gradient(135deg,#350e09,#3a3a3a)] px-5 py-3.5 text-[0.76rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_18px_36px_rgba(53,14,9,0.16)] hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-80"
      >
        {isSubmitting ? "Enviando..." : "Quero garantir meu lugar"}
      </button>

      {errorMessage ? (
        <p className="text-sm leading-6 text-[rgba(140,44,31,0.9)]">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
