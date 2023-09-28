import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "bg-[#313bac] text-white"
    : "bg-white hover:border-[#313bac]";
  return (
    <>
      <button
        className={`${buttonStyle} py-1 px-3  rounded-md  border transition-all duration-200 border-transparent`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </>
  );
};

export default ProjectTag;
