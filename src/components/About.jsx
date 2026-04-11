import React from 'react'

const About = () => {
  return (
   <section id="about" className="py-28 px-6 bg-[#0B0F19] flex ">

  <div className="max-w-6xl mx-auto gap-16 items-center   justify-center">

    {/* LEFT SIDE (TEXT) */}
    <div className="space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold">
        About <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
      </h2>

      <p className="text-gray-400 text-lg leading-relaxed">
        I’m a passionate <span className="text-white font-medium">React Developer</span> who loves building modern, responsive and user-friendly web applications.
      </p>

      <p className="text-gray-400 leading-relaxed">
        I enjoy turning ideas into real products using clean UI, smooth interactions, and efficient state management.
      </p>

      <p className="text-gray-400 leading-relaxed">
        Currently, I’m focused on improving my skills and looking for opportunities where I can grow and contribute to real-world projects.
      </p>

      {/* Highlights */}
      <div className="grid grid-cols-2 gap-4 pt-6 text-sm">

        <div className="bg-[#111827] p-4 rounded-xl border border-white/10">
          ⚡ React Developer
        </div>

        <div className="bg-[#111827] p-4 rounded-xl border border-white/10">
          🎨 UI Focused
        </div>

        <div className="bg-[#111827] p-4 rounded-xl border border-white/10">
          🚀 Fast Learner
        </div>

        <div className="bg-[#111827] p-4 rounded-xl border border-white/10">
          💡 Problem Solver
        </div>

      </div>

    </div>

    {/* RIGHT SIDE (VISUAL) */}
    {/* <div className="relative flex justify-center"> */}

      {/* Glow Background */}
      {/* <div className="absolute w-72 h-72 bg-pink-600/20 blur-3xl rounded-full"></div> */}

      {/* Image / Card */}
      {/* <div className="relative bg-[#111827] p-6 rounded-2xl border border-white/10 shadow-xl">

        <img
          src="/images/profile.png"  // 👉 apni image ya illustration dalna
          alt="profile"
          className="w-64 h-64 object-cover rounded-xl"
        />

     </div> */}

    {/* </div> */}

  </div>
</section>
  )
}

export default About
