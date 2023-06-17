import React from 'react'
import '../App.css'
import Data from './Data'
import { Link } from 'react-router-dom'


const sameer = () => {
  return (
    <>


       <seciton className="grid text-white lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 ">

        <div className="  col-span-1  lg:p-4  md:p-4 sm:p-2 p-1    " >
            
            <div className=" overflow-hidden rounded-md  relative"  >
                <Link to='/caterogry/accessoriesData'>
        <img className="w-full" src={Data[0].accessoriesPic} alt="" /> 
        <span className='absolute  top-4 left-3 font-[700] text '>{Data[0].accessoriesInfo} <p className='underline text-sm cursor-pointer mt-5 font-[400]'>Shop Now</p> </span> 
                </Link>
    </div>
    
    
    <div className=" overflow-hidden rounded-md my-5 relative"  >
        <Link to='/caterogry/shoeData'>
        <img className="w-full"  src={Data[1].shoePic} alt="" /> 
        <span className='absolute  top-4 left-3 font-[700] text-xl'>{Data[1].shoeInfo}  <p className='underline text-sm cursor-pointer mt-5 font-[400]'>Shop Now</p> </span> 
        </Link>
    </div>
    
    
    <div className=" overflow-hidden rounded-md  relative"  >
    <Link to='/caterogry/bikeData'>
        <img className="w-full" src={Data[2].bikePic} alt="" /> 
        <span className='absolute text-white top-4 left-3 font-[700] text-2xl'>{Data[2].bikeInfo}   <p className='underline text-sm cursor-pointer mt-5 font-[400]'>Shop Now</p> </span> 
        </Link>
    </div>
    
            </div>
    {/* main column-1 */}


    

    <div className="  col-span-1     lg:p-4  md:p-4 sm:p-2 p-1    " >

<div className=" overflow-hidden rounded-md relative"  >
<Link to='/caterogry/laptopData'>
    <img className="w-full"  src={Data[3].laptopPic} alt="" /> 
    <span className='absolute  top-4 text-xl left-3 font-[700]'>{Data[3].laptopInfo} <p className='underline text-sm cursor-pointer mt-1 font-[400]'>Shop Now</p> </span> 
    </Link>
</div>

<div className=" overflow-hidden rounded-md  my-5 relative"  >
<Link to='/caterogry/mobileData'>
    <img className="w-full"  src={Data[4].phonePic}  alt="" /> 
    <span className='absolute  top-4 left-3 font-[700] text-2xl'>{Data[4].phoneInfo}  <p className='underline text-sm cursor-pointer mt-5 font-[400]'>Shop Now</p> </span> 
    </Link>
</div>

<div className=" overflow-hidden rounded-md  relative"  >
<Link to='/caterogry/hardwareData'>
    <img className="w-full" src={Data[5].hardwarePic} alt="" /> 
    <span className='absolute  top-4 left-3 font-[700] text-xl'>{Data[5].hardwareInfo}   <p className='underline text-sm cursor-pointer mt-2 font-[400]'>Shop Now</p> </span> 
    </Link>
</div>

        </div> 
        {/* main column-2 */}

       
        <div className="  col-span-2  p-2 " >


        <div className="  overflow-hidden rounded-md  my-2 relative"  >
<Link to='/caterogry/carData'>
    <img className="w-full"  src={Data[6].carPic}  alt="" /> 
    <span className='absolute text-4xl top-10 left-3 font-[500]'>{Data[6].carInfo} <p className='underline text-xl  cursor-pointer mt-5 font-[400]'>Shop Now</p> </span> 
    </Link>
</div>
     

<div className="  overflow-hidden rounded-md  relative"  >
<Link to='/caterogry/furnitureData'>
    <img className="w-full" src={Data[7].furniturePic} alt="" /> 
    <span className='absolute text-4xl top-10 left-3 font-[500]'>{Data[7].furnitureInfo} <p className='underline text-xl  cursor-pointer mt-5 font-[400]'>Shop Now</p> </span> 
    </Link>
</div>
     

        </div>
        {/* main column-3 */}
        

      
        
       


        </seciton>


    </>
  )
}

export default sameer