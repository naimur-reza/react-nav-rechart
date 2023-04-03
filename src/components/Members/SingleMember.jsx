import React from "react";
import { Link } from "react-router-dom";

const SingleMember = ({ person }) => {
  const { name, email, address, id } = person;
  return (
    <div>
      <div className="rounded-lg text-white bg-emerald-400 shadow-xl border-slate-300 p-3 m-3 font-medium space-y-2 text-lg font-serif">
        <h1 className="text-slate-800  ">Name: {name}</h1>
        <h1>Email: {email}</h1>
        <h1>Street: {address.street}</h1>
        <div className="my-3">
          <Link
            className="bg-teal-500 font-sans px-4 py-2 rounded-md text-slate-100 font-semibold"
            to={`/member/${id}`}>
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleMember;
