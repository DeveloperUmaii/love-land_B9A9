//Chat GTP CODE
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useeAuth from '../hoook/useeAuth';
import SocialLogiIn from './SocialLogiIn';
import Footer from '../components/Footer';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { signInUser } = useeAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    // State for password visibility
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        const { email, password } = data;

        signInUser(email, password)
            .then(result => {
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <div className="card shrink-0 w-full max-w-lg p-10 shadow-2xl bg-base-100 mb-10 ml-20">
                <h1 className="text-5xl text-center font-bold pt-10">Login now!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered"
                            {...register('email', { required: 'Email is required!' })}
                        />
                        {errors.email && (
                            <span className="text-xs text-red-500">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative input input-bordered flex items-center">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Enter Your Password"
                                className="h-10"
                                {...register('password', { required: 'Password is required!' })}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-4 flex items-center"
                            >
                                {showPassword ? (
                                    <FaRegEyeSlash className="h-6 w-6 text-gray-500" />
                                ) : (
                                    <FaRegEye className="h-6 w-6 text-gray-500" />
                                )}
                            </button>
                        </div>
                        {errors.password && (
                            <span className="text-xs text-red-500">{errors.password.message}</span>
                        )}
                    </div>

                    <div className="form-control my-6">
                        <button className="btn bg-[#007AFF] hover:bg-[#007bffde] text-white text-xl font-bold">
                            Login
                        </button>
                    </div>
                </form>

                <SocialLogiIn />
                <h3 className="text-black text-center pt-3">
                    Don't have an account?{' '}
                    <NavLink to="/register" className="text-[#007AFF] font-bold">
                        Create Account
                    </NavLink>
                </h3>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
