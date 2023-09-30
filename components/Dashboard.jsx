"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (name) {
        console.log(name);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="h-screen w-full grid place-items-center">
        <h1>Dashboard</h1>
        {name}
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter a text..."
            className="border-[2px]"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="bg-black px-3 py-1 text-white">
            {loading ? "Submitting..." : "Submit"}
          </button>
          <div className="flex flex-col gap-1 mt-2">
            <label className="text-black font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="border border-gray-300 py-2 px-4 rounded-md w-full"
                name="password"
              />
              {showPassword ? (
                <>
                  <AiFillEyeInvisible
                    className="absolute top-[8px]   right-3 text-3xl text-gray-700 cursor-pointer"
                    onClick={showPasswordToggle}
                  />
                </>
              ) : (
                <>
                  <AiFillEye
                    className="absolute top-[8px]  right-3 text-3xl text-gray-700 cursor-pointer"
                    onClick={showPasswordToggle}
                  />
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Dashboard;
