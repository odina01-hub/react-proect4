import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import useGet from "../../hooks/useGet";
import SwiperCard from "../../components/SwiperCard";
import { IoIosStar, IoMdStar } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { CartContextCard } from "../../hooks/CartContext";

const SinglePage = () => {
  const { id } = useParams("id");
  const { data, loading } = useGet({ url: `products/${id}` });
  const item = data.data;
  const [count, setCount] = useState(0);
  const {cart , addToCart , increase , decrease} = useContext (CartContextCard); 

 

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 99999,
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src=""
          alt="Loading"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    );
  }
  return (
    <div className=" pt-[100px] container mx-auto max-w-[1200px] w-full">
      <div className="grid grid-cols-2">
        <div>
        <SwiperCard images={item.images} />
      </div>

      <div className="px-10">
        <h1 className="text-[24px] font-bold mt-3">"{item.title}"</h1>
        <h1 className="text-[18px] text-[gray] mt-5 italic ">
          {item.description}
        </h1>
        <div className="grid grid-cols-2 mt-5">
          <h1 className="text-[20px] text-[gray] ">Brand: {item.brand}</h1>
          <h1 className="text-[20px] text-[gray] ">Sku: {item.sku}</h1>
          <p className="text-[20px] text-[gray]">Stock: {item.stock}</p>
          <p className="text-[20px] text-[gray] ">Category: {item.category}</p>
        </div>
        <div className="mt-6 flex items-center gap-5 flex-wrap">
          <p className="text-[20px] font-bold">
            Width: {item?.dimensions?.width}
          </p>
          <p className="text-[20px] font-bold">
            Height: {item?.dimensions?.height}
          </p>
          <p className="text-[20px] font-bold">
            Depth: {item?.dimensions?.depth}
          </p>
        </div>
        <div className="flex items-center gap-5 mt-5">
          <p className=" text-[24px] line-through">${item.price}</p>
          <p className="text-[#2DA5F3] text-[24px] font-bold ">
            ${" "}
            {(
              item.price -
              (item.price * item.discountPercentage) / 100
            ).toFixed(2)}
          </p>
          <p className="w-[80px] h-[30px] bg-[#EFD33D] font-bold text-[20px] flex items-center justify-center">
            {item.discountPercentage}%
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 mt-5">
          {
            cart.find((el) => el.id === item.id) ?   <div className="flex items-center justify-center gap-5 w-full h-full h-[60px] border-[2px] border-[#E4E7E9] rounded-[3px] ">
            <button
              onClick={() => decrease(item)}
              className="text-[24px] font-bold cursor-pointer text-white bg-[red] w-full py-[10px]"
            >
              -
            </button>
            <span className="text-[20px] font-bold py-[10px]">
              {
                cart?.find((el) => el.id === item.id).qty
              }
              </span>
            <button
              onClick={() => increase(item)}
              className="text-[24px] font-bold cursor-pointer w-full text-white py-[10px] bg-[green]"
            >
              +
            </button>
          </div> :  <button
          onClick={() => addToCart(item)}
           className="flex items-center justify-center gap-2 w-full py-[10px] text-white bg-[#FA8232] cursor-pointer rounded-[3px] text-[24px] font-bold ">
            Add to card
            <FaShoppingCart />
          </button>
          }
         
         
          <button className="w-full h-[56px] border-[2px] border-[#FA8232] text-[#FA8232] font-bold text-[24px] rounded-[3px] ">
            BUY NOW
          </button>
        </div>
      </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {item.reviews.map((el) => (
          <div
            className="border-2 border-gray-400 rounded-2xl p-6 md:p-10 w-full"
            key={el.id}
          >
            <div className="flex items-start justify-between">
              <div>
                <h1 className="font-bold text-lg">{el.reviewerName}</h1>
                <span className="text-gray-500 text-sm">
                  {el.date.split("T")[0]}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-[24px] text-yellow-600 font-bold">{el.rating}</p>
                <IoMdStar className="text-yellow-600 text-[24px] font-bold" />
              </div>
            </div>
            <div className="flex items-center mt-2 gap-2">
                <p className="font-bold ">Comments:</p>
                <p>{el.comment}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
