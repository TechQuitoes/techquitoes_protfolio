const ICONS = {
  "Our Services": (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
      <path
        d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8L12 3z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "AI-powered Innovation": (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
      <path
        d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  ),
  "Our Culture": (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
      <path
        d="M12 21s-7-4.35-9.5-9C0.8 8.3 2.6 5 6 5c2 0 3.4 1.1 4 2.2C10.6 6.1 12 5 14 5c3.4 0 5.2 3.3 3.5 7-2.5 4.65-9.5 9-9.5 9z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Our Approach": (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
      <path
        d="M4 19V9M10 19V5M16 19v-7M22 19H2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
};

const DEFAULT_ICON = (
  <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const DropdownMenu = ({ items, title, featured }) => {
  return (
    <div
      className="
        flex w-[600px]
        overflow-hidden rounded-[26px]
        border border-black/[0.06]
        bg-white
        shadow-[0_40px_90px_-20px_rgba(20,16,31,0.22),0_0_0_1px_rgba(0,0,0,0.02)]
      "
    >
      {/* LEFT — nav items */}
      <div className="w-[330px] p-4">
        <p className="px-3 pb-3 pt-2 text-[11px] font-bold tracking-[0.24em] text-violet-500/70">
          {title}
        </p>

        <div className="space-y-1">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="
                group/item flex items-center gap-3.5
                rounded-2xl px-3.5 py-4
                transition-colors duration-200
                hover:bg-violet-50/80
              "
            >
              <span
                className="
                  flex h-10 w-10 shrink-0 items-center justify-center
                  rounded-xl
                  bg-[#F6F3FC] text-violet-600
                  transition-all duration-300
                  group-hover/item:bg-gradient-to-br
                  group-hover/item:from-violet-600
                  group-hover/item:to-indigo-500
                  group-hover/item:text-white
                  group-hover/item:shadow-[0_8px_20px_-4px_rgba(124,58,237,0.5)]
                "
              >
                {ICONS[item] ?? DEFAULT_ICON}
              </span>

              <span className="flex-1 text-[17px] font-semibold tracking-[-0.01em] text-[#14101F] transition-colors duration-200">
                {item}
              </span>

              <span
                className="
                  -translate-x-1 text-violet-500 opacity-0
                  transition-all duration-200
                  group-hover/item:translate-x-0 group-hover/item:opacity-100
                "
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT — featured panel */}
      <div
        className="
          relative w-[270px] overflow-hidden
          bg-gradient-to-b from-[#F6F3FC] to-white
          p-6
        "
      >
        {/* ambient glow orbs */}
        <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-32 w-32 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="relative">
          <span className="text-[11px] font-bold tracking-[0.24em] text-violet-500/70">
            FEATURED
          </span>

          <h4 className="mt-3 font-serif text-[20px] font-medium leading-snug text-[#14101F]">
            {featured.title}
          </h4>

          <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#6B6478]">
            {featured.description}
          </p>

          <a
            href={featured.href ?? "#"}
            className="
              group/cta mt-5 inline-flex items-center gap-1.5
              text-[13.5px] font-semibold text-violet-600
              transition-colors duration-200
              hover:text-violet-800
            "
          >
            {featured.cta ?? "Learn more"}
            <span className="transition-transform duration-200 group-hover/cta:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;