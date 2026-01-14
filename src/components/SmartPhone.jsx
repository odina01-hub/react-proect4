import React from "react";

const SmartPhone = ({el}) => {
   
  return (
      <div className="border border-gray-500 w-[225px] h-[250px] rounded-[5px] ">
        <img
          className="w-[148px] h-[148px] ml-10 mt-7"
          src={el.thumbnail}
          alt=""
        />
        <h1 className="text-[24px] font-bold text-center mt-3">{el.title}</h1>
      </div>
  );
};

export default SmartPhone;
