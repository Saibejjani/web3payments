import React from "react";
import { useState, useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import "./Register.css";
import { ethers } from "ethers";

import { Loader } from "../";
const Register = () => {
  const { isLoading, register } = useContext(TransactionContext);

  const [regInfo, setRegInfo] = useState({});
  const handleSubmit = async (e) => {
    const { domain, userName } = regInfo;

    e.preventDefault();
    if (!domain || !userName) return;
    await register(domain, userName);
    setRegInfo({ domain: "", userName: "" });
  };
  return (
    <div className="flex justify-center sm:px-4 p-12 ">
      <div
        className=" w-3/5 md:w-full bg-white  bg-opacity-5 p-12 rounded-md shadow-lg
        "
        id="register"
      >
        <h1 className="font-poppins text-white font-semibold minlg:text-4xl text-2xl">
          Register
        </h1>
        <div className=" font-poppins text-white font-semibold text-xl">
          <p>A step towards faster Blockchain Transactions.</p>
          <div className="mt-4">
            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <input
                placeholder="domain@bups"
                type="text"
                value={regInfo.domain}
                onChange={(e) =>
                  setRegInfo({
                    ...regInfo,
                    domain: e.target.value,
                  })
                }
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <input
                placeholder="User Name"
                value={regInfo.userName}
                onChange={(e) =>
                  setRegInfo({ ...regInfo, userName: e.target.value })
                }
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {isLoading ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                  onClick={handleSubmit}
                >
                  Register Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
