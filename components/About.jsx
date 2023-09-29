"use client";
import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Link from "next/link";
import { education, experience, skills } from "@/utils/data";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <>
      <section className="bg-[#edf2f8] py-10 my-10 min-h-screen grid place-items-center relative">
        <div className="container mx-auto ">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="relative w-[500px] h-[500px] ">
                <Image
                  src="/about.webp"
                  alt="Portfolio About Image"
                  fill={true}
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div>
              <h2 className="head_text">About Me</h2>
              <p className="desc">
                I am a full stack web developer with a passion for creating
                interactive and responsive web application. I have experience
                working with JavaScript, React, Next, Node.js, Express, Mongodb,
                HTML, CSS and Github. I am quick learner and I am always looking
                to expand my knowledge and skills set. I am a team player and I
                am excited to work with others to create amazing application.
              </p>
              <div className="flex flex-row mt-8 gap-6">
                <TabButton
                  selectTab={() => handleChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </TabButton>
                <TabButton
                  selectTab={() => handleChange("experience")}
                  active={tab === "experience"}
                >
                  Experience
                </TabButton>
                <TabButton
                  selectTab={() => handleChange("educations")}
                  active={tab === "educations"}
                >
                  Educations
                </TabButton>
              </div>
              <div className="mt-2">
                {tab === "skills" && (
                  <>
                    <div className="grid grid-cols-5 gap-4 mt-10 relative">
                      <div className="absolute top-0 -sm:left-8  left-0 sm:w-60 sm:h-60 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                      <div className="absolute top-0 -sm:right-8  right-10 sm:w-60 sm:h-60 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                      <div className="absolute top-10 -sm:left-8 left-0  sm:w-60 sm:h-60 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                      {skills.map((item) => (
                        <div
                          key={item.id}
                          className="border relative bg-white hover:border-blue-600 hover:bg-gray-100  border-gray-400  grid place-items-center py-5 rounded-lg hover:shadow-xl transition duration-200"
                        >
                          <div className="relative w-12 h-12">
                            <Image src={item.img} alt="" fill={true} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                {tab === "educations" && (
                  <div className="mt-8 relative">
                    {education.map((item) => (
                      <>
                        <div className="relative">
                          <div className="absolute top-0 -sm:left-8  left-0 sm:w-60 sm:h-60 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                          <div className="absolute top-0 -sm:right-8  right-10 sm:w-60 sm:h-60 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                          <div className="absolute top-10 -sm:left-8 left-0  sm:w-60 sm:h-60 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                          <div
                            key={item.id}
                            className="border relative mb-5 border-gray-200 hover:border-blue-600 bg-white shadow-xl px-5 py-3 rounded-lg"
                          >
                            <div className="flex flex-row gap-5 my-1">
                              <span className="py-[2px] px-3 bg-gradient-to-r  text-sm from-blue-600 to-cyan-600 rounded-full text-white">
                                {item.startDate}
                              </span>
                              <span className="py-[2px] px-3 bg-gradient-to-r  text-sm from-blue-600 to-cyan-600 rounded-full text-white">
                                {item.startEnd}
                              </span>
                            </div>
                            <div className="flex flex-row gap-5 mt-2">
                              <span className="text-lg text-gray-600">
                                Collage :
                              </span>
                              <Link href="#">
                                <span className="text-lg text-black font-semibold hover:underline hover:text-blue-600">
                                  {item.collage}
                                </span>
                              </Link>
                            </div>
                            <div className="flex flex-row gap-5 mt-2">
                              <span className="text-lg text-gray-600">
                                Course :
                              </span>
                              <div>
                                <span className="text-lg text-black font-semibold mr-2">
                                  {item.course}
                                </span>
                                <span className="text-blue-600  font-semibold">
                                  {item.field}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-row gap-5 mt-2">
                              <span className="text-lg text-gray-600">
                                Percentage :
                              </span>
                              <span className="text-blue-600  font-semibold">
                                {item.percentage}
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                )}
                {tab === "experience" && (
                  <div className="mt-8">
                    {experience.map((item) => (
                      <>
                        <div className="relative">
                          <div className="absolute top-0 -sm:left-8  left-0 sm:w-60 sm:h-60 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                          <div className="absolute top-0 -sm:right-8  right-10 sm:w-60 sm:h-60 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                          <div className="absolute top-10 -sm:left-8 left-0  sm:w-60 sm:h-60 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                          <div
                            key={item.id}
                            className="border relative border-gray-200 hover:border-blue-600 bg-white shadow-xl px-5 py-3 rounded-lg"
                          >
                            <div className="flex flex-row justify-end gap-5 my-1">
                              <span className="py-[2px] px-3 bg-gradient-to-r  text-sm from-blue-600 to-cyan-600 rounded-full text-white">
                                {item.startDate}
                              </span>

                              <span className="py-[2px] px-3 bg-gradient-to-r  text-sm from-blue-600 to-cyan-600 rounded-full text-white">
                                {item.startEnd}
                              </span>
                            </div>
                            <div className="flex flex-row gap-5 mt-2">
                              <span className="text-lg text-gray-600">
                                Company :
                              </span>
                              <Link href="#">
                                <span className="text-lg text-black font-semibold hover:underline hover:text-blue-600">
                                  {item.company}
                                </span>
                              </Link>
                            </div>
                            <div className="flex flex-row gap-5 mt-2">
                              <span className="text-lg text-gray-600">
                                Jop Title :
                              </span>
                              <span className="text-lg text-black font-semibold mr-2">
                                {item.jotTitle}
                              </span>
                            </div>
                            <div className="flex flex-row gap-5 mt-2">
                              <span className="text-lg text-gray-600">
                                Experience :
                              </span>
                              <span className="text-lg text-black font-semibold mr-2">
                                {item.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
