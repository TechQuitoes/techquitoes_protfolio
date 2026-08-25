import { motion } from "framer-motion";

const ProcessTabs = ({ activeStep, setActiveStep }) => {
  const steps = [
    "01. Discovery",
    "02. Blueprint",
    "03. UI/UX Design",
    "04. Strategy",
    "05. Development",
    "06. QA Testing",
    "07. Deployment",
    "08. Optimization",
  ];

  return (
    <div
      className="
        grid
        grid-cols-2
        gap-2
        rounded-[15px]
        bg-[#f1f2f5]
        p-2
        sm:grid-cols-4
      "
    >
      {steps.map((step, index) => {
        const isActive = index === activeStep;

        return (
          <button
            key={step}
            type="button"
            onClick={() => setActiveStep(index)}
            className="
              relative
              min-h-[42px]
              overflow-hidden
              rounded-[10px]
              px-3
              py-2
              text-[13px]
              font-medium
              sm:text-[14px]
            "
          >
            {/* Animated Background */}
            {isActive && (
              <motion.div
                layoutId="activeProcessTab"
                className="
                  absolute
                  inset-0
                  rounded-[10px]
                  bg-gradient-to-r
                  from-[#b336f4]
                  to-[#3b8cff]
                  shadow-[0_8px_20px_rgba(116,72,255,0.25)]
                "
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            {/* Text */}
            <span
              className={`
                relative
                z-10
                transition-colors
                duration-300
                ${
                  isActive
                    ? "text-white"
                    : "text-[#5f6b7a] hover:text-[#111827]"
                }
              `}
            >
              {step}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default ProcessTabs;