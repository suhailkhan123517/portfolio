import { services } from "@/utils/data";
import { AiFillMobile, AiOutlineSearch } from "react-icons/ai";
import { BiCodeAlt, BiRightArrowAlt } from "react-icons/bi";
const Services = () => {
  return (
    <>
      <section className="min-h-screen py-10 grid place-items-center">
        <div className="container mx-auto">
          <h2 className="head_text text-center">My Services</h2>
          <p className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            esse nemo explicabo quas <br /> totam molestiae ipsam consequatur
            itaque animi cum.{" "}
          </p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 xl:mt-20 mt-10 relative">
            {services.map((item) => (
              <>
                <div
                  key={item.id}
                  className="group relative border border-gray-300 bg-[#edf2f8] xl:p-5 p-4 rounded-xl flex flex-col xl:gap-4 gap-3 shadow-xl hover:border-blue-600  transition duration-200"
                >
                  {item.icon === "BiCodeAlt" && (
                    <BiCodeAlt className="text-5xl font-bold" />
                  )}
                  {item.icon === "AiFillMobile" && (
                    <AiFillMobile className="text-5xl font-bold" />
                  )}
                  {item.icon === "AiOutlineSearch" && (
                    <AiOutlineSearch className="text-5xl font-bold" />
                  )}

                  <h3 className="bg-gradient-to-r font-bold from-blue-600 to-cyan-600 bg-clip-text text-transparent text-xl">
                    {item.title}
                  </h3>
                  <p className="text-base text-gray-800 ">{item.desc}</p>
                  <BiRightArrowAlt className="text-4xl font-bold transition-all group-hover:duration-200 group-hover:origin-center group-hover:-rotate-45" />
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
