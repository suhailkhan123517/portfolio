import ProjectCard from "./ProjectCard";
import { projectData } from "@/utils/data";

const Work = () => {
  return (
    <>
      <section className="min-h-screen grid place-items-center bg-[#edf2f8] py-10 my-10">
        <div className="container mx-auto">
          <h2 className="head_text text-center">My Project</h2>
          <div className="flex items-center justify-center mt-10">
            <div className="flex items-center gap-5">
              <button className="py-1 px-3 bg-[#313bac] text-white rounded-md">
                All
              </button>
              <button className="py-1 px-3 border transition-all duration-200 border-transparent bg-white rounded-md hover:border-[#313bac]">
                Web App
              </button>
              <button>Mobile App</button>
              <button>Next Js</button>
              <button>UI/UX</button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 my-16">
            {projectData.map((item) => (
              <ProjectCard
                key={item.id}
                imgUrl={item.img}
                title={item.title}
                desc={item.desc}
                tag={item}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
