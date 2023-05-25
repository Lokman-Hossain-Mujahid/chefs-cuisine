import React from 'react';
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className=' text-5xl text-center' id="ErrorPage">
            <img className='md:w-2/4 h-[60vh] md:h-auto md:mx-auto' src="/pictures/error.png" alt="" />
            
            <Link to="/"><button className='px-5 py-5 text-white font-normal text-lg bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mt-4 md:mt-0'>Go Back To Home</button></Link>
        </div>
    );
}