
export default function Education() {
  const educationData = [
    {
      degree: " B.E. in Computer Engineering",
      institute: "Goverment Engineering College Modasa",
      year: "2020 - 2025",
      address:"Modasa Gujrat"
    },
    
    {
      degree: "12th (Science)",
      institute: "Makhdum Higher Secondary School",
      year: "2018 - 2020",
      address:"Modasa Gujrat"
    }
      
    
  ];

  return (
      // <section className=" py-20 w-full flex flex-col  gap-10">
      //    <h1 className="font-bold text-4xl text-center ">Education</h1>
      //   <div className="max-w-20xl  space-y-16 mx-auto  px-6  w-[75%]">
      //      {
      //       educationData.map((data,index)=>(
      //       <div className="bg-slate-900 p-6 rounded-xl  shadow-md w-[70%] mx-auto
      //          space-y-8">
      //          <h1>{data.title}</h1>
      //            <h3>{data.school}</h3>
      //            <p>{data.years}</p>
      //       </div>
        
      //    )
               
      //       )
      //      }
      //   </div>
      // </section>
      <section id="education" className="py-28 px-6 bg-[#0B0F19]">

  <div className="max-w-6xl mx-auto space-y-16">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-center">
      My <span className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Education</span>
    </h2>

    {/* Timeline */}
    <div className="space-y-12">

      {educationData.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-stretch"
          >

            {/* LEFT SIDE */}
            {isLeft ? (
              <div className="bg-[#111827] p-6 rounded-xl border border-white/10 shadow-lg hover:-translate-y-2 transition duration-300">
                <h3 className="text-2xl font-semibold">{item.degree}</h3>
                <p className="text-gray-400 text-mono">{item.institute}</p>
                <p className="text-mono  mt-2">{item.year}</p>
                <p className="text-mono  mt-2">{item.address}</p>
              </div>
            ) : (
              <div></div>
            )}

            {/* CENTER DOT + LINE */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
              <div className="w-1 bg-purple-600 flex-1"></div>
            </div>

            {/* RIGHT SIDE */}
            {!isLeft ? (
              <div className="bg-[#111827] p-6 rounded-xl border border-white/10 shadow-lg hover:-translate-y-2 transition duration-300">
                <h3 className="text-2xl font-semibold">{item.degree}</h3>
                <p className="text-gray-400">{item.institute}</p>
               <p className="text-mono  mt-2">{item.year}</p>
                <p className="text-mono  mt-2">{item.address}</p>
              </div>
            ) : (
              <div></div>
            )}

          </div>
        );
      })}

    </div>

  </div>
</section>
  );
}