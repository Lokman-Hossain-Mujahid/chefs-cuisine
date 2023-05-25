import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Socials = () => {
    return (
        <div>
            <h2 className='text-5xl text-red-500 italic font-bold font-nunito text-center underline md:my-20 my-10'>Our Socials</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 w-11/12 gap-4 mx-auto font-nunito my-6'>
                <div className='border-2 rounded-full flex justify-center p-10 md:p-20 cursor-pointer hover:bg-red-100 border-red-500'>
                    <FaFacebook className='text-3xl text-blue-500'></FaFacebook>
                    <h2 className='font-semibold text-2xl ml-1'>18.1k Fans</h2>
                </div>
                <div className='border-2 rounded-full flex justify-center p-10 md:p-20 cursor-pointer hover:bg-red-100 border-red-500'>
                    <FaInstagram className='text-3xl'></FaInstagram>
                    <h2 className='font-semibold text-2xl ml-1'>23k Followers</h2>
                </div>
                <div className='border-2 rounded-full flex justify-center p-10 md:p-20 cursor-pointer hover:bg-red-100 border-red-500'>
                    <FaTwitter className='text-3xl text-blue-600'></FaTwitter>
                    <h2 className='font-semibold text-2xl ml-1'>15k Followers</h2>
                </div>
                <div className='border-2 rounded-full flex justify-center p-10 md:p-20 cursor-pointer hover:bg-red-100 border-red-500'>
                    <FaYoutube className='text-3xl text-red-600'></FaYoutube>
                    <h2 className='font-semibold text-2xl ml-1'>20k Subscribers</h2>
                </div>
            </div>
        </div>
    );
};

export default Socials;