import React from "react";
import "../App.css";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { Button, Modal, Input, Form, Select } from 'antd';
import { useState } from 'react';
import { json } from "react-router-dom";

const Zaheer_Nav = () => {


  const [inpVal, setInpVal] = useState({
  })
  const [category, setCategory] = useState("")

  let changing = (e) => {
    setInpVal({
      ...inpVal, [e.target.name]: e.target.value
    })
  }

  console.log(inpVal);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    handleSubmit()
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCategory = (e) => {
    setCategory(e)
  }

  const handleSubmit = () => {

    let getData = JSON.parse(localStorage.getItem("CaterogryData"))
    console.log(getData, "getData");
    let categoryData = getData[category]

    console.log(categoryData, 'selectedData');

    categoryData.post.push(inpVal)

    console.log(categoryData, 'updated data');

    getData[category] = categoryData

    console.log(getData, 'get data updates');

    localStorage.setItem("CaterogryData", JSON.stringify(getData))


  }

  return (
    <>
      <nav className=" bg-[#0071DC] h-[15vh] flex justify-around items-center p-3">
        <div className="logo h-[60px] w-[150px]  flex justify-center items-center">
          <h1 className="text-white text-[35px] font-bold">
            Shop<span className="text-yellow-400">e</span>
          </h1>

        </div>
        <div className="search_bar  h-[60px] w-[550px]  flex items-center relative lg:flex md:hidden sm:hidden">
          <input
            className="h-[40px] w-full rounded-full p-3 text-[18px] focus:outline-none ps-8"
            type="text"
            placeholder="Search everthing at shope online and in store"
          />
          {/* <button className="absolute top-[2.5] right-1 py-3 px-3 bg-yellow-500 rounded-full"><button/> */}

          <button className="absolute top-[10px] right-1 py-3 px-3 bg-yellow-500 rounded-full">
            <BsSearch />
          </button>
        </div>
        <div className="btn_box  h-[auto]">
          <Button type="primary" onClick={showModal} className="brdr border border-white rounded-full">
            <span className="mt-[-10px]">+ Sell</span>
          </Button>
          <Modal title="Enter Your Product Data" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
            <Form>
              <Select defaultValue="carData" className="w-[100%]" onChange={handleCategory}>
                <option value="carData">Car</option>
                <option value="bikeData">Bike</option>
                <option value="mobileData">Mobile</option>
                <option value="laptopData">Laptop</option>
                <option value="accessoriesData">Accessories</option>
                <option value="shoeData">Shoes</option>
                <option value="furnitureData">Furniture</option>
                <option value="hardwareData">Hardware</option>
              </Select>
              <Input type="text" className="mt-4" onChange={changing} name="product" placeholder="Enter Your Product Name" />
              <Input type="text" className="mt-4" onChange={changing} name="img" placeholder="Enter Your Product Image" />
              <Input type="text" className="mt-4" onChange={changing} name="price" placeholder="Enter Your Price" />
              <Input type="text" className="mt-4" onChange={changing} name="desc" placeholder="Enter Your Description" />
              <Input type="text" className="mt-4" onChange={changing} name="number" placeholder="Enter Your Phone Number" />
              <Input type="text" className="mt-4" onChange={changing} name="model" placeholder="Enter Your Model" />
              <Input type="text" className="mt-4" onChange={changing} name="location" placeholder="Enter Your Location" />

              <div className="flex justify-end gap-5 mt-5">
                <Button onClick={handleCancel}>Cancel</Button>
                <Button onClick={handleOk} className="bg-[#0071DC]" type="primary">Submit</Button>
              </div>

            </Form>
          </Modal>
        </div>
        {/* <div className="h-[60px] w-[60px]  flex justify-center items-center  lg:hidden md:flex sm:flex   ">
          <FaBars className="text-white text-[35px]" />
        </div> */}
      </nav>
    </>
  );
}


export default Zaheer_Nav;
