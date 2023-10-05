"use client";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ParticlesContainer from "./ParticlesContainer";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const OnBoarding = () => {
  const { data: session } = useSession();
  const [latestFile, setLatestFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const avatar = false;
  // const avatar = session?.user?.image;

  const onDrop = useCallback((acceptedFiles) => {
    // Keep only the latest dropped file
    const latest = acceptedFiles[acceptedFiles.length - 1];
    setLatestFile(latest);

    // Create a Blob object from the latest file
    const blob = new Blob([latest]);

    // Create a temporary URL for the Blob and set it as the image source
    setImageUrl(URL.createObjectURL(blob));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*", // Define accepted file types (e.g., images)
    multiple: false,
  });

  return (
    <>
      <div className="flex items-center justify-center w-full sm:px-16 max-sm:m-5">
        <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0">
          <ParticlesContainer />
        </div>
        <div className="w-full max-w-xl relative">
          <div className="absolute top-12 -sm:left-12  left-0 sm:w-72 sm:h-72 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
          <div className="absolute top-12 -sm:right-12  right-10 sm:w-72 sm:h-72 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-60 -sm:left-12 left-0  sm:w-72 sm:h-72 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute top-60 -sm:right-12  right-10 sm:w-72 sm:h-72 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>

          <div className=" relative space-y-4 ">
            <div className="bg-white py-7 sm:px-10 px-6 shadow-2xl  rounded-3xl">
              <form className="flex flex-col gap-5 w-full">
                {avatar ? (
                  <>
                    <div className="flex items-center justify-center rounded-full">
                      <div className="relative h-[100px] w-[100px] rounded-full p-2">
                        <Image
                          src={avatar}
                          fill={true}
                          alt="profile image"
                          className="object-contain rounded-full"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {!latestFile ? (
                      <>
                        <div className="flex items-center justify-center">
                          <div
                            className="flex  justify-center items-center h-24 w-24 rounded-full border-dashed border-2  border-gray-800 hover:border-indigo-600 hover:bg-gray-100"
                            {...getRootProps()}
                          >
                            <input {...getInputProps()} />
                            <Image
                              src="/profile.svg"
                              alt="profile Image"
                              width={50}
                              height={50}
                            />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-center flex-col">
                          <div className="flex  justify-center  items-center h-24 w-24 rounded-full border-dashed border-2  border-gray-800 hover:border-indigo-600 hover:bg-gray-100">
                            <Image
                              src={imageUrl}
                              width={100}
                              height={100}
                              alt="blog image"
                              className="rounded-full"
                            />
                          </div>
                          <div>{latestFile.name}</div>
                        </div>
                      </>
                    )}
                  </>
                )}

                <div className="flex items-center sm:flex-row flex-col gap-3 w-full ">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-black  p-2 rounded-md  w-full outline-indigo-600"
                  />
                  <input
                    type="text"
                    placeholder="Email Name"
                    className="border border-black  p-2 rounded-md  w-full outline-indigo-600"
                  />
                </div>
                <div className="flex items-center sm:flex-row flex-col gap-3 w-full ">
                  <div>
                    <label htmlFor="">Email Address</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="border border-black  p-2 rounded-md  w-full outline-indigo-600"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Date Of Birth</label>
                    <input
                      type="date"
                      className="border border-black  p-2 rounded-md  w-full outline-indigo-600"
                    />
                  </div>
                </div>
                <div>
                  <h4>Gender</h4>
                  <div className="flex items-center gap-7">
                    <div className="flex items-center gap-2">
                      <input type="radio" />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" />
                      <label htmlFor="Female">Female</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" />
                      <label htmlFor="Common">Common</label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3>I have Vehicle</h3>
                  <div className="flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <label htmlFor="male">Cycle</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <label htmlFor="Female">Bike</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" />
                      <label htmlFor="Common">Car</label>
                    </div>
                  </div>
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    rows="4"
                    className="border border-black  p-2 rounded-md  w-full outline-indigo-600"
                    placeholder="Bio"
                  ></textarea>
                </div>
                <button className="px-4 py-2 bg-black text-white hover:bg-black/70 rounded-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnBoarding;
