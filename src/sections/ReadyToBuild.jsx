import React from "react";
import {
  CircleCheck,
  Smartphone,
  Code2,
  Clock3,
} from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Flutter apps shipped",
    icon: Smartphone,
  },
  {
    value: "30+",
    label: "Projects delivered",
    icon: Code2,
  },
  {
    value: "24hr",
    label: "Response guarantee",
    icon: Clock3,
  },
  {
    value: "Free",
    label: "Initial consultation",
    icon: CircleCheck,
    valueColor: "#ef6a63",
  },
];

const ReadyToBuild = () => {
  return (
    <section className="w-full bg-white px-5 py-20 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-14
            lg:flex-row
            lg:gap-20
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="w-full max-w-[680px]">
            {/* Badge */}

            <div
              className="
                mb-7
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-gray-200
                bg-gray-50
                px-4
                py-2
                text-[11px]
                font-semibold
                tracking-[0.12em]
                text-gray-700
              "
            >
              <CircleCheck
                size={15}
                strokeWidth={2}
                className="text-[#ef6a63]"
              />

              <span>READY TO GET STARTED</span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-[680px]
                text-[40px]
                font-semibold
                leading-[1.08]
                tracking-[-0.045em]
                text-[#111827]

                sm:text-[48px]
                md:text-[54px]
                lg:text-[58px]
              "
            >
              Ready to Build Something That{" "}
              <span className="block text-[#ef6a63]">
                Actually Works?
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-7
                max-w-[650px]
                text-[15px]
                leading-[1.8]
                text-[#64748b]

                sm:text-[16px]
              "
            >
              Whether you need a stunning website, eCommerce store,
              mobile app, AI-powered dashboard, workflow automation,
              SharePoint intranet, SPFx application, or custom business
              software—we build scalable digital solutions that help
              your business grow.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
              "
            >
              {/* Start a Project */}

              <a
                href="https://techquitoes.com/start-a-project"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#111827]
                  px-7
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#ef6a63]
                  hover:shadow-lg
                "
              >
                Start a Project
              </a>

              {/* View Our Work */}

              <a
                href="https://techquitoes.vercel.app/case-study"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#111827]
                  bg-white
                  px-7
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-[#111827]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#111827]
                  hover:text-white
                "
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT STATS
          ====================================================== */}

          <div
            className="
              grid
              w-full
              max-w-[430px]
              grid-cols-1
              gap-4
              sm:grid-cols-2
            "
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    flex
                    min-h-[125px]
                    items-center
                    gap-4
                    rounded-[18px]
                    border
                    border-gray-200
                    bg-white
                    px-5
                    py-5
                    shadow-[0_5px_25px_rgba(0,0,0,0.035)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-gray-300
                    hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-[#fff1ef]
                      text-[#ef6a63]
                      transition-all
                      duration-300
                      group-hover:bg-[#ef6a63]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Text */}

                  <div>
                    <div
                      className="
                        text-[27px]
                        font-bold
                        leading-none
                        tracking-[-0.04em]
                        text-[#111827]
                      "
                      style={{
                        color: stat.valueColor || undefined,
                      }}
                    >
                      {stat.value}
                    </div>

                    <div
                      className="
                        mt-2
                        text-[12px]
                        font-medium
                        leading-[1.4]
                        text-[#64748b]
                      "
                    >
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToBuild;