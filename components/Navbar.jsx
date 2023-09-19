"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { status, data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="container  mx-auto">
          <div className="flex items-center justify-between py-3">
            <div>
              <Link href="/" className="flex items-center justify-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <p className="font-semibold text-lg text-black tracking-wide">
                  {session?.user?.name}
                </p>
              </Link>
            </div>
            <div>
              {status === "authenticated" ? (
                <div className="relative">
                  <div className="border-[3px] border-transparent rounded-full p-[2px] hover:border-gray-400  transition duration-200">
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      width={50}
                      height={50}
                      className="object-contain cursor-pointer rounded-full"
                      onClick={() => setToggle(!toggle)}
                    />
                  </div>

                  {toggle && (
                    <div className="absolute right-0 top-full mt-3 w-full p-5 rounded-lg bg-gray-50 min-w-[210px] flex flex-col gap-2 justify-end items-start">
                      <Link
                        href="/profile"
                        className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                        onClick={() => setToggle(false)}
                      >
                        My Profile
                      </Link>
                      <Link
                        href="/create-prompt"
                        className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                        onClick={() => setToggle(false)}
                      >
                        Services
                      </Link>
                      <Link
                        href="/create-prompt"
                        className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                        onClick={() => setToggle(false)}
                      >
                        Work
                      </Link>
                      <Link
                        href="/create-prompt"
                        className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                        onClick={() => setToggle(false)}
                      >
                        About
                      </Link>
                      <Link
                        href="/create-prompt"
                        className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                        onClick={() => setToggle(false)}
                      >
                        Contact
                      </Link>
                      <button
                        type="button"
                        className="mt-5 w-full black_btn rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
                        onClick={() => signOut()}
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => router.push("/sign-in")}
                  className="rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
