import React from 'react'
import { motion } from "framer-motion";
import image from "../images/image.png"
const Hero = () => {
  return (
    <section className=" w-[95%] h-max mt-20 min-h-screen flex justify-center items-center bg-[#0B0F19] px-6 relative overflow-hidden">

  {/* Background Glow Effects */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl -z-10"></div>
  <div className="absolute bottom-0   right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -z-10"></div>
    <div className="flex flex-col w-full gap-20">
 <div className="max-w-7xl h-max mx-auto grid md:grid-cols-2 gap-16 items-center shadow-md">

    {/* LEFT SIDE */}
    <div className="space-y-4">

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Hi, I'm <span className="text-linear-to-r from-purple-600 to-pink-600">Hasanain Chisti</span>
      </h1>

      {/* Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
        Frontend Developer 
      </h2>

      {/* Description */}
      <p className="text-gray-400 text-xl font-bold leading-relaxed max-w-xl">
       I specialize in creating beautiful, functional websites using modern technologies.
      </p>

      {/* Buttons */}
      <div className="flex gap-6 pt-4">
        <a
          href="#contact"
          className="px-8 py-3 bg-linear-to-r from-purple-600 to-pink-400 rounded-4xl shadow-md font-medium hover:scale-105 transition duration-300"
        >
          Contact Me
        </a>

        <a
          href="#projects"
          className="px-8 py-3 border border-white  text-gray-200 rounded-lg hover:bg-pink-600 hover:text-white transition duration-300"
        >
          View Projects
        </a>
      </div>

    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative flex justify-center">

      {/* Glow Behind Image */}
      <div className="absolute w-80 h-80 bg-pink-600/30 rounded-full blur-3xl"></div>

      <img
        src={image}
        alt="Developer"
        className="relative w-full max-w-max rounded-3xl shadow-2xl  hover:scale-105 transition duration-500"
      />

    </div>
    
  </div>
     <div className="scroll w-full flex justify-center align-bottom  bg-amber-400">
   <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2 }}
  className="absolute bottom-10 flex flex-col items-center text-gray-400"
>
  <span className="text-sm mb-2">Scroll</span>
  <div className="w-0.5 h-8 bg-gray-500 animate-bounce"></div>
</motion.div>
</div>
    </div>
 
  
</section>
  )
}

export default Hero
