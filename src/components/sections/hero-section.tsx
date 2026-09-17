import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const capabilities = [
  "Aircraft Modifications",
  "Avionics Integration",
  "Medical Aviation",
  "Manufacturing",
  "Repair and Testing",
];

export function HeroSection() {
  return (
    <section
      className="relative min-h-[720px] overflow-hidden bg-brand-midnight lg:min-h-[800px]"
      aria-labelledby="hero-heading"
    >
      {/* ======================================================
          BACKGROUND IMAGE FALLBACK
      ====================================================== */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.pinimg.com/1200x/cc/81/64/cc8164f9dd1e6d705416265c11cf7424.jpg')",
        }}
        aria-hidden="true"
      />

      {/* ======================================================
          BACKGROUND VIDEO
          - Autoplays
          - Muted
          - Loops
          - No controls
          - Plays inline on mobile
      ====================================================== */}
      <video
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
          motion-reduce:hidden
        "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero/avionics-hero.jpg"
        aria-hidden="true"
      >
        <source src="/hero/avionics-hero.mp4" type="video/mp4" />
      </video>

      {/* ======================================================
          DARK OVERLAY
          Keeps text readable over video
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#080d1d]/50
          via-[#080d1d]/40
          to-[#080d1d]/30
        "
        aria-hidden="true"
      />

      {/* Bottom gradient */}
      {/* <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-transparent
          to-brand-midnight/20
        "
        aria-hidden="true"
      /> */}

      {/* ======================================================
          TECHNICAL GRID
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-hero-grid
          opacity-20
        "
        aria-hidden="true"
      />

      {/* ======================================================
          SUBTLE PURPLE / BLUE GLOW
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-violet-600/10
          blur-[140px]
        "
        aria-hidden="true"
      />

      {/* ======================================================
          TOP BORDER
      ====================================================== */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-vector/50
          to-transparent
        "
        aria-hidden="true"
      />

      {/* ======================================================
          HERO CONTENT
      ====================================================== */}
      <Container
        className="
          relative
          z-10
          flex
          min-h-[720px]
          flex-col
          justify-center
          py-24
          sm:py-32
          lg:min-h-[800px]
          lg:py-40
        "
      >
        <div className="max-w-3xl">
          {/* Eyebrow */}
          {/* <div
            className="
              mb-6
              inline-flex
              items-center
              gap-3
              animate-fade-in
              motion-reduce:animate-none
            "
          >
            <span className="h-px w-8 bg-violet-vector" />

            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.2em]
                text-violet-vector
              "
            >
              Aviation Engineering Solutions
            </span>
          </div> */}

          {/* Headline */}
          <h1
            id="hero-heading"
            className="
              mb-6
              max-w-3xl
              animate-fade-up
              text-4xl
              font-semibold
              leading-[1.05]
              tracking-tight
              text-white
              motion-reduce:animate-none
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            Engineering confidence
            <br />

            <span
              className="
                bg-gradient-to-r
                from-white
                via-blue-200
                to-violet-300
                bg-clip-text
                text-transparent
              "
            >
              into every flight
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mb-10
              max-w-2xl
              animate-fade-up
              text-base
              leading-relaxed
              text-blue-100/80
              [animation-delay:100ms]
              motion-reduce:animate-none
              sm:text-lg
              lg:text-xl
            "
          >
            Avianor Engineering provides aircraft modification, avionics
            integration, medical aviation, manufacturing, repair, and testing
            solutions designed around operational reliability.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              flex-wrap
              gap-4
              animate-fade-up
              [animation-delay:200ms]
              motion-reduce:animate-none
            "
          >
            <Button href="/services" variant="primary" size="lg">
              Explore Our Services
            </Button>

            <Button
              href="/contact"
              variant="ghost"
              size="lg"
              className="
                border
                border-white/20
                bg-white/5
                text-white
                backdrop-blur-sm
                hover:border-white/30
                hover:bg-white/10
                hover:text-white
              "
            >
              Discuss Your Project
            </Button>
          </div>
        </div>

        {/* ======================================================
            CAPABILITY STRIP
        ====================================================== */}
        {/* <div
          className="
            mt-16
            border-t
            border-white/10
            pt-8
            lg:mt-20
          "
        >
          <p
            className="
              mb-4
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-blue-100/50
            "
          >
            Core Capabilities
          </p>

          <ul
            className="flex flex-wrap gap-3"
            aria-label="Core capabilities"
          >
            {capabilities.map((cap) => (
              <li
                key={cap}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-blue-100/80
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-white/20
                  hover:bg-white/10
                  hover:text-white
                "
              >
                {cap}
              </li>
            ))}
          </ul>
        </div> */}
      </Container>
    </section>
  );
}