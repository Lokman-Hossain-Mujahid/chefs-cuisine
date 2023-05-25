import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Login = () => {
    window.scroll(0,0)
    const { githubSignIn, googleSignIn, signIn, user, success, setSuccess } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('')

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email1.value;
        const password = form.password1.value;

        setError('')
        if (password.length < 6) {
            setError('*password must be 6 characters or longer*')
            return
        }

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);



                form.reset()
                setSuccess(null)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError('*No user found*')
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(null)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(null)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div className='md:w-1/4 mx-1 md:mx-auto mb-10 mt-14 bg-red-500 rounded-lg px-12 pb-12 pt-6'>
            <div className='text-white text-center py-2'>
                {success ? <p>{success}</p> : ''}
            </div>
            <h2 className='text-3xl font-semibold font-nunito text-center mb-4'>Login</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        placeholder="Enter your email..."
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password1"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        placeholder="Enter your password..."
                        required={true}
                    />
                </div>

                <Button type="submit">
                    Submit
                </Button>
            </form>
            <hr className='mt-6' />
            <div className='text-center mt-6 font-nunito'>
                <div className=''>
                    <button onClick={handleGoogleSignIn} className='bg-red-400 rounded-lg px-10 py-4'>Google Login</button>
                </div>
                <h2 className='mt-4'>Or</h2>
                <div className=' mt-2'>
                    <button onClick={handleGithubSignIn} className='bg-black text-white rounded-lg px-10 py-4'>Github Login</button>
                </div>
            </div>
            <div className='mt-6'>
                <h2><small>Not registered? <Link className='text-blue-600' to="/register">Register</Link></small></h2>
            </div>
            <p className='text-red-50 mt-6'>{error}</p>
        </div>
    );
};

export default Login;