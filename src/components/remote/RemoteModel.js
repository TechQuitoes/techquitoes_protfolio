const RemoteModel = () => {
  const points = [
    {
      title: "Global Talent Access",
      description:
        "Work with vetted specialists worldwide—no location limits.",
    },
    {
      title: "Cost-Efficient Delivery",
      description:
        "Remote-first execution lowers costs without compromising quality.",
    },
    {
      title: "Scalable Teams",
      description:
        "Quickly scale resources based on project needs and timelines.",
    },
    {
      title: "Timezone Advantage",
      description:
        "Faster turnaround through distributed, timezone-aligned teams.",
    },
    {
      title: "Transparent Workflow",
      description:
        "Clear milestones, regular updates, full visibility.",
    },
    {
      title: "Faster Launch",
      description:
        "Agile remote execution for quicker go-to-market.",
    },
    {
      title: "Long-Term Partnership",
      description:
        "Reliable delivery focused on results, not just tasks.",
    },
  ];

  return (
    <section
      className="
        w-full
        bg-[var(--background)]
        text-[var(--foreground)]
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
              LEFT — IMAGE 50%
          ========================== */}
          <div className="w-full min-w-0">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=872,fit=crop/521IZSD05V4NgYIR/generated/generated-bARMpXUPRTIST1Cr.png"
              alt="Remote working"
              className="
                block
                h-auto
                w-full
                rounded-[18px]
                object-cover
                lg:h-[560px]
                xl:h-[600px]
              "
            />
          </div>

          {/* =========================
              RIGHT — CONTENT 50%
          ========================== */}
          <div className="w-full min-w-0">
            <h2
              className="
                text-[30px]
                font-semibold
                leading-tight
                tracking-[-0.02em]
                text-[var(--foreground)]
                sm:text-[34px]
                lg:text-[40px]
              "
            >
              Why Choose Our Remote Model
            </h2>

            <div className="mt-8 space-y-5">
              {points.map((point) => (
                <div
                  key={point.title}
                  className="
                    flex
                    w-full
                    items-start
                    gap-3
                  "
                >
                  {/* CHECK */}
                  <span
                    className="
                      mt-[2px]
                      shrink-0
                      text-[17px]
                      font-semibold
                      text-[var(--foreground)]
                    "
                  >
                    ✓
                  </span>

                  {/* TEXT */}
                  <p
                    className="
                      m-0
                      text-[16px]
                      leading-[1.45]
                      text-[var(--foreground)]
                      sm:text-[17px]
                      lg:text-[18px]
                    "
                  >
                    <strong className="font-bold">
                      {point.title}
                    </strong>
                    <br />
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteModel;