import React from "react";
import {
  Layers3,
  Smartphone,
  Bot,
  ChartNoAxesCombined,
  Server,
  PieChart,
  Settings2,
  TableProperties,
  RefreshCw,
  Network,
  Cloud,
  WandSparkles,
} from "lucide-react";

const expertise = [
  {
    title: "Enterprise Websites & Custom Web Applications",
    icon: Layers3,
  },
  {
    title: "Mobile Application Development",
    icon: Smartphone,
  },
  {
    title: "AI Automation, AI Agents & AI Chatbots",
    icon: Bot,
  },
  {
    title: "Product Strategy & Digital Discovery Workshops",
    icon: ChartNoAxesCombined,
  },
  {
    title: "DevOps, Cloud Hosting & AWS/Azure Infrastructure",
    icon: Server,
  },
  {
    title: "Power BI Dashboards & Business Analytics",
    icon: PieChart,
  },
  {
    title: "Microsoft Power Automate Workflow Solutions",
    icon: Settings2,
  },
  {
    title: "Smartsheets Project & Workflow Management",
    icon: TableProperties,
  },
  {
    title: "Legacy System Modernization & Cloud Migration",
    icon: RefreshCw,
  },
  {
    title: "SharePoint Development & Business Portals",
    icon: Network,
  },
  {
    title: "SaaS Platforms & Multi-Tenant Solutions",
    icon: Cloud,
  },
  {
    title: "UI/UX Design & Digital Experience Engineering",
    icon: WandSparkles,
  },
];

const SpecializedExpertise = () => {
  return (
    <section
      id="expertise"
      className="
        w-full
        bg-white
        px-5
        py-5
        text-[#111827]
        sm:px-8
        md:px-12
        lg:px-16
        xl:px-20
      "
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ================= HEADING ================= */}

        <div className="text-center">
          <h2
            className="
              m-0
              text-[34px]
              font-bold
              leading-[1.15]
              tracking-[-0.045em]
              text-[#111827]

              sm:text-[40px]
              md:text-[46px]
              lg:text-[48px]
            "
          >
            Our Specialized Expertise
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[720px]
              text-[16px]
              font-normal
              leading-[1.8]
              text-[#64748b]

              sm:text-[17px]
            "
          >
            We combine strategic thinking with cutting-edge engineering to
            deliver scalable,
            <br className="hidden md:block" />
            secure, and intelligent digital products.
          </p>
        </div>

        {/* ================= CARDS ================= */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-[22px]

            sm:grid-cols-2

            lg:grid-cols-3
          "
        >
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  flex
                  min-h-[155px]
                  items-center
                  justify-center
                  rounded-[12px]
                  border
                  border-[#e5e7eb]
                  bg-white
                  px-8
                  py-7
                  text-center

                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-[3px]
                  hover:border-[#d1d5db]
                  hover:shadow-[0_8px_25px_rgba(15,23,42,0.06)]
                "
              >
                <div className="flex flex-col items-center justify-center">

                  {/* ICON */}

                  <Icon
                    size={31}
                    strokeWidth={2.5}
                    className="
                      mb-5
                      text-[#26384a]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />

                  {/* TITLE */}

                  <h3
                    className="
                      max-w-[290px]
                      text-[15px]
                      font-semibold
                      leading-[1.35]
                      tracking-[-0.015em]
                      text-[#111827]
                    "
                  >
                    {item.title}
                  </h3>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecializedExpertise;