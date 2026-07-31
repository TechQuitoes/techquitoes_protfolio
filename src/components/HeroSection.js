import { useEffect, useState } from "react";
const WORDS  = [
    "Digital Experiences. ",
    "Web Applications. ",
    "AI Solutions. ",
    "Mobile Apps. ",
    "Business Automation. ",
  ];
const HeroSection = () => {
  

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const updatedText = currentWord.substring(0, text.length + 1);
          setText(updatedText);

          if (updatedText === currentWord) {
            setTimeout(() => {
              setIsDeleting(true);
            }, 1500);
          }
        } else {
          const updatedText = currentWord.substring(0, text.length - 1);
          setText(updatedText);

          if (updatedText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % WORDS.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="relative pt-20 h-[42vh] min-h-[350px] flex items-center overflow-hidden bg-gradient-to-tr from-purple-50/50 via-slate-50/30 to-white border-b border-zinc-200/50">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70" />

      {/* Animated Blobs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[0%] w-[480px] h-[480px] bg-purple-300/30 rounded-full animate-mesh-plasma-1" />

        <div className="absolute bottom-[-15%] right-[0%] w-[520px] h-[520px] bg-indigo-200/40 rounded-full animate-mesh-plasma-2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Content */}
        <div className="lg:col-span-8 text-left space-y-4">
          <span className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 text-purple-800 text-xs px-3.5 py-1.5 rounded-full  uppercase tracking-wider shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse" />
            <span>AI Exploration Workspace</span>
          </span>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 leading-[0.95]">
            Engineering Impactful
            <br />

            <span className="inline-block min-h-[1.2em] bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-sm">
              {text}
              <span className="animate-blink text-purple-600">|</span>
            </span>
          </h1>

          <p className="text-zinc-600 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Review interactive digital platform deployments, video
            blueprints, and smart automation modules custom built to
            accelerate your structural business transformation targets.
          </p>
        </div>

        {/* Right Side Graphic */}
        <div className="hidden lg:col-span-4 lg:flex justify-end pr-6 relative">
          <div
            className="w-44 h-44 rounded-full border border-dashed border-purple-300 p-4 flex items-center justify-center animate-spin"
            style={{ animationDuration: "50s" }}
          >
            <div className="w-32 h-32 rounded-full border border-zinc-200 bg-gradient-to-tr from-purple-50/60 to-indigo-50/40 flex items-center justify-center animate-pulse">
              <svg
                className="w-10 h-10 text-purple-600/70"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8 9a3 3 0 1 1 0 6m8-6a3 3 0 1 1 0 6M8 12h8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-600 rounded-full shadow-lg shadow-purple-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;