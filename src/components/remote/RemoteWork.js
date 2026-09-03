import Testimonials from "../../sections/Testimonials";
import ProcessFramework from "./ProcessFramework";
import RemoteModel from "./RemoteModel";
import TechquitoesStatement from "./TechquitoesStatement";
import WhyTechquitoes from "./WhyTechquitoes";

const RemoteWork = () => {
  return (
    <main
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-[var(--background)]
        text-[var(--foreground)]
        px-5
        mt-10
        py-10
        sm:px-8
        lg:px-6
      "
    >
      <WhyTechquitoes />
      <TechquitoesStatement />
      <RemoteModel />
      <ProcessFramework />
      <Testimonials />
    </main>
  );
};

export default RemoteWork;