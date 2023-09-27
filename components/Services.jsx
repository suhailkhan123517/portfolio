import { services } from "@/utils/data";
import { AiFillMobile, AiOutlineSearch } from "react-icons/ai";
import { BiCodeAlt, BiRightArrowAlt } from "react-icons/bi";
const Services = () => {
  return (
    <>
      <section className="min-h-screen grid place-items-center">
        <div className="container mx-auto">
          <h2 className="head_text text-center">My Services</h2>
          <p className="desc text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit,
            esse nemo explicabo quas <br /> totam molestiae ipsam consequatur
            itaque animi cum.{" "}
          </p>
          <div className="grid grid-cols-3 gap-10 mt-20 relative">
            {services.map((item) => (
              <>
                <div
                  key={item.id}
                  className="group relative border border-gray-300 bg-[#edf2f8] p-5 rounded-xl flex flex-col gap-4 shadow-xl hover:border-blue-600  transition duration-200"
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
