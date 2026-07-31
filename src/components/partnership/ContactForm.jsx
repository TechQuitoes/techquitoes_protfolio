import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const EASE = [0.25, 1, 0.5, 1];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    agency: "",
    email: "",
    interest: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://project-backend-ten-sooty.vercel.app/api/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        agency: "",
        email: "",
        interest: "",
        details: "",
      });
    } else {
      alert(data.message || "Failed to send email");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try again later.");
  }
};

  return (
     <motion.div
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
          className="rounded-[20px] border border-white/5 bg-[#0f172a] px-8 py-10 text-white shadow-[0_25px_60px_rgba(15,23,42,0.15)] md:px-14 md:py-16"
        >
          <h3 className="mb-10 text-[2.1rem] font-bold tracking-[-0.5px]">Start the Conversation</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-7">
              <label htmlFor="name" className="mb-[0.6rem] block text-[0.95rem] font-medium text-[#94a3b8]">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full rounded-[10px] border border-white/[0.08] bg-white/[0.03] p-[1.1rem] text-base text-white transition-all duration-300 focus:border-[#9b51e0] focus:bg-white/[0.07] focus:outline-none focus:shadow-[0_0_0_4px_rgba(155,81,224,0.2)]"
              />
            </div>

            <div className="mb-7">
              <label htmlFor="agency" className="mb-[0.6rem] block text-[0.95rem] font-medium text-[#94a3b8]">
                Agency Name
              </label>
              <input
                type="text"
                id="agency"
                name="agency"
                value={formData.agency}
                onChange={handleChange}
                placeholder="Acme Digital Systems"
                required
                className="w-full rounded-[10px] border border-white/[0.08] bg-white/[0.03] p-[1.1rem] text-base text-white transition-all duration-300 focus:border-[#9b51e0] focus:bg-white/[0.07] focus:outline-none focus:shadow-[0_0_0_4px_rgba(155,81,224,0.2)]"
              />
            </div>

            <div className="mb-7">
              <label htmlFor="email" className="mb-[0.6rem] block text-[0.95rem] font-medium text-[#94a3b8]">
                Business Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@acmedigital.com"
                required
                className="w-full rounded-[10px] border border-white/[0.08] bg-white/[0.03] p-[1.1rem] text-base text-white transition-all duration-300 focus:border-[#9b51e0] focus:bg-white/[0.07] focus:outline-none focus:shadow-[0_0_0_4px_rgba(155,81,224,0.2)]"
              />
            </div>

            <div className="mb-7">
              <label htmlFor="interest" className="mb-[0.6rem] block text-[0.95rem] font-medium text-[#94a3b8]">
                Partnership Scope Alignment
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full rounded-[10px] border border-white/[0.08] bg-white/[0.03] p-[1.1rem] text-base text-white transition-all duration-300 focus:border-[#9b51e0] focus:bg-white/[0.07] focus:outline-none focus:shadow-[0_0_0_4px_rgba(155,81,224,0.2)]"
              >
                <option value="" disabled style={{ background: '#0f172a', color: 'white' }}>
                  Select execution alignment...
                </option>
                <option value="White-Label Project Delivery Ecosystem" style={{ background: '#0f172a', color: 'white' }}>
                  White-Label Project Delivery Ecosystem
                </option>
                <option value="Contract-Based Staff Augmentation Model" style={{ background: '#0f172a', color: 'white' }}>
                  Contract-Based Staff Augmentation Model
                </option>
                <option value="Flexible On-Demand Project Bench Access" style={{ background: '#0f172a', color: 'white' }}>
                  Flexible On-Demand Project Bench Access
                </option>
              </select>
            </div>

            <div className="mb-7">
              <label htmlFor="details" className="mb-[0.6rem] block text-[0.95rem] font-medium text-[#94a3b8]">
                Project Scope / Technical Needs
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Detail explicit engineering specializations or active project workloads required..."
                required
                className="min-h-[145px] w-full resize-y rounded-[10px] border border-white/[0.08] bg-white/[0.03] p-[1.1rem] text-base text-white transition-all duration-300 focus:border-[#9b51e0] focus:bg-white/[0.07] focus:outline-none focus:shadow-[0_0_0_4px_rgba(155,81,224,0.2)]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-[10px] bg-[#9b51e0] py-5 text-[1.1rem] font-semibold text-white shadow-[0_4px_15px_rgba(155,81,224,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7b3ebd] hover:shadow-[0_8px_25px_rgba(155,81,224,0.45)]"
            >
              Initialize Engagement Pipeline
            </button>

            <div className="mt-10 border-t border-white/[0.08] pt-8 text-center text-[0.95rem] leading-[1.8] text-[#94a3b8]">
              Direct Operational Communications:
              <br />
              <a
                href="mailto:hello@techquitoes.com"
                className="mx-1 font-semibold text-[#c084fc] transition-colors duration-300 hover:text-white hover:underline"
              >
                hello@techquitoes.com
              </a>
              {' | '}
              <a
                href="mailto:nj@techquitoes.com"
                className="mx-1 font-semibold text-[#c084fc] transition-colors duration-300 hover:text-white hover:underline"
              >
                nj@techquitoes.com
              </a>
            </div>
          </form>
        </motion.div>
  );
}