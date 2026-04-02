"use client";

import { AnimatePresence, motion } from "framer-motion";
import { countdownTarget, registrationUrl } from "@/lib/site-data";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
};

const initialTimeLeft: TimeLeft = {
  days: "00",
  hours: "00",
  minutes: "00",
};

function getTimeLeft(): TimeLeft {
  const distance = new Date(countdownTarget).getTime() - Date.now();

  if (distance <= 0) {
    return initialTimeLeft;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
}

const units: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: "days", label: "dias" },
  { key: "hours", label: "h" },
  { key: "minutes", label: "min" },
];

export function RevealHeader() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialTimeLeft);

  useEffect(() => {
    const sync = window.setTimeout(() => setTimeLeft(getTimeLeft()), 0);
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);

    return () => {
      window.clearTimeout(sync);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(53,14,9,0.08)] bg-[rgba(255,255,255,0.78)] backdrop-blur-xl"
    >
      <div className="section-shell flex items-center justify-between gap-3 py-3">
        <div className="min-w-0">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[rgba(53,14,9,0.48)]">
            Ultimas vagas para assistir ao vivo
          </p>
          <div className="mt-1 flex items-center gap-2 text-[var(--coffee-900)]">
            {units.map((unit, index) => (
              <div key={unit.key} className="flex items-end gap-1">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={timeLeft[unit.key]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="min-w-[2ch] text-[0.98rem] font-bold leading-none tracking-[-0.06em] sm:text-[1.1rem]"
                  >
                    {timeLeft[unit.key]}
                  </motion.span>
                </AnimatePresence>
                <span className="pb-0.5 text-[0.46rem] font-semibold uppercase tracking-[0.18em] text-[rgba(53,14,9,0.42)]">
                  {unit.label}
                </span>
                {index < units.length - 1 ? (
                  <span className="ml-1 h-4 w-px bg-[rgba(53,14,9,0.12)]" />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <a
          href={registrationUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 rounded-full border border-[rgba(53,14,9,0.12)] bg-[var(--coffee-900)] px-4 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_14px_28px_rgba(53,14,9,0.16)] hover:-translate-y-0.5"
        >
          Garantir meu lugar
        </a>
      </div>
    </motion.header>
  );
}
