import React, { useState } from "react";
import {
  ShoppingCart,
  BarChart3,
  Globe2,
  Palette,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "ecom",
    title: (
      <>
        E-commerce
        <br />
        Development
      </>
    ),
    icon: ShoppingCart,
    heading: "E-commerce Development",
    description:
      "We build high-performance e-commerce platforms focused on conversions, scalability, and seamless user experience — tailored to your business goals.",
    features: [
      "Custom E-commerce Development",
      "Shopify, WooCommerce & Headless",
      "Payment Gateway Integration",
      "Performance, Security & SEO",
    ],
  },
  {
    id: "data",
    title: (
      <>
        Data Analytics
        <br />
        & Automation
      </>
    ),
    icon: BarChart3,
    heading: "Data Analytics & Automation",
    description:
      "Turn raw data into actionable insights with intelligent dashboards, automated workflows, and scalable analytics solutions.",
    features: [
      "Power BI & Power Platform Solutions",
      "Data Warehousing & ETL",
      "Business Intelligence Dashboards",
      "Process Automation",
    ],
  },
  {
    id: "ai",
    title: (
      <>
        AI Automation
        <br />
        & Cloud Services
      </>
    ),
    icon: Globe2,
    heading: "AI Automation & Cloud Services",
    description:
      "Scale faster with AI-powered automation and secure cloud infrastructure designed for efficiency and innovation.",
    features: [
      "AI Workflow Automation",
      "Chatbots & Intelligent Assistants",
      "Cloud Architecture & Migration",
      "DevOps & CI/CD Pipelines",
    ],
  },
  {
    id: "design",
    title: (
      <>
        Graphic Design
        <br />
        & Digital Marketing
      </>
    ),
    icon: Palette,
    heading: "Graphic Design & Digital Marketing",
    description:
      "Build a powerful brand presence with visually stunning designs and marketing strategies that attract and convert.",
    features: [
      "Brand Identity & Visual Design",
      "UI/UX & Website Design",
      "Social Media Creatives",
      "SEO & Content Marketing",
    ],
  },
];

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState("ecom");

  const activeService = services.find(
    (service) => service.id === activeTab
  );

  return (
    <section
      className="
        w-full
        bg-[var(--bg-primary)]
        px-5
        py-20
        transition-colors
        duration-300
        sm:px-8
        lg:px-12
        xl:px-16
      "
    >
      <div className="mx-auto max-w-[95%] ">

        {/* TITLE */}
        <div className="mb-12 text-center">
          <h2
            className="
              text-4xl
              font-extrabold
              tracking-[-0.045em]
              text-[var(--text-primary)]
              sm:text-5xl
              lg:text-[44px]
            "
          >
            Core Services @ techquatoes
          </h2>
        </div>

        {/* SERVICES */}
        <div
          className="
            grid
            grid-cols-1
            gap-6
            lg:grid-cols-[360px_1fr]
            lg:gap-5
          "
        >

          {/* LEFT TABS */}
          <div
            className="
              flex
              w-full
              flex-col
              items-center
              gap-3
            "
          >
            {services.map((service) => {
              const Icon = service.icon;
              const isActive = activeTab === service.id;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveTab(service.id)}
                  className={`
                    group
                    relative
                    mx-auto
                    flex
                    min-h-[80px]
                    w-[92%]
                    max-w-[380px]
                    items-center
                    gap-4
                    overflow-hidden
                    rounded-[16px]
                    border
                    px-5
                    py-4
                    text-left
                    transition-all
                    duration-300
                    ease-out
                    sm:w-[380px]
                    lg:mx-0
                    lg:w-full
                    lg:max-w-none

                    ${
                      isActive
                        ? `
                          border-transparent
                          bg-gradient-to-r
                          from-[#7054f6]
                          via-[#a94ed0]
                          to-[#f73783]
                          text-white
                          shadow-[0_14px_35px_rgba(124,58,237,0.20)]
                        `
                        : `
                          border-[var(--border-primary)]
                          bg-[var(--card-bg)]
                          text-[var(--text-primary)]
                          hover:-translate-y-[2px]
                          hover:border-[#7657ff]
                          hover:shadow-[0_8px_25px_rgba(124,58,237,0.08)]
                        `
                    }
                  `}
                >
                  {/* ICON */}
                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl

                      ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-[var(--text-secondary)] group-hover:text-[#7657ff]"
                      }
                    `}
                  >
                    <Icon size={25} strokeWidth={2} />
                  </span>

                  {/* TITLE */}
                  <span
                    className={`
                      text-[15px]
                      font-semibold
                      leading-[1.35]

                      ${
                        isActive
                          ? "text-white"
                          : "text-[var(--text-primary)]"
                      }
                    `}
                  >
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              relative
              min-h-[500px]
              overflow-hidden
              rounded-[28px]
              bg-[#0d0d0d]
              px-7
              py-10
              text-white
              sm:px-10
              sm:py-12
              lg:px-16
              lg:py-14
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -right-32
                -top-32
                h-80
                w-80
                rounded-full
                bg-purple-600/10
                blur-3xl
              "
            />

            <div
              key={activeService?.id}
              className="
                relative
                z-10
                animate-[serviceFadeIn_0.35s_ease-out]
              "
            >
              <h3
                className="
                  max-w-[800px]
                  text-[32px]
                  font-extrabold
                  leading-[1.1]
                  tracking-[-0.045em]
                  text-white
                  sm:text-[40px]
                  lg:text-[46px]
                  xl:text-[48px]
                "
              >
                {activeService.heading}
              </h3>

              <p
                className="
                  mt-6
                  max-w-[760px]
                  text-[15px]
                  leading-[1.8]
                  text-white/60
                  sm:text-[16px]
                "
              >
                {activeService.description}
              </p>

              <div
                className="
                  mt-10
                  grid
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                "
              >
                {activeService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      min-h-[54px]
                      items-center
                      rounded-[14px]
                      border
                      border-white/10
                      bg-[#111111]
                      px-5
                      py-3
                      text-[14px]
                      font-medium
                      text-white/90
                      transition-all
                      duration-300
                      hover:border-purple-500/50
                      hover:bg-[#171717]
                      hover:text-white
                    "
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="
                  group
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-gradient-to-r
                  from-[#7554f5]
                  via-[#a94ed0]
                  to-[#f73783]
                  px-8
                  py-4
                  text-[15px]
                  font-bold
                  text-white
                  shadow-[0_10px_30px_rgba(236,72,153,0.25)]
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                "
              >
                Get Started

                <ArrowRight
                  size={18}
                  strokeWidth={2.2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes serviceFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesTabs;