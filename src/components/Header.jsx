import { useContext, useState } from "react";
import { CiFacebook, CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiSearch, FiHeart, FiUser } from "react-icons/fi";
import { SlBasket, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import { LikeProductContext } from "../context/LikeContext";
import { CartContextCard } from "../hooks/CartContext";
import useGet from "../hooks/useGet";

const Header = () => {
  const { like } = useContext(LikeProductContext);
  const { cart } = useContext(CartContextCard);
  const [search, setSearch] = useState("");
  const { data } = useGet({ url: `products/search?q=${search}&limit=194` });
  const products = data?.data?.products;
  console.log(products);

 

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#1B6392] text-white text-sm py-2 px-4 border-b border-green-700">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between  gap-2 sm:gap-0">
          <div className="text-center sm:text-left">
            Welcome to Clicon online eCommerce store.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
            <div className="flex items-center gap-2">
              <span>Follow us:</span>
              <SlSocialTwitter />
              <CiFacebook />
              <SlSocialYoutube />
              <FaInstagram />
            </div>

            <select className="bg-[#1B6392] text-white px-2 py-1 rounded">
              <option value="uz">UZB</option>
              <option value="rus">RUS</option>
              <option value="en">ENG</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-[#1B6392]">
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <NavLink
            to={"/"}
            className="text-white text-2xl font-bold text-center sm:text-left"
          >
            CLICON
          </NavLink>

          <div className="relative flex-1 w-full sm:w-[420px]">
            <div className="flex bg-white rounded overflow-hidden border">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search for anything..."
                className="flex-1 px-4 py-2 outline-none"
              />
              <button className="px-4 text-gray-600">
                <FiSearch />
              </button>
            </div>

            {search && (
              <div className="absolute top-full left-0 w-full bg-white shadow-2xl rounded-2xl mt-2 p-3 flex flex-col gap-2 z-50 max-h-[400px] overflow-y-scroll">
                {
                  products.length > 0 ? products?.map((el) => (
                  <Link to={`/products/${el.id}`}
                    key={el.id}
                    className="border border-gray-400 rounded-xl p-3 flex items-center gap-4 hover:bg-gray-50 cursor-pointer"
                  >
                    <img
                      className="w-[80px] h-[80px] object-contain"
                      src={el.thumbnail}
                      alt=""
                    />
                    <div>
                      <h1 className="font-bold text-md">{el.title}</h1>
                      <p className="text-sm text-gray-500 mt-2">
                        {el.description}
                      </p>
                    </div>
                  </Link>
                )) : <div className="text-center text-[24px] font-bold">No products found 🙁</div>
                }
              </div>
            )}
          </div>

          <div className="relative hidden sm:flex items-center gap-5 text-white text-xl ">
            <NavLink className="hidden md:block" to={"/cart"}>
              <SlBasket className="text-[32px] " />{" "}
              <span className="absolute bottom-4  w-[25px] h-[25px] flex items-center justify-center rounded-full right-22">
                {cart?.length}
              </span>
            </NavLink>

            <NavLink className="relative hidden md:block" to={"/likee"}>
              <FiHeart className="text-[32px]" />{" "}
              <span className="absolute bottom-4  w-[25px] h-[25px] flex items-center justify-center rounded-full right-[-20px]">
                {like.length}
              </span>
            </NavLink>

            <NavLink className="hidden md:block" to={"/register"}>
              <FiUser className="text-[32px]" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* <div className="bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-2 sm:gap-0 text-sm">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
            <a className="w-[155px] h-[48px] bg-[#F2F4F5] flex items-center justify-center" href="">
              All Category
            </a>
            <a className="flex items-center text-gray-600 gap-1" href="">
              <CiLocationOn />
              Track Order
            </a>
            <a className="flex items-center text-gray-600 gap-1" href="">
              <IoGitCompareOutline />
              Compare
            </a>
            <a className="flex items-center text-gray-600 gap-1" href="">
              <AiOutlineCustomerService />
              Customers Support
            </a>
          </div>

          <div className="text-gray-700 font-medium mt-2 sm:mt-0">
            📞 +1-202-555-0104
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
