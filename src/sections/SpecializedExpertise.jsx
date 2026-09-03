import {
  Layers,
  Smartphone,
  Bot,
  ChartNoAxesCombined,
  Server,
  PieChart,
  Settings,
  TableProperties,
  RefreshCw,
  Network,
  Cloud,
  WandSparkles,
  ShieldCheck,
  Plug,
  ShoppingBasket,
} from "lucide-react";

const services = [
  { icon: Layers, title: "Enterprise Websites & Custom Web Applications" },
  { icon: Smartphone, title: "Mobile Application Development" },
  { icon: Bot, title: "AI Automation, AI Agents & AI Chatbots" },
  { icon: ChartNoAxesCombined, title: "Product Strategy & Digital Discovery Workshops" },
  { icon: Server, title: "DevOps, Cloud Hosting & AWS/Azure Infrastructure" },
  { icon: PieChart, title: "Power BI Dashboards & Business Analytics" },
  { icon: Settings, title: "Microsoft Power Automate Workflow Solutions" },
  { icon: TableProperties, title: "Smartsheets Project & Workflow Management" },
  { icon: RefreshCw, title: "Legacy System Modernization & Cloud Migration" },
  { icon: Network, title: "SharePoint Development & Business Portals" },
  { icon: Cloud, title: "SaaS Platforms & Multi-Tenant Solutions" },
  { icon: WandSparkles, title: "UI/UX Design & Digital Experience Engineering" },
  { icon: ShieldCheck, title: "Cybersecurity Audits, GDPR & Data Protection" },
  { icon: Plug, title: "CRM, API & Business System Integrations" },
  { icon: ShoppingBasket, title: "E-Commerce Platforms & Process Automation" },
];

const SpecializedExpertise = () => {
  return (
    <section
      className="
        w-full
        overflow-hidden
        bg-[var(--bg-primary)]
        px-4
        py-12
        transition-colors
        duration-300
        sm:px-10
        sm:py-16
        lg:px-12
        lg:py-20
      "
    >
      <div className="mx-auto max-w-[95%]">

        {/* Header */}
        <div className="mx-auto mb-8 w-full max-w-3xl px-1 text-center sm:mb-12">
          <h2
            className="
              text-2xl
              font-extrabold
              leading-tight
              tracking-[-0.03em]
              text-[var(--text-primary)]
              sm:text-3xl
              md:text-4xl
              lg:text-[42px]
            "
          >
            Our Specialized Expertise
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[680px]
              text-sm
              leading-7
              text-[var(--text-secondary)]
              sm:mt-4
              sm:text-base
              sm:leading-7
              lg:text-lg
              lg:leading-8
            "
          >
            We combine strategic thinking with cutting-edge engineering to
            deliver scalable, secure, and intelligent digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-3
            sm:grid-cols-2
            sm:gap-4
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group
                  relative
                  w-full
                  overflow-hidden
                  rounded-xl
                  border
                  border-[var(--border-primary)]
                  bg-[var(--card-bg)]
                  px-5
                  py-6
                  text-center
                  transition-all
                  duration-300
                  sm:min-h-[160px]
                  sm:px-6
                  sm:py-7
                  lg:min-h-[168px]
                  lg:rounded-[14px]
                  lg:px-6
                  lg:py-8
                  lg:hover:-translate-y-[3px]
                  lg:hover:border-transparent
                  lg:hover:shadow-[0_12px_30px_rgba(124,58,237,0.12)]
                "
              >
                {/* Gradient Border */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-xl
                    bg-gradient-to-r
                    from-[#6a5cff]
                    to-[#a044ff]
                    p-[1.5px]
                    opacity-0
                    transition-opacity
                    duration-300
                    lg:group-hover:opacity-100
                  "
                >
                  <span
                    className="
                      block
                      h-full
                      w-full
                      rounded-[10px]
                      bg-[var(--card-bg)]
                    "
                  />
                </span>

                {/* Content */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    min-h-[125px]
                    w-full
                    flex-col
                    items-center
                    justify-center
                    sm:min-h-[125px]
                  "
                >
                  <Icon
                    strokeWidth={2}
                    className="
                      mb-4
                      h-7
                      w-7
                      shrink-0
                      text-[var(--text-primary)]
                      transition-colors
                      duration-300
                      lg:group-hover:text-[#010005]
                    "
                  />

                  <span
                    className="
                      block
                      w-full
                      max-w-[280px]
                      text-[14px]
                      font-semibold
                      leading-5
                      text-[var(--text-primary)]
                      sm:max-w-[300px]
                      sm:text-[15px]
                      sm:leading-6
                      lg:text-[16px]
                      lg:leading-[1.4]
                    "
                  >
                    {service.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecializedExpertise;