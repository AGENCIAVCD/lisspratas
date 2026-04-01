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

const labels: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: "days", label: "dias" },
  { key: "hours", label: "h" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "seg" },
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
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(53,14,9,0.08)] bg-[rgba(255,253,250,0.82)] backdrop-blur-xl"
    >
      <div className="section-shell flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center justify-between gap-5">
          <a href="#topo" className="flex items-center gap-4">
            <BrandMark size="header" />
            <p className="hidden text-[0.72rem] uppercase tracking-[0.26em] text-[rgba(53,14,9,0.58)] md:block">
              Live de relançamento em {eventDateLabel}
            </p>
          </a>

          <a
            href={registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-[rgba(53,14,9,0.12)] px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--coffee-900)] hover:bg-white sm:inline-flex"
          >
            Garantir meu lugar
          </a>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <nav className="hidden items-center gap-6 text-[0.7rem] uppercase tracking-[0.26em] text-[rgba(53,14,9,0.54)] lg:flex">
            {navigationLinks.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[var(--coffee-900)]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 self-start lg:self-auto">
            {labels.map((item) => (
              <div
                key={item.key}
                className="soft-panel min-w-[68px] rounded-[1.35rem] px-3 py-2 text-center"
              >
                <AnimatePresence mode="popLayout">
                  <motion.p
                    key={timeLeft[item.key]}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="text-xl font-bold tracking-tight text-[var(--coffee-900)]"
                  >
                    {timeLeft[item.key]}
                  </motion.p>
                </AnimatePresence>
                <p className="text-[0.6rem] uppercase tracking-[0.24em] text-[rgba(53,14,9,0.5)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
