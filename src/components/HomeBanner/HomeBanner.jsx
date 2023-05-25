import React from 'react';

const HomeBanner = () => {
    return (
        <div className='bg-red-500 w-11/12 h-[80vh] mx-auto rounded-lg border-4 border-red-500 bg-cover bg-[url("/pictures/banner.jpg")] p-4 md:p-0 '>


            <div className='text-center text-orange-300 font-nunito md:pr-10 grid md:grid-cols-2 -mt-4 md:-mt-0'>

                <div className=''>
                    <img src="/pictures/cheflogo.png" alt="" />
                </div>
                
                <div className='md:pt-28  md:pr-9'>
                    <h2 className=' text-2xl md:text-7xl font-bold md:my-4 md:pt-20 '>Mamma Mia!</h2>
                    <h2 className=' font-semibold text-xl -mt-4 md:-mt-0 md:text-4xl pb-2 md:pb-10'> <br /> Explore Authentic Italian Cuisine with Our Recipes</h2>
                    <p className='  md:text-xl '>Our authentic Italian recipes will guide you in creating delicious Italian cuisine that will impress your friends and family. Buon appetito!</p>
                </div>


            </div>


        </div>
    );
};

export default HomeBanner;