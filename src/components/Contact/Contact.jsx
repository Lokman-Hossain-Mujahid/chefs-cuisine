import React from 'react';

const Contact = () => {
    return (
        <div className='font-nunito'>
            <hr className='border-2 border-red-500 w-auto rounded-lg mx-auto mb-4' />
            <h2 className='text-6xl font-semibold text-center italic py-2 bg-red-400 text-white'>Contact Page</h2>
            <hr className='border-2 border-red-500 w-auto rounded-lg mx-auto mt-4' />
            <div className='w-11/12 mx-auto grid md:grid-cols-2 rounded-lg p-4 mt-6 bg-red-400'>
                <div className='my-auto mx-auto md:pr-10 md:py-14 md:border-r-2'>
                    <h3 className='text-4xl font-semibold mb-4'>Contact Information</h3>
                    <p className='text-xl mb-2'>Email: italiancuisines@email.com</p>
                    <p className='text-xl mb-2'>Phone: 123-456-7890</p>
                    <p className='text-xl mb-2'>Address: 123 Main St, Anytown USA 12345</p>
                </div>

                <div>
                    <h3 className='text-4xl font-semibold mt-8 mb-4'>Frequently Asked Questions</h3>
                    <p className='text-xl mb-2'>Q: What types of recipes do you offer?</p>
                    <p className='text-xl mb-2'>A: We offer a wide range of authentic Italian recipes, from classic dishes like spaghetti carbonara to regional specialties like Sicilian arancini.</p>

                    <p className='text-xl mb-2'>Q: How do I save a recipe?</p>
                    <p className='text-xl mb-2'>A: To save a recipe, simply click the "Save Recipe" button on the recipe page. You'll need to create an account if you haven't already done so.</p>

                    <p className='text-xl mb-2'>Q: How can I submit feedback?</p>
                    <p className='text-xl mb-2'>A: We welcome your feedback! Please use the feedback form on our Support page to share your thoughts and suggestions.</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Contact;
