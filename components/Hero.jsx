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
      <section className="w-full lg:h-screen relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-10 mt-16">
            <div className="mt-10">
              <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 -z-10">
                <ParticlesContainer />
              </div>
              <motion.h2
                variants={fadeIn("down", 0.1)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="head_text"
              >
                Hy! I Am
              </motion.h2>
              <motion.h1
                variants={fadeIn("down", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="orange_gradient my-4"
              >
                Mohammad Suhail
              </motion.h1>
              <motion.span
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="blue_gradient"
              >
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
              </motion.span>
              <motion.p
                variants={fadeIn("down", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="desc"
              >
                A Full Stack Developer Developer with high level of experience
                in web designing and development, producting the Quality work
              </motion.p>
              <motion.div
                variants={fadeIn("down", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="lg:mt-10 mt-5 flex gap-5"
              >
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
              </motion.div>
            </div>
            <div className="">
              <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 -z-10">
                <ParticlesContainer />
              </div>

              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 1, ease: "easeInOut" }}
                className="relative grid place-items-center mt-8"
              >
                <div className="relative lg:w-[500px] lg:h-[500px] w-[360px] h-[360px] grid place-items-center group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-yellow-600  to-pink-600 blur opacity-75 rounded-full animate-spin-slow"></div>
                  <div className="relative lg:w-[480px]  rounded-full  overflow-hidden lg:h-[480px] w-[360px] h-[360px] group-hover:opacity-100 transition duration-1000 group-hover:duration-200 ">
                    <Image
                      src="/bg-img.jpg"
                      fill={true}
                      alt="Portfolio Banner"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="grid place-items-center -mt-5">
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
