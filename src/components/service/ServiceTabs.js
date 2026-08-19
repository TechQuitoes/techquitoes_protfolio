import React, { useState } from "react";

const services = {
  ai: {
    label: "🤖 Artificial Intelligence",
    cards: [
      {
        title: "AI Strategy & Consulting",
        desc: "Strategic AI consulting for roadmap, governance, and scalable enterprise adoption.",
        link: "Define Strategy →",
      },
      {
        title: "AI Development",
        desc: "Custom AI software engineered for secure, scalable, production-ready enterprise systems.",
        link: "See Capabilities →",
      },
      {
        title: "Generative AI",
        desc: "Enterprise-grade generative AI solutions for automation and intelligent decisioning.",
        link: "View Expertise →",
      },
      {
        title: "AI Integration Services",
        desc: "Seamless AI integration across apps, workflows, and enterprise data systems.",
        link: "Build Software →",
      },
      {
        title: "AI Agent Development",
        desc: "Autonomous AI agents for real-time workflow automation and actions.",
        link: "Deploy Agents →",
      },
      {
        title: "LLM Development",
        desc: "Custom LLM development & fine-tuning for enterprise-grade intelligence.",
        link: "Train Models →",
      },
    ],
  },

  ml: {
    label: "🔧 Machine Learning",
    cards: [
      {
        title: "ML Development",
        desc: "Custom machine learning models for scalable enterprise applications.",
        link: "Build Models →",
      },
      {
        title: "MLOps & Governance",
        desc: "End-to-end model lifecycle, monitoring, and compliance management.",
        link: "Plan Lifecycle →",
      },
      {
        title: "NLP Solutions",
        desc: "Enterprise NLP to transform text into insights and intelligence.",
        link: "Process Text →",
      },
      {
        title: "Computer Vision",
        desc: "AI-powered image & video recognition for automation and analytics.",
        link: "Analyze Visuals →",
      },
    ],
  },

  de: {
    label: "📦 Data Engineering",
    cards: [
      {
        title: "Data Engineering & Pipelines",
        desc: "Build modern data foundations for fast and scalable enterprise systems.",
        link: "See Capabilities →",
      },
      {
        title: "Big Data",
        desc: "High-volume big data platforms for enterprise analytics at scale.",
        link: "Scale Data →",
      },
      {
        title: "Data Governance & Compliance",
        desc: "Data accuracy, access control & compliance across enterprise systems.",
        link: "Stay Compliant →",
      },
      {
        title: "Data Integration Services",
        desc: "Unify legacy, cloud, SaaS, and enterprise systems into one source.",
        link: "Integrate Data →",
      },
      {
        title: "Data Modernization Services",
        desc: "Transform legacy data systems into high-performing architectures.",
        link: "Modernize →",
      },
      {
        title: "Data Strategy Consulting",
        desc: "Define enterprise data vision, roadmap & investment strategy.",
        link: "Consult →",
      },
    ],
  },

  bi: {
    label: "📊 Data Analytics & BI",
    cards: [
      {
        title: "BI & Self-Service Analytics",
        desc: "Enable teams to access real-time insights via BI dashboards.",
        link: "See Insights →",
      },
      {
        title: "Data Analytics",
        desc: "Turn enterprise data into actionable insights.",
        link: "Analyze Data →",
      },
      {
        title: "Intelligent Process Automation",
        desc: "Automate business workflows using AI-enabled intelligence.",
        link: "Automate Workflows →",
      },
      {
        title: "Robotic Process Automation",
        desc: "Automate rule-based processes with scalable bot workflows.",
        link: "Automate Tasks →",
      },
      {
        title: "Predictive Data Intelligence",
        desc: "Detect patterns & automate decisions with predictive analytics.",
        link: "Predict →",
      },
      {
        title: "Data Science Consulting",
        desc: "Advanced modeling & ML to solve complex business challenges.",
        link: "Consult Experts →",
      },
    ],
  },
};

