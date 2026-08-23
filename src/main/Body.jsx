import Hero from "../sections/Hero";
import Expertise from "../sections/Expertise";
import TechStack from "../sections/TechStack";
import AboutSection from "../sections/AboutSection";

import FAQ from "../sections/FAQ";
import ContactSection from "../sections/ContactSection";
import RecentWork from "../sections/RecentWork";
import SpecializedExpertise from "../sections/SpecializedExpertise";
import ServicesTabs from "../sections/ServicesTabs";
import ReadyToBuild from "../sections/ReadyToBuild";


const Body = () => {
  
  return (
    <div className=" text-white">
      {/* <BubbleBackground/> */}
      {/* <Navbar /> */}
      <Hero />
        <TechStack />
        <AboutSection/>
      <Expertise />
      <SpecializedExpertise/>
      <ServicesTabs/>
      <ReadyToBuild/>  
      <RecentWork/>
          
      <FAQ/>
      <ContactSection/>
    </div>
  );
};

export default Body;
