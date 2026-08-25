const JoinTechquitoes = () => {
  const benefits = [
    "Opportunities for freshers & early-stage talent",
    "Remote-friendly culture with no location boundaries",
    "Projects that challenge you to innovate",
    "Freedom to bring your ideas to life",
    "Supportive environment focused on learning & growth",
  ];

  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Content */}
        <div className="order-2 lg:order-1">
          <p className="text-lg leading-[1.3] text-gray-700">
            <strong>At techquitoes group</strong>, we believe talent isn’t
            defined by experience or location—it’s defined by passion and
            ideas. We welcome freshers, creative thinkers, and skilled
            professionals who want to build meaningful digital solutions.
            Whether you prefer working from an office, a café, or another
            country—your skills matter more than your pin code.
          </p>

          <p className="mt-7 text-lg font-bold leading-[1.3] text-gray-900">
            We collaborate openly, explore boldly, and grow together.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-gray-900">
            Why Join Us?
          </h3>

          <div className="mt-5 space-y-3">
            {benefits.map((benefit) => (
              <p
                key={benefit}
                className="text-base leading-relaxed text-gray-700"
              >
                <span className="mr-2">✔</span>
                {benefit}
              </p>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="order-1 flex justify-center lg:order-2">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=763,fit=crop/521IZSD05V4NgYIR/generated/generated-X0vWEHj3PhtBRZGd.png"
            alt="Techquitoes team"
            className="
              h-auto w-full max-w-[548px]
              rounded-xl object-cover
            "
          />
        </div>

      </div>
    </section>
  );
};

export default JoinTechquitoes;