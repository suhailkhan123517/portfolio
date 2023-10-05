"use client";
import { useSession } from "next-auth/react";
import ParticlesContainer from "./ParticlesContainer";

const capitalizeWords = (inputString) => {
  if (!inputString) return "";
  const word = inputString.split(" ");
  // Check if there are more than two words
  if (word.length > 2) {
    // If more than two words, trim the array to the first two words
    word.length = 2;
  }
  const capitalizeWord = word.map((word) => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word;
    }
  });
  const logoName = capitalizeWord.join(" ");
  return logoName;
};

const Dashboard = () => {
  const { data: session } = useSession();
  const inputString = session?.user?.name;
  const capitalizedString = capitalizeWords(inputString);
  return (
    <>
      <div className="flex justify-center items-center h-[60vh] relative ">
        <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 -z-10">
          <ParticlesContainer />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h1 className="orange_gradient">Welcome to Dashboard</h1>
          <h2 className="blue_gradient">{capitalizedString} </h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
