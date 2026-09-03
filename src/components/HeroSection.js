import { useEffect, useState } from "react";

const WORDS = [
  "Digital Experiences. ",
  "Web Applications. ",
  "AI Solutions. ",
  "Mobile Apps. ",
  "Business Automation. ",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const updatedText = currentWord.substring(
            0,
            text.length + 1
          );

          setText(updatedText);

          if (updatedText === currentWord) {
            setTimeout(() => {
              setIsDeleting(true);
            }, 1500);
          }
        } else {
          const updatedText = currentWord.substring(
            0,
            text.length - 1
          );

          setText(updatedText);

          if (updatedText === "") {
            setIsDeleting(false);
            setWordIndex(
              (prev) => (prev + 1) % WORDS.length
            );
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section
      className="
        relative
        pt-20
        h-[42vh]
        min-h-[350px]
        flex
        items-center
        overflow-hidden
        theme-bg
        theme-border
        border-b
        transition-colors
        duration-300
      "
    >
      {/* =====================================================
          GRID PATTERN
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-60
          dark:opacity-30
          pointer-events-none
        "
        style={{
          backgroundImage:
            "radial-gradient(var(--border-primary) 1px, transparent 1px)",

          backgroundSize: "24px 24px",

          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, #000 70%, transparent 100%)",
        }}
      />

      {/* =====================================================
          ANIMATED BLOBS
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-30
          pointer-events-none
          overflow-hidden
        "
      >
        {/* Purple blob */}

        <div
          className="
            absolute
            top-[-10%]
            left-[0%]
            w-[480px]
            h-[480px]
            rounded-full
            animate-mesh-plasma-1
          "
          style={{
            background:
              "color-mix(in srgb, var(--accent-end) 18%, transparent)",
          }}
        />

        {/* Indigo blob */}

        <div
          className="
            absolute
            bottom-[-15%]
            right-[0%]
            w-[520px]
            h-[520px]
            rounded-full
            animate-mesh-plasma-2
          "
          style={{
            background:
              "color-mix(in srgb, var(--accent-middle) 15%, transparent)",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          max-w-[90%]
          mx-auto
          px-6
          w-full
          relative
          z-10
          grid
          grid-cols-1
          lg:grid-cols-12
          gap-6
          items-center
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div
          className="
            lg:col-span-8
            text-left
            space-y-4
          "
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              text-xs
              px-3.5
              py-1.5
              rounded-full
              uppercase
              tracking-wider
              shadow-sm
              border
            "
            style={{
              background:
                "color-mix(in srgb, var(--accent-end) 10%, var(--bg-card))",

              borderColor:
                "color-mix(in srgb, var(--accent-end) 25%, var(--border-primary))",

              color: "var(--accent-end)",
            }}
          >
            <span
              className="
                w-1.5
                h-1.5
                rounded-full
                bg-[var(--accent-end)]
                animate-pulse
              "
            />

            <span>
              AI Exploration Workspace
            </span>
          </span>

          {/* Heading */}

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-black
              tracking-tight
              theme-text
              leading-[0.95]
              transition-colors
              duration-300
            "
          >
            Engineering Impactful
            <br />

            <span
              className="
                inline-block
                min-h-[1.2em]
                bg-gradient-to-r
                from-purple-600
                via-indigo-600
                to-fuchsia-600
                bg-clip-text
                text-transparent
                drop-shadow-sm
              "
            >
              {text}

              <span
                className="
                  animate-blink
                  text-purple-600
                "
              >
                |
              </span>
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              theme-text-secondary
              text-sm
              sm:text-base
              max-w-xl
              font-normal
              leading-relaxed
              transition-colors
              duration-300
            "
          >
            Review interactive digital platform deployments,
            video blueprints, and smart automation modules
            custom built to accelerate your structural business
            transformation targets.
          </p>
        </div>

        {/* =================================================
            RIGHT SIDE GRAPHIC
        ================================================= */}

        <div
          className="
            hidden
            lg:col-span-4
            lg:flex
            justify-end
            pr-6
            relative
          "
        >
          {/* Outer Circle */}

          <div
            className="
              w-44
              h-44
              rounded-full
              border
              border-dashed
              p-4
              flex
              items-center
              justify-center
              animate-spin
            "
            style={{
              animationDuration: "50s",

              borderColor:
                "color-mix(in srgb, var(--accent-end) 45%, var(--border-primary))",
            }}
          >
            {/* Inner Circle */}

            <div
              className="
                w-32
                h-32
                rounded-full
                border
                theme-border
                flex
                items-center
                justify-center
                animate-pulse
              "
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--accent-end) 8%, var(--bg-card)), color-mix(in srgb, var(--accent-middle) 6%, var(--bg-secondary)))",
              }}
            >
              <svg
                className="
                  w-10
                  h-10
                  text-purple-600/70
                  dark:text-purple-400/80
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8 9a3 3 0 1 1 0 6m8-6a3 3 0 1 1 0 6M8 12h8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Center Dot */}

          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-3
              h-3
              rounded-full
              bg-[var(--accent-end)]
              shadow-lg
              shadow-purple-500/40
            "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;