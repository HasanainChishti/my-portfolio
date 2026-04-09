
export default function Education() {
  const educationData = [
    {
      title: " B.E. in Computer Engineering",
      school: "Goverment Engineering College Modasa",
      years: "2020 - 2025",
    },
    
    {
      title: "12th (Science)",
      school: "Makhdum Higher Secondary School",
      years: "2018 - 2020",
    }
      
    
  ];

  return (
      <section className=" py-20 w-full flex flex-col  gap-10">
         <h1 className="font-bold text-4xl text-center ">Education</h1>
        <div className="max-w-20xl  space-y-16 mx-auto  px-6  w-[75%]">
           {
            educationData.map((data,index)=>(
            <div className="bg-slate-900 p-6 rounded-xl  shadow-md w-[70%] mx-auto
               space-y-8">
               <h1>{data.title}</h1>
                 <h3>{data.school}</h3>
                 <p>{data.years}</p>
            </div>
        
         )
               
            )
           }
        </div>
      </section>
  );
}