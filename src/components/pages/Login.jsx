import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <div className="card-body">
            <h2 className="font-semibold text-2xl text-center">Login your account</h2>
          <fieldset className="fieldset">
            <label className="label font-semibold text-black">Email address</label>
            <input type="email" className="input" placeholder="Enter your email address" />
            <label className="label font-semibold text-black">Password</label>
            <input type="password" className="input" placeholder="Enter your password" />
            <div>
              <a className="link link-hover text-black">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="font-semibold text-center pt-5">Don't Have An Account ? <Link to="/auth/register" className="text-red-600">Register</Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
