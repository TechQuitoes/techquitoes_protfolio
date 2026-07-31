import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const EASE = [0.25, 1, 0.5, 1];

const features = [
  {
    icon: "🏢",
    title: "White-Label Delivery",
    desc: "Support your agency execution lanes flawlessly. We handle complex engineering, web layout, and data pipelines entirely behind your brand presence.",
    delay: 0.1,
  },
  {
    icon: "👥",
    title: "Resource Contracting",
    desc: "Scale technical personnel allocations on requirement. Seamless integration of developers and specialized domain professionals instantly.",
    delay: 0.25,
  },
  {
    icon: "🤝",
    title: "Flexible Engagements",
    desc: "From dedicated staff augmentations to tactical fixed lifecycle outputs, engagement models modulate straight to resource priorities.",
    delay: 0.4,
  },
];

export default function FeatureCards() {
  return (
    <div
      id="services"
      className="relative z-10 mx-auto -mt-10 mb-20 grid max-w-[1240px] grid-cols-1 gap-8 px-[5%] sm:grid-cols-2 md:-mt-16 lg:grid-cols-3"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{
            duration: 0.8,
            ease: EASE,
            delay: feature.delay,
          }}
          className="group relative overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white px-10 py-14 text-center shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#9b51e0]/20 hover:shadow-[0_20px_40px_rgba(155,81,224,0.08)]"
        >
          <span className="absolute left-0 top-0 h-1 w-full origin-center scale-x-[0.3] bg-[#9b51e0] transition-transform duration-300 group-hover:scale-x-100" />

          <div className="mb-6 inline-block text-5xl transition-transform duration-300 group-hover:rotate-3 group-hover:scale-[1.15]">
            {feature.icon}
          </div>

          <h3 className="mb-4 text-[1.35rem] font-bold text-[#0f172a]">
            {feature.title}
          </h3>

          <p className="text-[0.98rem] text-[#64748b]">
            {feature.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}