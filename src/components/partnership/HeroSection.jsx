import { useRef } from "react";
import { motion } from "framer-motion";
import HeroParticles from "./HeroParticles";

export default function HeroSection() {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[65vh] flex-col items-center justify-center overflow-hidden mt-20 bg-[#090d16] px-[5%] pt-28 pb-36 text-center text-white md:pt-32 md:pb-40"
    >
      <HeroParticles containerRef={heroRef} />

      <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_40%,rgba(155,81,224,0.15)_0%,transparent_60%)]" />

      <div className="relative z-[3] max-w-[950px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.2, 0.8, 0.2, 1],
          }}
          className="mb-6 text-[2.6rem] font-bold leading-[1.15] tracking-[-1.5px] md:text-[3.2rem] lg:text-[4.2rem]"
        >
          Scaling Your Agency?
          <br />

          <span className="relative inline-block bg-gradient-to-r from-[#b975ff] to-[#e0b0ff] bg-clip-text text-transparent">
            Techquitoes
            <span className="absolute bottom-1 left-0 h-[3px] w-full rounded-sm bg-gradient-to-r from-[#9b51e0] to-transparent" />
          </span>{" "}
          is Your Invisible Workforce.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.2, 0.8, 0.2, 1],
          }}
          className="mx-auto max-w-[780px] text-[1.15rem] font-light text-[#cbd5e1] md:text-[1.4rem]"
        >
          Deliver elite projects, access dedicated tech talent on
          contract, and expand your service offerings seamlessly
          under your own brand footprint.
        </motion.p>
      </div>
    </section>
  );
}