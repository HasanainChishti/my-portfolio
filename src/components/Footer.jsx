import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-[#0B0F19] border-t border-white/10 py-10 px-6">

  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

    {/* Left Side */}
    <div className="text-center md:text-left">
      <h3 className="text-xl font-semibold text-white">
        Hasanain Chisti
      </h3>
      <p className="text-gray-400 text-sm mt-1">
        React Developer | Building modern web experiences 🚀
      </p>
    </div>

    {/* Center Links */}
    <div className="flex gap-6 text-gray-400 text-sm">
      <a href="#about" className="hover:text-pink-600 transition">About</a>
      <a href="#projects" className="hover:text-pink-600 transition">Projects</a>
      <a href="#contact" className="hover:text-pink-600 transition">Contact</a>
    </div>

    {/* Right Socials */}
    <div className="flex gap-4">
      <a
        href="#"
        className="px-4 py-2 border border-white/10 rounded-lg hover:bg-pink-600 hover:text-white transition"
      >
        GitHub
      </a>
      <a
        href="#"
        className="px-4 py-2 border border-white/10 rounded-lg hover:bg-purple-600 hover:text-white transition"
      >
        LinkedIn
      </a>
    </div>

  </div>

  {/* Bottom */}
  <div className="text-center text-gray-500 text-sm mt-8">
    © {new Date().getFullYear()} Hasanain Chisti. All rights reserved.
  </div>

</footer>
  )
}

export default Footer
