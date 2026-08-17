import React, { useState } from "react";
import {
  ShoppingCart,
  BarChart3,
  Globe2,
  Palette,
  ArrowRight,
} from "lucide-react";

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
  const [activeTab, setActiveTab] = useState("design");

  const activeService = services.find(
    (service) => service.id === activeTab
  );

  return (
    <section className="w-full bg-white py-16 px-5 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-[1200px]">

        {/* ================= MAIN CONTAINER ================= */}

        <div
          className="
            grid
            overflow-hidden
            rounded-[24px]
            border
            border-gray-200
            bg-white
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            lg:grid-cols-[320px_1fr]
          "
        >

          {/* =====================================================
              LEFT TAB LIST
          ====================================================== */}

          <div
            className="
              flex
              flex-col
              border-b
              border-gray-200
              bg-[#fafafa]
              lg:border-b-0
              lg:border-r
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
                    flex
                    min-h-[125px]
                    items-center
                    gap-5
                    px-7
                    py-6
                    text-left
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-transparent text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  {/* Active indicator */}

                  {isActive && (
                    <span
                      className="
                        absolute
                        left-0
                        top-0
                        h-full
                        w-[4px]
                        bg-purple-500
                      "
                    />
                  )}

                  {/* Icon */}

                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-white/10 text-purple-400"
                          : "bg-gray-100 text-gray-700 group-hover:bg-white"
                      }
                    `}
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Label */}

                  <span
                    className={`
                      text-[15px]
                      font-semibold
                      leading-[1.35]
                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-800"
                      }
                    `}
                  >
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =====================================================
              RIGHT CONTENT
          ====================================================== */}

          <div
            className="
              flex
              min-h-[500px]
              items-center
              bg-white
              px-7
              py-12
              sm:px-10
              lg:px-14
              xl:px-20
            "
          >
            {activeService && (
              <div
                key={activeService.id}
                className="
                  w-full
                  animate-[fadeIn_.4s_ease-out]
                "
              >

                {/* Heading */}

                <h2
                  className="
                    text-[30px]
                    font-bold
                    leading-[1.15]
                    tracking-[-0.04em]
                    text-gray-900
                    sm:text-[38px]
                    lg:text-[44px]
                  "
                >
                  {activeService.heading}
                </h2>

                {/* Description */}

                <p
                  className="
                    mt-6
                    max-w-[720px]
                    text-[16px]
                    leading-[1.8]
                    text-gray-600
                  "
                >
                  {activeService.description}
                </p>

                {/* Features */}

                <div
                  className="
                    mt-9
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-2
                  "
                >
                  {activeService.features.map(
                    (feature, index) => (
                      <div
                        key={index}
                        className="
                          flex
                          min-h-[58px]
                          items-center
                          rounded-xl
                          border
                          border-gray-200
                          bg-gray-50
                          px-5
                          py-3
                          text-[14px]
                          font-medium
                          text-gray-800
                          transition-all
                          duration-300
                          hover:border-purple-300
                          hover:bg-purple-50
                        "
                      >
                        <span
                          className="
                            mr-3
                            h-2
                            w-2
                            shrink-0
                            rounded-full
                            bg-purple-500
                          "
                        />

                        {feature}
                      </div>
                    )
                  )}
                </div>

                {/* Button */}

                <a
                  href="#contact"
                  className="
                    mt-9
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-black
                    px-7
                    py-3.5
                    text-[14px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:bg-purple-600
                  "
                >
                  Get Started

                  <ArrowRight
                    size={17}
                    strokeWidth={2}
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Animation */}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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