const processSteps = [
  {
    title: "Discovery & Data",
    description: "Product Backlog & Data Engineering",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="h-7 w-7"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
  },

  {
    title: "Sprint Planning",
    description: "Architecture & AI UX Mapping",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="h-7 w-7"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },

  {
    title: "Model & Dev",
    description: "Iterative Coding & Model Training",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="h-7 w-7"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },

  {
    title: "Evaluation",
    description: "AI Accuracy & System QA",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="h-7 w-7"
      >
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        <polyline points="12 12 16 8" />
      </svg>
    ),
  },

  {
    title: "CI/CD Release",
    description: "Automated MLOps Deployment",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="h-7 w-7"
      >
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 100 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 100-8c-2 0-4 1.33-6 4z" />
      </svg>
    ),
  },

  {
    title: "MLOps & Evolution",
    description: "Continuous Drift & Performance Monitoring",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="h-7 w-7"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState("ai");

  const activeService = services[activeTab];

  return (
    <section className="w-full bg-white">
      {/* ================= SERVICES ================= */}
      <div className="mx-auto max-w-[1300px] px-5 py-10">
        {/* Tabs */}
        <div
          className="
            flex gap-5 overflow-x-auto
            border-b-2 border-[#ddd]
            pb-2.5
            scrollbar-hide
          "
        >
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key)}
              className={`
                flex shrink-0 items-center gap-2.5
                whitespace-nowrap
                border-b-[3px]
                px-5 py-3
                text-[18px] font-bold
                transition-all duration-300
                ${
                  activeTab === key
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-[#444] hover:text-blue-600"
                }
              `}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div
          key={activeTab}
          className="
            grid grid-cols-1 gap-6
            py-8
            sm:grid-cols-2
            lg:grid-cols-3
            animate-[tqFadeIn_0.4s_ease_forwards]
          "
        >
          {activeService.cards.map((card, index) => (
            <div
              key={index}
              className="
                group
                rounded-[15px]
                border-2 border-gray-200
                bg-white
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-blue-600
                hover:shadow-[0_5px_15px_rgba(0,0,0,0.08)]
              "
            >
              <h3 className="mb-2.5 text-xl font-bold text-[#1a1a1a]">
                {card.title}
              </h3>

              <p className="mb-5 text-[15px] leading-[1.5] text-[#555]">
                {card.desc}
              </p>

              <button
                type="button"
                className="
                  text-[15px]
                  font-bold
                  text-blue-600
                  transition-all
                  hover:underline
                "
              >
                {card.link}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PROCESS ROADMAP ================= */}
      <div className="mx-auto max-w-[1200px] bg-white px-5 py-[60px] text-center">
        <h2
          className="
            mb-3
            text-[32px]
            font-bold
            tracking-[-0.5px]
            text-[#1a1a1a]
          "
        >
          Agile AI & Cloud Solution Lifecycle
        </h2>

        <p
          className="
            mx-auto
            mb-[65px]
            max-w-[800px]
            text-base
            leading-[1.6]
            text-[#555]
          "
        >
          An iterative, sprint-driven architecture engineered for continuous
          data discovery, rapid ML model experimentation, and enterprise cloud
          application delivery.
        </p>

        {/* Desktop timeline */}
        <div className="relative hidden justify-between lg:flex">
          {/* Animated line */}
          <div
            className="
              absolute
              left-[5%]
              top-[112px]
              z-[1]
              h-[2px]
              w-[90%]
              bg-[length:200%_100%]
              bg-[linear-gradient(to_right,#e5e5e5_0%,#e5e5e5_30%,#d4af37_45%,#4a154b_50%,#d4af37_55%,#e5e5e5_70%,#e5e5e5_100%)]
              animate-[runningProcess_4s_linear_infinite]
            "
          />

          {processSteps.map((step, index) => (
            <div
              key={index}
              className="
                relative
                z-[2]
                w-[14%]
                min-w-[150px]
              "
            >
              {/* Icon */}
              <div
                className="
                  mx-auto mb-[18px]
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br from-[#2b2b2a] to-[#4a154b]
                  text-white
                  shadow-[0_4px_15px_rgba(74,21,75,0.15)]
                  transition-transform duration-300
                  hover:-translate-y-1
                "
              >
                {step.icon}
              </div>

              {/* Title */}
              <div
                className="
                  mb-[14px]
                  text-[15px]
                  font-semibold
                  text-[#1a1a1a]
                "
              >
                {step.title}
              </div>

              {/* Timeline dot */}
              <div
                className="
                  relative z-[3]
                  mx-auto
                  h-3 w-3
                  rounded-full
                  border-[3px]
                  border-[#4a154b]
                  bg-white
                "
              />

              {/* Description */}
              <div
                className="
                  relative
                  mt-10
                  px-2.5
                  text-[13px]
                  leading-[1.4]
                  text-[#666]
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-[-38px]
                    h-[35px]
                    w-px
                    -translate-x-1/2
                    bg-[#e5e5e5]
                  "
                />

                {step.description}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet */}
        <div className="grid grid-cols-1 gap-[60px_20px] sm:grid-cols-2 lg:hidden xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="w-full"
            >
              <div
                className="
                  mx-auto mb-4
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br from-[#2b2b2a] to-[#4a154b]
                  text-white
                  shadow-[0_4px_15px_rgba(74,21,75,0.15)]
                "
              >
                {step.icon}
              </div>

              <div className="mb-3.5 font-semibold text-[#1a1a1a]">
                {step.title}
              </div>

              <div className="text-[13px] leading-[1.4] text-[#666]">
                {step.description}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-1 gap-[45px] sm:hidden">
          {processSteps.map((step, index) => (
            <div key={index}>
              <div
                className="
                  mx-auto mb-4
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-gradient-to-br from-[#2b2b2a] to-[#4a154b]
                  text-white
                "
              >
                {step.icon}
              </div>

              <div className="mb-3 font-semibold text-[#1a1a1a]">
                {step.title}
              </div>

              <div className="text-[13px] leading-[1.4] text-[#666]">
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Description from original */}
      <div className="mx-auto max-w-[1200px] px-5 pb-16 text-center">
        <p className="text-[20px] leading-[1.3] text-[#1a1a1a] md:text-2xl">
          From complex legacy systems to AI-powered innovation, we build
          software that enhances agility, accelerates transformation, and
          drives market leadership.
        </p>
      </div>
    </section>
  );
};

export default ServiceTabs;