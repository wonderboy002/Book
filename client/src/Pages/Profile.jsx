import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const { user, ready } = useContext(UserContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
      if (user?.result?.fullName===undefined){
        axios.get("/api/profile")
        .then((response)=>setName(response.data.result.fullName))
        .catch((err)=>console.log(err))
      }
      
  });
  if (!ready) {
    return "Loading....";
  } else if (ready && !user) {
    navigate("Login");
  } else if (user.result?.fullName === undefined && ready === false) {
    return "Loading";
  }

  return (
    <div>
      <h1 className="text-2xl text-center mt-4 font-bold ">
        {user?.result?.fullName || name}
      </h1>
      <nav className="w-full flex justify-center gap-6 items-center p-3">
        <Link to="/profile/bookings">My Bookings</Link>
        <Link to="/profile/accomodations">My Accomodations</Link>
        <Link to="/rofile">My Profile</Link>
      </nav>
    </div>
  );
}
