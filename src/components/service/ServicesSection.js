import React, { useState } from "react";

const services = [
  {
    id: "website",
    title: "Website Design & Development",
    description:
      "High-performance, scalable websites designed for growth.",
    path: "/website-design",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M3 9h18" />
      </>
    ),
  },
  {
    id: "mobile",
    title: "Mobile Applications",
    description: "Fast, secure iOS & Android applications.",
    path: "/mobile-apps",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M12 18h.01" />
      </>
    ),
  },
  {
    id: "uiux",
    title: "UI / UX Design",
    description: "Intuitive user experiences designed to convert.",
    path: "/ui-ux-design",
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </>
    ),
  },
  {
    id: "ecommerce",
    title: "E-Commerce / CRM Development",
    description: "Secure, conversion-optimized online stores.",
    path: "/ecommerce",
    icon: (
      <>
        <path d="M3 5h2l2 10h10l2-6H7" />
        <circle cx="9" cy="19" r="1" />
        <circle cx="17" cy="19" r="1" />
      </>
    ),
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Intelligent automation for modern businesses.",
    path: "/ai-automation",
    icon: (
      <>
        <rect x="7" y="7" width="10" height="10" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      </>
    ),
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure & CI/CD.",
    path: "/cloud-devops",
    icon: (
      <path d="M7 18h10a4 4 0 0 0 0-8 5 5 0 0 0-10-1A4 4 0 0 0 7 18z" />
    ),
  },
  {
    id: "data",
    title: "Data Analytics & Dashboards",
    description: "Real-time, AI-enabled insights.",
    path: "/data-analytics",
    icon: (
      <>
        <path d="M4 19V5" />
        <path d="M10 19V9" />
        <path d="M16 19V13" />
        <path d="M2 19h20" />
      </>
    ),
  },
  {
    id: "design",
    title: "AI Design & Branding Studio",
    description: "Creative branding & digital design solutions.",
    path: "/design-studio",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </>
    ),
  },
];

function ServiceIcon({ children }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[26px] w-[26px] stroke-current"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export default function ServicesSection() {
  const [activeCard, setActiveCard] = useState("");

  const handleCardClick = (service) => {
    setActiveCard(service.id);

    // If using React Router, use navigate() instead.
    window.location.href = service.path;
  };

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-16 sm:py-20"
      style={{
        backgroundImage:
          "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/521IZSD05V4NgYIR/generated/generated-JQ39mUYhFJoliN3p.png')",
      }}
    >
      {/* Optional background overlay */}
      <div className="absolute inset-0 bg-black/[0.02]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-5">
        {/* Heading */}
        <h2 className="mb-10 text-center font-[Outfit,sans-serif] text-[42px] font-medium leading-tight text-white sm:text-[48px]">
          Our Offerings
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const isActive = activeCard === service.id;

            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service)}
                className={`
                  group relative min-h-[252px] cursor-pointer
                  overflow-hidden rounded-[20px]
                  border border-[#f0f0f0]
                  p-8
                  transition-all duration-500
                  ease-[cubic-bezier(0.175,0.885,0.32,1.275)]

                  ${
                    isActive
                      ? "translate-y-[-10px] border-transparent bg-[linear-gradient(135deg,#7B3BFF_0%,#4D14B2_100%)] shadow-[0_20px_40px_rgba(255,27,255,0.20)]"
                      : "bg-white hover:-translate-y-2.5 hover:border-transparent hover:bg-[linear-gradient(135deg,#FF1BFF_0%,#7B3BFF_55%,#4D14B2_100%)] hover:shadow-[0_20px_40px_rgba(255,27,255,0.20)]"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    flex h-[52px] w-[52px] items-center justify-center
                    rounded-[14px]
                    transition-all duration-400

                    ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#7B3BFF]/[0.08] text-[#7B3BFF] group-hover:bg-white/20 group-hover:text-white"
                    }
                  `}
                >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                </div>

                {/* Arrow */}
                <div
                  className={`
                    absolute right-6 top-6
                    flex h-9 w-9 items-center justify-center
                    rounded-full
                    border
                    transition-all duration-400

                    ${
                      isActive
                        ? "border-white/30 bg-white/20 text-white"
                        : "border-[#f0f0f0] bg-white text-[#7B3BFF] group-hover:border-white/30 group-hover:bg-white/20 group-hover:text-white"
                    }
                  `}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3.5 w-3.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>

                {/* Title */}
                <h3
                  className={`
                    mt-6 pr-7
                    font-[Outfit,sans-serif]
                    text-[20px]
                    font-bold
                    leading-[1.25]
                    transition-colors duration-400

                    ${
                      isActive
                        ? "text-white"
                        : "text-[#1F2937] group-hover:text-white"
                    }
                  `}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`
                    mt-3
                    font-[Outfit,sans-serif]
                    text-[15px]
                    leading-[1.6]
                    transition-colors duration-400

                    ${
                      isActive
                        ? "text-white"
                        : "text-[#4B5563] group-hover:text-white"
                    }
                  `}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}