import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import logo from "../Assets/UroVision Logo.png";
import { IoArrowBackCircle } from "react-icons/io5";
import resetPassVector from "../Assets/resetPassword Vector.jpg";
import PasswordFied from "../Components/PasswordField";
import ResetBtn from "../Components/Button1";
import { MdVerified } from "react-icons/md";
import { BiError } from "react-icons/bi";

export default function ResetPassword() {
  const [loading, setLoading] = useState(true);
  const [model, setmodel] = useState(false);

  const navigator = useNavigate();

  const handleBackButton = () => {
    navigator(-1);
  };

  const handleOkBtn = () => {
    navigator("/");
  };

  const handlePasswordReset = () => {
    setmodel(true);

    setTimeout(() => {
      setLoading(!loading);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
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
              <h2 className="text-[1.4rem] lg:text-[1.6rem] text-blue-600 font-medium">
                Processing
              </h2>

              <p className="text-[0.8rem] md:text-[0.9rem]">Please wait</p>

              <ClipLoader
                color={"#51ACFF"}
                loading={loading}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center flex-col py-5 gap-y-5">
              <MdVerified className="text-blue-600 text-[3rem] lg:text-[4rem]" />

              <h3 className="text-[1rem] md:text-[1.2rem] text-blue-600 font-medium">
                Password Reset Successful
              </h3>

              <button
                className="px-10 py-1.5 bg-blue-600 font-medium text-white text-sm lg:text-[0.9rem] rounded-lg shadow-sm shadow-gray-400 cursor-pointer hover:bg-blue-500"
                onClick={handleOkBtn}
              >
                OK
              </button>
            </div>
          )}
        </div>
      </div>

      <div className=" flex items-center py-4 px-2 sm:12px md:18px lg:24px xl:px-30 2xl:px-36 bg-[#ededfc] h-[100vh] font-poppins">
        <div className="flex relative justify-evenly gap-y-10 w-[95%] sm:w-[75%] min-h-[100%] m-auto rounded-xl shadow-sm shadow-gray-500 bg-white ">
          <div className="absolute top-5 left-4 md:left-8">
            <IoArrowBackCircle
              className="text-gray-300 text-[2rem] hover:text-blue-600 cursor-pointer"
              onClick={handleBackButton}
            />
          </div>

          <div className="hidden md:flex flex-grow flex-1 justify-center items-center">
            <img
              src={resetPassVector}
              alt="resetVectorImage"
              className="max-w-[30rem] w-full"
            />
          </div>

          <div className="flex flex-grow flex-1 flex-col justify-center max-w-[100%] py-16 md:py-8 md:max-w-[50%] w-full px-4 sm:px-7">
            <div>
              <img
                src={logo}
                alt="UroVision"
                className="max-w-[7rem] lg:max-w-[9rem]"
              />
            </div>

            <div className="py-5">
              <h1 className="text-[1.4rem] lg:text-[1.7rem] font-bold">
                Reset <span className="text-blue-400">Password</span>
              </h1>
              <p className="text-gray-500 py-3 text-[0.7rem] lg:text-[0.85rem]">
                Enter at least 9 characters with uppercase, lowercase and
                special character.
              </p>
            </div>

            <div className=" max-w-[30rem]">
              <label
                htmlFor="Password"
                className="font-medium text-[0.7rem] lg:text-[0.8rem]"
              >
                Enter New Password
              </label>
              <br />
              <PasswordFied name="Password" position="right-5" />
            </div>

            <div className="py-5 max-w-[30rem]">
              <label
                htmlFor="ConfirmPassword"
                className="font-medium text-[0.7rem] lg:text-[0.8rem]"
              >
                Confirm New Password
              </label>
              <br />
              <PasswordFied name="ConfirmPassword" position="right-5" />
            </div>

            <div className="flex items-center w-full bg-red-300 rounded-lg text-red-600 gap-x-3 p-2">
              <BiError className="text-[1.5rem]" />
              <p className="text-sm font-medium">Password does not Match</p>
            </div>

            <div className="py-5">
              <ResetBtn
                label="Reset Password"
                width="max-w-[30rem]"
                click={handlePasswordReset}
                height="h-[2.7rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
