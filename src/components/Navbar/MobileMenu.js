const MobileMenu = ({ open, setOpen }) => {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ${
        open
          ? "max-h-[500px] opacity-100"
          : "max-h-0 opacity-0"
      }`}
    >
      <div className="bg-white border-t border-gray-200 px-6 py-6">

        <div className="flex flex-col gap-5">

          <a
            href="#hub"
            onClick={() => setOpen(false)}
            className="text-black text-[16px]"
          >
            The Hub
          </a>

          <a
            href="#services"
            onClick={() => setOpen(false)}
            className="text-black text-[16px]"
          >
            Solutions / Expertise
          </a>

          <a
            href="#dna"
            onClick={() => setOpen(false)}
            className="text-black text-[16px]"
          >
            Our DNA
          </a>

          <a
            href="#portfolio"
            onClick={() => setOpen(false)}
            className="text-black text-[16px]"
          >
            Portfolio
          </a>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="w-full h-[50px]
            flex items-center justify-center
            rounded-full border border-black
            text-black text-[14px] font-semibold"
          >
            Partner With US
          </a>

        </div>
      </div>
    </div>
  );
};

export default MobileMenu;