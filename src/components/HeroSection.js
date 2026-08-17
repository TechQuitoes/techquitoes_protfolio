
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Smartphone,
  Globe,
  Cloud,
  Cpu,
} from "lucide-react";

const techItems = [
  {
    icon: Code2,
    label: "Web Development",
    position: "top-[8%] left-[5%]",
    delay: 0,
  },
  {
    icon: Database,
    label: "Data Analytics",
    position: "top-[22%] right-[4%]",
    delay: 0.15,
  },
  {
    icon: Smartphone,
    label: "App Development",
    position: "bottom-[18%] left-[8%]",
    delay: 0.3,
  },
  {
    icon: Cloud,
    label: "Cloud Solutions",
    position: "bottom-[8%] right-[10%]",
    delay: 0.45,
  },
];

const floatingAnimation = {
  y: [-10, 10, -10],
  rotate: [-2, 2, -2],
};

const floatingTransition = {
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut",
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f8f7f4] text-black"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large purple glow */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-[15%]
            h-[450px]
            w-[450px]
            -translate-x-1/2
            rounded-full
            bg-purple-300/30
            blur-[120px]
          "
        />

        {/* Pink glow */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            right-[-100px]
            top-[20%]
            h-[300px]
            w-[300px]
            rounded-full
            bg-pink-200/30
            blur-[100px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.18]
            [background-image:linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* Moving horizontal line */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            top-[38%]
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-purple-400/40
            to-transparent
          "
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pb-16
          pt-32
          sm:px-8
          lg:px-12
        "
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20"
          >
            {/* Small label */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-black/10
                bg-white/60
                px-4
                py-2
                text-xs
                font-medium
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-purple-500
                    opacity-75
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-purple-600
                  "
                />
              </span>

              Digital Transformation Partner
            </motion.div>

            {/* Heading */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
                  max-w-3xl
                  text-5xl
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.045em]
                  sm:text-6xl
                  lg:text-[76px]
                  xl:text-[84px]
                "
              >
                Empowering
                <br />

                <span className="relative inline-block">
                  Your{" "}
                  <span className="relative">
                    Digital
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        delay: 1,
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="
                        absolute
                        bottom-[-5px]
                        left-0
                        h-[5px]
                        rounded-full
                        bg-purple-600
                      "
                    />
                  </span>
                </span>

                <br />

                <span className="text-purple-600">Future.</span>
              </motion.h1>
            </div>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.7,
              }}
              className="
                mt-8
                max-w-xl
                text-base
                leading-7
                text-black/60
                sm:text-lg
              "
            >
              Delivering intelligent digital solutions that drive business
              growth, automate operations, and turn ambitious ideas into
              scalable technology.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.85,
                duration: 0.7,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-black
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition
                  hover:bg-purple-600
                "
              >
                Get Started

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-black
                    transition
                    group-hover:rotate-45
                  "
                >
                  <ArrowUpRight size={15} />
                </span>
              </motion.a>

              <motion.a
                href="#solutions"
                whileHover={{ x: 5 }}
                className="
                  text-sm
                  font-medium
                  text-black/70
                  underline
                  underline-offset-4
                  decoration-black/20
                  transition
                  hover:text-black
                "
              >
                Explore our solutions
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT ANIMATION ================= */}

          <div className="relative h-[520px] w-full lg:h-[620px]">
            {/* Main animated circle */}

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                sm:h-[390px]
                sm:w-[390px]
                lg:h-[470px]
                lg:w-[470px]
              "
            >
              {/* Rotating outer ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-black/10
                "
              >
                {/* Orbit dot */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-[-5px]
                    h-3
                    w-3
                    -translate-x-1/2
                    rounded-full
                    bg-purple-600
                    shadow-[0_0_20px_rgba(147,51,234,0.7)]
                  "
                />
              </motion.div>

              {/* Second ring */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-[35px]
                  rounded-full
                  border
                  border-purple-500/20
                  border-dashed
                "
              />

              {/* Central glass object */}

              <motion.div
                animate={{
                  y: [-12, 12, -12],
                  rotate: [-1, 1, -1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  flex
                  h-[190px]
                  w-[190px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-[45px]
                  border
                  border-white/70
                  bg-white/50
                  shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                  backdrop-blur-2xl
                  sm:h-[240px]
                  sm:w-[240px]
                "
              >
                {/* Gradient core */}

                <motion.div
                  animate={{
                    scale: [1, 1.12, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    h-28
                    w-28
                    rounded-full
                    bg-gradient-to-br
                    from-purple-400
                    via-fuchsia-400
                    to-indigo-500
                    opacity-80
                    blur-[1px]
                    shadow-[0_0_80px_rgba(147,51,234,0.5)]
                    sm:h-36
                    sm:w-36
                  "
                />

                {/* Logo-like center */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-black
                    shadow-2xl
                    sm:h-24
                    sm:w-24
                  "
                >
                  <Cpu
                    size={42}
                    strokeWidth={1.3}
                    className="text-white"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* ================= FLOATING CARDS ================= */}

            {techItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.8 + item.delay,
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className={`absolute ${item.position} hidden sm:block`}
                >
                  <motion.div
                    animate={floatingAnimation}
                    transition={{
                      ...floatingTransition,
                      delay: item.delay,
                    }}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-black/10
                      bg-white/70
                      px-4
                      py-3
                      shadow-[0_15px_40px_rgba(0,0,0,0.08)]
                      backdrop-blur-xl
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-black
                        text-white
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold">
                        {item.label}
                      </p>

                      <p className="mt-0.5 text-[10px] text-black/40">
                        Techquitoes
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* ================= TECH STACK TEXT ================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.8,
              }}
              className="
                absolute
                bottom-0
                left-1/2
                w-full
                -translate-x-1/2
                text-center
              "
            >
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40">
                No matter your tech stack
              </p>

              <p className="mt-2 text-sm text-black/50">
                We&apos;ve got you covered.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM SCROLL ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          md:flex
        "
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-black/40">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-8
            w-px
            bg-black/20
          "
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

