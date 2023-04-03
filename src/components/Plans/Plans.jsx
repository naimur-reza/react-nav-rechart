import React, { useEffect, useState } from "react";
import SinglePlan from "./SinglePlan";
import Nav from "../Nav/Nav";

const Plans = () => {
  const [plans, setPlan] = useState([]);
  useEffect(() => {
    fetch("plans.json")
      .then((res) => res.json())
      .then((data) => setPlan(data));
  }, []);
  // console.log(plans);
  return (<>
  <h1 className="text-5xl text-center font-semibold py-10">
        {plans.title}
      </h1>
    <div className="grid grid-cols-1 py-5 lg:grid-cols-3 max-w-6xl mx-auto gap-5">
      
      {plans?.plans?.map((pl) => (
          <SinglePlan
          name={pl.name}
          price={pl.price}
          features={pl.features}></SinglePlan>
          ))}
    </div>
          </>
  );
};

export default Plans;
