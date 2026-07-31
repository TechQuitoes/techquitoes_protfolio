export default function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col items-center gap-3 text-sm sm:text-base md:flex-row md:justify-center md:gap-2 text-[#0f172a]">
          <span className="font-medium">
            Institutional Relations:
          </span>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <a
              href="mailto:hello@techquitoes.com"
              className="font-semibold text-[#9b51e0] transition-colors duration-300 hover:text-[#7b3ebd] hover:underline break-all"
            >
              hello@techquitoes.com
            </a>

            <span className="hidden sm:block text-gray-400">|</span>

            <a
              href="mailto:nj@techquitoes.com"
              className="font-semibold text-[#9b51e0] transition-colors duration-300 hover:text-[#7b3ebd] hover:underline break-all"
            >
              nj@techquitoes.com
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs sm:text-sm text-[#64748b] px-4">
          © 2026 Techquitoes Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}