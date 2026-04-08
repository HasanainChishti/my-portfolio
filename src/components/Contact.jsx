const Contact = () => {
  return (
    // <div className="flex flex-col w-[90%] gap-10 mt-10">
    //   <h1 className="text-4xl font-bold text-center text-slate-200">
    //     GEt In Touch
    //   </h1>
    //   <div className="grid grid-cols-2">
        
    //       <form action="" className="bg-gray-400 ">
    //         <input type="text"  placeholder="Eneter Your NAme" className="p-2 border shadow "/>
    //         <input type="text" placeholder="Eneter Your Email " className="p-2 border shadow " />
    //         <input type="text" placeholder="Subject" className="p-2 border shadow " />
    //           <button type="submit" className="">Send</button>
    //       </form>
        
    //     <div className="email flex flex-col gap-4 ">
    //       <h1>Contact information</h1>
    //       <p>hasanainChisti@gmail.com</p>
    //       <p>6355773421</p>
    //       <div>
    //         <a href="">LI</a>
    //         <a href="">Insta</a>
    //         <a href="">Git</a>
    //         <a href="">X</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section id="contact" className="py-28 px-6 bg-[#0B0F19] relative overflow-hidden">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-pink-600/20 blur-3xl rounded-full -z-10"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 blur-3xl rounded-full -z-10"></div>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE */}
    <div className="space-y-6">

      <h2 className="text-4xl md:text-5xl font-bold">
        Let's <span className="text-pink-400">Connect</span>
      </h2>

      <p className="text-gray-400 text-lg">
        I'm always open to new opportunities, collaborations or internships.  
        Feel free to reach out and let's build something amazing together.
      </p>

      {/* Contact Info */}
      <div className="space-y-4 pt-4 text-gray-300">
        <p>📧 hasanainchisti2003@email.com</p>
        <p>6355773421</p>
      </div>

      {/* Social Links */}
      <div className="flex gap-4 pt-6">
        <a href="https://github.com/HasanainChishti" className="px-4 py-2 border border-pink-600 rounded-lg hover:bg-pink-600 transition">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/muhammad-hasanain-chishti-1a1a76270/" className="px-4 py-2 border border-purple-600 rounded-lg hover:bg-purple-600 transition">
          LinkedIn
        </a>
      </div>

    </div>

    {/* RIGHT SIDE FORM */}
    <div className="bg-[#111827] p-8 rounded-2xl border border-white/10 shadow-xl">

      <form className="space-y-6">

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-[#1F2937] border border-white/10 focus:outline-none focus:border-pink-600"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-[#1F2937] border border-white/10 focus:outline-none focus:border-pink-600"
        />

        {/* Message */}
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-[#1F2937] border border-white/10 focus:outline-none focus:border-pink-600"
        ></textarea>

        {/* Button */}
        {/* <button
          type="submit"
          className="w-full py-3 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg font-medium hover:scale-105 transition duration-300"
        >
          Send Message
        </button> */}
        <a
  href="mailto:your@email.com"
  className="w-full block text-center py-3 bg-linear-to-r from-pink-600 to-purple-600 rounded-lg font-medium hover:scale-105 transition duration-300"
>
  Send Message
</a>

      </form>

    </div>

  </div>
</section>
  );
};
export default Contact;
