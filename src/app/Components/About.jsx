import Image from "next/image";
import React from "react";
import p1 from "../img/p1.jpg";
const aboutcard = [
  {
    title: "Strategic Location",
    description: "Located near DHA City, Karachi.",
    image: p1,
  },
  {
    title: "Strategic Location",
    description: "Located near DHA City, Karachi.",
    image: p1,
  },
  {
    title: "Strategic Location",
    description: "Located near DHA City, Karachi.",
    image: p1,
  },
  {
    title: "Strategic Location",
    description: "Located near DHA City, Karachi.",
    image: p1,
  },
];

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Agriplus</h2>
        <p className="mb-8">
          To revolutionize agriculture by maximizing production and quality...
        </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {
            aboutcard.map(()=>{
                return (
                  <div className="relative w-[300px] h-[200px] ">
                    {/* Image */}
                    <Image
                      src={p1}
                      alt="About Agriplus"
                      className="w-full h-full object-cover  opacity-60  hover:opacity-65"
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col  items-center justify-center">
                      <p className="text-black font-bold ">
                        Strategic Location
                      </p>
                      <p className="text-slate-600 ">
                        
                        Located near DHA City, Karachi.
                      </p>
                    </div>
                  </div>
                );
            })

              
        }
        </div>
      
      </div>
    </section>
  );
};

export default About;
