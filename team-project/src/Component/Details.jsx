import React, { useState } from 'react'
// import CaterogryData from '../Array/CaterogryData'
import { useParams } from 'react-router-dom';
import { Button, Modal, Input, Form, Select } from 'antd';


const Details = ({ idx }) => {

    let params = useParams()
    let { id } = params
    console.log(id);

    let CaterogryData = JSON.parse(localStorage.getItem("CaterogryData"))

    let item = CaterogryData[id].post[idx]
    // console.log(item,"item");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    return (

        <>

            <div className='main px-52 py-12 box-border min-h-screen w-full'>
                <div className='container min-h-screen  '>
                    <div className='w-[70%] mx-auto'>
                        <img src={item.img} alt="" className='w-[100%] h-auto rounded-xl mt-2' />
                    </div>

                    <div className=' mt-8 ps-24 flex flex-col gap-6 text-2xl'>
                        <div className='w-[100%] flex justify-between px-20 border py-2 rounded-full bg-[#0071DC] text-white'>
                            <h1>Price:</h1>
                            <h1 className='pe-20'>{item.price}</h1>
                        </div>
                        <div className='flex justify-between px-20 py-2 rounded-full bg-[#0071DC] text-white'>
                            <h1>Product:</h1>
                            <h1 className='pe-20'>{item.product}</h1>
                        </div>
                        <div className='flex justify-between px-20 py-2 rounded-full bg-[#0071DC] text-white'>
                            <h1>Model:</h1>
                            <h1 className='pe-20'>{item.model}</h1>
                        </div>
                        <div className='flex justify-between px-20 py-2 rounded-full bg-[#0071DC] text-white'>
                            <h1>Description:</h1>
                            <h1 className='pe-20'>{item.desc}</h1>
                        </div>
                        <div className='flex justify-between px-20 py-2 rounded-full bg-[#0071DC] text-white'>
                            <h1>Location:</h1>
                            <h1 className='pe-20'>{item.location}</h1>
                        </div>
                        <div className='flex justify-between px-20 py-2 rounded-full bg-[#0071DC] text-white'>
                            <h1>Phone Number:</h1>
                            <h1 className='pe-20'>{item.number}</h1>
                        </div>

                    </div>

                    <div className='flex justify-center'>
                        {/* <button className='border bg-[#0071DC] py-3 px-7 text-2xl text-white rounded-full mt-5 outline-none'>Contact Seller</button> */}
                        <Button type="primary" onClick={showModal} className='border bg-[#0071DC] text-2xl h-[50px] text-white rounded-full mt-5 outline-none'>
                            <span className="mt-[-10px]">Contact Seller</span>
                        </Button>
                        <Modal title="Enter You Information" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                            <Form>
                                <Input type="text" className="mt-4" name="number" value={item.number} />
                                <Input type="text" className="mt-4" name="msg" placeholder="Your Message for the Seller" />

                                <div className="flex justify-end gap-5 mt-5">
                                    <Button onClick={handleCancel}>Cancel</Button>
                                    <Button onClick={handleOk} className="bg-[#0071DC]" type="primary">Submit</Button>
                                </div>

                            </Form>
                        </Modal>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Details