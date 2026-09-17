"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);

const paragraphs = [
    `Avianor Engineering is a Canadian aviation engineering firm
  specializing in aircraft systems modification, avionics
  integration, and specialized aviation solutions. We work across
  a range of fixed-wing and rotary-wing platforms, providing
  engineering services that support operators, OEMs, MROs, and
  government programs from initial assessment through to
  certification-ready documentation. From night-vision goggle cockpit conversions and flight-recorder integration to medical-aviation fit-outs and custom wiring
  harness manufacturing, our team brings structured engineering
  discipline to every project. We combine technical depth with
  practical operational knowledge — delivering solutions that are
  safe, well-documented, and built to perform in service.`,
];

function HighlightParagraph({ children }: { children: string }) {
    const paragraphRef = useRef<HTMLParagraphElement>(null);

    const words = children
        .replace(/\s+/g, " ")
        .trim()
        .split(" ");

    useEffect(() => {
        const paragraph = paragraphRef.current;

        if (!paragraph) return;

        const wordElements = paragraph.querySelectorAll<HTMLElement>(".word");

        const ctx = gsap.context(() => {
            // Initial state
            gsap.set(wordElements, {
                opacity: 0.22,
            });

            // Progressive scroll highlight
            gsap.to(wordElements, {
                opacity: 1,
                stagger: 0.03,
                ease: "none",

                scrollTrigger: {
                    trigger: paragraph,
                    start: "top 78%",
                    end: "bottom 45%",
                    scrub: 1,
                },
            });
        }, paragraph);

        return () => ctx.revert();
    }, []);

    return (
        <p ref={paragraphRef}>
            {words.map((word, index) => (
                <span
                    key={`${word}-${index}`}
                    className="word inline-block"
                >
                    {word}
                    {index !== words.length - 1 && (
                        <span>&nbsp;</span>
                    )}
                </span>
            ))}
        </p>
    );
}

export function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const eyebrowRef = useRef<HTMLParagraphElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            /*
             * Eyebrow entrance
             */
            gsap.from(eyebrowRef.current, {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: eyebrowRef.current,
                    start: "top 88%",
                    once: true,
                },
            });

            /*
             * Heading entrance
             */
            gsap.from(headingRef.current, {
                y: 45,
                opacity: 0,
                duration: 1,
                ease: "power3.out",

                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                    once: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
            aria-labelledby="company-intro-heading"
        >
            <Container>
                <div className="mx-auto max-w-7xl">

                    {/* Eyebrow */}
                    <p
                        ref={eyebrowRef}
                        className="
              mb-4
              text-xs
              font-bold
              uppercase
              tracking-widest
              text-brand-indigo
            "
                    >
                        Who We Are
                    </p>

                    {/* Heading */}
                    <h2
                        ref={headingRef}
                        id="company-intro-heading"
                        className="
              mb-8
              max-w-5xl
              text-3xl
              font-medium
              tracking-tight
              text-brand-midnight
              sm:text-5xl
              lg:text-6xl
            "
                    >
                        Precision engineering built for the demands of aviation
                    </h2>

                    {/* Scroll Highlight Text */}
                    <div
                        className="
              max-w-7xl
              space-y-7
              text-base
              leading-relaxed
              tracking-wide
              text-body
              sm:text-xl
              lg:text-2xl
              lg:leading-[1.65]
            "
                    >
                        {paragraphs.map((paragraph, index) => (
                            <HighlightParagraph key={index}>
                                {paragraph}
                            </HighlightParagraph>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}