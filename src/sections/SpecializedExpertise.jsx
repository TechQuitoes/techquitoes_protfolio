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
  {
    icon: Layers,
    title: "Enterprise Websites & Custom Web Applications",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
  },
  {
    icon: Bot,
    title: "AI Automation, AI Agents & AI Chatbots",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Product Strategy & Digital Discovery Workshops",
  },
  {
    icon: Server,
    title: "DevOps, Cloud Hosting & AWS/Azure Infrastructure",
  },
  {
    icon: PieChart,
    title: "Power BI Dashboards & Business Analytics",
  },
  {
    icon: Settings,
    title: "Microsoft Power Automate Workflow Solutions",
  },
  {
    icon: TableProperties,
    title: "Smartsheets Project & Workflow Management",
  },
  {
    icon: RefreshCw,
    title: "Legacy System Modernization & Cloud Migration",
  },
  {
    icon: Network,
    title: "SharePoint Development & Business Portals",
  },
  {
    icon: Cloud,
    title: "SaaS Platforms & Multi-Tenant Solutions",
  },
  {
    icon: WandSparkles,
    title: "UI/UX Design & Digital Experience Engineering",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Audits, GDPR & Data Protection",
  },
  {
    icon: Plug,
    title: "CRM, API & Business System Integrations",
  },
  {
    icon: ShoppingBasket,
    title: "E-Commerce Platforms & Process Automation",
  },
];

const SpecializedExpertise = () => {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2
            className="
              mb-4
              text-3xl font-extrabold tracking-[-0.04em]
              text-[#222]
              sm:text-4xl
              lg:text-[42px]
              lg:leading-[1.1]
            "
          >
            Our Specialized Expertise
          </h2>

          <p
            className="
              mx-auto max-w-[700px]
              text-base font-normal leading-[1.8]
              text-[#666]
              sm:text-lg
            "
          >
            We combine strategic thinking with cutting-edge engineering to
            deliver scalable, secure, and intelligent digital products.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2
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
    group relative
    flex min-h-[168px]
    cursor-pointer
    flex-col items-center justify-center
    overflow-hidden
    rounded-[14px]
    border border-[#e5e5e5]
    bg-white
    px-6 py-8
    text-center

    transition-all
    duration-300
    ease-out

    hover:-translate-y-[3px]
    hover:border-transparent
    hover:shadow-[0_12px_30px_rgba(124,58,237,0.12)]
  "
>
  {/* Gradient Border */}
  <span
    className="
      pointer-events-none
      absolute inset-0
      rounded-[14px]
      bg-gradient-to-r
      from-[#6a5cff]
      to-[#a044ff]
      p-[1.5px]

      opacity-0
      transition-opacity
      duration-300

      group-hover:opacity-100
    "
  >
    <span
      className="
        block
        h-full
        w-full
        rounded-[12.5px]
        bg-white
      "
    />
  </span>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center">
    {/* Icon */}
    <Icon
      strokeWidth={2}
      className="
        mb-5
        h-8 w-8
        text-[#333333]

        transition-all
        duration-300

        group-hover:text-[#7657ff]
      "
    />

    {/* Text */}
    <span
      className="
        max-w-[310px]
        text-[16px]
        font-semibold
        leading-[1.4]
        text-[#222222]
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