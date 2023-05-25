import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ recipeDetails }) => {

    const { id, recipe_name, recipe_img, ingredients, cooking_method, rating } = recipeDetails

    const [isFavorited, setIsFavorited] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorited(true);
        toast.success('Recipe added to favorites!');
    };

    return (
        <div>

            <div className='bg-red-400 rounded-lg'>
                <div className='bg-red-400 rounded-lg pt-4 pb-2 px-4 font-nunito md:h-[100vh]'>

                    <div>
                        <img className='lazyload rounded-lg' data-src={recipe_img} alt=""  />
                    </div>
                    
                    <h2 className='text-center text-2xl font-semibold py-3 underline'>{recipe_name}</h2>
                    <div className='mt-3'><span className='font-semibold text-xl'>Ingredients:</span>
                        {
                            ingredients.map(ing => <li key={ing}>{ing}</li>)
                        }
                    </div>
                    <p className='mt-3'><span className='font-semibold text-xl'>Cooking Method:</span> {cooking_method}</p>
                    <div className=''>
                        <h2 className='mt-3'><span className='font-semibold text-xl'>Rating:</span> {rating}</h2>
                    </div>

                </div>
                <div className='flex justify-center items-end'>
                    <button
                        className={`border-2 text-white italic font-nunito border-red-500 rounded-lg px-4 py-2 mb-3 text-center 
              ${isFavorited ? 'bg-red-500 text-red-500 cursor-default' : 'hover:bg-slate-100 hover:text-red-500'}`}
                        onClick={handleFavoriteClick}
                        disabled={isFavorited}
                    >
                        {isFavorited ? 'Favorite Recipe' : 'Add to Favorite Recipe'}
                    </button>



                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;