

const techCategories = [
  {
    title: "Frontend",
    items: [
      { icon: "devicon-react-original colored", name: "React" },
      { icon: "devicon-vuejs-plain colored", name: "Vue.js" },
      { icon: "devicon-angularjs-plain colored", name: "Angular" },
      { icon: "devicon-nextjs-original", name: "Next.js" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: "devicon-nodejs-plain colored", name: "Node.js" },
      { icon: "devicon-python-plain colored", name: "Python" },
      { icon: "devicon-laravel-plain colored", name: "Laravel" },
      { icon: "devicon-go-original-wordmark colored", name: "Go" },
    ],
  },
  {
    title: "Mobile",
    items: [
      { icon: "devicon-apple-original", name: "iOS Native" },
      { icon: "devicon-android-plain colored", name: "Android" },
      { icon: "devicon-flutter-plain colored", name: "Flutter" },
      { icon: "devicon-react-original colored", name: "React Native" },
    ],
  },
  {
    title: "Data & AI",
    items: [
      { icon: "devicon-python-plain colored", name: "Python ML" },
      { icon: "devicon-tensorflow-original colored", name: "TensorFlow" },
      { icon: "devicon-pandas-original colored", name: "Data Systems" },
      { icon: "devicon-jupyter-plain colored", name: "JupyterLabs" },
    ],
  },
  {
    title: "Cloud & DevOps Operations",
    fullRow: true,
    items: [
      {
        icon: "devicon-amazonwebservices-original colored",
        name: "AWS Architecture",
      },
      {
        icon: "devicon-azure-plain colored",
        name: "Azure Cloud",
      },
      {
        icon: "devicon-docker-plain colored",
        name: "Docker Pods",
      },
      {
        icon: "devicon-kubernetes-plain colored",
        name: "Kubernetes Cluster",
      },
    ],
  },
];

export default function TechStack() {
  

  return (
   <div id="tech-stack" className="w-full">
  <h2 className="
  text-3xl
  sm:text-4xl
  lg:text-5xl
  font-extrabold
  text-secondary
  mb-4
  leading-tight
  text-center
  md:text-left
">
  Our Comprehensive
  <br />
  Tech Stack Ecosystem
</h2>

<p className="
  text-text-muted
  text-base
  sm:text-lg
  mb-8
  sm:mb-12
  max-w-3xl
  text-center
  md:text-left
  mx-auto
  md:mx-0
">
  Deploy specialized resource engineering teams proficient across
  complete software architecture stacks globally.
</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
    {techCategories.map((category) => (
      <div
        key={category.title}
        className={`
          bg-bg-white
          border
          border-border-light
          rounded-2xl
          p-4
          sm:p-6
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-lg
          ${
            category.fullRow
              ? "sm:col-span-2 xl:col-span-2"
              : ""
          }
        `}
      >
        <h4 className="
          text-xs
          sm:text-sm
          uppercase
          tracking-wider
          text-primary
          mb-5
          border-b
          border-border-light
          pb-3
          font-bold
        ">
          {category.title}
        </h4>

        <div
          className={`
            grid
            gap-4
            ${
              category.fullRow
                ? `
                  grid-cols-2
                  sm:grid-cols-4
                `
                : `
                  grid-cols-2
                `
            }
          `}
        >
          {category.items.map((item) => (
            <div
              key={item.name}
              className="
                flex
                flex-col
                items-center
                text-center
                gap-2
                min-w-0
                py-2
              "
            >
              <i
                className={`
                  ${item.icon}
                  text-3xl
                  sm:text-4xl
                  transition-all
                  duration-300
                  group-hover:scale-110
                `}
              />

              <span className="
                text-xs
                sm:text-sm
                font-medium
                text-text-main
                break-words
                leading-snug
              ">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
  );
}