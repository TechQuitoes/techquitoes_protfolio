import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import {
  Search,
  Map,
  Palette,
  Target,
  Code2,
  TestTube,
  Rocket,
  Gauge,
} from "lucide-react";

import ProcessHeader from "./ProcessHeader";
import ProcessTabs from "./ProcessTabs";
import ProcessContent from "./ ProcessContent";


const ProcessFramework = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [direction, setDirection] = useState(1);

  const processSteps = [
    {
      title: "Discovery",
      description:
        "Understanding your business, goals, audience, and requirements to establish a strong foundation for the project.",
      icon: Search,
    },
    {
      title: "Blueprint",
      description:
        "Creating the strategic structure, architecture, user flows, and technical roadmap required to move the project forward.",
      icon: Map,
    },
    {
      title: "UI/UX Design",
      description:
        'Crafting high-end, geometric interfaces with a "Quiet Luxury" aesthetic that prioritizes both beauty and user accessibility.',
      icon: Palette,
    },
    {
      title: "Strategy",
      description:
        "Developing a clear implementation strategy that connects business objectives with technology and user experience.",
      icon: Target,
    },
    {
      title: "Development",
      description:
        "Turning approved designs into scalable, responsive, and production-ready digital experiences.",
      icon: Code2,
    },
    {
      title: "QA Testing",
      description:
        "Testing functionality, responsiveness, performance, accessibility, and overall user experience across devices.",
      icon: TestTube,
    },
    {
      title: "Deployment",
      description:
        "Launching the completed product with proper configuration, optimization, monitoring, and production setup.",
      icon: Rocket,
    },
    {
      title: "Optimization",
      description:
        "Continuously improving the product based on analytics, feedback, performance data, and evolving business requirements.",
      icon: Gauge,
    },
  ];

  const handleTabChange = (index) => {
    if (index === activeStep) return;

    setDirection(index > activeStep ? 1 : -1);
    setActiveStep(index);
  };

  return (
    <section className="w-full bg-white px-5 py-14 sm:px-8 lg:px-0 lg:py-16">
      <div className="mx-auto max-w-5xl">

        <ProcessHeader />

        <ProcessTabs
          activeStep={activeStep}
          setActiveStep={handleTabChange}
        />

        <AnimatePresence mode="wait">
          <ProcessContent
            key={activeStep}
            step={processSteps[activeStep]}
            direction={direction}
          />
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ProcessFramework;