import Link from "next/link";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
const ProjectCard = ({ imgUrl, title, desc }) => {
  return (
    <>
      <div className="p-2 bg-white rounded-xl">
        <div
          className="group h-52 md:h-60 rounded-t-xl relative"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        >
          <div className="overlay absolute rounded-t-xl  top-0 left-0 w-full h-full bg-black/50 bg-opacity-0 hidden group-hover:grid place-items-center group-hover:bg-opacity-80 transition-all group-hover:duration-500">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="h-11 w-11  bg-black/60 rounded-full grid place-items-center hover:scale-90 transition-all duration-200"
              >
                <AiFillEye className="text-3xl text-white/70 hover:text-white/100" />
              </Link>
              <Link
                href="/"
                className="h-11 w-11 bg-black/60 rounded-full grid place-items-center hover:scale-90 transition-all duration-200"
              >
                <AiFillGithub className="text-3xl text-white/70 hover:text-white/100 " />
              </Link>
            </div>
          </div>
        </div>
        <div className="rounded-b-xl bg-white py-4 px-4">
          <h5 className="text-xl font-semibold ">{title}</h5>
          <p className="text-lg text-gray-700 mt-2">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
