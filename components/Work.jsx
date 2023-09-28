"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { filterCatagories, projectData } from "@/utils/data";
import ProjectTag from "./ProjectTag";

const Work = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filterProject = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <>
      <section className="min-h-screen grid place-items-center bg-[#edf2f8] py-14">
        <div className="container mx-auto">
          <h2 className="head_text text-center">My Project</h2>
          <div className="flex items-center justify-center mt-10">
            <div className="flex items-center gap-5">
              <ProjectTag
                onClick={handleTagChange}
                name="All"
                isSelected={tag === "All"}
              />

              {filterCatagories.map((item) => {
                const { tagName } = item;
                return (
                  <>
                    <ProjectTag
                      onClick={handleTagChange}
                      name={tagName}
                      isSelected={tag === tagName}
                    />
                  </>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5 mt-16">
            {filterProject.map((item) => (
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
