import FoodDeliveryImage from "../images/FoodDelivery.png"
import MyRecipi from "../images/My_Recipi.jpg"
import Garage from "../images/AM_Motors.png"
import Thumblify from "../images/Thumblify.png"
import GithubProfileViewer from "../images/ProfileViewer.png"
// const Projects=()=>{
//     console.log(FoodDeliveryImage);
    
//     const projectsData=
//     [
//         {
//             image:FoodDeliveryImage,
//             name:"FoodDelivery Website",
//             description:"Built FoodDelivery Web in which user can order food",
//             skills:['React','TaiwindCss','Javascript']
//         },
//          {
//             image:MyRecipi,
//             name:"My_Recipi Website",
//             description:"Built FoodDelivery Web in which user can order food",
//             skills:['React','GeminiApi','TaiwindCss','Javascript']
//         },
//          {
//             image:FoodDeliveryImage,
//             name:"FoodDelivery Web",
//             description:"Built FoodDelivery Web in which user can order food",
//             skills:['React','TaiwindCss','Javascript']
//         },
//          {
//             image:FoodDeliveryImage,
//             name:"FoodDelivery Web",
//             description:"Built FoodDelivery Web in which user can order food",
//             skills:['React','TaiwindCss','Javascript']
//         },
//          {
//             image:FoodDeliveryImage,
//             name:"FoodDelivery Web",
//             description:"Built FoodDelivery Web in which user can order food",
//             skills:['React','TaiwindCss','Javascript']
//         },
//          {
//             image:FoodDeliveryImage,
//             name:"FoodDelivery Web",
//             description:"Built FoodDelivery Web in which user can order food",
//             skills:['React','TaiwindCss','Javascript']
//         },
//     ]
//        return (
//         <section className=" mb-10 w-[90%]">
//                 <div className="max-w-6xl grid grid-col-1  md:grid-cols-3 gap-8 rounded-xl h-50">
//                      {
//                          projectsData.map((proj)=>(
//                            <div className="flex flex-col bg-gray-800 rounded-2xl h-120 gap-4">
//                              <img src={proj.image} className="w-full h-60 rounded-2x" ></img>
//                              <div >
//                                  <h1 className="text-4xl font-bold ">{proj.name}</h1>
//                               <p className="text-mono">{proj.description}</p>
//                               <div className="flex text-mono gap-2 ">
//                                  {
//                                 proj.skills.map((skill)=>(
//                                 <div className="flex  gap-2 border p-1 bg-slate-900 rounded-2xl px-2 py-1">{skill}</div>
//                                 ))
//                               }
//                               </div>
//                              </div>
                             
                             
//                             </div>
//                       ))
//                      }
//                 </div>
//          </section>
//        )
// }
// export default  Projects


const projects = [
  {
    title: "Foodie (Food Delivery App)",
    desc: "Built a full frontend food ordering experience with cart & filtering.",
    tech: ["React", "JavaScript", "Tailwind"],
    features: [
      "Cart logic",
      "Search & filters",
      "Responsive UI",
    ],
    live: "https://food-delivery-app-wfys.vercel.app/#",
    code: "#",
    image: FoodDeliveryImage,
  },
  {
    title: "AI Recipe Generator",
    desc: "Generate recipes using AI based on ingredients",
    tech: ["React", "API", "JavaScript"],
    features: [
      "AI integration",
      "Dynamic results",
      "User input based",
    ],
    live: "https://my-recipi-ai-isn5.vercel.app/#",
    code: "#",
    image:MyRecipi,
  },
  {
    title: "Github profile Viewer",
    desc: "Created a tool to search GitHub usernames and generate random IDs.",
    tech: ["React", "API", "JavaScript"],
    features: [
      "AI integration",
      "Dynamic results",
      "User input based",
    ],
    live: "https://githubprofile-viewer-seven.vercel.app/",
    code: "#",
    image:GithubProfileViewer,
  },
   {
    title: "Garage Management Dashboard",
    desc: "BAdmin dashboard to manage orders, and customer data.",
    tech: ["React", "JavaScript", "Tailwind"],
    features: [
      "Cart logic",
      "Search & filters",
      "Responsive UI",
    ],
    live: "#",
    code: "#",
    image: Garage,
  },
   {
    title: "Thumblify (Ai Based thumbnail Generator)",
    desc: "Built a full frontend of Thumbnail generator Web.",
    tech: ["React","Gemini", "JavaScript", "Tailwind"],
    features: [
      "Cart logic",
      "Search & filters",
      "Responsive UI",
    ],
    live: "#",
    code: "#",
    image: Thumblify,
  },
   
];

const Project = () => {
  return (
    <section className="bg-slate-900 text-white py-16 px-6 " id="projects">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-gray-400 text-sm">{proj.desc}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              {/* <ul className="text-sm text-gray-300 list-disc list-inside">
                {proj.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul> */}

              {/* Buttons */}
              <div className="flex gap-4 pt-3">
                <a
                  href={proj.live}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm"
                >
                  Live
                </a>
                <a
                  href={proj.code}
                  className="border border-gray-500 px-4 py-2 rounded-md text-sm hover:bg-gray-700"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;