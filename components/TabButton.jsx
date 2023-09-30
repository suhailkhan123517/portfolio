import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? " bg-gradient-to-r from-blue-600 to-cyan-600  text-white  border border-gray-100 "
    : "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent  border border-blue-600";
  return (
    <>
      <button onClick={selectTab}>
        <span
          className={`xl:text-lg lg:text-base text-sm font-medium xl:px-4 lg:px-3 px-2 rounded-md lg:py-2 py-1 ${buttonClasses}`}
        >
          {children}
        </span>
      </button>
    </>
  );
};

export default TabButton;
