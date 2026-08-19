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
    <section className="w-full bg-white px-5 py-10 sm:px-8 md:px-10 lg:px-5">
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1225px]
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-br
          from-[#192b58]
          via-[#202f61]
          to-[#3a2850]
          px-7
          py-10
          sm:px-10
          sm:py-12
          md:px-12
          lg:px-12
          lg:py-12
        "
      >
        {/* Subtle dotted background */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-30
          "
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Main Content */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            justify-between
            gap-12
            lg:flex-row
            lg:items-center
            lg:gap-16
          "
        >
          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="w-full max-w-[700px]">
            {/* Badge */}

            <div
              className="
                mb-8
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/[0.03]
                px-5
                py-2.5
                text-[12px]
                font-semibold
                tracking-[0.12em]
                text-[#ff766d]
              "
            >
              <CircleCheck
                size={15}
                strokeWidth={2}
                className="text-[#ff766d]"
              />

              <span>READY TO GET STARTED</span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-[650px]
                text-[44px]
                font-bold
                leading-[1.03]
                tracking-[-0.045em]
                text-white
                sm:text-[52px]
                md:text-[58px]
                lg:text-[66px]
              "
            >
              Ready to Build
              <br />

              Something That
              <br />

              <span className="text-[#ef6a63]">
                Actually Works?
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-[680px]
                text-[16px]
                leading-[1.75]
                text-[#b7c5e4]
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              Whether you need a stunning website, eCommerce store,
              mobile app, AI-powered dashboard, workflow automation,
              SharePoint intranet, SPFx application, or custom business
              software—we build scalable digital solutions that help your
              business grow.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-9
                flex
                flex-wrap
                items-center
                gap-5
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
                  bg-white
                  px-9
                  py-4
                  text-[16px]
                  font-semibold
                  text-[#ef6a63]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ef6a63]
                  hover:text-white
                  hover:shadow-[0_10px_30px_rgba(239,106,99,0.25)]
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
                  border-white/35
                  bg-transparent
                  px-9
                  py-4
                  text-[16px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white
                  hover:bg-white/10
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
              flex
              w-full
              max-w-[320px]
              flex-col
              gap-5
              lg:max-w-[320px]
              lg:shrink-0
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
                    min-h-[102px]
                    items-center
                    gap-4
                    rounded-[19px]
                    border
                    border-white/[0.12]
                    bg-white/[0.08]
                    px-6
                    py-5
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/20
                    hover:bg-white/[0.12]
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
                      rounded-[13px]
                      bg-[#ef6a63]/15
                      text-[#ef6a63]
                      transition-all
                      duration-300
                      group-hover:bg-[#ef6a63]
                      group-hover:text-white
                    "
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Text */}

                  <div>
                    <div
                      className="
                        text-[22px]
                        font-bold
                        leading-none
                        tracking-[-0.03em]
                        text-white
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
                        text-[14px]
                        font-medium
                        leading-[1.3]
                        text-[#aab7d3]
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