import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    window.scroll(0,0)
    const { auth, createUser, updateUserData, logOut, setSuccess } = useContext(AuthContext)

    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoURL.value;

        console.log(name, email, password, photo);

        setError('')
        if (password.length < 6) {
            setError('*password must be 6 characters or longer*')
            return
        }

        createUser(email, password)
            .then(response => {
                const user = response.user

                updateProfile(response.user, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                
                console.log(user);
                form.reset()
                setSuccess('*Registration successful please Login*')
                logOut()
                navigate("/login")
            })

            .catch(error => {
                console.log(error);
                setError('*E-mail already exists*')
            })

    }



    return (
        <div className='md:w-1/4 mx-1 md:mx-auto mb-10 mt-14 bg-red-500 rounded-lg p-12'>
            <h2 className='text-3xl font-semibold font-nunito text-center mb-4'>Register</h2>
            <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Your name"
                        />
                    </div>
                    <TextInput
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photoUrl"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        name="photoURL"
                        id="photoUrl"
                        type="url"
                        placeholder="Enter your photo"
                        required={false}
                    />
                </div>
                <Button type="submit">
                    Submit
                </Button>
            </form>
            <div className='mt-6'>
                <h2><small>Already registered? <Link className='text-blue-600' to="/login">Login</Link></small></h2>
            </div>
            <p className='text-red-50 mt-6'>{error}</p>

        </div>
    );
};

export default Register;