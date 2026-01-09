import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaArrowRight, FaRegHeart, FaRegStar } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';
import { IoStarOutline } from 'react-icons/io5';
import { MdOutlinePayment, MdOutlineRemoveRedEye } from 'react-icons/md';
import { SlBasket } from 'react-icons/sl';
import { Link, NavLink } from 'react-router-dom';
import useGet from '../../hooks/useGet';

const HomePages = () => {
  const {loading , data} =  useGet({url:"products"})
  let products = data?.data?.products;
  let famousProducts = products?.slice(products?.length - 26 , products.length-18)
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
     
    </div>
  );
}



  return (
    <>
     <section>
  <div className="container mx-auto pt-[100px] max-w-[1400px] w-full px-4 rounded gap-20 flex items-center justify-between max-[600px]:flex-col ">
    <div className="relative max-w-[900px] max-[600px]:max-w-[700px] max-[600px]:h-[400px] w-full h-[520px] rounded-[6px] bg-[#F2F4F5]  px-10 flex items-center gap-10">
       <div className="text-center">
          <h1 className="text-[#2484C2] max-[600px]:text-[14px] font-semibold">-THE BEST PLACE TO PLAY</h1>
          <h2 className="text-[48px] font-bold max-[600px]:text-[32px] mt-3 max-[600px]:mt-0">Xbox Consoles</h2>
          <p className="text-[#475156] text-[18px] max-[600px]:text-[14px] mt-5 max-[600px]:mt-0 ">
            Save up to 50% on select Xbox games. Get <br /> 3 months of PC Game Pass for $2 USD.
          </p>
          <button className="mt-4 px-6 cursor-pointer py-2 bg-orange-500 text-white rounded flex items-center gap-2 cursor-pointer">
            Shop Now <FaArrowRight />
         </button>
       </div>

        <p className="absolute top-10 right-5 text-white bg-[#2DA5F3] w-[101px] max-[600px]:w-[60px] max-[600px]:h-[60px] h-[101px] rounded-full flex items-center justify-center text-[24px] max-[600px]:text-[20px] font-bold">
          $299
        </p>

       <img src="hero.png" alt="Hero" className="absolute bottom-0 right-[-50px] max-[600px]:right-[-10px] w-[368px] h-[400px] max-[700px]:w-[250px] max-[700px]:h-[200px] max-[600px]:w-[180px] max-[600px]:h-[170px] " />
   </div>



       <div className='flex flex-col max-[600px]:items-center gap-3'>
         <div className='flex items-center bg-[#191C1F] rounded-[6px] w-[425px] max-[600px]:w-[350px] max-[600px]:h-[170px] h-[248px] justify-between px-4 overflow-hidden relative'>
            <div className='z-10'>
                <h1 className='text-[#EBC80C] font-500 text-[14px] max-[600px]:text-[10px] '>Summer Sales</h1>
                <h2 className='text-white font-600 text-[24px] mt-3 max-[600px]:text-[20px] '>New Google <br /> Pixel 6 Pro</h2>
                <button className="mt-4 cursor-pointer px-6 py-2 bg-orange-500 text-white rounded flex items-center gap-2 cursor-pointer">
                    Shop Now <FaArrowRight />
                </button>
                <p className='w-[102px] h-[40px] max-[600px]:w-[70px] max-[600px]:h-[20px] max-[600px]:text-[12px] rounded-[2px] bg-[#EFD33D] flex items-center justify-center font-bold absolute top-10 max-[600px]:top-5 right-10 '>29% OFF</p>
            </div>
            <img className='w-[312px] h-[312px] max-[600px]:w-[250px] max-[600px]:h-[270px] absolute bottom-[-120px] right-[-65px] object-cover ' src="tel1.png" alt="" />
        </div>

        <div className='flex items-center gap-3 bg-gray-100 w-[425px] h-[248px] max-[600px]:w-[350px] max-[600px]:h-[170px] rounded-[6px] '>
            <img className='w-[160px] h-[160px] max-[600px]:w-[120px] max-[600px]:h-[120px] ' src="airpods.png" alt="" />
            <div>
                <h1 className='text-[24px] font-bold max-[600px]:text-[20px] '>Xiaomi FlipBuds Pro</h1>
                <p>$299 USD</p>
                <button className="mt-4 cursor-pointer px-6 py-2 bg-orange-500 text-white rounded flex items-center gap-2 cursor-pointer">
                    Shop Now <FaArrowRight />
                </button>
            </div>
        </div>
       </div>
  </div>    
    </section>

  <section>
    <div className='container mx-auto pt-[30px]'>

       <div className='flex items-center justify-center gap-5 max-[600px]:flex-col '>
         <div className='flex items-center gap-3 max-w-[330px] w-full h-[90px] border-2 border-gray-200 pl-8 '>
            <FiBox  className='w-[40px] h-[40px]'/>
            <a href="">
                <h1 className='text-[#191C1F] text-[14px] '>Fasted Delivery</h1>
                <p className='text-[#5F6C72] text-[14px] '>Delivery in 24/H</p>
            </a>
        </div>

         <div className='flex items-center gap-3 max-w-[325px] w-full h-[90px] border-2 border-gray-200 pl-8 '>
            <FiBox  className='w-[40px] h-[40px]'/>
            <a href="">
                <h1 className='text-[#191C1F] text-[14px] '>24 Hours Return</h1>
                <p className='text-[#5F6C72] text-[14px] '>100% money-back guarantee</p>
            </a>
        </div>

         <div className='flex items-center gap-3 max-w-[330px] w-full h-[90px] border-2 border-gray-200 pl-8 '>
            <MdOutlinePayment className='w-[40px] h-[40px]'/>
            <a href="">
                <h1 className='text-[#191C1F] text-[14px] '>Secure Payment</h1>
                <p className='text-[#5F6C72] text-[14px] '>Your money is safe</p>
            </a>
        </div>

         <div className='flex items-center gap-3 max-w-[330px] w-full h-[90px] border-2 border-gray-200 pl-8 '>
            <BiSupport className='w-[40px] h-[40px]'/>
            <a href="">
                <h1 className='text-[#191C1F] text-[14px] '>Support 24/7</h1>
                <p className='text-[#5F6C72] text-[14px] '>Live contact/message</p>
            </a>
        </div>
       </div>
    </div>
  </section>


  <section>
    <div className='container mx-auto pt-[60px] max-w-[1400px] w-full'>
      <div className='flex items-center justify-between max-[600px]:flex-col '>
         <div className='flex items-center gap-5 max-[600px]:flex-col '>
         <h1 className=' text-[#191C1F] text-[24px] '>Best Deals</h1>
         <h2 className='text-[#000000] text-[14px] '>Deals ends in</h2>
         <p className='w-[186px] h-[36px] bg-[#F3DE6D] rounded-[2px] flex items-center justify-center font-bold '>16d : 21h : 57m : 23s</p>
       </div>
       <NavLink to={"/products"} className='flex items-center gap-2 text-[#2DA5F3] max-[600px]:mt-3 text-[14px] font-bold '>Browse All Product <FaArrowRight /></NavLink>
      </div>

          {/* <div className='relative lg:max-w-[450px] w-full h-[570px] border-2 border-gray-200 mt-6'>
        <img className='w-[280px] h-[268px] ml-40 ' src="rasm1.png" alt="" />
        <NavLink className='flex items-center gap-2 ml-7 mt-3'>
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        <IoStarOutline />
        </NavLink>
        <h1 className='text-[24px] mt-3 ml-7 '>Xbox Series S - 512GB SSD Console <br /> with Wireless Controller - EU Versio...</h1>
        <div className='flex items-center gap-2 mt-3 ml-7'>
            <b className='line-through text-[#ADB7BC] '>$865.99</b>
            <h1 className='text-[#2DA5F3] text-[20px] font-bold '>$442.12</h1>
        </div>
        <p className=' text-[#5F6C72] text-[14px] leading-[20px] mt-3 ml-7'>Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.</p>
        <div className='flex items-center gap-3 mt-5 ml-7'>
            <div className='rounded-[5px] bg-[#FFE7D6] w-[48px] h-[48px] flex items-center justify-center'>
              <FaRegHeart  className='w-[25px] h-[25px] '/>
            </div>
           <div className='flex items-center gap-2 max-w-[175px] w-full h-[48px] rounded-[5px] bg-[#FA8232] flex items-center justify-center text-white cursor-pointer '>
             <SlBasket  className='w-[25px] h-[25px]'/>
             <h1 className='font-bold text-[16px] cursor-pointer'>Add To Card</h1>
           </div>
           <div className='w-[48px] h-[48px] rounded-[5px] bg-[#FFE7D6] flex items-center justify-center '>
              <MdOutlineRemoveRedEye className='w-[25px] h-[25px] '/>
           </div>
        </div>
        <div className='absolute top-0 mt-5 ml-5 '>
            <h1 className='w-[75px] h-[26px] rounded-[5px] font-bold text-[14px] bg-[#EFD33D] flex items-center justify-center '>32% OFF</h1>
            <h2 className='bg-[#EE5858] w-[46px] h-[26px] text-white font-bold rounded-[5px] flex items-center justify-center mt-2'>HOT</h2>
        </div>
         </div> */}

         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-x-5 gap-y-5'>
  {
  famousProducts?.map((el) => (
    <div
      key={el.id}
      className="relative max-w-[300px] w-full h-[355px] border-2 shadow-2xl  rounded-md group overflow-hidden"
    >
      <img
        className="w-full max-w-[180px] h-[180px] pt-6 object-cover mx-auto"
        src={el.thumbnail}
        alt={el.title}
      />

      <h1 className="text-[24px] text-center font-bold mt-2 px-2">
        {el.title}
      </h1>

      <p className="text-[20px] mt-2 text-center text-gray-500 px-2 line-clamp-2 italic">
        {el.description}
      </p>

      <div className='flex items-center justify-between px-5 mt-3'>
        <p className='text-yellow-500 text-[24px] font-bold'>{el.rating}</p>

      <p className="text-[#2DA5F3] font-bold text-[24px] px-2">
        ${el.price}
      </p>
      </div>

      <p className="absolute top-3 right-3 font-bold text-[18px] bg-[#EFD33D]
                     w-[80px] h-[30px] rounded-[5px]
                     flex items-center justify-center">
        {el.discountPercentage} %
      </p>

      <div
        className="absolute inset-0 flex items-center justify-center gap-3
                   bg-black/30 opacity-0 group-hover:opacity-100
                   transition-opacity duration-300"
      >
        <div className="w-[44px] h-[44px] bg-[#FA8232] cursor-pointer text-white rounded-full flex items-center justify-center shadow">
          <FaRegHeart />
        </div>

        <div className="w-[44px] h-[44px] bg-white cursor-pointer rounded-full flex items-center justify-center shadow">
          <SlBasket />
        </div>

        <Link to={`/products/${el.id}`} className="w-[44px] h-[44px] bg-[#FA8232] cursor-pointer text-white rounded-full flex items-center justify-center shadow">
          <MdOutlineRemoveRedEye />
        </Link>
      </div>
    </div>
  ))
}
           </div>
         </div>
  </section>

  <section>
    <div className='container mx-auto pt-[90px] max-w-[1400px] w-full '>
        <h1 className='text-center text-[32px] font-bold '>Shop with Categorys</h1>
        <div className='grid grid-cols-6 mt-10 gap-10'>
            <div className='border-2 border-gray-200 w-[225px] h-[250px] rounded-[5px] '>
            <img className='w-[148px] h-[148px] ml-10 mt-7' src="SmartPhone.png" alt="" />
            <h1 className='text-[24px] font-bold text-center mt-3'>SmartPhone</h1>
        </div>

        <div className='border-2 border-gray-200 w-[225px] h-[250px] rounded-[5px] '>
            <img className='w-[148px] h-[148px] ml-10 mt-7' src="SmartPhone.png" alt="" />
            <h1 className='text-[24px] font-bold text-center mt-3'>SmartPhone</h1>
        </div>

        <div className='border-2 border-gray-200 w-[225px] h-[250px] rounded-[5px] '>
            <img className='w-[148px] h-[148px] ml-10 mt-7' src="SmartPhone.png" alt="" />
            <h1 className='text-[24px] font-bold text-center mt-3'>SmartPhone</h1>
        </div>

        <div className='border-2 border-gray-200 w-[225px] h-[250px] rounded-[5px] '>
            <img className='w-[148px] h-[148px] ml-10 mt-7' src="SmartPhone.png" alt="" />
            <h1 className='text-[24px] font-bold text-center mt-3'>SmartPhone</h1>
        </div>

        <div className='border-2 border-gray-200 w-[225px] h-[250px] rounded-[5px] '>
            <img className='w-[148px] h-[148px] ml-10 mt-7' src="SmartPhone.png" alt="" />
            <h1 className='text-[24px] font-bold text-center mt-3'>SmartPhone</h1>
        </div>

        <div className='border-2 border-gray-200 w-[225px] h-[250px] rounded-[5px] '>
            <img className='w-[148px] h-[148px] ml-10 mt-7' src="SmartPhone.png" alt="" />
            <h1 className='text-[24px] font-bold text-center mt-3'>SmartPhone</h1>
        </div>
        </div>
    </div>
  </section>


<section>
  <div className="container mx-auto py-[120px] max-w-[1400px] w-full ">
    <div className="flex gap-6">
      <div className="bg-[#F3DE6D] w-[340px] h-[750px] rounded-[5px] flex-shrink-0">
        <p className="text-[#BE4646] text-[14px] font-bold text-center pt-7">
          COMPUTER & ACCESSORIES
        </p>

        <h1 className="text-[32px] font-bold pt-3 text-center">
          32% Discount
        </h1>

        <p className="text-[#475156] text-[16px] text-center mt-3">
          For all electronics products
        </p>

        <div className="flex items-center gap-2 mt-5 ml-4">
          <h1 className="font-bold">Offers ends in:</h1>
          <h2 className="w-[190px] h-[40px] bg-white rounded flex items-center justify-center font-bold">
            ENDS OF CHRISTMAS
          </h2>
        </div>

        <button className="bg-[#FA8232] cursor-pointer text-white font-bold w-[190px] h-[56px] rounded mt-7 mx-auto flex items-center justify-center gap-2">
          Shop now <FaArrowRight />
        </button>

        <img
          className="w-[340px] h-[520px] mx-auto mt-4 object-contain"
          src="Featured.jpg"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[24px] font-bold">Featured Products</h1>

          <div className="flex items-center gap-6 text-[14px]">
            <span className="border-b-2 border-red-500 pb-1 font-semibold cursor-pointer">
              All Product
            </span>
            <span className="cursor-pointer text-[#5F6C72]">Smart Phone</span>
            <span className="cursor-pointer text-[#5F6C72]">Laptop</span>
            <span className="cursor-pointer text-[#5F6C72]">Headphone</span>
            <span className="cursor-pointer text-[#5F6C72]">TV</span>

            <span className="flex items-center gap-1 text-[#FA8232] font-bold cursor-pointer ml-4">
              Browse All Product <FaArrowRight />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
              <div className="relative border rounded-md p-4 group overflow-hidden">

  <img
    src="tel2.png"
    alt=""
    className="w-full h-[180px] object-contain"
  />
  <div className="absolute inset-0 flex items-center justify-center gap-3
                  bg-black/30 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300">

    <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">
      <FaRegHeart />
    </div>
    <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow">
      <SlBasket />
    </div>

    <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">
      <MdOutlineRemoveRedEye />
    </div>
  </div>
  <p className="absolute top-3 left-3 w-[60px] h-[30px] text-white text-sm font-bold bg-[#EE5858]
                flex items-center justify-center rounded">
    HOT
  </p>
  <div className="flex items-center gap-2 text-orange-400 mt-3">
    <FaRegStar />
    <FaRegStar />
    <FaRegStar />
    <FaRegStar />
    <FaRegStar />
    <span className="text-gray-400 text-sm">(738)</span>
  </div>
  <p className="text-[14px] font-bold mt-2">
    TOZO T6 True Wireless <br />
    Earbuds Bluetooth Headphon...
  </p>

  <p className="text-[#2DA5F3] font-bold mt-2">$2,300</p>
</div>


           <div className="border rounded-md p-4 group relative group overflow-hidden">
            <img
              src="tel2.png"
              alt=""
              className="w-full h-[180px] object-contain"
            />
               
               <div className="absolute inset-0 flex items-center justify-center gap-3
                  bg-black/30 opacity-0 group-hover:opacity-100
                  transition-opacity duration-300">

    <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">
      <FaRegHeart />
    </div>
    <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow">
      <SlBasket />
    </div>

    <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">
      <MdOutlineRemoveRedEye />
    </div>
  </div>
            <div className="flex items-center gap-2 text-orange-400 mt-3">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h1 className='text-[gray]'>(738)</h1>
            </div>

            <p className="text-[14px] font-bold mt-2">
              TOZO T6 True Wireless <br /> Earbuds Bluetooth Headphon...
            </p>

            <p className="text-[#2DA5F3] font-bold mt-2">$2,300</p>
            <p className='absolute top-3 w-[60px] h-[30px] text-white font-bold bg-[#EE5858] flex items-center justify-center '>HOT</p>
          </div>

           <div className="border rounded-md p-4 group relative group overflow-hidden">
            <img
              src="tel2.png"
              alt=""
              className="w-full h-[180px] object-contain"
            />

           <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow"><FaRegHeart /> </div>
                <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow"> <SlBasket /> </div>
                  <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">  <MdOutlineRemoveRedEye /> </div>
             </div>
            
            <div className="flex items-center gap-2 text-orange-400 mt-3">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h1 className='text-[gray]'>(738)</h1>
            </div>

            <p className="text-[14px] font-bold mt-2">
              TOZO T6 True Wireless <br /> Earbuds Bluetooth Headphon...
            </p>

            <p className="text-[#2DA5F3] font-bold mt-2">$2,300</p>
            <p className='absolute top-3 w-[60px] h-[30px] text-white font-bold bg-[#2DB224] flex items-center justify-center '>Sale</p>
          </div>

           <div className="relative border rounded-md p-4 group relative group overflow-hidden">
            <img
              src="tel2.png"
              alt=""
              className="w-full h-[180px] object-contain"
            />
             <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow"><FaRegHeart /> </div>
                <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow"> <SlBasket /> </div>
                  <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">  <MdOutlineRemoveRedEye /> </div>
             </div>
            <div className="flex items-center gap-2 text-orange-400 mt-3">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h1 className='text-[gray]'>(738)</h1>
            </div>

            <p className="text-[14px] font-bold mt-2">
              TOZO T6 True Wireless <br /> Earbuds Bluetooth Headphon...
            </p>

            <p className="text-[#2DA5F3] font-bold mt-2">$2,300</p>
            <p className='absolute top-3 w-[60px] h-[30px] text-white font-bold bg-[#2DB224] flex items-center justify-center '>Sale</p>
          </div>

           <div className="relative border rounded-md p-4 group relative group overflow-hidden">
            <img
              src="tel2.png"
              alt=""
              className="w-full h-[180px] object-contain"
            />
             <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow"><FaRegHeart /> </div>
                <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow"> <SlBasket /> </div>
                  <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">  <MdOutlineRemoveRedEye /> </div>
             </div>
            <div className="flex items-center gap-2 text-orange-400 mt-3">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h1 className='text-[gray]'>(738)</h1>
            </div>

            <p className="text-[14px] font-bold mt-2">
              TOZO T6 True Wireless <br /> Earbuds Bluetooth Headphon...
            </p>

            <p className="text-[#2DA5F3] font-bold mt-2">$2,300</p>
             <p className='absolute top-3 w-[60px] h-[30px] text-white font-bold bg-[#EE5858] flex items-center justify-center '>HOT</p>
          </div>

           <div className="relative border rounded-md p-4 group relative group overflow-hidden">
            <img
              src="tel2.png"
              alt=""
              className="w-full h-[180px] object-contain"
            />
             <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow"><FaRegHeart /> </div>
                <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow"> <SlBasket /> </div>
                  <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">  <MdOutlineRemoveRedEye /> </div>
             </div>
            <div className="flex items-center gap-2 text-orange-400 mt-3">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h1 className='text-[gray]'>(738)</h1>
            </div>

            <p className="text-[14px] font-bold mt-2">
              TOZO T6 True Wireless <br /> Earbuds Bluetooth Headphon...
            </p>

            <p className="text-[#2DA5F3] font-bold mt-2">$2,300</p>
            <p className='absolute top-2 w-[90px] h-[40px] font-bold bg-[#EFD33D] flex items-center justify-center '>%25 OFF</p>
          </div>

           <div className="relative border rounded-md p-4 group relative group overflow-hidden">
            <img
              src="tel2.png"
              alt=""
              className="w-full h-[180px] object-contain"
            />
             <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow"><FaRegHeart /> </div>
                <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow"> <SlBasket /> </div>
                  <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">  <MdOutlineRemoveRedEye /> </div>
             </div>
            <div className="flex items-center gap-2 text-orange-400 mt-3">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h1 className='text-[gray]'>(738)</h1>
            </div>

            <p className="text-[14px] font-bold mt-2">
              TOZO T6 True Wireless <br /> Earbuds Bluetooth Headphon...
            </p>

            <p className="text-[#2DA5F3] font-bold mt-2">$2,300</p>
              <p className='absolute top-3 w-[60px] h-[30px] text-white font-bold bg-[#EE5858] flex items-center justify-center '>HOT</p>
          </div>

           <div className="border relative rounded-md p-4 group relative group overflow-hidden">
            <img
              src="tel2.png"
              alt=""
              className="w-full h-[180px] object-contain"
            />
             <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow"><FaRegHeart /> </div>
                <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow"> <SlBasket /> </div>
                  <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow">  <MdOutlineRemoveRedEye /> </div>
             </div>
            <div className="flex items-center gap-2 text-orange-400 mt-3">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <h1 className='text-[gray]'>(738)</h1>
            </div>

            <p className="text-[14px] font-bold mt-2">
              TOZO T6 True Wireless <br /> Earbuds Bluetooth Headphon...
            </p>

            <p className="text-[#2DA5F3] font-bold mt-2">$2,300</p>
            <p className='absolute top-3 w-[60px] h-[30px] text-white font-bold bg-[#2DB224] flex items-center justify-center '>Sale</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* <section>
    <div className='container mx-auto py-[90px] max-w-[1400px] w-full '>
      <div className='grid grid-cols-2 gap-10'>
          <div className="flex items-center justify-center gap-10 p-8 max-w-[750px] w-full h-[350px] bg-gray-200 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold bg-[#2DA5F3] w-[150px] h-[35px] text-white flex items-center justify-center ">INTRODUCING</h1>
            <h1 className="text-[32px] leading-[40px] font-bold">New Apple HomePod Mini</h1>
            <p className="text-[#475156] text-[16px] ">Jam-packed with innovation, <br /> HomePod mini delivers unexpectedly. </p>
           <button className="flex items-center justify-center cursor-pointer max-w-[160px] w-full h-[50px] gap-2 text-[14px] bg-[#FA8232] font-bold text-white ">    SHOP NOW <FaArrowRight /> </button>
       </div>
          <img src="Apple.png" alt="Apple Homepod Mini" className="w-1/2 object-contain w-[240px] h-[240px]" />
    </div>

    <div className='flex items-center justify-between gap-10 bg-[#191C1F] max-w-[750px] w-full h-[350px] overflow-hidden relative'>
  <div className="flex flex-col gap-4 z-10 ml-8">
    <h1 className='bg-[#EFD33D] w-[165px] h-[32px] rounded-[2px] font-bold flex items-center justify-center'>INTRODUCING NEW</h1>
    <h2 className='text-[32px] leading-[40px] text-white font-bold'>Xiaomi Mi 11 Ultra 12GB+256GB</h2>
    <p className='text-[#ADB7BC] font-bold text-[16px] mt-2'>*Data provided by internal <br /> laboratories. Industry measurment.</p>
    <button className="flex items-center justify-center cursor-pointer max-w-[160px] w-full h-[50px] gap-2 text-[14px] bg-[#FA8232] font-bold text-white">
      SHOP NOW <FaArrowRight />
    </button>
  </div>
  <div className="relative w-[340px] h-[350px] mb-[-90px]">
    <img className='w-full h-full object-contain' src="tel3.png" alt="Xiaomi Mi 11 Ultra" />
  </div>
  <p className='absolute top-5 right-2 w-[90px] h-[90px] bg-[#2DA5F3] text-white font-bold text-[20px] flex items-center justify-center rounded-full '>$590</p>
</div>
      </div>

   </div>
</section>


<section>
  <div className='container mx-auto py-[60px] max-w-[1400px] w-full '>
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-[24px] font-bold">Computer Accessories</h1>
      <div className="flex items-center gap-6 text-[14px]">
        <span className="border-b-2 border-red-500 pb-1 font-semibold cursor-pointer">All Product</span>
        <span className="cursor-pointer text-[#5F6C72]">Smart Phone</span>
        <span className="cursor-pointer text-[#5F6C72]">Laptop</span>
        <span className="cursor-pointer text-[#5F6C72]">Headphone</span>
        <span className="cursor-pointer text-[#5F6C72]">TV</span>
        <span className="flex items-center gap-1 text-[#FA8232] font-bold cursor-pointer ml-4">
          Browse All Product <FaArrowRight />
        </span>
      </div>
    </div>

    <div className="flex gap-6 ">
      <div className="flex-1 grid grid-cols-4 gap-3 mt-5">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="relative border rounded-md p-4 group overflow-hidden">
            <img src="tel2.png" alt="" className="w-full h-[180px] object-contain" />
            <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow"><FaRegHeart /></div>
              <div className="w-[44px] h-[44px] bg-white rounded-full flex items-center justify-center shadow"><SlBasket /></div>
              <div className="w-[44px] h-[44px] bg-[#FA8232] text-white rounded-full flex items-center justify-center shadow"><MdOutlineRemoveRedEye /></div>
            </div>
            <p className="absolute top-3 left-3 w-[60px] h-[30px] text-white text-sm font-bold bg-[#EE5858] flex items-center justify-center rounded">HOT</p>
            <div className="flex items-center gap-2 text-orange-400 mt-3">
              <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
              <span className="text-gray-400 text-sm">(738)</span>
            </div>
            <p className="text-[14px] font-bold mt-2">TOZO T6 True Wireless <br /> Earbuds Bluetooth Headphon...</p>
            <p className="text-[#2DA5F3] font-bold mt-2">$2,300</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 w-[320px] shrink-0 mt-5">
        <div className='bg-[#F7E99E] h-[430px] rounded-md p-4 flex flex-col items-center justify-between'>
          <img className='w-[108px] h-[108px]' src="airpods.png" alt="" />
          <h1 className='text-center text-[28px] font-bold'>Xiaomi True <br /> Wireless Earbuds</h1>
          <p className='text-center text-[16px] text-[#475156]'>Escape the noise, It’s time to hear <br /> the magic with Xiaomi Earbuds.</p>
          <div className='flex  items-center justify-center gap-2 w-full'>
            <h1 className='font-bold'>Only for:</h1>
            <h2 className='font-bold text-[16px] w-[101px] h-[36px] rounded-[3px] bg-[white] font-bold flex items-center justify-center '>$299 USD</h2>
          </div>
          <button className="flex items-center justify-center w-full cursor-pointer max-w-[248px] h-[50px] gap-2 text-[14px] bg-[#FA8232] font-bold text-white rounded">
              SHOP NOW <FaArrowRight />
            </button>
        </div>

        <div className='bg-[#124261] h-[260px] rounded-md p-4 flex flex-col items-center justify-between text-white'>
          <h1 className='text-[14px] font-bold bg-[#FFFFFF1F] w-[137px] h-[32px] flex items-center justify-center '>SUMMER SALES</h1>
          <h2 className='text-[32px] font-bold'>37% DISCOUNT</h2>
          <p className='text-[18px] font-bold text-center'>only for SmartPhone product.</p>
          <button className="flex items-center justify-center w-full max-w-[248px] cursor-pointer h-[50px] gap-2 text-[14px] bg-[#2DA5F3] font-bold text-white rounded">
            SHOP NOW <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  </div>
</section> */}

    </>
  );
};

export default HomePages;
