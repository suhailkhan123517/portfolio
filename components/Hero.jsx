"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ParticlesContainer from "./ParticlesContainer";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <section className="w-full py-10 min-h-screen relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:gap-10 gap-0 mt-16">
            <div className="md:mt-10">
              <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 -z-10">
                <ParticlesContainer />
              </div>
              <h2 className="head_text">Hy! I Am</h2>
              <h1 className="orange_gradient my-4">Mohammad Suhail</h1>
              <span className="blue_gradient">
                <TypeAnimation
                  sequence={[
                    "A Full Stack Developer",
                    1000,
                    "A Web Developer",
                    1000,
                    "Freelancer",
                    1000,
                    "A YouTuber",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
              <p className="desc">
                A Full Stack Developer Developer with high level of experience
                in web designing and development, producting the Quality work
              </p>
              <div className="lg:mt-10 mt-5 flex gap-5">
                <Link
                  href="#"
                  className="rounded-full border border-black bg-black py-2 px-5 text-white transition-all hover:bg-white hover:text-black"
                >
                  See Portfolio
                </Link>
                <Link
                  href="#"
                  className="rounded-full border border-black  py-2 px-5  transition-all hover:bg-black hover:text-white"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="">
              <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 -z-10">
                <ParticlesContainer />
              </div>

              <div className="relative grid place-items-center mt-8">
                <div className="relative xl:w-[500px] xl:h-[500px] lg:w-[370px] lg:h-[370px] w-[300px] h-[300px] grid place-items-center group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-yellow-600  to-pink-600 blur opacity-75 rounded-full lg:animate-spin-slow"></div>
                  <div className="relative xl:w-[480px] xl:h-[480px]  lg:w-[360px] lg:h-[360px] w-[300px] h-[300px] rounded-full  overflow-hidden  group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ">
                    <Image
                      src="/bg-img.jpg"
                      fill={true}
                      alt="Portfolio Banner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid place-items-center -md:mt-5 mt-5">
            <Link
              href=""
              className="relative h-12 w-8 border-[2px] border-black rounded-full scroll_btn"
            ></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
