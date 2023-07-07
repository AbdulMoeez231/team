import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CaterogryData from '../Array/CaterogryData'
import { Link } from 'react-router-dom'

const CaterogryPage = ({ Clicked }) => {


    let params = useParams()
    let { id } = params
    // console.log(id, "id");
    // let Data = CaterogryData[id].post
    // console.log(Data);

    const retrievedData = JSON.parse(localStorage.getItem('CaterogryData'));
    // console.log(retrievedData, "retirved Data");


    let [filterIt, setFilter] = useState(retrievedData[id].post)

    // console.log(filterIt, "dfghj");

    const handleChange = (e) => {
        // console.log("handleChange");
        console.log(e.target.value);
        filterIt = retrievedData[id].post.filter((item) => {
            console.log(item.price, "item in filter");
            return Number(item.price) < Number(e.target.value)
        })

        console.log(filterIt, "filtering");
        setFilter(
            filterIt
        )
    }

    let maping = filterIt.map((item, i) => {
        // console.log(item, "item in maping");
        return (
            <div >
                <div className='flex gap-6 py-7 ps-5 border-b'>
                    <div className='w-[280px] h-[auto] rounded-lg'>
                        <img src={item.img} className='w-[100%] h-[100%] rounded-lg' alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl'>Price: {item.price}</h1>
                        <p className='text-[15px] mt-3'>Decription: {item.desc}</p>
                        <h2>Model: {item.model}</h2>
                        <p>Location: {item.location}</p>
                        <p>Phone Number: {item.number}</p>
                        <Link to={`/details/${id}`}>
                            <button onClick={() => Clicked(i)} className='border border-black px-5 py-1 mt-2 rounded-full'>Contact</button>
                        </Link>
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
                        <div className='mt-11 ps-7'>
                            <h1 className='text-3xl font-semibold'>Filter</h1>
                            <select className='mt-5 border py-2 px-4' name="" id="" onChange={handleChange}>
                                <option value="20000">20,000</option>
                                <option value="30000">30,000</option>
                                <option value="40000">40,000</option>
                                <option value="50000">50,000</option>
                                <option value="60000">60,000</option>
                                <option value="70000">70,000</option>
                                <option value="80000">80,000</option>
                                <option value="90000">90,000</option>
                                <option value="100000">100,000</option>
                                <option value="150000">150,000</option>
                            </select>
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