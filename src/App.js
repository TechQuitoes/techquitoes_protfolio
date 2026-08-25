
// import Navbar from "./components/layout/Navbar";
import Body from "./main/Body";

import {  Routes, Route, useLocation } from "react-router-dom";
import CaseStudy from "./main/CaseStudy";
import Chatbot from "./components/Chatbot";

import ProjectForm from "./main/ProjectForm";
// import AdminRoute from "./routes/AdminRoute";
import Dashboard from "./pages/admin/ Dashboard";
import Projects from "./pages/admin/Projects";
import AddProject from "./pages/admin/ AddProject";
import EditProject from "./pages/admin/EditProject";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import { Toaster } from "react-hot-toast";
import AboutManage from "./pages/admin/AboutManage";
import TeamManage from "./pages/admin/TeamManage";
import FaqsMange from "./pages/admin/FaqsMange";
import AdminUsers from "./pages/admin/AdminUsers";
import ProtectedRoute from "./components/ProtectedRoute";
import Partnership from "./pages/Partnership";
import Navbar from "./components/Navbar/Navbar";
import Service from "./main/Service";
import Footer from "./components/layout/ Footer";
import CEO from "./main/CEO";
import RemoteWork from "./components/remote/RemoteWork";
import Aproch from "./components/our-aproch/Aproch";


function App() {
  const location = useLocation();
  
  const hideNavbar =
    location.pathname === "/case-study" || location.pathname==="/partnership" || 
    location.pathname === "/form" || location.pathname==="/login" || location.pathname==="/signup"
  const hideFooter =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/login" ||
    location.pathname === "/signup" ||
    location.pathname === "/form" ||
    location.pathname === "/case-study" ||
    location.pathname === "/partnership";
  const hideChatbot =
  location.pathname.startsWith("/admin") ||
  location.pathname === "/login" ||
  location.pathname === "/signup";
  return (
    
   
    <div className=" relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#2b0f3f] via-[#12071f] to-black">
       
    <div
      className="mt-12 pt-96 fixed w-full min-h-screen overflow-hidden text-white
       opacity-90
      before:absolute before:inset-0 before:content-['']
      before:bg-[radial-gradient(30%_30%_at_50%_40%,rgba(217,70,239,0.45),rgba(5,0,20,0.95)_68%)]
      "
    >
        {/* Left glow */}
  <div className="pointer-events-none absolute  top-1/2 left-[-10%] -translate-y-1/2
        w-[70%] h-[80%] blur-[140px]
        bg-[radial-gradient(50%_50%_at_20%_20%,rgba(192,132,252,0.4),transparent_70%)]" />

  {/* Right glow */}
  <div className="pointer-events-none absolute top-48 right-[-30%] -translate-y-1/2
  w-[70%] h-[80%] blur-[140px]
  bg-[radial-gradient(50%_50%_at_50%_50%,rgba(192,132,252,0.4),transparent_70%)]" />

  

  
  
   
     </div>
    
      

      <div className="relative z-5">
        <Toaster position="top-center" />
        
        
         {!hideNavbar && <Navbar/>}

          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/service" element={<Service />} />
            <Route path="/why-choose-us" element={<RemoteWork />} />
            <Route path="/our-approach" element={<Aproch />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/form" element={<ProjectForm/>}/>



            <Route path="/admin"element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>

            <Route path="/admin/projects"element={ <ProtectedRoute><Projects /></ProtectedRoute>}/>
            <Route path="/admin/about" element={ <ProtectedRoute><AboutManage /></ProtectedRoute>} />
            <Route path="/admin/team" element={<ProtectedRoute><TeamManage /></ProtectedRoute>} />
            <Route path="/admin/faqs" element={<ProtectedRoute><FaqsMange /></ProtectedRoute>} />
            <Route path="/admin/users" element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
            <Route path="/admin/projects/add" element={<ProtectedRoute><AddProject /></ProtectedRoute>} />
            <Route path="/admin/projects/edit/:id" element={<ProtectedRoute><EditProject /></ProtectedRoute>} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/ceo" element={<CEO />} />
            </Routes>


           

         {!hideChatbot && <Chatbot />}
          {!hideFooter && <Footer />}

        
      </div>
    
    </div>
  );
}




export default App;

