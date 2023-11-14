import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-white p-5 rounded-lg flex justify-between items-center gap-5 cursor-pointer shadow-lg w-full">
      <div className="flex flex-col gap-2">
        <span className="">Total User</span>
        <span className="text-2xl font-medium">10.273</span>
      </div>
      <div className="w-14 h-14 rounded-md grid place-items-center bg-gradient-to-tr from-[#ec068b] to-[#8e22bf]">
        <MdSupervisedUserCircle size={30} className="text-white" />
      </div>
    </div>
  );
};

export default Card;
