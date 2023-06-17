import React from 'react'
import { useParams } from 'react-router-dom'
import CaterogryData from '../Array/CaterogryData'
import { Link } from 'react-router-dom'

const CaterogryPage = () => {

    let params = useParams()
    let { id } = params
    let Data = CaterogryData[id].post
    console.log(Data);

    let maping = Data.map((item) => {
        return (
            <div >
                <div className='flex gap-6 py-7 ps-5 border-b'>
                    <div className='w-[300px] h-[200px] rounded-lg'>
                        <img src={item.img} className='w-[100%] h-[100%] rounded-lg' alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl'>Price: {item.price}</h1>
                        <p className='text-[15px] mt-3'>Decription: {item.desc}</p>
                        <h2>Model: {item.model}</h2>
                        <p>Location: {item.location}</p>
                        <button className='border border-black px-3 py-1 mt-2 rounded-full'>Show Add</button>
                    </div>
                </div>
            </div>
        )
    })


    return (
        <>
            <div className='grid md:grid-cols-4 sm:grid-cols-1 '>
                <div className='py-5 col-span-1 border-r'>
                    <div className='ps-10 pt-10'>
                        <h1 className='text-3xl font-semibold	'>Filter</h1>
                        <div className='ps-5 mt-4'>
                            <h2 className='text-2xl  font-semibold underline decoration-solid	' >Products</h2>
                            <ul className='mt-7 flex flex-col gap-3'>

                                <Link to='/caterogry/carData'>
                                <li className='hover: cursor-pointer'>Cars</li>
                                </Link>
                                
                                <Link to='/caterogry/bikeData'>
                                <li className='hover: cursor-pointer'>Bikes</li>
                                </Link>

                                <Link to='/caterogry/laptopData'>
                                <li className='hover: cursor-pointer'>Laptops</li>
                                </Link>

                                <Link to='/caterogry/mobileData'>
                                <li className='hover: cursor-pointer'>Mobiles</li>
                                </Link>

                                <Link to='/caterogry/accessoriesData'>
                                <li className='hover: cursor-pointer'>Accessories</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='min-h-screen col-span-3 border-b'>
                    {maping}
                </div>
            </div>
        </>
    )
}

export default CaterogryPage