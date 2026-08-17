import { navLinks } from "../../data/navData";

const NavLinks = ({ mobile = false, onClick }) => {
  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-4"
          : "flex items-center gap-[clamp(16px,2vw,36px)]"
      }
    >
      {navLinks.map((link, i) => (
        <li
          key={i}
          className={!mobile ? "relative group" : ""}
        >
          <a
            href={link.href}
            onClick={onClick}
            className={
              mobile
                ? "block text-white/80 hover:text-pink-400 transition-colors text-[15px]"
                : "text-white/80 hover:text-white transition-all duration-300 text-[clamp(0.85rem,1vw,1.05rem)]"
            }
          >
            {link.label}

            {!mobile && (
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full" />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;