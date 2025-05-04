import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import PasswordField from '../Components/PasswordField';
import { motion } from 'framer-motion';
import paperInventoryVector from '../Assets/paperInventoryVector.png'; // Replace with a relevant image

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4 sm:px-12 font-poppins"
    >
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-xl grid md:grid-cols-2 overflow-hidden">
        
        {/* Vector Side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-500 p-8"
        >
          <img src={paperInventoryVector} alt="Inventory" className="w-full max-w-[22rem]" />
        </motion.div>

        {/* Form Side */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center px-6 py-10 md:px-10"
        >
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-blue-700">Welcome Back</h1>
            <p className="text-gray-500 text-sm">Login to manage your paper inventory</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <PasswordField
                name="password"
                width="w-full"
                position="right-3"
                change={(e) => setPassword(e.target.value)}
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleLogin}
              type="button"
              className="w-full py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Sign In
            </motion.button>
          </form>

          <p className="text-xs text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-blue-600 font-medium hover:underline">
              Register here
            </Link>
          </p>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition">
              <FcGoogle className="text-xl" />
              Google
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition">
              <FaApple className="text-xl" />
              Apple
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
