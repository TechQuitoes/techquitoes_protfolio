import React, { useState } from "react";
import {
  BriefcaseBusiness,
  Clock3,
  Smartphone,
  PenTool,
  ShoppingCart,
  Bot,
  Globe,
  Database,
} from "lucide-react";

const services = [
  {
    title: "E-Commerce",
    description:
      "Secure, scalable online stores optimized for global reach and customer conversion.",
    icon: ShoppingCart,
  },
  {
    title: "AI & Automation",
    description:
      "Smart automation and AI-driven solutions to streamline complex business workflows.",
    icon: Clock3,
  },
  {
    title: "Web Design & Development",
    description:
      "High-performance, scalable websites built for SEO, speed, and business conversions.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Mobile Applications",
    description:
      "Custom iOS & Android apps engineered for seamless user performance and growth.",
    icon: Smartphone,
  },
  {
    title: "UI / UX Design",
    description:
      "User-centric digital experiences focusing on usability, accessibility, and impact.",
    icon: PenTool,
  },
  {
    title: "Digital Solutions",
    description:
      "Modern technology solutions designed around your business goals and customers.",
    icon: Globe,
  },
  {
    title: "Data Analytics",
    description:
      "Transform your business data into actionable insights and measurable outcomes.",
    icon: Database,
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent AI-powered systems designed to improve productivity and innovation.",
    icon: Bot,
  },
];

const Expertise = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <section
      id="expertise"
      className="
        relative
        min-h-[700px]
        w-full
        overflow-hidden
        bg-[#16002f]
        px-5
        py-14
        text-white
        sm:px-8
        md:py-16
        lg:px-12
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_38%_35%,rgba(213,61,255,0.72),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(161,55,219,0.32),transparent_35%),linear-gradient(110deg,#53139a_0%,#32105d_45%,#09002d_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[40%]
          h-[420px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-500/20
          blur-[110px]
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mx-auto max-w-[1000px] text-center">
          <h2
            className="
              text-[40px]
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-white
              sm:text-[48px]
              md:text-[54px]
              lg:text-[58px]
            "
          >
            Solutions / Expertise
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[930px]
              text-[15px]
              font-semibold
              leading-[1.45]
              text-white/90
              sm:text-[17px]
            "
          >
            At Techquitoes, we provide contemporary and budget-friendly
            digital solutions that enhance growth and efficiency for
            companies of every scale.
          </p>
        </div>

        {/* ================= CAROUSEL ================= */}

        <div
  className="
    solutions-carousel
    relative
    mt-14
    overflow-hidden
    py-4
  "
>

          {/* Left fade */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-[120px]
              bg-gradient-to-r
              from-[#53139a]
              via-[#53139a]/70
              to-transparent
            "
          />

          {/* Right fade */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              
              z-20
              h-full
              w-[120px]
              bg-gradient-to-l
              from-[#10002f]
              via-[#10002f]/70
              to-transparent
            "
          />

          {/* ================= TRACK ================= */}

          <div className="solutions-track">

            {/* FIRST SET */}

            <div className="solutions-group">
              {services.map((service, index) => (
                <ServiceCard
  service={service}
  hoveredCard={hoveredCard}
  setHoveredCard={setHoveredCard}
/>
              ))}
            </div>

            {/* DUPLICATE SET */}

            <div className="solutions-group">
              {services.map((service, index) => (
                 <ServiceCard
      key={`second-${service.title}`}
      service={service}
      hoveredCard={hoveredCard}
      setHoveredCard={setHoveredCard}
    />
              ))}
            </div>

          </div>
        </div>

        {/* ================= BOTTOM ================= */}

        <div
          className="
            mt-14
            flex
            justify-center
            lg:justify-end
          "
        >
          <button
            className="
              rounded-full
              bg-white
              px-7
              py-4
              text-[15px]
              font-medium
              text-black
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            Explore all Services
          </button>
        </div>
      </div>

      {/* ================= ANIMATION ================= */}

      <style>{`

        .solutions-track {
          display: flex;
          width: max-content;

          animation:
            solutions-marquee
            32s
            linear
            infinite;

          will-change: transform;
        }

        /*
          IMPORTANT:
          Hover the carousel = pause
        */

        .solutions-carousel:hover
        .solutions-track {
          animation-play-state: paused;
        }

        .solutions-group {
          display: flex;
          align-items: center;
          gap: 24px;

          flex-shrink: 0;
          padding-right: 24px;
        }

        @keyframes solutions-marquee {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(
              calc(-50% - 12px)
            );
          }

        }

        /*
          Desktop
        */

        @media (min-width: 1024px) {

          .solutions-group {
            gap: 24px;
            padding-right: 24px;
          }

        }

        /*
          Tablet
        */

        @media (max-width: 768px) {

          .solutions-track {
            animation-duration: 28s;
          }

          .solutions-group {
            gap: 16px;
            padding-right: 16px;
          }

        }

        /*
          Mobile
        */

        @media (max-width: 640px) {

          .solutions-track {
            animation-duration: 24s;
          }

          .solutions-group {
            gap: 14px;
            padding-right: 14px;
          }

        }

        /*
          Reduced motion
        */

        @media (prefers-reduced-motion: reduce) {

          .solutions-track {
            animation: none;
          }

        }

      `}</style>
    </section>
  );
};


/* =====================================================
   SERVICE CARD
===================================================== */

const ServiceCard = ({
  service,
  hoveredCard,
  setHoveredCard,
}) => {
  const Icon = service.icon;

  const isActive = hoveredCard === service.title;

  return (
    <div
      onMouseEnter={() => setHoveredCard(service.title)}
      onMouseLeave={() => setHoveredCard(null)}
      className={`
        service-card
        group
        relative
        flex
        h-[325px]
        w-[260px]
        flex-shrink-0
        flex-col
        rounded-[25px]
        border
        px-7
        py-8
        transition-all
        duration-500
        ease-out

        ${
          isActive
            ? `
              z-10
              scale-[1.03]
              border-purple-400
              bg-black
              shadow-[0_25px_70px_rgba(0,0,0,0.45)]
            `
            : `
              border-white/15
              bg-white/[0.045]
              opacity-70
            `
        }
      `}
    >
      {/* ICON */}

      <div
        className={`
          flex
          h-[60px]
          w-[60px]
          items-center
          justify-start
          transition-all
          duration-300

          ${
            isActive
              ? "text-[#a855f7]"
              : "text-white/75"
          }
        `}
      >
        <Icon
          size={48}
          strokeWidth={1.7}
        />
      </div>

      {/* TITLE */}

      <h3
        className={`
          mt-5
          text-[19px]
          font-bold
          leading-[1.15]
          tracking-[-0.03em]
          transition-colors
          duration-300
          ${
            isActive
              ? "text-white"
              : "text-white/90"
          }
        `}
      >
        {service.title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className={`
          mt-5
          text-[15px]
          leading-[1.7]
          transition-colors
          duration-300

          ${
            isActive
              ? "text-white/90"
              : "text-white/45"
          }
        `}
      >
        {service.description}
      </p>

      {/* ACTIVE BORDER */}

      {isActive && (
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            rounded-[25px]
            border
            border-purple-400/80
          "
        />
      )}
    </div>
  );
};

export default Expertise;