import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <section className="py-5 border-t border-[#313bac]">
        <div className="container mx-auto">
          <div className="flex items-center  md:flex-row flex-col justify-between gap-5">
            <div>
              <Link href="/" className="flex items-center justify-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <p className="font-semibold text-lg text-black tracking-wide ">
                  Portfolio
                </p>
              </Link>
            </div>
            <div>
              <h2 className="text-center">
                @2023 Portfolio Made By Mohammad Suhail
              </h2>
            </div>
            <div>
              <div className="flex items-center gap-4 mt-1">
                <Link href="/">
                  <AiFillGithub className="text-2xl hover:scale-125 transition-all duration-150" />
                </Link>
                <Link href="/">
                  <AiFillLinkedin className="text-2xl hover:scale-125 transition-all duration-150" />
                </Link>

                <Link href="/">
                  <AiFillInstagram className="text-2xl hover:scale-125 transition-all duration-150" />
                </Link>

                <Link href="/">
                  <AiFillFacebook className="text-2xl hover:scale-125 transition-all duration-150" />
                </Link>

                <Link href="/">
                  <AiFillYoutube className="text-2xl hover:scale-125 transition-all duration-150" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
