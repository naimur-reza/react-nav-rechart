import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Plans from "./components/Plans/Plans";
import Dashboard from "./components/Dashboard/Dashboard";
import Nav from "./components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import Members from "./components/Members/Members";
import MemberDetails from "./components/Members/MemberDetails/MemberDetails";
import Posts from "./components/Posts/Posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/plans",
        element: <Plans></Plans>,
      },
      {
        path: "members",
        element: <Members></Members>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path:"member/:memberId",
        element:<MemberDetails></MemberDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`)
      },
      {
        path: "/contact us",
        element: <Contact></Contact>,
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
