import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hook/useToken';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);
    const [error, setError] = useState("");
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace: true})
    };

    const handleSignup = data =>{
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            //  console.log(user);
            saveUser(data.name, data.email);
        })
        .catch((error) => {
            setError(error.message)
          });
    };

    const saveUser = (name, email)=>{
        const user = {
            name,
            email
        };
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('save user', data)
            setCreateUserEmail(email);
        });
    };
    return (
        <div className="hero min-h-screen bg-black">
        <div className="hero-content">
            <div className="card flex-shrink-0 w-full shadow-2xl  bg-base-100 border-4 border-amber-400">
                <form onSubmit={handleSubmit(handleSignup)} className="card-body">
                    <h4 className='text-2xl font-bold text-center mb-3 text-amber-400'>Signup Now</h4>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" 
                        {...register("name", { required: "Name is required" })} 
                        className="input input-bordered" />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Your email" 
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
                        <button className="btn bg-amber-500 text-white">Signup</button>
                    </div>
                </form>
                <p className='text-center pb-2'>Already have an account? <Link to="/login" className='text-amber-500'>Login</Link></p>
                <p className='text-red-500'>{error}</p>
            </div>
        </div>
    </div>
    );
};

export default Signup;