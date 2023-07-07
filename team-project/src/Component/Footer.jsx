import React from 'react'
import '../App.css'
import { CiFacebook } from 'react-icons/ci'
import { AiOutlineTwitter } from 'react-icons/ai'
import { TbPlayerPlay } from 'react-icons/tb'
import { CiInstagram } from 'react-icons/ci'


const Footer = () => {
    return (
        <div>
            <footer class="bg-[#0071DC]  text-white pb-7">
                <div class="container mx-auto px-4 py-6">
                    <div class="flex flex-wrap -mx-4">
                        <div class=" w-full sm:w-1/2 md:w-1/5 px-4 mt-3">
                            <h4 class="text-[18px] font-mono font-bold mt-5 mb-4">POPULAR CATEGORIES</h4>
                            <ul class='grid gap-3'>
                                <li><a href="#">Cars</a></li>
                                <li><a href="#">Flats for rent</a></li>
                                <li><a href="#">Mobile Phones</a></li>
                                <li><a href="#">Jobs</a></li>
                            </ul>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/5 px-4">
                            <h4 class="text-[18px] font-mono mt-8 font-bold mb-4">TRENDING SEARCHES</h4>
                            <ul class='grid gap-3'>
                                <li><a href="#">Bikes</a></li>
                                <li><a href="#">Watches</a></li>
                                <li><a href="#">Books</a></li>
                                <li><a href="#">Dogs</a></li>
                            </ul>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/5 px-4">
                            <h4 class="text-[18px] mt-8 font-mono font-bold mb-4">ABOUT US</h4>
                            <ul class='grid gap-3'>
                                <li><a href="#">About Dubizzle Group</a></li>
                                <li><a href="#">Logo Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Logo for Businesses</a></li>
                            </ul>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/5 px-4">
                            <h4 class="text-[18px] mt-8 font-mono font-bold mb-4">Logo</h4>
                            <ul class='grid gap-3'>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Sitemap</a></li>
                                <li><a href="#">Terms of use</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div class="w-full sm:w-1/2 md:w-1/5 px-4">
                            <h4 class="text-[18px] mt-8 font-mono font-bold mb-4">FOLLOW US</h4>
                            <ul class="flex justify-between w-40">
                                <li><a href="#"><CiFacebook class='text-2xl' /></a></li>
                                <li><a href="#"><AiOutlineTwitter class='text-2xl' /></a></li>
                                <li><a href="#"><TbPlayerPlay class='text-2xl' /></a></li>
                                <li><a href="#"><CiInstagram class='text-2xl' /></a></li>


                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
export default Footer

