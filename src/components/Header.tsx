import React from "react";

const Header = () => {
  return (
    <div className="relative z-10 flex flex-row items-center justify-center p-4 pt-10">
      <img className="p-2 pb-10" src="/images/rocket.svg" alt="" />
      <h1 className="font-sans text-4xl flex flex-row font-black mb-8 pt-1">
        <div className="text-[#1E6F9F]">Todo</div>{" "}
        <div className="text-[#5e60ce] pl-1">App</div>
      </h1>
    </div>
  );
};

export default Header;
