import React from 'react'

const Skills = () => {
  return (
   <section className="py-10 px-6 bg-[#0B0F19]">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
      Skills 
    </h2>
{/* grid grid-cols-1 md:grid-cols-3 */}
    <div className="flex justify-center align-middle gap-12 w-120 ">

      {/* ================= Frontend Card ================= */}
      <div className="bg-[#111827] rounded-3xl p-10  shadow-xl border  border-white/10 hover:border-purple-600/40 hover:shadow-2xl  transition duration-500">
        {/* <h3 className="text-2xl font-semibold mb-8 text-purple-600">
          Frontend
        </h3> */}

        <div className="flex flex-wrap gap-4 w-250">
          {["React.js", "JavaScript (ES6+)", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS","Bootstrap","DataStructures","Algorithms","Oop","jsx","C++","C Lang","problem Solving"].map((skill, index) => (
            <div
              key={index}
              className="relative flex justify-center items-center hover:font-extrabold hover:bg-purple-400/15  w-35 text-center h-30 bg-[#1F2937] rounded-lg text-sm cursor-pointer overflow-hidden group"
            >
              {skill}

              {/* Animated Bottom Border */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r  from-purple-600  to-pink-600 transition-all duration-500 group-hover:w-full"></span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Backend Card ================= */}
      {/* <div className="bg-[#111827] rounded-3xl p-10 shadow-xl border border-white/10 hover:border-pink-600/40 transition duration-500">
        <h3 className="text-2xl font-semibold mb-8 text-pink-500">
          Backend
        </h3>

        <div className="flex flex-wrap gap-4">
          {["Node.js", "Express.js", "REST APIs", "MongoDB (Basics)", "Firebase"].map((skill, index) => (
            <div
              key={index}
              className="relative px-5 py-2 bg-[#1F2937] rounded-lg text-sm cursor-pointer overflow-hidden group"
            >
              {skill}

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
            </div>
          ))}
        </div>
      </div> */}

      {/* ================= Tools Card ================= */}
      {/* <div className="bg-[#111827] rounded-3xl p-10 shadow-xl border border-white/10 hover:border-pink-600/40 transition duration-500">
        <h3 className="text-2xl font-semibold mb-8 text-pink-500">
          Tools
        </h3>

        <div className="flex flex-wrap gap-4">
          {["Git", "GitHub", "VS Code", "Vite", "Postman", "Figma (Basics)"].map((skill, index) => (
            <div
              key={index}
              className="relative px-5 py-2 bg-[#1F2937] rounded-lg text-sm cursor-pointer overflow-hidden group"
            >
              {skill}

              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
            </div>
          ))}
        </div>
      </div> */}

    </div>
  </div>
</section>
  )
}

export default Skills
