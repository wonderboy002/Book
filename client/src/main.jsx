import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Navigation from "./Components/Navigation.jsx";
import Layout from "./Components/Layout.jsx";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import { UserContextProvider } from "./UserContext.jsx";
import Profile from "./Pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>This is the home page</h1>,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "Login",
        element: <Login />,
      },
      {
        path: "profile/:subpage?",//defining params for url
        element: <Profile />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
