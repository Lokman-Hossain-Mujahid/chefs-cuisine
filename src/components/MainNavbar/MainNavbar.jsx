import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

const MainNavbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="md:w-11/12 md:mx-auto mx-1 my-2 bg-red-500 rounded-lg md:h-24 text-white py-2 px-2 md:px-4 mb-6 font-nunito">
            <div className='md:flex text-center gap-3 md:gap-0 md:justify-between'>
                <Link to="/">
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                        <div className="md:w-10 md:h-12">
                            {/* <img src="./../../../public/pictures/spoonforkknife.png" alt="" /> */}
                        </div>
                        <h2 className="md:text-3xl text-2xl mx-auto md:mx-0 md:pt-5"><i>ItalianCuisine's</i></h2>
                    </div>
                </Link>

                <div className='md:text-2xl my-2 md:my-5 md:flex gap-2 md:gap-6'>

                    <div className='flex my-auto justify-center gap-6'>
                        <ActiveLink className='md:pt-5 pt-3 mx-auto md:mx-0 mr-2' to='/' >Home</ActiveLink>
                        <ActiveLink className='md:pt-5 pt-3 mx-auto md:mx-0 mr-2' to='/about' >About</ActiveLink>
                        <ActiveLink className='md:pt-5 pt-3 mx-auto md:mx-0 mr-2' to='/contact' >Contact</ActiveLink>
                        <ActiveLink className='md:pt-5 pt-3' to='/blog' >Blog</ActiveLink>
                    </div>

                </div>
                <div className='text-xl pt-1 md:flex'>


                    {/* Profile image */}
                    {user?.photoURL ? <img className='h-7 md:h-11 rounded-full md:mr-2 mx-auto md:mt-2 md:mx-0 cursor-pointer' src={user.photoURL} alt="profile" title={user.displayName}></img> : user? <img className='h-7 md:h-11 rounded-full md:mr-2 mx-auto md:mt-2 md:mx-0 cursor-pointer' src='/pictures/nouser.jpg' title={user.displayName} ></img> : ''}


                    {/* Profile Name */}
                    {user && <div className='flex-col mx-auto md:mx-0 md:flex'>


                        {/* <h2>{user.displayName}</h2> */}



                        <button onClick={handleLogout} className='my-2 md:my-2 py-2 text-sm md:text-base px-2 md:px-4 border rounded-lg hover:bg-slate-100 hover:text-red-500'>Logout</button>


                    </div>}

                    {user == null && <Link to='/login'><button className='my-2 md:my-3 py-2 px-4 border rounded-lg hover:bg-slate-100 hover:text-red-500'>Login</button></Link>}

                </div>

            </div>
        </div>
    );
};

export default MainNavbar;