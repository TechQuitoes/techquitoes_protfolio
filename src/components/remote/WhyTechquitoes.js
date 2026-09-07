import React from "react";

const WhyTechquitoes = () => {
  return (
    <section
      className="
        w-full
        bg-[var(--bg-primary)]
        text-[var(--text-primary)]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-10
        lg:py-24
        xl:px-14
      "
    >
      {/* 100% WIDTH CONTAINER */}
      <div className="w-full">
        {/* 50 / 50 LAYOUT */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-10
            lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =========================
              LEFT CONTENT — 50%
          ========================== */}
          <div className="w-full min-w-0">
            <h1
              className="
                mb-8
                text-[38px]
                font-bold
                leading-[1.2]
                tracking-[-1.5px]
                sm:text-[44px]
                lg:text-[42px]
                xl:text-[46px]
              "
              style={{
                background:
                  "linear-gradient(90deg, #B336F4, #3B8CFF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Why Techquitoes?
            </h1>

            {/* Description */}
            <p
              className="
                w-full
                text-[16px]
                leading-[1.45]
                text-[var(--text-secondary)]
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              <strong className="text-[var(--text-primary)]">At techquitoes group</strong>, we believe talent isn’t
              defined by experience or location—it’s defined by passion and
              ideas. We welcome freshers, creative thinkers, and skilled
              professionals who want to build meaningful digital solutions.
              Whether you prefer working from an office, a café, or another
              country—your skills matter more than your pin code.
            </p>

            {/* Highlight */}
            <p
              className="
                mt-7
                w-full
                text-[16px]
                font-bold
                leading-[1.4]
                text-[var(--text-primary)]
                sm:text-[17px]
                lg:text-[18px]
              "
            >
              We collaborate openly, explore boldly, and grow together.
            </p>

            {/* Why Join */}
            <h2
              className="
                mt-8
                text-[29px]
                font-semibold
                leading-tight
                text-[var(--text-primary)]
                sm:text-[32px]
                lg:text-[34px]
              "
            >
              Why Join Us?
            </h2>

            {/* Benefits */}
            <div className="mt-5 space-y-2">
              {[
                "Opportunities for freshers & early-stage talent",
                "Remote-friendly culture with no location boundaries",
                "Projects that challenge you to innovate",
                "Freedom to bring your ideas to life",
                "Supportive environment focused on learning & growth",
              ].map((item) => (
                <p
                  key={item}
                  className="
                    w-full
                    text-[16px]
                    leading-[1.4]
                    text-[var(--text-secondary)]
                    sm:text-[17px]
                  "
                >
                  ✓ {item}
                </p>
              ))}
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE — 50%
          ========================== */}
          <div
            className="
              relative
              flex
              w-full
              min-w-0
              justify-center
              lg:justify-end
            "
          >
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1024,fit=crop/521IZSD05V4NgYIR/generated/generated-X0vWEHj3PhtBRZGd.png"
              alt="Techquitoes AI"
              className="
                block
                w-full
                h-[400px]
                rounded-[18px]
                object-cover
                sm:h-[460px]
                lg:h-[505px]
                xl:h-[540px]
              "
            />

            {/* =========================
                STATS
            ========================== */}
            <div
              className="
                absolute
                bottom-[30px]
                left-1/2
                flex
                w-[92%]
                -translate-x-1/2
                items-center
                justify-between
                bg-[#202131]
                px-6
                py-4
                text-white
                sm:px-10
                lg:bottom-[80px]
                lg:left-[-60px]
                lg:w-[560px]
                lg:translate-x-0
                xl:left-[-70px]
              "
            >
              <div>
                <h3 className="text-[38px] font-medium leading-none text-white">
                  150+
                </h3>

                <p className="mt-2 text-[15px] text-white/80">
                  100+
                </p>
              </div>

              <div className="mr-2">
                <h3 className="text-[42px] font-medium leading-none text-white">
                  15
                </h3>

                <p className="mt-2 whitespace-nowrap text-[16px] text-white/80">
                  Trusted Globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTechquitoes;