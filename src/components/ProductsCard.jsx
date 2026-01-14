import React, { useContext } from "react";
import { FaCartPlus, FaHeart, FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LikeProductContext } from "../context/LikeContext";
import { CartContextCard } from "../hooks/CartContext";
import { BsCartDashFill } from "react-icons/bs";

const ProductsCard = ({ el }) => {
  const { addToLike, like, removeToLike } = useContext(LikeProductContext);
  const {addToCart , cart , removeToCart} = useContext(CartContextCard);

  return (
    <div
      key={el.id}
      className="relative w-full max-w-[480px] max-[600px]:max-w-[320px]
             h-[255px] max-[600px]:h-[320px]
             border shadow-2xl rounded-md mx-auto"
    >      <div className="relative group flex items-center justify-center ">
        <img
          className="w-[90px] h-[60px] sm:w-[160px] sm:h-[160px]
                 md:w-[250px] md:h-[145px]
                 p-6 object-contain"
          src={el.thumbnail}
          alt={el.title}
        />
        <div
          className="absolute inset-0 flex items-center justify-center gap-3
                 bg-black/40 opacity-0
                 group-hover:opacity-100
                 transition-opacity duration-300
                 rounded-md"
        >
          {like.find((item) => item.id === el.id) ? (
            <button
              onClick={() => removeToLike(el)}
              className="w-[36px] h-[36px] text-[20px]
                     text-red-500 bg-white
                     rounded-full flex items-center justify-center shadow"
            >
              <FaHeart />
            </button>
          ) : (
            <button
              onClick={() => addToLike(el)}
              className="w-[36px] h-[36px] text-[20px]
                     text-red-500 bg-white
                     rounded-full flex items-center justify-center shadow"
            >
              <FaRegHeart />
            </button>
          )}

         {
          cart.find((item) => item.id === el.id) ? <button
          onClick={() => removeToCart(el)}
            className="w-[36px] h-[36px] bg-white cursor-pointer
                      rounded-full flex items-center justify-center shadow"
          >
            <BsCartDashFill />
          </button> :  <button
          onClick={() => addToCart(el)}
            className="w-[36px] h-[36px] bg-white cursor-pointer
                      rounded-full flex items-center justify-center shadow"
          >
            <FaCartPlus />
          </button>
         }

          <Link
            to={`/products/${el.id}`}
            className="w-[36px] h-[36px] bg-white cursor-pointer
                   rounded-full flex items-center justify-center shadow"
          >
            <MdOutlineRemoveRedEye />
          </Link>
        </div>
      </div>
      <p
        className="text-[16px] 
                 text-center text-gray-500 px-2 line-clamp-2 italic"
      >
        {el.description}
      </p>

      <div className="flex items-center justify-between px-5 mt-2">
        <p className="text-yellow-500 text-[18px]  ">
          {el.rating}
        </p>
        <p className="text-[#2DA5F3]  text-[18px]  px-2">
          ${el.price}
        </p>
        <p className="absolute top-2 right-4 w-[75px] h-[26px] rounded-[5px] font-bold text-[14px] bg-[#EFD33D] flex items-center justify-center ">{el.discountPercentage} %</p>
      </div>
    </div>
  );
};

export default ProductsCard;
