import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const ChefDetails = () => {
    window.scroll(0,0)
    const params = useParams()
    const details = useLoaderData()
    const currentDetails = details.chefs.filter(ch => ch.id == params.id)
    // console.log(currentDetails);
    const { id, name, picture, years_of_experience, bio, likes, recipes, total_recipes } = currentDetails[0]

    return (
        <div>
            <h2 className='text-4xl font-nunito font-semibold text-center mb-6 text-red-500 italic underline'>About Chef & Recipes</h2>
            <div className='bg-red-400 w-11/12 mx-auto rounded-lg p-1 md:flex gap-10 font-nunito'>
                <div className='md:w-2/4 my-auto rounded-lg'>
                    <img className=' rounded-lg' src={picture} alt="" />
                </div>
                <div className=' text-3xl my-auto text-center md:text-left'>
                    <h2><span>Name:</span> {name}</h2>
                    <h3 className='mt-2'>Experience: {years_of_experience} years</h3>
                    <h4 className='mt-2'>Recipes: {total_recipes}</h4>
                    <p className='mt-2 md:flex'>Likes: {likes}</p>
                    <p className='mt-2 text-lg md:pr-20'><span className='text-3xl'>Bio:</span> {bio}</p>
                </div>
            </div>
            <div className='mt-6'>
                <h2 className='text-4xl font-nunito font-semibold text-center text-red-500 italic underline'>Top Rated Recipes</h2>
            </div>
            <div className='grid md:grid-cols-3 gap-10 rounded-lg p-2 mx-auto w-4/5 mt-6'>
                {
                    recipes.map(recipeDetails => <Recipes key={recipeDetails.id} recipeDetails={recipeDetails}></Recipes>)
                }
            </div>

        </div>
    );
};

export default ChefDetails;