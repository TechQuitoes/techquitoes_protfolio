const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="flex-shrink-0 pt-2"
    >
      <img
        src="/techqblack.png"
        alt="TechQuitoes"
        className="
          w-[200px]
          h-auto
          object-contain
          dark:hidden
        "
      />

      <img
        src="/techQlogo.png"
        alt="TechQuitoes"
        className="
          hidden
          w-[200px]
          h-auto
          object-contain
          dark:block
        "
      />
    </a>
  );
};

export default NavbarLogo;