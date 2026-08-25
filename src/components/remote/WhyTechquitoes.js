const WhyTechquitoes = () => {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-0 lg:py-20">
      <div className="mx-auto max-w-[1100px]">

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-[55px]">

          {/* LEFT CONTENT */}
          <div className="pt-0 lg:pt-0">

            {/* Heading */}
            <h1
              className="
                mb-10
                font-['Outfit']
                text-[38px]
                font-bold
                leading-none
                tracking-[-1.5px]
                sm:text-[44px]
                lg:text-[42px]
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
            <p className="max-w-[530px] text-[16px] leading-[1.32] text-[#111827] sm:text-[17px]">
              <strong>At techquitoes group</strong>, we believe talent isn’t
              defined by experience or location—it’s defined by passion and
              ideas. We welcome freshers, creative thinkers, and skilled
              professionals who want to build meaningful digital solutions.
              Whether you prefer working from an office, a café, or another
              country—your skills matter more than your pin code.
            </p>

            {/* Collaboration */}
            <p className="mt-7 text-[16px] font-bold leading-[1.3] text-[#111827] sm:text-[17px]">
              We collaborate openly, explore boldly, and grow together.
            </p>

            {/* Why Join */}
            <h2 className="mt-7 text-[29px] font-semibold leading-tight text-[#111827]">
              Why Join Us?
            </h2>

            {/* Benefits */}
            <div className="mt-4 space-y-[5px]">
              <p className="text-[16px] leading-[1.35] text-[#111827]">
                ✓ Opportunities for freshers & early-stage talent
              </p>

              <p className="text-[16px] leading-[1.35] text-[#111827]">
                ✓ Remote-friendly culture with no location boundaries
              </p>

              <p className="text-[16px] leading-[1.35] text-[#111827]">
                ✓ Projects that challenge you to innovate
              </p>

              <p className="text-[16px] leading-[1.35] text-[#111827]">
                ✓ Freedom to bring your ideas to life
              </p>

              <p className="text-[16px] leading-[1.35] text-[#111827]">
                ✓ Supportive environment focused on learning & growth
              </p>
            </div>

          </div>

          {/* RIGHT IMAGE + STATS */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Image */}
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1024,h=1017,fit=crop/521IZSD05V4NgYIR/generated/generated-X0vWEHj3PhtBRZGd.png"
              alt="Techquitoes AI"
              className="
                h-auto
                w-full
                max-w-[510px]
                rounded-[18px]
                object-cover
                lg:h-[505px]
              "
            />

            {/* Stats Overlay */}
            <div
              className="
                absolute
                bottom-[105px]
                left-1/2
                flex
                w-[95%]
                max-w-[560px]
                -translate-x-1/2
                items-center
                justify-between
                bg-[#202131]
                px-8
                py-7
                text-white
                sm:px-12
                lg:bottom-[105px]
                lg:left-[-55px]
                lg:w-[560px]
                lg:translate-x-0
              "
            >

              {/* Stat 1 */}
              <div>
                <h3 className="text-[44px] font-medium leading-none">
                  150+
                </h3>

                <p className="mt-2 text-[17px]">
                  100+
                </p>
              </div>

              {/* Stat 2 */}
              <div className="mr-5">
                <h3 className="text-[44px] font-medium leading-none">
                  15
                </h3>

                <p className="mt-2 whitespace-nowrap text-[17px]">
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