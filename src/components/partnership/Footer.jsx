export default function Footer() {
  return (
    <footer
      className="
        border-t
        theme-border
        theme-bg
        px-4
        py-10
        transition-colors
        duration-300
        sm:px-6
        sm:py-14
        lg:px-8
        lg:py-16
      "
    >
      <div className="mx-auto max-w-7xl text-center">
        <div
          className="
            flex
            flex-col
            items-center
            gap-3
            text-sm
            theme-text
            transition-colors
            duration-300
            sm:text-base
            md:flex-row
            md:justify-center
            md:gap-2
          "
        >
          <span className="font-medium">
            Institutional Relations:
          </span>

          <div
            className="
              flex
              flex-col
              items-center
              gap-2
              sm:flex-row
              sm:gap-3
            "
          >
            <a
              href="mailto:hello@techquitoes.com"
              className="
                font-semibold
                text-[var(--accent-end)]
                transition-colors
                duration-300
                hover:brightness-90
                hover:underline
                break-all
              "
            >
              hello@techquitoes.com
            </a>

            <span className="hidden text-[var(--text-secondary)] sm:block">
              |
            </span>

            <a
              href="mailto:nj@techquitoes.com"
              className="
                font-semibold
                text-[var(--accent-end)]
                transition-colors
                duration-300
                hover:brightness-90
                hover:underline
                break-all
              "
            >
              nj@techquitoes.com
            </a>
          </div>
        </div>

        <p
          className="
            mt-6
            px-4
            text-xs
            theme-text-secondary
            transition-colors
            duration-300
            sm:text-sm
          "
        >
          © 2026 Techquitoes Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}