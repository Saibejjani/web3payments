import { TransactionContext } from "../context/TransactionContext";

import React, { useContext } from "react";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Register = () => {
  const { getName, registerName, handleChangeName } =
    useContext(TransactionContext);
  return (
    <>
      <Input
        placeholder="Enter Message"
        name="name"
        type="text"
        handleChange={handleChangeName}
      />
      <button
        type="button"
        onClick={registerName}
        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
      >
        setName
      </button>
      <button
        type="button"
        onClick={getName}
        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
      >
        getName
      </button>
    </>
  );
};

export default Register;
