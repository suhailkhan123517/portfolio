"use client";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ParticlesContainer from "./ParticlesContainer";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        toast.error("Invalid Email & Password");
        return;
      }

      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-full sm:px-16 ">
        <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0">
          <ParticlesContainer />
        </div>
        <div className="w-full max-w-lg relative">
          <div className="absolute top-12 -sm:left-12  left-0 sm:w-72 sm:h-72 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
          <div className="absolute top-12 -sm:right-12  right-10 sm:w-72 sm:h-72 w-32 h-32 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-60 -sm:left-12 left-0  sm:w-72 sm:h-72 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute top-60 -sm:right-12  right-10 sm:w-72 sm:h-72 w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"></div>

          <div className="sm:m-8 m-4 relative space-y-4 ">
            <div className="bg-white py-4 px-10 shadow-2xl  rounded-3xl">
              <div className="flex items-center gap-5">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="font-satoshi font-semibold text-xl text-black tracking-wide">
                  Portfolio
                </span>
              </div>
              <h1 className="font-satoshi font-semibold text-xl text-black tracking-wide mt-2">
                Sign in
              </h1>
              <p className="text-lg text-gray-600">to continue to Portfolio</p>

              <button
                onClick={() => {
                  signIn("github", { callbackUrl: "/dashboard" });
                }}
                className="mt-3 border border-gray-300 py-2 px-4 w-full flex items-center justify-between rounded-md hover:bg-gray-200 transition duration-300 group"
              >
                <Image
                  src="/github.svg"
                  width={20}
                  height={20}
                  className="object-contain"
                  alt="github images"
                />
                <span>Continue with Github</span>
                <BsArrowRight className="opacity-0 group-hover:opacity-100 transition duration-300 group group-hover:translate-x-2" />
              </button>
              <button
                onClick={() => {
                  signIn("google", { callbackUrl: "/dashboard" });
                }}
                className="mt-3 border border-gray-300 py-2 px-4 w-full flex items-center justify-between rounded-md hover:bg-gray-200 transition duration-300 group"
              >
                <Image
                  src="/google.svg"
                  width={20}
                  height={20}
                  className="object-contain"
                  alt="github images"
                />
                <span>Continue with Google</span>
                <BsArrowRight className="opacity-0 group-hover:opacity-100 transition duration-300 group group-hover:translate-x-2" />
              </button>

              <div className="text-center my-2">or</div>

              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1 mt-2">
                  <label className="text-black font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="border border-gray-300 py-2 px-4 rounded-md"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <label className="text-black font-medium">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="border border-gray-300 py-2 px-4 rounded-md w-full"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
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

                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-black w-full mt-5 p-2 rounded-md text-white transition duration-300"
                >
                  Continue
                </button>
              </form>

              <p className="mt-4 text-gray-500">
                I have&apos;n Account !{" "}
                <Link
                  href="/sign-up"
                  className="text-[#ff5722] hover:underline"
                >
                  Sign up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
