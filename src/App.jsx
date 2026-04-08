
import Navbar from "./components/Navbar";
import { Code, Palette, Database, GitBranch, Cpu, Layers } from "lucide-react";
import Tilt from "react-parallax-tilt";

import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About"
import { useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
function App() {
  const [activeTab, setActiveTab] = useState("Frontend");

const skillsData = {
  Frontend: [
    { title: "React.js", desc: "Component-driven scalable UI architecture." },
    { title: "Redux Toolkit", desc: "Advanced global state management." },
    { title: "JavaScript (ES6+)", desc: "Modern syntax & async logic." },
  ],
  Tools: [
    { title: "Git & GitHub", desc: "Version control & collaboration workflow." },
    { title: "Tailwind CSS", desc: "Utility-first modern styling." },
    { title: "Vite", desc: "Fast build tool for modern apps." },
  ],
  Backend: [
    { title: "REST APIs", desc: "API integration & data handling." },
    { title: "Firebase", desc: "Authentication & database basics." },
    { title: "Node Basics", desc: "Understanding backend fundamentals." },
  ],
};
  return (
     <>
  {/* [#0B0F19] */}
    <div className="min-h-screen bg-[#0B0F19] text-white overflow-x-hidden flex flex-col justify-center items-center ">
             <Navbar></Navbar>
   
<Hero></Hero>

       
{/* Skills Section */}
{/* [#0B0F19]  */}

<About></About>
  <Education></Education>
  <Skills></Skills>
  <Projects></Projects>
  <Contact></Contact>
  <Footer></Footer>
    </div>
   </>
  );
}

export default App;