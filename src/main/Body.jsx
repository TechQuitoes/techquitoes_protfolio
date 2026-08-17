// import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Expertise from "../sections/Expertise";
// import HowItWorks from "../sections/HowItWorks";
import TechStack from "../sections/TechStack";
import AboutSection from "../sections/AboutSection";
// import ThinkAndAchievements from "../sections/ThinkAndAchievements";
import Team from "../sections/Team";
import FAQ from "../sections/FAQ";
import ContactSection from "../sections/ContactSection";
// import ChecKUser from "../CheckUser";
import RecentWork from "../sections/RecentWork";
import SpecializedExpertise from "../sections/SpecializedExpertise";
import ServicesTabs from "../sections/ServicesTabs";
import ReadyToBuild from "../sections/ReadyToBuild";
// import BubbleBackground from "../components/BubbleBackground";

const Body = () => {
  // const checkuser=ChecKUser()
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
      
      {/* <ThinkAndAchievements/> */}
      <Team/>
      {/* <HowItWorks /> */}
      
      <FAQ/>
      <ContactSection/>
    </div>
  );
};

export default Body;
