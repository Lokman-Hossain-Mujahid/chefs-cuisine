import React from 'react';

const About = () => {
    return (
        <div className='font-nunito'>
            <hr className='border-2 border-red-500 w-auto rounded-lg mx-auto mb-4' />
            <h2 className='text-6xl font-semibold text-center italic py-2 bg-red-400 text-white'>About Page</h2>
            <hr className='border-2 border-red-500 w-auto rounded-lg mx-auto mt-4' />
            <div className='w-11/12 mx-auto mt-6 grid md:grid-cols-2'>
                <div>
                    <img className='rounded-lg ' src="/pictures/italianfood1.png" alt="" />
                </div>
                <div className='flex-col items-center'>
                    <h2 className='text-3xl text-center text-red-500 italic font-bold '>More About Us:</h2>
                    <hr className='border-2 border-red-500 md:w-60 rounded-lg mx-auto mb-4' />
                    <p className='md:text-4xl'>At <span className='italic text-red-500 font-semibold'>ItalianCuisine's</span>, we are passionate about bringing the flavors and traditions of Italy into your home. As a lover of Italian cuisine, our founder Mujahid created this website to share their knowledge and love of authentic Italian cooking with the world. Our team of experienced food writers and recipe developers work tirelessly to curate the best Italian recipes, using fresh and high-quality ingredients that capture the essence of Italian cuisine. We strive to make cooking Italian dishes accessible to everyone, from beginners to experienced home cooks, with our step-by-step recipes and cooking tips. We hope to inspire you to explore the delicious world of Italian cuisine and bring a little taste of Italy into your everyday life.</p>
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-6 grid md:grid-cols-2'>
                <div className='flex-col items-center p-4 mr-4'>
                    <h2 className='text-3xl text-center text-red-500 italic font-bold'>About Our Chef:</h2>
                    <hr className='border-2 border-red-500 w-64 rounded-lg mx-auto mb-4' />
                    <p className='md:text-4xl'>At <span className='italic text-red-500 font-semibold'>ItalianCuisine's</span>, we are proud to work with some of the most talented Italian chefs in the industry. One of our top-rated chefs is Giada De Laurentiis, who brings a wealth of experience and expertise to our team. With 20 of culinary experience, Chef Giada has honed their skills in some of the finest kitchens across Italy and beyond. Their passion for Italian cuisine shines through in every dish they create, and their attention to detail and commitment to using the freshest, highest-quality ingredients sets them apart. Our users consistently rave about Chef Giada's recipes, which range from classic Italian dishes to innovative twists on traditional favorites. We are honored to have Chef Giada on our team and are excited to share their expertise with our community of Italian food lovers.</p>
                </div>
                <div>
                    <img className='rounded-lg' src="/pictures/chef4.jpg" alt="" />
                </div>
            </div>
            <div className='w-11/12 mx-auto mt-6 grid md:grid-cols-2'>
                <div>
                    <img className='rounded-lg' src="/pictures/ingredients.png" alt="" />
                </div>
                <div className='flex-col items-center'>
                    <h2 className='text-3xl text-center text-red-500 italic font-bold'>High Quality Ingredients:</h2>
                    <hr className='border-2 border-red-500 md:w-96 rounded-lg mx-auto mb-4' />
                    <p className='md:text-4xl'>At <span className='italic text-red-500 font-semibold'>ItalianCuisine's</span>, we believe that using the highest-quality ingredients is essential to creating delicious and authentic Italian cuisine. That's why we carefully select our ingredients, working with trusted suppliers who share our commitment to quality. From the freshest produce and herbs to the finest meats, cheeses, and imported Italian ingredients, we strive to use only the best in our recipes. We understand that quality ingredients not only taste better but also provide greater nutritional value, which is why we place such a strong emphasis on sourcing the best ingredients possible. Our recipes showcase the rich flavors and textures of these ingredients, allowing you to truly experience the essence of Italian cuisine. Whether you're cooking for a special occasion or simply enjoying a meal at home, we believe that using high-quality ingredients is the key to creating truly memorable dishes.</p>
                </div>
            </div>

        </div>
    );
};

export default About;