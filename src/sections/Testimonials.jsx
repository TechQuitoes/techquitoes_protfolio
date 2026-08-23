import React from "react";

const testimonials = [
  {
    text: "Their team's future-ready approach helped us build a Shopify store that's not just functional but also easy to scale with our growth.",
    name: "Sneha Rao",
    location: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    text: "Techquitoes transformed our app development experience with their sharp AI expertise and clear communication. Projects always delivered on time.",
    name: "Amit Patel",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white px-5 py-[70px] sm:px-8 lg:px-6">
      <div className="mx-auto w-full max-w-[1230px]">
        {/* =========================
            HEADER
        ========================== */}
        <div className="text-center">
          <h2
            className="
              m-0
              font-['Plus_Jakarta_Sans']
              text-[40px]
              font-medium
              leading-[1.2]
              tracking-[-0.03em]
              text-[#050505]
              sm:text-[44px]
              lg:text-[48px]
            "
          >
            Reviews
          </h2>

          <p
            className="
              mt-5
              m-0
              font-['Plus_Jakarta_Sans']
              text-[17px]
              font-normal
              leading-[1.4]
              text-[#344054]
              sm:text-[18px]
            "
          >
            What our clients say about us
          </p>
        </div>

        {/* =========================
            TESTIMONIAL CARDS
        ========================== */}
        <div
          className="
            mt-[52px]
            grid
            grid-cols-1
            gap-3
            md:grid-cols-2
            lg:gap-[11px]
          "
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="
                flex
                min-h-[292px]
                flex-col
                bg-[#F1EFF3]
                px-[52px]
                py-[45px]
                sm:px-[52px]
                sm:py-[44px]
              "
            >
              {/* Stars */}
              <div
                className="
                  flex
                  items-center
                  gap-[1px]
                  text-[22px]
                  leading-none
                  tracking-[-2px]
                  text-[#050505]
                "
                aria-label="5 out of 5 stars"
              >
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              {/* Review */}
              <p
                className="
                  m-0
                  mt-[18px]
                  max-w-[510px]
                  font-['Plus_Jakarta_Sans']
                  text-[17px]
                  font-normal
                  leading-[1.55]
                  tracking-[-0.015em]
                  text-[#344054]
                  sm:text-[18px]
                  sm:leading-[1.5]
                "
              >
                {testimonial.text}
              </p>

              {/* Client */}
              <div className="mt-auto flex items-center pt-8">
                {/* Avatar */}
                <div
                  className="
                    h-[50px]
                    w-[50px]
                    shrink-0
                    overflow-hidden
                    rounded-full
                    bg-[#D9D9D9]
                  "
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name + Location */}
                <div className="ml-3">
                  <p
                    className="
                      m-0
                      font-['Plus_Jakarta_Sans']
                      text-[16px]
                      font-bold
                      leading-[1.3]
                      text-[#080808]
                    "
                  >
                    {testimonial.name}
                  </p>

                  <p
                    className="
                      m-0
                      mt-[3px]
                      font-['Plus_Jakarta_Sans']
                      text-[16px]
                      font-normal
                      leading-[1.3]
                      text-[#344054]
                    "
                  >
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
