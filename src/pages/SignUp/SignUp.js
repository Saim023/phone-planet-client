import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const navigate = useNavigate();

    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [createdEmail, setCreatedEmail] = useState();
    const [token] = useToken(createdEmail);

    if (token) {
        navigate('/login')
    }

    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                toast.success('User created successfully !');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUsers(data.name, data.email)
                    })
                    .catch(error => console.error(error))
            })
            .catch(error => console.error(error))

        const saveUsers = (name, email) => {
            const user = { name, email }

            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(data => {
                    setCreatedEmail(email);

                })
        }

    }

    return (
        <form onSubmit={handleSubmit(handleSignUp)} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse w-1/2">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Name</span>
                            </label>
                            <input type="text" {...register("name", {
                                required: "Name is required"
                            })} placeholder="Name" className="input input-bordered" />
                            {
                                errors.name && <p className='text-red-600'>{errors.name.message}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Email</span>
                            </label>
                            <input type="email" {...register("email", {
                                required: "Email is required"
                            })} placeholder="Email" className="input input-bordered" />
                            {
                                errors.email && <p className='text-red-600'>{errors.email.message}</p>
                            }
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password should be 6 characters long." },

                            })} placeholder="Password" className="input input-bordered" />
                            {
                                errors.password && <p className='text-red-600'>{errors.password.message}</p>
                            }
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already have an account? login now!</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;