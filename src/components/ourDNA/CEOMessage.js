import React from "react";

const CEOMessage = () => {
  return (
    <section className="w-full bg-white px-5 mt-5 py-12 psm:px-8 sm:py-24 lg:px-6 lg:py-[170px]">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1180px]
          grid-cols-1
          items-start
          gap-9
          lg:grid-cols-[418px_minmax(0,1fr)]
          lg:gap-12
        "
      >
        {/* =========================
            LEFT — CEO IMAGE
        ========================== */}
        <div
          className="
            w-full
            mt-3
            overflow-hidden
            rounded-[18px]
            aspect-[0.81]
            lg:h-[518px]
            lg:aspect-auto
          "
        >
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=953,fit=crop/521IZSD05V4NgYIR/ceo_desk_techq02-KTWaStlD2jY5jnye.jpg"
            alt="CEO working at his desk"
            className="
              block
              h-full
              w-full
              object-cover
              object-center
              transition-transform
              duration-500
              hover:scale-[1.015]
            "
          />
        </div>

        {/* =========================
            RIGHT — CONTENT
        ========================== */}
        <div className="min-w-0">
          {/* Title */}
          <h2
            className="
              m-0
              font-['Plus_Jakarta_Sans']
              text-[30px]
              font-normal
              leading-[1.2]
              tracking-[-0.02em]
              text-black
              sm:text-[34px]
              lg:text-[40px]
              lg:leading-[1.25]
            "
          >
            CEO Message
          </h2>

          {/* Gradient Statement */}
          <h3
            className="
              mt-3
              max-w-[700px]
              bg-gradient-to-r
              from-[#B336F4]
              via-[#8C4CF4]
              to-[#3B8CFF]
              bg-clip-text
              font-['Plus_Jakarta_Sans']
              text-[24px]
              font-bold
              leading-[1.28]
              tracking-[-0.04em]
              text-transparent
              sm:text-[27px]
              lg:mt-3
              lg:text-[30px]
              lg:leading-[1.25]
            "
          >
            We are committed to excellence in execution, and the value of the
            partnerships with remote professionals
          </h3>

          {/* Mission */}
          <h6
            className="
              m-0
              mt-6
              font-['Plus_Jakarta_Sans']
              text-[17px]
              font-normal
              leading-[1.4]
              tracking-[-0.015em]
              text-black
              sm:text-[18px]
              lg:mt-6
              lg:text-[20px]
              lg:leading-[1.35]
            "
          >
            <strong className="font-bold">Our mission is to </strong>
            Drive Excellence via Distributed Teams
          </h6>

          {/* Description */}
          <div
            className="
              mt-5
              max-w-[700px]
              font-['Plus_Jakarta_Sans']
              text-[16px]
              font-normal
              leading-[1.5]
              tracking-[-0.01em]
              text-black
              sm:text-[17px]
              lg:mt-5
              lg:text-[18px]
              lg:leading-[1.4]
            "
          >
            <p className="m-0 mb-6">
              As COO &amp; founder, my focus is on ensuring that our
              operations, despite being globally distributed, are seamless,
              efficient, and consistently deliver exceptional value. We
              leverage the best technologies and rigorous processes to ensure
              that our{" "}
              <strong className="font-bold">
                remote structure translates into a powerful advantage
              </strong>{" "}
              for our clients.
            </p>

            <p className="m-0 mb-6">
              Our successful model is built on{" "}
              <strong className="font-bold">
                trust and strategic partnership
              </strong>
              . We empower every team member and remote partner with the tools
              and support needed to excel, fostering an accountable
              environment where flexibility meets high performance.
            </p>

            <p className="m-0">
              We see our collaborators—especially the freelancers and
              work-from-home experts—not just as extended staff, but as{" "}
              <strong className="font-bold">essential partners</strong> in our
              success. I am proud of the dynamic, collaborative environment
              we've created and look forward to achieving great things
              together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
