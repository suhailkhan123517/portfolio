import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? " bg-gradient-to-r from-blue-600 to-cyan-600  text-white  border border-gray-100 "
    : "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent  border border-blue-600";
  return (
    <>
      <button onClick={selectTab}>
        <span
          className={`text-lg font-medium px-4 rounded-md py-2 ${buttonClasses}`}
        >
          {children}
        </span>
      </button>
    </>
  );
};

export default TabButton;
