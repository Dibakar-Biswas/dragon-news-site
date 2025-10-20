import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-body">
            <h2 className="font-semibold text-2xl text-center">Register your account</h2>
          <fieldset className="fieldset">
            {/* name */}
            <label className="label font-semibold text-black">Your Name</label>
            <input type="text" className="input" placeholder="Enter your name" />

            {/* photo */}
            <label className="label font-semibold text-black">Photo URL</label>
            <input type="text" className="input" placeholder="Enter your photo URL" />

            {/* email */}
            <label className="label font-semibold text-black">Email</label>
            <input type="email" className="input" placeholder="Enter your email address" />

            {/* password */}
            <label className="label font-semibold text-black">Password</label>
            <input type="password" className="input" placeholder="Enter your password" />
           
            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-5">Already Have An Account ? <Link to="/auth/login" className="text-red-600"> Login</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
    );
};

export default Register;