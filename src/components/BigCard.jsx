import React, { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { LikeProductContext } from "../context/LikeContext";

const BigCard = ({ el }) => {
  if (!el) return null;
  const { addToLike, like, removeToLike } = useContext(LikeProductContext);

  return (
    <div  className="relative max-w-[320px] w-full h-[540px] border-2 border-gray-400 mt-6 mx-auto lg:mx-0">
      <img
        className="max-w-[300px] w-full h-[220px] sm:h-[260px] md:h-[230px] mx-auto object-contain "
        src={el.thumbnail}
        alt=""
      />
      <NavLink
        className="flex items-center gap-2 ml-7 mt-3"
      >
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
      </NavLink>
      <h1 className="text-[24px] mt-3 text-center font-bold ">"{el.title}"</h1>
      <p className=" text-gray-500 mt-4 text-center text-[18px] px-3">
        {el.description}
      </p>
      <div className="flex items-center justify-between px-4 mt-5">
        <p className="text-yellow-600 text-[24px]">{el.rating}</p>
        <h1 className="text-[#2DA5F3] text-[24px] font-bold ">$ {el.price}</h1>
      </div>
      <div className="flex items-center justify-center gap-3 mt-5 mx-auto">
        {like.find((item) => item.id === el.id) ? (
          <button
            onClick={() => removeToLike(el)}
            className="w-[40px] h-[40px] text-[22px]
                                     text-red-500 bg-[#FFE7D6]
                                      flex items-center justify-center shadow cursor-pointer"
          >
            <FaHeart />
          </button>
        ) : (
          <button
            onClick={() => addToLike(el)}
            className="w-[40px] h-[40px] text-[22px]
                                      bg-[#FFE7D6]
                                      flex items-center justify-center shadow cursor-pointer"
          >
            <FaRegHeart />
          </button>
        )}
        <Link to={`/products/${el.id}`} className="flex items-center gap-2 max-w-[175px] w-full h-[48px] rounded-[5px] bg-[#FA8232] flex items-center justify-center text-white cursor-pointer ">
          <SlBasket className="w-[25px] h-[25px]" />
          <h1 className="font-bold text-[16px] cursor-pointer">Add To Card</h1>
        </Link>
        <Link to={`/products/${el.id}`} className="w-[48px] h-[48px] rounded-[5px] bg-[#FFE7D6] flex items-center justify-center ">
          <MdOutlineRemoveRedEye className="w-[25px] h-[25px] " />
        </Link>
      </div>
      <div className="absolute top-0 mt-5 ml-5 ">
        <h1 className="w-[75px] h-[26px] rounded-[5px] font-bold text-[14px] bg-[#EFD33D] flex items-center justify-center ">
          {el.discountPercentage}%
        </h1>
        <h2 className="bg-[#EE5858] w-[46px] h-[26px] text-white font-bold rounded-[5px] flex items-center justify-center mt-2">
          HOT
        </h2>
      </div>
    </div>
  );
};

export default BigCard;
