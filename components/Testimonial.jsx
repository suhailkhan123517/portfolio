"use client";
import { logoSlide, testimonial } from "@/utils/data";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Testimonial = () => {
  const [testimonialsData, setTestimonialsData] = useState(testimonial);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section className="min-h-screen py-12 grid place-items-center">
        <div className="container mx-auto">
          <h1 className="head_text text-center mb-8">Testimonial</h1>
          <div className="flex items-center justify-center flex-col">
            {testimonialsData.length && (
              <>
                <div className="md:p-10 p-3 bg-[#edf2f8] shadow-xl flex items-center justify-center md:flex-row  flex-col md:gap-10 gap-5 min-h-[250px] max-w-3xl rounded-xl">
                  <div className="md:w-28 w-14 ">
                    <div className="relative md:w-20 md:h-20 w-12 h-12 rounded-full ">
                      <Image
                        src={testimonialsData[currentIndex].avatar}
                        alt="testimonial image"
                        fill={true}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:gap-10 gap-6">
                    <p> {testimonialsData[currentIndex].description} </p>
                    <div>
                      <p className="md:text-xl  text-lg">
                        {" "}
                        {testimonialsData[currentIndex].name}{" "}
                      </p>
                      <p className="text-gray-600 max-md:text-sm">
                        {" "}
                        {testimonialsData[currentIndex].country}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="mt-8 flex flex-row gap-10">
              <div
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? testimonialsData.length - 1
                      : currentIndex - 1
                  )
                }
                className="w-14 h-14 bg-[#edf2f8] rounded-full shadow-xl hover:bg-gray-200 transition duration-200 grid place-items-center"
              >
                <IoIosArrowBack className="text-3xl text-gray-600" />
              </div>
              <div
                onClick={() =>
                  handleClick(
                    currentIndex === testimonialsData.length - 1
                      ? 0
                      : currentIndex + 1
                  )
                }
                className="w-14 h-14 bg-[#edf2f8] rounded-full shadow-xl hover:bg-gray-200 transition duration-200 grid place-items-center"
              >
                <IoIosArrowForward className="text-3xl   text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
