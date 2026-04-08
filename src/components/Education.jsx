
export default function Education() {
  const educationData = [
    {
      title: "B.Tech / B.E. in Computer Engineering",
      school: "Your College Name",
      years: "2022 - 2026",
      location: "City, State",
      desc:
        "Focused on Data Structures, Web Development (React.js), Database systems, and Software Engineering. Built frontend & backend projects using React and Node.js."
    },
    {
      title: "12th (Science)",
      school: "Your Higher Secondary School",
      years: "2020 - 2022",
      location: "City, State",
      desc:
        "PCM (Physics, Chemistry, Mathematics). Gained strong analytical and problem solving fundamentals."
    },
    {
      title: "11th (Science)",
      school: "Your School Name (Class 11)",
      years: "2019 - 2020",
      location: "City, State",
      desc:
        "Science stream with focus on fundamentals. Participated in coding / science projects (if any, mention briefly)."
    }
  ];

  return (
      <section className=" py-20 w-full flex flex-col  gap-10">
         <h1 className="font-bold text-4xl text-center ">Education</h1>
        <div className="max-w-20xl  space-y-16 mx-auto  px-6  w-[75%]">
           {
            educationData.map((data,index)=>(
              
               index%2?(
                       <div className={` ${index%2?`md:grid-cols-[1fr_auto_1fr]`:`md:grid-cols-[1fr_auto_1fr]`} `+"grid grid-cols-1 md:gap-3"}>
          {/* left card */}
            <div className="bg-slate-900 p-6 rounded-xl  shadow-md w-full   space-y-8">
               <h1>Computer Engineering</h1>
                 <h3>Gec Modasa</h3>
                 <p>2020-2025</p>
            </div>
            {/* dot+line */}
            <div className="flex flex-col gap-2 items-center">
                    <div className="rounded-full w-4 h-4 bg-purple-900"></div>
                    <div className="w-0.5 h-full bg-purple-800"></div>
            </div>
            {/* right empty */}
            <div></div>
         </div>):(
               <div className={` ${index%2?`md:grid-cols-[1fr_auto_1fr]`:`md:grid-cols-[1fr_auto_1fr]`} `+"grid grid-cols-1 md:gap-3"}>
          {/* left card */}
               <div></div>
            {/* dot+line */}
            <div className="flex flex-col gap-2 items-center">
                    <div className="rounded-full w-4 h-4 bg-purple-900"></div>
                    <div className="w-0.5 h-full bg-purple-800"></div>
            </div>
            {/* right empty */}
         
            <div className="bg-slate-900 p-6 rounded-xl  shadow-md w-full   space-y-8">
               <h1>Computer Engineering</h1>
                 <h3>Gec Modasa</h3>
                 <p>2020-2025</p>
            </div>
         </div>
         )
               
            ))
           }
        </div>
      </section>
  );
}