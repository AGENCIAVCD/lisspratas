"use client";

import { MouseEvent } from "react";
import { registrationUrl } from "@/lib/site-data";
import { scrollToHighlightTarget } from "@/lib/scroll-to-highlight-target";

type PrimaryCtaProps = {
  label: string;
  className?: string;
  href?: string;
  highlightTargetId?: string;
};

export function PrimaryCta({
  label,
  className = "",
  href = registrationUrl,
  highlightTargetId,
}: PrimaryCtaProps) {
  const isExternalLink = /^https?:\/\//.test(href);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!highlightTargetId) {
      return;
    }

    event.preventDefault();
    scrollToHighlightTarget(highlightTargetId);
  }

  return (
    <a
      href={href}
      onClick={highlightTargetId ? handleClick : undefined}
      target={isExternalLink ? "_blank" : undefined}
      rel={isExternalLink ? "noreferrer" : undefined}
      className={`cta-pill ${className}`.trim()}
    >
      <span>{label}</span>
      <span aria-hidden="true" className="cta-pill__icon">
        ↗
      </span>
    </a>
  );
}
