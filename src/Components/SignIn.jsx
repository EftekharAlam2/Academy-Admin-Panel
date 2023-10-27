import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="max-w-xl mx-auto my-4 p-6 bg-white rounded-md ">
      <div className="mx-auto mb-10 w-32">
        <img
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
          alt="Logo.png"
        />
      </div>
      <p className="font-semibold text-3xl mb-14">Hey There!!! Welcome Back.</p>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-0 focus:outline-none bg-gray-100 rounded-md px-3 py-3"
            placeholder="Enter Email"
            required
          />
        </div>

        <label htmlFor="password" className="block text-black mb-2" required>
          Password
        </label>
        <div className=" relative flex  items-center">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="w-full border-0 focus:outline-none bg-gray-100 rounded-md px-3 py-3 pr-10"
            placeholder="Enter Password"
            required
          />
          <div
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </div>
        <div className="grid justify-items-end my-2 text-red-600 font-medium">
          <Link>Forget Password?</Link>
        </div>
        <div className="flex items-center mb-6 text-gray-400">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="form-checkbox text-gray-500 rounded-md w-4 h-4"
          />
          <label htmlFor="rememberMe" className="ml-2">
            Remember Me
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="px-4 py-3 w-full bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </div>
        <div className="my-5 text-gray-500 text-center">
          <p>Or, Sign in with your email</p>
        </div>
        <div className="mx-auto mb-4">
          <button className="flex items-center justify-center gap-3 bg-gray-100 w-full py-3 rounded-md">
            <img
              src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"
              alt=""
              className="w-5"
            />
            <p className="text-gray-500">Sign in with Google</p>
          </button>
        </div>
        <div className="mx-auto">
          <button className="flex items-center justify-center gap-3 bg-gray-100 w-full py-3 rounded-md">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/613/non_2x/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png"
              alt=""
              className="w-5"
            />
            <p className="text-gray-500">Sign in with Facebook</p>
          </button>
        </div>

        <div className="mt-4 text-center">
          Don&apos;t have an account?
          <Link className="text-red-600"> Sign Up</Link>.
        </div>
      </form>
    </div>
  );
};

export default SignIn;
