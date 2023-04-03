import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleMember from "./SingleMember";

const Members = () => {
  const data = useLoaderData();
  return (
    <>
      <h1 className="text-center text-3xl py-4">Total Friends : {data.length}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 ">
        {data.map((it) => (
          <SingleMember key={it.id} person={it}></SingleMember>
        ))}
      </div>
    </>
  );
};

export default Members;
