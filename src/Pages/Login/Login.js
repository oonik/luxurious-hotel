import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleLogin = (data) =>{
        console.log(data)
    }

    return (
        <div className="hero min-h-screen bg-black">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full shadow-2xl  bg-base-100 border-4 border-amber-400">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                        <h4 className='text-2xl font-bold text-center mb-3 text-amber-400'>Login Now</h4>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" 
                            {...register("email", { required: "Email is required" })} 
                            className="input input-bordered" />
                            {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" 
                            {...register("password", { required: "Password is required", minLength:{value:8, message:"Password length 8 character or number"} })} 
                            className="input input-bordered" />
                            {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                            <label className="label">
                                <a href="htmlFor"  className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-amber-500 text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;