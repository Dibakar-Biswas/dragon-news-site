import React from "react";
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login with</h2>
      <div className="space-y-3">

        {/* <!-- Google --> */}
        <button class="btn hover:bg-blue-500 hover:text-white w-full text-blue-500 btn-outline">
          <FcGoogle size={24} /> Login with Google
        </button>
        {/* <!-- GitHub --> */}
        <button class="btn w-full hover:bg-black hover:text-white btn-outline">
          
          <VscGithub size={24}/> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
