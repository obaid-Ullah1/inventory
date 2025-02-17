import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import healthCareVector from '../Assets/vector1.png'
import Button1 from '../Components/Button1';
import { BiError } from "react-icons/bi";
import {Link} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import { MdVerified } from "react-icons/md";
import PasswordField from '../Components/PasswordField';

export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);
    const [model, setmodel] = useState(false);


    const navigate = useNavigate()

  const handleOkBtn = () => {
    navigate("/");
  };

  const handleRegisterClick = () => {

    setmodel(true);

    setTimeout(() => {
      setLoading(!loading);
    }, 3000);


  }

  return (
    <div className="flex items-center px-2 xl:px-36 bg-[#ededfc] min-h-screen font-poppins">

<div
        className={`${
          model ? "flex justify-center items-center" : "hidden"
        } absolute inset-0 bg-[rgba(45,43,43,0.61)] z-10`}
      >
        <div
          className={` bg-white rounded-md max-w-[20rem] sm:max-w-[25rem] lg:max-w-[30rem] w-full shadow-sm shadow-gray-300 z-10 ${
            model === true ? "block" : "hidden"
          } `}
        >
          {loading === true ? (
            <div className="flex justify-center items-center flex-col h-[12rem] gap-y-4">
              <h2 className="text-[1.4rem] lg:text-[1.6rem] text-[#1AADAE] font-medium">
                Processing
              </h2>

              <p className="text-[0.8rem] md:text-[0.9rem]">Please wait</p>

              <ClipLoader
                color={"#1AADAE"}
                loading={loading}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col py-5 gap-y-5">
              <MdVerified className="text-[#1AADAE] text-[3rem] lg:text-[4rem]" />

              <h3 className="text-[1rem] md:text-[1.2rem] text-[#1AADAE] font-medium">
                Registration Successful
              </h3>

              <button
               className="px-10 py-1.5 bg-[#1AADAE] font-medium text-white text-sm lg:text-[0.9rem] rounded-lg shadow-sm shadow-gray-400 cursor-pointer hover:bg-[#128c8f]"

                onClick={handleOkBtn}
              >
                OK
              </button>
            </div>
          )}
        </div>
      </div>


      <div className="flex justify-center w-[95%] sm:h-auto sm:w-[75%] m-auto rounded-xl shadow-sm shadow-gray-500 bg-white">
      <div className="hidden flex-1 flex-grow w-full md:flex justify-center items-center bg-gradient-to-b from-[#0a8d8f] to-[#1AADAE] rounded-l-xl ">

          <img
            src={healthCareVector}
            alt="healthcare"
            className="max-w-[27rem] w-full"
          />
        </div>

        <div className="flex flex-col flex-1 flex-grow w-full max-w-[100%] md:max-w-[50%] px-3 min-[420px]:px-10 md:px-4 lg:px-7 xl:px-10 rounded-r-xl">
          <div className='py-5'>
            <div className="text-center sm:text-start space-y-1">
              <h1 className="text-[1.3rem] sm:text-[1.5rem] font-semibold font-poppins">Create an <span className='text-[#1AADAE]'>Account</span></h1>
              <p className=" text-gray-500 text-xs xl:text-[0.8rem]">
                Already have an Account ?{" "}
                <Link
                  to="/"
                  className="text-[#1AADAE]font-medium hover:underline"
                >
                  {" "}
                  Login{" "}
                </Link>
              </p>
            </div>
            <form className="pt-5 space-y-3">

            <div>
                <label htmlFor="Name" className="font-medium text-[0.8rem]">
                  Name <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="text"
                  name="Name"
                  className="border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="DateOfBirth" className="font-medium text-[0.8rem]">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="date"
                  name="Name"
                  className="border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className='flex gap-x-5 py-3'>
                 <label htmlFor='Gender' className='font-medium text-[0.85rem]'>Gender <span className="text-red-500">*</span></label>
                 <div className='flex items-center gap-x-2'>
                 <input type="radio" name="Gender" className="accent-[#1AADAE]" />

                 <label htmlFor="male" className='text-sm'>Male</label>
                 </div>
                 <div className='flex items-center gap-x-2'>
                 <input type="radio" name="Gender" className="accent-[#1AADAE]" />

                 <label htmlFor="Female" className='text-sm'>Female</label> 
                 </div>
              </div>
              <div>
                <label htmlFor="cnic" className="font-medium text-[0.8rem]">
                  CNIC No <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="number"
                  name="cnic"
                  className="border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="font-medium text-[0.8rem]">
                  Email <span className="text-red-500">*</span>
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  className="border border-gray-400 w-full text-sm max-w-[30rem] py-2.5 px-2 mt-2 rounded-md"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="font-medium text-[0.8rem]">
                  Password <span className="text-red-500">*</span>
                </label>
                <br />
                <PasswordField
                  name="password"
                  width="max-w-[30rem]"
                  position="right-3"
                  change={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="w-full bg-red-300 rounded-lg text-red-600 gap-x-3 items-center p-2 hidden">
                <BiError className="text-[1.5rem]" />
                <p className="text-sm font-medium">Invalid Credentials</p>
              </div>

              <div className="pt-5">
                <Button1
                  label="Register"
                  height="h-[2.7rem]"
                  width="max-w-[30rem]"
                  click={handleRegisterClick}
                />
              </div>  
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
