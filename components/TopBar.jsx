"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

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

const TopBar = () => {
  const { status, data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const inputString = session?.user?.name;
  const capitalizedString = capitalizeWords(inputString);
  const router = useRouter();
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#edf2f8] border-b">
        <div className="px-8">
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
                  {status === "authenticated" ? capitalizedString : "Suhail"}
                </p>
              </Link>
            </div>

            <div>
              {status === "authenticated" ? (
                <div className="relative flex items-center justify-center gap-5">
                  <button>Search Bar</button>

                  <div className="border-[3px] border-transparent rounded-full p-[2px] hover:border-gray-400  transition duration-200">
                    <Image
                      src={session?.user?.image || "/logo.svg"}
                      alt="logo"
                      width={35}
                      height={35}
                      className="object-contain cursor-pointer rounded-full"
                      onClick={() => setToggle(!toggle)}
                    />
                  </div>

                  {toggle && (
                    <div className="absolute right-0 top-full mt-5 w-full p-5 rounded-lg bg-[#edf2f8] min-w-[210px] flex flex-col gap-2 justify-end items-start">
                      <Link
                        href="/profile"
                        className="text-sm font-inter text-gray-700 hover:text-gray-500 font-medium"
                        onClick={() => setToggle(false)}
                      >
                        My Profile
                      </Link>

                      <button
                        type="button"
                        className="mt-5 w-full black_btn rounded-full border border-black bg-black py-1.5 px-5 text-white transition-all hover:bg-white hover:text-black text-center text-sm font-inter flex items-center justify-center"
                        onClick={() => signOut({ callbackUrl: "/sign-in" })}
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

export default TopBar;
