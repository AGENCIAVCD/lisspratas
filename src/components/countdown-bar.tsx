"use client";

import { BrandMark } from "@/components/brand-mark";
import { AnimatePresence, motion } from "framer-motion";
import {
  countdownTarget,
  eventDateLabel,
  navigationLinks,
  registrationUrl,
} from "@/lib/site-data";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const initialTimeLeft: TimeLeft = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

function getTimeLeft(): TimeLeft {
  const distance = new Date(countdownTarget).getTime() - Date.now();

  if (distance <= 0) {
    return initialTimeLeft;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

const units: Array<{ key: keyof TimeLeft; suffix: string }> = [
  { key: "days", suffix: "dias" },
  { key: "hours", suffix: "h" },
  { key: "minutes", suffix: "min" },
  { key: "seconds", suffix: "seg" },
];

export function CountdownBar() {
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
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[rgba(28,15,13,0.97)] shadow-[0_16px_40px_rgba(28,15,13,0.28)] backdrop-blur-xl"
    >
      <div className="section-shell py-3 lg:py-4">
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-8">
          <div className="flex items-center justify-between gap-4 lg:justify-start">
            <a href="#topo" className="flex items-center gap-4">
              <BrandMark size="header" variant="negative" />
              <div className="hidden h-11 w-px bg-white/10 lg:block" />
              <div className="hidden lg:block">
                <p className="text-[0.54rem] font-semibold uppercase tracking-[0.3em] text-white/42">
                  Estreia oficial
                </p>
                <p className="mt-1 text-[0.75rem] uppercase tracking-[0.22em] text-white/72">
                  {eventDateLabel}
                </p>
              </div>
            </a>
          </div>

          <nav className="hidden items-center justify-center gap-7 text-[0.58rem] uppercase tracking-[0.32em] text-white/48 lg:flex">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-[var(--silver-400)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden justify-end lg:flex">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/12 px-5 py-2.5 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-[var(--silver-400)] hover:bg-white/6"
            >
              Garantir meu lugar
            </a>
          </div>
        </div>

        <div className="mt-3 rounded-[1.15rem] border border-white/8 bg-white/4 px-4 py-3 lg:mx-auto lg:mt-4 lg:flex lg:w-fit lg:items-center lg:justify-center lg:gap-8 lg:px-6 lg:py-3.5">
          <div className="hidden items-center gap-3 lg:flex">
            <span className="h-2 w-2 rounded-full bg-[var(--silver-400)]" />
            <p className="text-[0.54rem] font-semibold uppercase tracking-[0.3em] text-white/48">
              Faltam poucos dias para a revelação da nova marca
            </p>
          </div>

          <div className="mb-2 flex items-center justify-between lg:hidden">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/52">
              Contagem para a estreia
            </p>
            <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-[var(--silver-400)]">
              {eventDateLabel}
            </p>
          </div>

          <div className="grid grid-cols-4 gap-2 text-[var(--silver-400)] lg:mt-0 lg:flex lg:flex-wrap lg:items-center lg:gap-4">
            {units.map((unit, index) => (
              <div
                key={unit.key}
                className="flex min-w-0 flex-col items-center justify-center rounded-[0.9rem] border border-white/8 bg-[rgba(255,255,255,0.03)] px-2 py-2.5 lg:flex-row lg:gap-3 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0"
              >
                <div className="flex items-end gap-1 lg:gap-2">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={timeLeft[unit.key]}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18 }}
                      className="min-w-[2ch] text-[1.05rem] font-bold leading-none tracking-[-0.06em] lg:text-[1.45rem]"
                    >
                      {timeLeft[unit.key]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="pb-0.5 text-[0.46rem] font-semibold uppercase tracking-[0.2em] text-white/40 lg:text-[0.56rem] lg:tracking-[0.24em]">
                    {unit.suffix}
                  </span>
                </div>

                {index < units.length - 1 ? (
                  <span className="hidden h-4 w-px bg-white/10 lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
