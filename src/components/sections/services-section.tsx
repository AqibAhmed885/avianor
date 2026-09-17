"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container } from "@/components/ui/container";
import { services } from "@/content/services";

gsap.registerPlugin(ScrollTrigger);

const featuredServices = services.slice(0, 6);

/**
 * These images are intentionally separate from your services data
 * so you don't have to modify the existing services content structure.
 *
 * Later, if you want, we can move image into services.ts itself.
 */
const serviceImages = [
  // Aircraft Modifications
  "https://images.unsplash.com/photo-1767861061605-48458529ae64?auto=format&fit=crop&w=1800&q=85",

  // Avionics Integration
  "https://images.unsplash.com/photo-1579781354199-1ffd36b913dc?auto=format&fit=crop&w=1800&q=85",

  // Medical Aviation
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85",

  // Manufacturing
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=85",

  // Repair and Testing
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=85",

  // Aviation Operations
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1800&q=85",
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /**
       * ----------------------------------------------------------
       * HEADING ANIMATION
       * ----------------------------------------------------------
       */
      if (headingRef.current) {
        const headingElements =
          headingRef.current.querySelectorAll(".heading-animate");

        gsap.fromTo(
          headingElements,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",

            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      /**
       * ----------------------------------------------------------
       * SERVICE CARDS
       * ----------------------------------------------------------
       */
      const cards =
        cardsWrapperRef.current?.querySelectorAll(".service-card");

      if (cards?.length) {
        gsap.fromTo(
          cards,
          {
            y: 90,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            stagger: 0.12,
            ease: "power3.out",

            scrollTrigger: {
              trigger: cardsWrapperRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }

      /**
       * ----------------------------------------------------------
       * IMAGE PARALLAX
       * ----------------------------------------------------------
       */
      const images =
        cardsWrapperRef.current?.querySelectorAll(".service-image");

      images?.forEach((image) => {
        const card = image.closest(".service-card");

        if (!card) return;

        gsap.fromTo(
          image,
          {
            yPercent: -7,
          },
          {
            yPercent: 7,
            ease: "none",

            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-32
      "
      aria-labelledby="services-section-heading"
    >
      {/* ======================================================
          SUBTLE BACKGROUND
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[500px]
          bg-gradient-to-b
          from-slate-50
          to-transparent
        "
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* ======================================================
            HEADER
        ====================================================== */}
        <div
          ref={headingRef}
          className="
            mb-12
            grid
            gap-8
            lg:mb-16
            lg:grid-cols-[1fr_0.65fr]
            lg:items-end
          "
        >
          {/* LEFT */}
          <div className="max-w-4xl">
            <div
              className="
                heading-animate
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-px
                  w-9
                  bg-brand-indigo
                "
              />

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-brand-indigo
                "
              >
                What We Do
              </p>
            </div>

            <h2
              id="services-section-heading"
              className="
                heading-animate
                max-w-4xl
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-tight
                text-brand-midnight
                sm:text-5xl
                lg:text-6xl
              "
            >
              Engineering solutions
              <span className="block text-brand-indigo">
                built around the aircraft.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:pb-1">
            <p
              className="
                heading-animate
                mb-7
                max-w-xl
                text-base
                leading-relaxed
                text-body/70
                sm:text-lg
              "
            >
              From aircraft modifications and avionics integration to
              manufacturing, medical aviation and specialized testing,
              every project is developed around operational requirements,
              aircraft configuration and applicable documentation.
            </p>

            <Link
              href="/services"
              className="
                heading-animate
                group
                inline-flex
                items-center
                gap-3
                text-sm
                font-semibold
                text-brand-midnight
                transition-colors
                hover:text-brand-indigo
              "
            >
              Explore all services

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-brand-midnight/15
                  transition-all
                  duration-300
                  group-hover:border-brand-indigo
                  group-hover:bg-brand-indigo
                  group-hover:text-white
                "
              >
                <ArrowRight
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* ======================================================
            SERVICES GRID
        ====================================================== */}
        <div
          ref={cardsWrapperRef}
          className="
            grid
            grid-cols-1
            gap-4
            md:grid-cols-2
            lg:grid-cols-12
            lg:gap-5
          "
        >
          {featuredServices.map((service, index) => {
            /**
             * First + fourth cards are larger on desktop.
             */
            const isLarge = index === 0 || index === 3;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`
                  service-card
                  group
                  relative
                  isolate
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-brand-midnight
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-brand-indigo
                  focus-visible:ring-offset-2

                  ${isLarge
                    ? "min-h-[470px] lg:col-span-8 lg:min-h-[570px]"
                    : "min-h-[420px] lg:col-span-4 lg:min-h-[570px]"
                  }
                `}
              >
                {/* ==============================================
                    IMAGE WRAPPER
                ============================================== */}
                <div
                  className="
                    absolute
                    -inset-y-[8%]
                    inset-x-0
                    overflow-hidden
                  "
                >
                  <img
                    src={serviceImages[index]}
                    alt=""
                    loading={index === 0 ? "eager" : "lazy"}
                    className="
                      service-image
                      h-[116%]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.06]
                    "
                  />
                </div>

                {/* ==============================================
                    DARK IMAGE OVERLAYS
                ============================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#070c1b]
                    via-[#070c1b]/40
                    to-[#070c1b]/10
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#070c1b]/40
                    via-transparent
                    to-transparent
                  "
                />

                {/* subtle brand overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-brand-indigo/0
                    transition-colors
                    duration-500
                    group-hover:bg-brand-indigo/10
                  "
                />

                {/* ==============================================
                    NUMBER
                ============================================== */}
                <div
                  className="
                    absolute
                    left-6
                    top-6
                    z-10
                    flex
                    items-center
                    gap-3
                    lg:left-8
                    lg:top-8
                  "
                >
                  <span
                    className="
                      text-xs
                      font-semibold
                      tracking-[0.2em]
                      text-white/60
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-white/30" />
                </div>

                {/* ==============================================
                    ARROW
                ============================================== */}
                <div
                  className="
                    absolute
                    right-6
                    top-6
                    z-10
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-white/5
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    group-hover:border-white
                    group-hover:bg-white
                    group-hover:text-brand-midnight
                    lg:right-8
                    lg:top-8
                  "
                >
                  <ArrowUpRight
                    className="
                      h-5
                      w-5
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                    aria-hidden="true"
                  />
                </div>

                {/* ==============================================
                    CONTENT
                ============================================== */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    p-6
                    lg:p-8
                  "
                >
                  {/* Category */}
                  <p
                    className="
                      mb-3
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-blue-200/70
                    "
                  >
                    Aviation Engineering
                  </p>

                  {/* Title */}
                  <h3
                    className={`
                      max-w-xl
                      font-semibold
                      leading-tight
                      tracking-tight
                      text-white

                      ${isLarge
                        ? "text-3xl sm:text-4xl lg:text-5xl"
                        : "text-3xl lg:text-[2.1rem]"
                      }
                    `}
                  >
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-sm
                      leading-relaxed
                      text-white/65
                      transition-colors
                      duration-300
                      group-hover:text-white/85
                      sm:text-base
                    "
                  >
                    {service.tagline}
                  </p>

                  {/* Bottom line */}
                  <div
                    className="
                      mt-7
                      h-px
                      w-full
                      overflow-hidden
                      bg-white/15
                    "
                  >
                    <div
                      className="
                        h-full
                        w-full
                        origin-left
                        scale-x-0
                        bg-white
                        transition-transform
                        duration-500
                        ease-out
                        group-hover:scale-x-100
                      "
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ======================================================
            MOBILE / BOTTOM CTA
        ====================================================== */}
        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-brand-midnight/10
            pt-7
          "
        >
          <p
            className="
              hidden
              text-sm
              text-body/50
              sm:block
            "
          >
            Aircraft engineering from initial assessment through
            certification-ready documentation.
          </p>

          <Link
            href="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-brand-indigo
            "
          >
            Discuss your project

            <ArrowRight
              className="
                h-4
                w-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}