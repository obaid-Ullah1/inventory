import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/UroVision Logo.png';
import healthCareVector from '../Assets/vector1.png';
import Button1 from '../Components/Button1';
import { FaApple } from 'react-icons/fa';
import { BiError } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import PasswordField from '../Components/PasswordField';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {}, 500);
  }, []);

  const handleLogin = async (e) => {
    navigate('/Dashboard');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className='flex items-center justify-center px-2 sm:px-20 md:px-16 lg:px-22 xl:px-36 bg-[#ededfc] min-h-screen font-poppins overflow-hidden'
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className='flex justify-center w-[95%] sm:w-[75%] rounded-xl shadow-lg bg-white'
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className='hidden flex-1 md:flex justify-center items-center bg-gradient-to-b from-[#1AADAE] to-[#159C9D] rounded-l-xl relative'
        >
          <motion.img
            src={healthCareVector}
            alt='healthcare'
            className='max-w-[27rem] w-full'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col flex-1 max-w-full md:max-w-[50%] px-3 min-[420px]:px-10 md:px-4 lg:px-7 xl:px-10 rounded-r-xl'
        >
          <div className='flex justify-center sm:justify-start'>
            <img src={logo} alt='UroVision' className='max-w-[7rem] xl:max-w-[9rem] my-5 2xl:my-2' />
          </div>

          <div className='space-y-2'>
            <motion.div className='text-center sm:text-start' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <h1 className='text-[1.5rem] font-semibold'>Welcome Back !</h1>
              <p className='text-gray-400 text-[0.8rem]'>Login to access your account</p>
            </motion.div>

            <form className='py-5'>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <label htmlFor='email' className='font-medium text-[0.8rem]'>
                  Email <span className='text-red-500'>*</span>
                </label>
                <br />
                <input
                  type='email'
                  name='email'
                  className='border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>

              <motion.div className='py-3' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                <label htmlFor='password' className='font-medium text-[0.8rem]'>
                  Password <span className='text-red-500'>*</span>
                </label>
                <br />
                <PasswordField name='password' width='max-w-[30rem]' position='right-3' change={(e) => setPassword(e.target.value)} />
              </motion.div>

              <div className='py-5'>
                <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
                  <Button1 label='Sign In' click={handleLogin} height='h-[2.7rem] w-full text-base font-semibold' />
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                <p className='text-gray-500 text-xs xl:text-[0.8rem]'>
                  Don't Have an Account ?
                  <Link to='/SignUp' className='text-[#1AADAE] font-medium hover:underline'> Register </Link>Here
                </p>
              </motion.div>

              <div className='flex justify-evenly py-5'>
                <motion.button className='py-2 px-5 flex items-center text-sm font-medium border border-gray-300 gap-x-2 rounded-full hover:bg-gray-100' whileHover={{ scale: 1.1 }}>
                  <FcGoogle className='text-[1.5rem]' />Google
                </motion.button>
                <motion.button className='py-2 px-5 flex items-center text-sm font-medium border border-gray-300 gap-x-2 rounded-full hover:bg-gray-100' whileHover={{ scale: 1.1 }}>
                  <FaApple className='text-[1.5rem]' />Apple
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
