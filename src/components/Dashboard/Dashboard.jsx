import React from "react";
import  { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const resultsData = [
    { id: 101, name: "John Doe", physics: 78, chemistry: 85, higherMath: 90 },
    { id: 102, name: "Jane Smith", physics: 92, chemistry: 88, higherMath: 95 },
    {
      id: 103,
      name: "Bob Johnson",
      physics: 65,
      chemistry: 77,
      higherMath: 80,
    },
    { id: 104, name: "Sarah Lee", physics: 80, chemistry: 72, higherMath: 85 },
    { id: 105, name: "David Kim", physics: 88, chemistry: 90, higherMath: 92 },
    { id: 106, name: "Emily Chen", physics: 75, chemistry: 82, higherMath: 87 },
    {
      id: 107,
      name: "Michael Nguyen",
      physics: 50,
      chemistry: 69,
      higherMath: 45,
    },
    {
      id: 108,
      name: "Rachel Park",
      physics: 79,
      chemistry: 83,
      higherMath: 66,
    },
    {
      id: 109,
      name: "Kevin Patel",
      physics: 93,
      chemistry: 90,
      higherMath: 97,
    },
    {
      id: 110,
      name: "Ava Gonzalez",
      physics: 86,
      chemistry: 87,
      higherMath: 93,
    },
  ];
  return <>
  <h1 className="text-3xl font-semibold text-center py-3">Our Latest Achievement</h1>

  <div className="flex justify-center py-10">

        <LineChart  width={400} height={200} data={resultsData}>
            <Line type="monotone" stroke="#8884d8" dataKey={'physics'}></Line>
            <Line type="monotone" stroke="#8884d8" dataKey={'chemistry'}></Line>
            <Line type="monotone" stroke="#8884d8" dataKey={'higherMath'}></Line>
            <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
        </LineChart>
    
  </div>;
  </> 
};

export default Dashboard;
