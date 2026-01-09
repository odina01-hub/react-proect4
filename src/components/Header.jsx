import { AiOutlineCustomerService } from "react-icons/ai";
import { CiFacebook, CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiSearch, FiHeart, FiUser } from "react-icons/fi";
import { IoGitCompareOutline } from "react-icons/io5";
import { SlBasket, SlSocialTwitter, SlSocialYoutube } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const Header = () => {
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
          <NavLink to={"/"} className="text-white text-2xl font-bold text-center sm:text-left">CLICON</NavLink>

          <div className="flex flex-1 w-full sm:w-auto bg-white rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search for anything..."
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="px-4 text-gray-600">
              <FiSearch />
            </button>
          </div>

          <div className="relative flex items-center gap-5 text-white text-xl ">
           <NavLink to={"/cart"}> 
            <SlBasket className="text-[32px] "/> <span className="absolute bottom-4  w-[25px] h-[25px] flex items-center justify-center rounded-full right-22">0</span>
           </NavLink>

            <NavLink to={"/likee"}>
              <FiHeart className="text-[32px]" />
            </NavLink>
            
            <NavLink to={"/register"}>
              <FiUser className="text-[32px]" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* <div className="bg-white">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-3 gap-2 sm:gap-0 text-sm">
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
