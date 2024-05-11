import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Register(e) {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState("");
  const navigate=useNavigate();
  function registerUser(e) {
    e.preventDefault();
    console.log(userDetails);
    axios
      .post("/api/register", userDetails)
      .then((res) => {
        setData(res.data);
        alert("New User successfully Created");
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // useEffect(() => {
  //   console.log("Data gathered from backend!!!", data);
  // });

  return (
    <div>
      <div className="form mt-28 flex flex-col items-center gap-4">
        <h1 className="text-xl font-semibold">Create an Account</h1>
        <input
          type="text"
          placeholder="Enter Your Full Name"
          className="p-2 w-1/4 border-2 rounded-md border-gray-400"
          name="fullName"
          value={userDetails.fullName}
          onChange={(e) =>
            setUserDetails((prev) => {
              return { ...prev, [e.target.name]: e.target.value };
            })
          }
        />
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
          onClick={registerUser}
          className="hover:bg-black w-1/4 p-2 bg-red-600 rounded-full text-white font-bold"
        >
          Register
        </button>
        <h1 className="font-semibold">
          Already Have an Account{" "}
          <Link to="/Login" className="text-red-500">
            sign in here
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Register;
