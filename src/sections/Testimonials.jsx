import React from "react";

const testimonials = [
  {
    text: `"Scaling our Shopify store to a global audience seemed like a technical nightmare until Techquitoes stepped in. They optimized our checkout flow and increased our conversion rate by 35%."`,
    name: "Marcus Thorne",
    role: "FOUNDER — LUXVIBE RETAIL",
  },
  {
    text: `"We were drowning in raw data. Techquitoes built a custom Power BI ecosystem that unified our KPIs. We’ve cut down our weekly reporting time from 12 hours to 10 minutes."`,
    name: "Elena Rodriguez",
    role: "OPERATIONS DIRECTOR — FINSTREAM",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white py-5">
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1200px]
          grid-cols-1
          gap-5
          px-5
          md:grid-cols-2
        "
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="
              flex
              min-h-[295px]
              flex-col
              justify-between
              rounded-[25px]
              bg-[linear-gradient(-45deg,#0b0116,#3b0a6b,#1a0033)]
              p-10
              text-white
            "
          >
            {/* Stars */}
            <div className="mb-[15px] text-[18px] leading-none text-[#ffb800]">
              ★★★★★
            </div>

            {/* Testimonial */}
            <p
              className="
                mb-5
                text-[18px]
                font-light
                leading-[1.6]
                tracking-normal
              "
            >
              {testimonial.text}
            </p>

            {/* Client Info */}
            <div>
              <span
                className="
                  block
                  font-bold
                  text-[#ff3c6a]
                "
              >
                {testimonial.name}
              </span>

              <span
                className="
                  text-[13px]
                  uppercase
                  opacity-80
                "
              >
                {testimonial.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;