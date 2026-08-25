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
    <section className="w-full bg-white px-5 pb-20 sm:px-8 lg:px-0">
      <div
        className="
          mx-auto
          grid
          max-w-[1100px]
          grid-cols-1
          items-start
          gap-10
          lg:grid-cols-2
          lg:gap-10
        "
      >

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=872,fit=crop/521IZSD05V4NgYIR/generated/generated-bARMpXUPRTIST1Cr.png"
            alt="Remote working"
            className="
              w-full
              max-w-[510px]
              rounded-[18px]
              object-cover
            "
          />
        </div>

        {/* Content */}
        <div className="pt-0 lg:pt-1">

          <h2 className="text-[30px] font-semibold leading-tight text-[#111827]">
            Why Choose Our Remote Model
          </h2>

          <div className="mt-7 space-y-5">

            {points.map((point) => (
              <div
                key={point.title}
                className="flex items-start gap-3"
              >
                <span className="mt-[2px] text-[16px]">
                  ✓
                </span>

                <p className="text-[16px] leading-[1.3] text-[#111827]">
                  <strong>{point.title}</strong>
                  <br />
                  {point.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default RemoteModel;