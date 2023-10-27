import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("arifur@gmail.com");
  const [password, setPassword] = useState("arifur3302");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        "https://dev-api.academypro.live/admin-auth/login",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const data = response.data.data.access_Token;
        console.log(response.data);
        setMessage(response.data.message);
        console.log("Data", data);
        localStorage.setItem("Access_Token", JSON.stringify(data));
        navigate("/home");
      } else {
        setMessage("Login Failed");
        console.error("The Error is", response.status);
      }
    } catch (error) {
      setMessage("Login Failed");
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">Sign In</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded shadow appearance-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="text-red-500 mb-3">{message}</p>
        <button
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSignIn}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
