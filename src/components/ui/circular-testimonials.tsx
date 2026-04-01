"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 320;
  const maxWidth = 1320;
  const minGap = 34;
  const maxGap = 108;

  if (width <= minWidth) return minGap;
  if (width >= maxWidth) return maxGap;

  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export function CircularTestimonials({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) {
  const colorName = colors.name ?? "#350e09";
  const colorDesignation = colors.designation ?? "rgba(58,58,58,0.62)";
  const colorTestimony = colors.testimony ?? "rgba(58,58,58,0.88)";
  const colorArrowBg = colors.arrowBackground ?? "#350e09";
  const colorArrowFg = colors.arrowForeground ?? "#ffffff";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#3a3a3a";
  const fontSizeName = fontSizes.name ?? "clamp(1.8rem, 3vw, 2.5rem)";
  const fontSizeDesignation = fontSizes.designation ?? "0.82rem";
  const fontSizeQuote = fontSizes.quote ?? "1.04rem";

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(820);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const testimonialsLength = testimonials.length;
  const activeTestimonial = testimonials[activeIndex];

  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoplay || testimonialsLength <= 1) return;

    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    }, 5000);

    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  function clearAutoplay() {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  }

  function handleNext() {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    clearAutoplay();
  }

  function handlePrev() {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    clearAutoplay();
  }

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const lift = Math.min(54, gap * 0.48);
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
        transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
      };
    }

    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${lift}px) scale(0.84) rotate(-6deg)`,
        transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
      };
    }

    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${lift}px) scale(0.84) rotate(6deg)`,
        transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
      };
    }

    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transform: "translateX(0px) translateY(12px) scale(0.76)",
      transition: "all 0.8s cubic-bezier(.22,1,.36,1)",
    };
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -18 },
  };

  return (
    <div className="w-full">
      <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-12">
        <div
          ref={imageContainerRef}
          className="relative h-[23rem] perspective-[1200px] sm:h-[28rem] lg:h-[34rem]"
        >
          <div className="absolute inset-[8%] rounded-[2.6rem] border border-[rgba(199,199,199,0.42)] bg-[linear-gradient(180deg,rgba(255,255,255,0.76),rgba(199,199,199,0.18))]" />
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              style={getImageStyle(index)}
              className="absolute inset-x-[14%] bottom-0 top-[15%] overflow-hidden rounded-[2.5rem] border border-[rgba(199,199,199,0.44)] bg-white shadow-[0_28px_80px_rgba(58,58,58,0.16)]"
            >
              <Image
                src={testimonial.src}
                alt={testimonial.name}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center"
                priority={index === activeIndex}
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <p
                className="text-[0.76rem] font-semibold uppercase tracking-[0.28em]"
                style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
              >
                {activeTestimonial.designation}
              </p>
              <h3
                className="mt-3 font-medium tracking-[-0.04em]"
                style={{ color: colorName, fontSize: fontSizeName, lineHeight: 0.94 }}
              >
                {activeTestimonial.name}
              </h3>
              <motion.p
                className="mt-6 max-w-[30rem] leading-8"
                style={{ color: colorTestimony, fontSize: fontSizeQuote }}
              >
                {activeTestimonial.quote.split(" ").map((word, i) => (
                  <motion.span
                    key={`${activeIndex}-${i}`}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 6 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.22,
                      ease: "easeInOut",
                      delay: 0.022 * i,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex gap-3">
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(53,14,9,0.12)] transition-colors duration-300"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
                color: colorArrowFg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Slide anterior"
            >
              <ArrowLeft className="h-4.5 w-4.5" />
            </button>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(53,14,9,0.12)] transition-colors duration-300"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
                color: colorArrowFg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Próximo slide"
            >
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircularTestimonials;
