import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "bg-[#313bac] text-white"
    : "py-1 px-3 bg-white hover:border-[#313bac]";
  return (
    <>
      <button
        className={`  ${buttonStyle}py-1 px-3  rounded-md  border transition-all duration-200 border-transparent`}
      >
        {name}
      </button>
    </>
  );
};

export default ProjectTag;
