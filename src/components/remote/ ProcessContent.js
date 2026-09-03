import { motion } from "framer-motion";

const ProcessContent = ({ step }) => {
  const Icon = step.icon;

  return (
    <div
      className="
        mx-auto
        mt-9
        max-w-7xl
        overflow-hidden
        rounded-[22px]
        bg-[var(--process-card-bg)]
        
        px-6
        py-8
        shadow-[0_15px_40px_rgba(0,0,0,0.12)]
        transition-colors
        duration-300
        sm:px-10
        sm:py-12
        lg:px-14
        lg:py-14
      "
    >
      <div
        className="
          grid
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-[360px_1fr]
          lg:gap-12
        "
      >
        {/* ICON AREA */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            flex
            h-[300px]
            items-center
            justify-center
            rounded-[18px]
            border
            border-[var(--border-color)]
            bg-[var(--process-card-inner)]
            transition-colors
            duration-300
            sm:h-[350px]
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              flex
              h-[170px]
              w-[170px]
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-[#b336f4]
              to-[#3b8cff]
              p-[3px]
            "
          >
            <div
              className="
                flex
                h-full
                w-full
                items-center
                justify-center
                rounded-full
                bg-[var(--process-card-inner)]
                transition-colors
                duration-300
              "
            >
              <Icon
                size={82}
                strokeWidth={1.5}
                className="
                  text-[#b336f4]
                  drop-shadow-[0_0_20px_rgba(179,54,244,0.4)]
                "
              />
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.18,
            }}
            className="
              text-[30px]
              font-semibold
              leading-tight
              tracking-[-1px]
              text-white
              sm:text-[34px]
            "
          >
            {step.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.28,
            }}
            className="
              mt-5
              max-w-[560px]
              text-[16px]
              leading-[1.7]
              text-white/80
              sm:text-[17px]
            "
          >
            {step.description}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default ProcessContent;