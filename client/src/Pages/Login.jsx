import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext, UserContextProvider } from "../UserContext";

function Login() {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [data, setData] = useState("");
  const navigate=useNavigate();
  const {user,setUser}=useContext(UserContext);
  function loginUser(e) {
    e.preventDefault();
    axios
      .post("/api/login", userDetails)
      .then((response) => {
        console.log(response);
        setData(response.data);
        alert("Login Successfull!!");
        setUser(response.data); 
        navigate("/");
      })
      .catch((err) => {
        console.log("Error While Logging in user");
      });
  }
  useEffect(() => {
    console.log("data grabbed from the backend in loginpage", data);
  }, [data]);
  return (
    <div>
      <div className="form mt-28 flex flex-col items-center gap-4">
        <h1 className="text-xl font-semibold">Login here</h1>
        <input
          type="email"
          placeholder="Enter Your email"
          className="p-2 w-1/4 border-2 rounded-md border-gray-400"
          name="email"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            })
          }
        />
        <input
          type="password"
          placeholder="Enter Your password"
          className="p-2 w-1/4 border-2 rounded-md border-gray-400"
          name="password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            })
          }
        />
        <button
          onClick={loginUser}
          className="hover:bg-black w-1/4 p-2 bg-red-600 rounded-full text-white font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
