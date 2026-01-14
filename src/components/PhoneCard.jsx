import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const PhoneCard = () => {
const [filter, setFilter] = useState("All"); 
  return (
    <div className="flex items-center gap-6 text-[14px]">
  <span
    className={`border-b-2 pb-1 font-semibold cursor-pointer ${filter === "All" ? "border-red-500" : "border-transparent"}`}
    onClick={() => setFilter("All")}
  >
    All Product
  </span>
  <span
    className={`cursor-pointer text-[#5F6C72] ${filter === "Smart Phone" ? "text-red-500 font-bold" : ""}`}
    onClick={() => setFilter("Smart Phone")}
  >
    Smart Phone
  </span>
  <span
    className={`cursor-pointer text-[#5F6C72] ${filter === "Laptop" ? "text-red-500 font-bold" : ""}`}
    onClick={() => setFilter("Laptop")}
  >
    Laptop
  </span>
  <span
    className={`cursor-pointer text-[#5F6C72] ${filter === "Headphone" ? "text-red-500 font-bold" : ""}`}
    onClick={() => setFilter("Headphone")}
  >
    Headphone
  </span>
  <span
    className={`cursor-pointer text-[#5F6C72] ${filter === "TV" ? "text-red-500 font-bold" : ""}`}
    onClick={() => setFilter("TV")}
  >
    TV
  </span>
</div>

  );
};

export default PhoneCard;
