import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <nav id="navbar" className="fixed top-0 left-0 w-full  bg-white/1 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        {/* <h1 className="text-xl font-bold tracking-wide text-linear-to-r from-purple-600 to-pink-600">
          Hasanain
        </h1> */}
                <h1 className="font-bold text-2xl  bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Portfolio</h1>
        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {["home", "projects", "about", "contact"].map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`cursor-pointer capitalize transition ${
                active === item
                  ? "text-white"
                  : "hover:text-white"
              }`}
            >
           
              <a href={`#${item==="home"?"Hero":item}`}> {item} </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;