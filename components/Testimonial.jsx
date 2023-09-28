"use client";
import { testimonial } from "@/utils/data";
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
                <div className="p-10 bg-[#edf2f8] shadow-xl flex items-center flex-row gap-10 min-h-[250px] max-w-3xl rounded-xl">
                  <div className="w-28">
                    <div className="relative w-20 h-20 border-gray-200 border rounded-full ">
                      <Image
                        src="/css.png"
                        alt="testimonial image"
                        fill={true}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-10">
                    <p> {testimonialsData[currentIndex].description} </p>
                    <div>
                      <p className="text-xl">
                        {" "}
                        {testimonialsData[currentIndex].name}{" "}
                      </p>
                      <p className="text-gray-600">
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
