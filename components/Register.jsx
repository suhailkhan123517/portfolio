"use client";
import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const showPasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !password) {
      toast.error("All fields are necessary");
      return;
    }

    try {
      const resUserExists = await fetch("/api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        toast.error("User already Exists");
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        toast.success("User Registered Successfully");
        router.push("/sign-in");
      } else {
        toast.error("User registration failed");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      <div className="flex bg-gray-50 items-center justify-center w-full min-h-screen px-16">
        <div className="w-full max-w-lg relative">
          <div className="absolute top-12 -left-16 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
          <div className="absolute top-12 -right-16 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-72 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="m-8 relative space-y-4">
            <div className="bg-white py-6 px-10  rounded-3xl">
              <h1 className="font-satoshi font-semibold text-2xl text-black tracking-wide">
                Create your account
              </h1>
              <p className="text-lg text-gray-600">to continue to Portfolio</p>

              <button className="mt-3 border border-gray-300 py-2 px-4 w-full flex items-center justify-between rounded-md hover:bg-gray-200 transition duration-300 group">
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
              <button className="mt-3 border border-gray-300 py-2 px-4 w-full flex items-center justify-between rounded-md hover:bg-gray-200 transition duration-300 group">
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
                <div>
                  <div className="flex items-start gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-black font-medium">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="border border-gray-300 py-2 px-4 rounded-md w-full"
                        name="firstName"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-black font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="border w-full border-gray-300 py-2 px-4 rounded-md"
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
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
                I have Account !{" "}
                <Link
                  href="/sign-in"
                  className="text-[#ff5722] hover:underline"
                >
                  Sign in
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
