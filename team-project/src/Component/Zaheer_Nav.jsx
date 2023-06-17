import React from "react";
import "../App.css";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Zaheer_Nav = () => {
  return (
    <>
      <nav className=" bg-[#0071DC] h-[15vh] flex justify-around items-center p-3">
        <div className="logo h-[60px] w-[150px]  flex justify-center items-center">
          <h1 className="text-white text-[35px] font-bold">
            Shop<span className="text-yellow-400  rotate-class">e</span>
          </h1>

        </div>
        <div className="select_bar border border-white h-[40px] w-[18%] flex justify-around items-center rounded lg:flex md:hidden sm:hidden">
          <BsSearch className="text-white" />
          <select
            name=""
            id=""
            className="h-[30px] w-[80%] bg-[#0071DC]  focus:outline-none text-white "
          >
            <option value="" className="py-2">
              Pakistan
            </option>
            <option value="" className="py-2">
              Lahore
            </option>
            <option value="" className="py-2">
              Multan
            </option>
            <option value="" className="py-2">
              Rawalpindi
            </option>
          </select>
        </div>
        <div className="search_bar  h-[60px] w-[550px]   flex items-center relative lg:flex md:hidden sm:hidden">
          <input
            className="h-[50px] w-full rounded-full p-3 text-[18px] focus:outline-none ps-8"
            type="text"
            placeholder="Search everthing at shope online and in store"
          />
          <button className="absolute top-[2.5] right-1 py-3 px-3 bg-yellow-500 rounded-full">

          <button className="absolute top-[10px] right-1 py-3 px-3 bg-yellow-500 rounded-full">
            <BsSearch />
          </button>
        </div>
        <div className="btn_box  h-[auto] w-[170px] flex justify-between items-center lg:flex md:hidden sm:hidden">
          <h1 className="text-white text-[18px]">login</h1>
          <button className="py-1 px-5 rounded-full border border-3 brdr  border-white text-[18px] text-white ">
            + Sell
          </button>
        </div>
        <div className="h-[60px] w-[60px]  flex justify-center items-center  lg:hidden md:flex sm:flex   ">
          <FaBars className="text-white text-[35px]" />
        </div>
      </nav>
    </>
  );
};

export default Zaheer_Nav;
