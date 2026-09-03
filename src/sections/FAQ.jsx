import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  CircleHelp,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { categories, faqs } from "../data/faqsDats";

import useSendEmail from "../hooks/useSendEmail";
import InputField from "../components/ui/InputField";

const FAQ = () => {
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");

  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [question, setQuestion] = useState("");
  const { sendEmail, loading } = useSendEmail();

  const isValidEmail = (email) => {
    return /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email);
  };

  const handleSend = async () => {
    if (!email.trim()) {
      setToast("Please enter your email ❗");
      return;
    }

    if (!isValidEmail(email)) {
      setToast("Please enter a valid email address ❗");
      return;
    }

    if (!question.trim()) {
      setToast("Please enter a message ❗");
      return;
    }

    setToast("");

    const ok = await sendEmail({
      message: question,
      email: email,
    });

    if (ok) {
      setQuestion("");
      setEmail("");
      setToast("Message sent successfully ✅");
    } else {
      setToast("Failed to send ❌");
    }

    setTimeout(() => setToast(""), 3000);
  };

  const filteredFaqs = faqs.filter((f) => {
    const matchCategory = filter === "All" || f.category === filter;

    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const isToastError = toast.includes("❗") || toast.includes("❌");

  return (
    <section
      id="faq"
      className="
        relative
        w-full
        overflow-hidden
        py-10
        px-4
        text-[var(--text-primary)]
      "
    >
      {/* Ambient background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -left-32
          h-[420px]
          w-[420px]
          rounded-full
          blur-[120px]
          opacity-20
          animate-float-slow
        "
        style={{
          background:
            "radial-gradient(circle, #ff4fd8 0%, transparent 70%)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          blur-[140px]
          opacity-15
          animate-float-slower
        "
        style={{
          background:
            "radial-gradient(circle, #a855f7 0%, transparent 70%)",
        }}
      />

      <style>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(30px, 40px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(-40px, -20px);
          }
        }

        .animate-float-slow {
          animation: float-slow 14s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 18s ease-in-out infinite;
        }
      `}</style>

      <div className="container relative mx-auto max-w-[95%] px-6">

        {/* Heading */}
        <div className="mb-10 text-center">

          <h2
            className="
              mb-6
              text-4xl
              font-bold
              tracking-tight
              text-[var(--text-primary)]
              md:text-6xl
            "
          >
            Frequently Asked{" "}
            <span
              className="
                bg-gradient-to-r
                from-[#ff4fd8]
                via-[#d946ef]
                to-[#a855f7]
                bg-clip-text
                text-transparent
              "
            >
              Questions
            </span>
          </h2>

          <p
            className="
              mx-auto
              max-w-2xl
              text-lg
              text-[var(--text-secondary)]
            "
          >
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-10 max-w-2xl">

          <div className="relative group">

            <div
              className="
                absolute
                -inset-px
                rounded-xl
                bg-gradient-to-r
                from-[#ff4fd8]/0
                via-[#d946ef]/0
                to-[#a855f7]/0
                blur
                transition-all
                duration-300
                group-focus-within:from-[#ff4fd8]/30
                group-focus-within:via-[#d946ef]/30
                group-focus-within:to-[#a855f7]/30
              "
            />

            <div
              className="
                relative
                flex
                items-center
                rounded-xl
                border
                border-gray-200
                bg-[var(--bg-primary)]
                shadow-sm
                dark:border-gray-700
              "
            >
              <Search
                className="
                  ml-4
                  h-5
                  w-5
                  shrink-0
                  text-gray-400
                  dark:text-gray-500
                "
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for answers..."
                className="
                  w-full
                  bg-transparent
                  px-3
                  py-4
                  text-[var(--text-primary)]
                  placeholder:text-gray-400
                  focus:outline-none
                "
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-16 flex flex-wrap justify-center gap-3">

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                relative
                w-[140px]
                rounded-full
                px-6
                py-2.5
                text-center
                text-sm
                font-medium
                transition-colors
                duration-300
                sm:w-auto

                ${
                  filter === cat
                    ? "text-white"
                    : `
                      border
                      border-gray-200
                      text-[var(--text-secondary)]
                      hover:text-[var(--text-primary)]
                      dark:border-gray-700
                    `
                }
              `}
            >
              {filter === cat && (
                <motion.span
                  layoutId="activeCategoryPill"
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-gradient-to-r
                    from-[#ff4fd8]
                    via-[#d946ef]
                    to-[#a855f7]
                    shadow-[0_4px_18px_rgba(217,70,239,0.35)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* FAQ + Question Form */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <h3
              className="
                mb-6
                text-2xl
                font-bold
                text-[var(--text-primary)]
              "
            >
              Most Recent
            </h3>

            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">

                {filteredFaqs.map((faq, i) => {

                  const isOpen = active === i;

                  return (
                    <div
                      key={i}
                      className={`
                        relative
                        overflow-hidden
                        rounded-xl
                        border
                        transition-colors
                        duration-300

                        ${
                          isOpen
                            ? `
                              border-[#d946ef]/30
                              bg-[#d946ef]/[0.03]
                              shadow-md
                            `
                            : `
                              border-gray-200
                              bg-[var(--bg-primary)]
                              hover:border-gray-300
                              hover:shadow-sm
                              dark:border-gray-700
                              dark:hover:border-gray-600
                            `
                        }
                      `}
                    >

                      {/* Active side border */}
                      <div
                        className={`
                          absolute
                          bottom-0
                          left-0
                          top-0
                          w-[3px]
                          origin-top
                          bg-gradient-to-b
                          from-[#ff4fd8]
                          via-[#d946ef]
                          to-[#a855f7]
                          transition-transform
                          duration-300
                          ${isOpen ? "scale-y-100" : "scale-y-0"}
                        `}
                      />

                      <button
                        onClick={() =>
                          setActive(isOpen ? null : i)
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-between
                          gap-4
                          p-6
                          text-left
                        "
                      >

                        <div className="flex-1">

                          <span
                            className="
                              mb-2
                              block
                              text-xs
                              font-semibold
                              uppercase
                              tracking-wider
                              text-[#a855f7]
                            "
                          >
                            {faq.category}
                          </span>

                          <span
                            className="
                              text-lg
                              font-semibold
                              leading-snug
                              text-[var(--text-primary)]
                            "
                          >
                            {faq.question}
                          </span>

                        </div>

                        <motion.span
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className={`
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border

                            ${
                              isOpen
                                ? `
                                  border-[#d946ef]/40
                                  bg-[#d946ef]/10
                                `
                                : `
                                  border-gray-200
                                  bg-gray-50
                                  dark:border-gray-700
                                  dark:bg-gray-800
                                `
                            }
                          `}
                        >
                          <ChevronDown
                            className="
                              h-4
                              w-4
                              text-[#a855f7]
                            "
                          />
                        </motion.span>

                      </button>

                      <AnimatePresence initial={false}>

                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div
                              className="
                                px-6
                                pb-6
                                leading-relaxed
                                text-[var(--text-secondary)]
                              "
                            >
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}

                      </AnimatePresence>
                    </div>
                  );
                })}

              </div>
            ) : (

              <div
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  p-10
                  text-center
                  dark:border-gray-700
                  dark:bg-gray-900
                "
              >
                <CircleHelp
                  className="
                    mx-auto
                    mb-4
                    h-10
                    w-10
                    text-gray-300
                    dark:text-gray-600
                  "
                />

                <p
                  className="
                    font-medium
                    text-[var(--text-primary)]
                  "
                >
                  No matching questions found.
                </p>

                <p
                  className="
                    mt-1
                    text-sm
                    text-[var(--text-secondary)]
                  "
                >
                  Try a different search term or category.
                </p>
              </div>
            )}

          </div>

          {/* RIGHT */}
          <div className="lg:sticky lg:top-24">

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-[var(--bg-primary)]
                p-8
                text-center
                shadow-lg
                dark:border-gray-700
              "
            >

              <div
                className="
                  pointer-events-none
                  absolute
                  -top-16
                  left-1/2
                  h-64
                  w-64
                  -translate-x-1/2
                  rounded-full
                  blur-[80px]
                  opacity-25
                "
                style={{
                  background:
                    "radial-gradient(circle, #d946ef 0%, transparent 70%)",
                }}
              />

              <div className="relative">

                {/* Icon */}
                <div
                  className="
                    relative
                    mb-6
                    inline-flex
                    h-20
                    w-20
                    items-center
                    justify-center
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      animate-ping
                      rounded-full
                      bg-[#d946ef]/10
                    "
                  />

                  <span
                    className="
                      relative
                      flex
                      h-full
                      w-full
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d946ef]/20
                      bg-gradient-to-br
                      from-[#ff4fd8]/10
                      via-[#d946ef]/10
                      to-[#a855f7]/10
                    "
                  >
                    <CircleHelp
                      className="
                        h-10
                        w-10
                        text-[#a855f7]
                      "
                    />
                  </span>
                </div>

                <h3
                  className="
                    mb-2
                    text-2xl
                    font-bold
                    text-[var(--text-primary)]
                  "
                >
                  Any Questions?
                </h3>

                <p
                  className="
                    mb-6
                    text-[var(--text-secondary)]
                  "
                >
                  Let me know
                </p>

                <div className="space-y-4 text-left">

                  <InputField
                    name="user_email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    value={question}
                    onChange={(e) =>
                      setQuestion(e.target.value)
                    }
                    placeholder="Enter here"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-gray-200
                      bg-gray-50
                      px-4
                      py-3
                      text-[var(--text-primary)]
                      placeholder:text-gray-400
                      transition
                      focus:border-[#d946ef]/50
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#d946ef]/15

                      dark:border-gray-700
                      dark:bg-gray-900
                    "
                  />

                  <button
                    onClick={handleSend}
                    disabled={loading}
                    className="
                      relative
                      w-full
                      overflow-hidden
                      rounded-lg
                      bg-gradient-to-r
                      from-[#ff4fd8]
                      via-[#d946ef]
                      to-[#a855f7]
                      py-3.5
                      font-semibold
                      text-white
                      shadow-[0_8px_20px_rgba(217,70,239,0.3)]
                      transition-transform
                      duration-200
                      hover:scale-[1.02]
                      active:scale-[0.98]
                      disabled:opacity-60
                      disabled:hover:scale-100
                    "
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>

                </div>

                {/* Toast */}
                <AnimatePresence>

                  {toast && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        y: -8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className={`
                        mt-4
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-lg
                        border
                        px-4
                        py-2.5
                        text-sm

                        ${
                          isToastError
                            ? `
                              border-rose-200
                              bg-rose-50
                              text-rose-600
                              dark:border-rose-900
                              dark:bg-rose-950
                            `
                            : `
                              border-emerald-200
                              bg-emerald-50
                              text-emerald-600
                              dark:border-emerald-900
                              dark:bg-emerald-950
                            `
                        }
                      `}
                    >

                      {isToastError ? (
                        <AlertCircle
                          className="
                            h-4
                            w-4
                            shrink-0
                          "
                        />
                      ) : (
                        <CheckCircle2
                          className="
                            h-4
                            w-4
                            shrink-0
                          "
                        />
                      )}

                      {toast}

                    </motion.p>
                  )}

                </AnimatePresence>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;