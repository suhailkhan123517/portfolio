"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import ParticlesContainer from "./ParticlesContainer";
import React, { useState } from "react";

const OnBoarding = () => {
  const { data: session } = useSession();
  const inputRef = React.useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  const avatar = false;
  // const avatar = session?.user?.image;

  return (
    <>
      <div className="flex items-center justify-center w-full sm:px-16 max-sm:m-5">
        <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0">
          <ParticlesContainer />
        </div>
        <div className="w-full relative max-w-lg">
          <div className="absolute top-12 -sm:left-12  left-0 sm:w-72 sm:h-72 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
          <div className="absolute top-12 -sm:right-12  right-10 sm:w-72 sm:h-72 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-60 -sm:left-12 left-0  sm:w-72 sm:h-72 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute top-60 -sm:right-12  right-10 sm:w-72 sm:h-72 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>
          <div className="relative space-y-4 ">
            <div className="bg-white py-7 sm:px-10 px-6 shadow-2xl  rounded-3xl ">
              <form className="flex flex-col gap-5 w-full">
                <div className="flex justify-center flex-col items-center">
                  <div
                    onClick={handleImageClick}
                    className="bg-gray-200  rounded-full w-28 h-28 flex justify-center items-center overflow-hidden"
                  >
                    {image ? (
                      <>
                        <div className="relative">
                          <Image
                            src={URL.createObjectURL(image)}
                            alt="profile image"
                            width={200}
                            height={200}
                          />
                        </div>
                      </>
                    ) : (
                      <Image
                        src="/profile.svg"
                        alt="profile image"
                        width={80}
                        height={80}
                      />
                    )}
                  </div>

                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="hidden"
                    ref={inputRef}
                  />
                </div>
                <div className="mt-10 w-full">
                  <div>
                    <label className="mb-2 text-lg font-medium">
                      {" "}
                      Username{" "}
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-lg font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="Full Name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="mb-2 text-lg font-medium">Email</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full"
                    />
                  </div>
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnBoarding;
