import React from 'react';
import { FaHashtag } from "react-icons/fa";

const SiteSummary = () => {
    return (
        <div className='font-nunito'>
            <h2 className='text-center text-4xl font-semibold italic text-red-500 underline mt-10'>Rich Italian Food History</h2>
            <div className='grid md:grid-cols-2 w-11/12 mx-auto mt-10 border-4 p-1 bg-red-400 rounded-lg border-red-500'>
                <div className=''>
                    <img className='rounded-lg' src="/pictures/chef3.jpg" alt="" />
                </div>
                <div className='text-2xl text-white my-auto text-center pt-3 md:pt-0 md:text-left md:pr-20'>
                    <p className=''>
                        Italian cuisine has a rich and diverse history that spans over centuries. The cuisine developed from a mix of different cultural influences, including Etruscan, ancient Greek, and Roman, as well as the Arab, Norman, and Spanish invasions. <br />
                    </p>

                    <p className='pt-4'>
                        Throughout the centuries, Italian food has been shaped by the country's geography, climate, and local traditions, resulting in a wide range of regional specialties. From the northern regions of Piedmont and Lombardy, famous for rich meat dishes and creamy sauces, to the southern regions of Campania and Sicily, known for their fresh seafood and bold flavors, Italian cuisine offers a diverse range of culinary experiences. <br />
                    </p>

                    <p className='pt-4'>
                        Italian cuisine has also played a significant role in the development of global cuisine. Dishes like pizza and pasta have become international favorites, while Italian ingredients like olive oil, Parmesan cheese, and balsamic vinegar are now used in kitchens all around the world. <br />
                    </p>

                    <p className='pt-4'>
                        Overall, Italian food history is a fascinating and multifaceted subject that has shaped the way we think about food and cooking today.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SiteSummary;