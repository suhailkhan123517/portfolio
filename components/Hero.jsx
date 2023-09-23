"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ParticlesContainer from "./ParticlesContainer";

const Hero = () => {
  return (
    <>
      <section className="w-full h-screen relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 gap-10 ">
            <div className="mt-[50%]">
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
                className="orange_gradient mt-4"
              >
                Mohammad Suhail
              </motion.h1>
              <motion.h3
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="blue_gradient mt-4"
              >
                A Full Stack Developer
              </motion.h3>
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
                className="mt-10 flex gap-5"
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
            <div className="h-screen relative">
              <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0">
                <ParticlesContainer />
              </div>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute bottom-0 right-[10%]"
              >
                <div className="relative w-[600px] h-[700px]">
                  <Image
                    src="/hero_img.png"
                    fill={true}
                    alt="Portfolio Banner"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
