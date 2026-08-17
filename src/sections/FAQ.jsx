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

  // .......................................send email funtion.................................
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

  // ....................................................................................
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
      className="relative py-10 px-4 overflow-hidden bg-white text-gray-900"
    >
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full blur-[120px] opacity-20 animate-float-slow"
        style={{
          background:
            "radial-gradient(circle, #ff4fd8 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 animate-float-slower"
        style={{
          background:
            "radial-gradient(circle, #a855f7 0%, transparent 70%)",
        }}
      />

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 40px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, -20px); }
        }
        .animate-float-slow { animation: float-slow 14s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 18s ease-in-out infinite; }
      `}</style>

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative group">
            <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#ff4fd8]/0 via-[#d946ef]/0 to-[#a855f7]/0 group-focus-within:from-[#ff4fd8]/30 group-focus-within:via-[#d946ef]/30 group-focus-within:to-[#a855f7]/30 blur transition-all duration-300" />
            <div className="relative flex items-center bg-white border border-gray-200 rounded-xl shadow-sm">
              <Search className="ml-4 text-gray-400 w-5 h-5 shrink-0" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for answers..."
                className="w-full px-3 py-4 bg-transparent text-gray-900 placeholder:text-gray-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === cat
                  ? "text-white"
                  : "text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {filter === cat && (
                <motion.span
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] shadow-[0_4px_18px_rgba(217,70,239,0.35)]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Most Recent
            </h3>

            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, i) => {
                  const isOpen = active === i;
                  return (
                    <div
                      key={i}
                      className={`relative rounded-xl overflow-hidden border transition-colors duration-300 ${
                        isOpen
                          ? "border-[#d946ef]/30 bg-[#d946ef]/[0.03] shadow-md"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                      }`}
                    >
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#ff4fd8] via-[#d946ef] to-[#a855f7] origin-top transition-transform duration-300 ${
                          isOpen ? "scale-y-100" : "scale-y-0"
                        }`}
                      />

                      <button
                        onClick={() => setActive(isOpen ? null : i)}
                        className="w-full p-6 text-left flex items-center justify-between gap-4"
                      >
                        <div className="flex-1">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[#a855f7] mb-2 block">
                            {faq.category}
                          </span>
                          <span className="text-gray-900 font-semibold text-lg leading-snug">
                            {faq.question}
                          </span>
                        </div>

                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full border ${
                            isOpen
                              ? "border-[#d946ef]/40 bg-[#d946ef]/10"
                              : "border-gray-200 bg-gray-50"
                          }`}
                        >
                          <ChevronDown className="w-4 h-4 text-[#a855f7]" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
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
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-10 text-center">
                <CircleHelp className="w-10 h-10 mx-auto mb-4 text-gray-300" />
                <p className="text-gray-600 font-medium">
                  No matching questions found.
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Try a different search term or category.
                </p>
              </div>
            )}
          </div>

          {/* Right */}
          <div className="lg:sticky lg:top-24">
            <div className="relative rounded-2xl p-8 text-center border border-gray-200 bg-white shadow-lg shadow-gray-100 overflow-hidden">
              <div
                className="pointer-events-none absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-[80px] opacity-25"
                style={{
                  background:
                    "radial-gradient(circle, #d946ef 0%, transparent 70%)",
                }}
              />

              <div className="relative">
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <span className="absolute inset-0 rounded-full bg-[#d946ef]/10 animate-ping" />
                  <span className="relative flex items-center justify-center w-full h-full rounded-full bg-gradient-to-br from-[#ff4fd8]/10 via-[#d946ef]/10 to-[#a855f7]/10 border border-[#d946ef]/20">
                    <CircleHelp className="w-10 h-10 text-[#a855f7]" />
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Any Questions?
                </h3>
                <p className="text-gray-500 mb-6">Let me know</p>

                <div className="text-left space-y-4">
                  <InputField
                    name="user_email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter here"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#d946ef]/50 focus:ring-2 focus:ring-[#d946ef]/15 transition"
                  />

                  <button
                    onClick={handleSend}
                    disabled={loading}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] text-white font-semibold py-3.5 rounded-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 shadow-[0_8px_20px_rgba(217,70,239,0.3)]"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>

                <AnimatePresence>
                  {toast && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className={`mt-4 flex items-center justify-center gap-2 text-sm px-4 py-2.5 rounded-lg border ${
                        isToastError
                          ? "text-rose-600 bg-rose-50 border-rose-200"
                          : "text-emerald-600 bg-emerald-50 border-emerald-200"
                      }`}
                    >
                      {isToastError ? (
                        <AlertCircle className="w-4 h-4 shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
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