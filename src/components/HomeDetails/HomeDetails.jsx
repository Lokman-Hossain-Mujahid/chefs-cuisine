import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import Chefs from '../Chefs/Chefs';
import { useLoaderData } from 'react-router-dom';
import Socials from '../Socials/Socials';
import SiteSummary from '../SiteSummary/SiteSummary';

const HomeDetails = () => {

    const chefs = useLoaderData()
    console.log(chefs);

    return (
        <div>
            <HomeBanner></HomeBanner>
            
            <h2 className='my-10 text-center text-5xl text-red-500 italic font-semibold underline font-nunito'>Our Top Chef's</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-4 md:mx-auto md:gap-28'>
                {
                    chefs.chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
                }
            </div>
            <SiteSummary></SiteSummary>
            <Socials></Socials>
        </div>
    );
};

export default HomeDetails;