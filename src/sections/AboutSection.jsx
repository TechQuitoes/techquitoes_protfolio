import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="
        w-full
        bg-[var(--bg-primary)]
        py-16
        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto
          px-10
          grid
          max-w-[95%]
          grid-cols-1
          items-center
          gap-12
          lg:grid-cols-[1.05fr_0.95fr]
          lg:gap-16
        "
      >
        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Heading */}

          <h2
            className="
              mb-5
              text-[32px]
              font-bold
              leading-tight
              tracking-[-0.03em]
              text-[var(--text-primary)]
              sm:text-[36px]
              md:text-[38px]
            "
          >
            About us
          </h2>

          {/* Core Belief */}

          <p
            className="
              mb-5
              max-w-[650px]
              text-[16px]
              leading-[1.45]
              text-[var(--text-primary)]
              sm:text-[16px]
            "
          >
            <strong className="font-bold">
              Our Core Belief
            </strong>{" "}
            - We believe people and culture are the foundation of successful
            digital transformation.
          </p>

          {/* Who We Are */}

          <p
            className="
              mb-5
              max-w-[650px]
              text-[16px]
              leading-[1.5]
              text-[var(--text-primary)]
              sm:text-[16px]
            "
          >
            <strong className="font-bold">
              Who We Are
            </strong>{" "}
            - Techquitoes is an{" "}
            <strong className="font-bold">
              AI-ready digital solutions company
            </strong>{" "}
            engineered for the future. Specializing in Data Analytics,
            Business Process Automation, Web Development, and Mobile App
            Development, we help businesses transform raw concepts into
            intelligent, scalable, and production-ready digital solutions
            with efficiency, innovation, and measurable impact.
          </p>

          {/* AI Ready Advantage */}

          <p
            className="
              mb-5
              max-w-[650px]
              text-[16px]
              leading-[1.5]
              text-[var(--text-primary)]
              sm:text-[16px]
            "
          >
            <strong className="font-bold">
              The AI-Ready Advantage
            </strong>{" "}
            - Every line of code we write and every architecture we deploy is
            engineered with artificial intelligence in mind. Whether you are
            launching a core platform today or planning to embed custom LLMs
            and autonomous agents tomorrow, our systems are built from day one
            to switch on, adapt, and scale alongside rapid AI advancements.
          </p>

          {/* What We Do */}

          <p
            className="
              mb-5
              max-w-[650px]
              text-[15px]
              leading-[1.5]
              text-[var(--text-primary)]
              sm:text-[16px]
            "
          >
            <strong className="font-bold">
              What We Do
            </strong>{" "}
            - We work with Startups, SMEs, Enterprises, Agencies, and Global
            Organizations to build modern digital ecosystems, automate
            operations, and create high-quality technology solutions tailored
            to business needs.
          </p>

          {/* Remote Advantage */}

          <p
            className="
              max-w-[650px]
              text-[15px]
              leading-[1.5]
              text-[var(--text-primary)]
              sm:text-[16px]
            "
          >
            <strong className="font-bold">
              The Remote Advantage
            </strong>{" "}
            - As a remote-first team, we collaborate with skilled professionals
            globally to deliver cost-effective, scalable, and high-quality
            solutions with seamless communication and transparency.
          </p>
        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          className="
            flex
            flex-col
            items-center
            justify-center
          "
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
        >
          {/* Illustration */}

          <motion.img
            src="/ram_mandir.avif"
            alt="About us illustration"
            className="
              w-full
              max-w-[570px]
              object-contain
            "
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Button */}

          <motion.a
            href="#about-details"
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="
              mt-8
              flex
              h-[57px]
              w-[195px]
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border-primary)]
              bg-[var(--bg-primary)]
              text-[16px]
              font-medium
              text-[var(--text-primary)]
              transition-all
              duration-300
              hover:bg-[var(--button-hover-bg)]
              hover:text-[var(--button-hover-text)]
            "
          >
            About Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;