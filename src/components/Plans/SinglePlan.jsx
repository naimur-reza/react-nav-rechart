import React from "react";
import { CheckIcon } from '@heroicons/react/24/solid'
const SinglePlan = ({ name, price, features }) => {
  console.log(name);
  return (
    <div className=" bg-gradient-to-bl text-slate-800  from-sky-50 to-pink-500 p-10 w-80 lg:w-fit mx-auto lg:p-16 rounded-tr-[99px] rounded-bl-[99px] relative space-y-2">
      <h1 className="text-2xl  text-center pb-3 font-semibold">{name}</h1>
      <hr  className="w-28 border-2 rounded-lg border-violet-500  mx-auto "/>
      <h2 className="text-center text-4xl py-4 font-bold">{price}</h2>
      {features.map((ft) => (
    <div className="flex gap-3"> <CheckIcon className="rounded-full bg-green-400 " width={18} height={18}></CheckIcon><h1 className="text-md font-[400]">{ft}</h1></div>
      ))}
      <div>
      <button
        className="bg-purple-600 font-semibold text-white px-14 py-2 rounded-full absolute text-lg bottom-4 left-28 ">
        Tap to buy
      </button>
      </div>
    </div>
  );
};

export default SinglePlan;
