import React from 'react';
import { Link } from 'react-router-dom';
import 'lazysizes';


const Chefs = ({ chef }) => {

    const { id, name, picture, years_of_experience, recipes, likes, total_recipes } = chef

    return (
        <div className='mt-6 bg-red-400 p-3 rounded-lg font-nunito'>
            <div className=''>
            <img className='lazyload rounded-lg' data-src={picture} alt="" width="400" height="300" />


                <div className='text-white text-xl my-3'>
                    <h2>Name: {name}</h2>
                    <h3>Experience: {years_of_experience} years</h3>
                    <h4>Recipes: {total_recipes}</h4>
                    <p>Likes: {likes}</p>
                </div>
                <div className='text-center'>
                    <Link to={`chefs/${id}`}>
                        <button className='border rounded-lg text-white text-xl px-24 py-2'>View Recipes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chefs;