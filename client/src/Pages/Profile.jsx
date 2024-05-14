import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import {
  Navigate,
  NavLink,
  useNavigate,
  Link,
  useParams,
} from "react-router-dom";
import axios, { Axios } from "axios";
import PlacesPage from "./PlacesPage";
import { FaHotel } from "react-icons/fa6";

import { FaListUl } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

export default function Profile() {
  const { user, ready, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const { subpage } = useParams();
  useEffect(() => {
    if (user?.result?.fullName === undefined) {
      axios
        .get("/api/profile")
        .then((response) => setName(response.data.result.fullName))
        .catch((err) => console.log(err));
    }
  });
  if (!ready) {
    return "Loading....";
  } else if (ready && !user) {
    navigate("Login");
  } else if (user.result?.fullName === undefined && ready === false) {
    return "Loading";
  }

  function logoutUser() {
    axios
      .get("/api/logout")
      .then((response) => {
        setFlag(!flag);
        setUser(null);
        alert("Successfully Logged out!!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error logout ing the user");
      });
  }

  return (
    <div>
      <nav className="w-full flex justify-center mt-4 gap-6 items-center p-3">
        <NavLink
          className="bg-slate-300 flex gap-2 items-center text-black font bold p-2 px-4 rounded-full p-links"
          to="/profile/bookings"
        >
          <MdPlace style={{fontSize : '20px'}}/>
          My Bookings
        </NavLink>
        <NavLink
          className="bg-slate-300 flex items-center gap-2 text-black font bold p-2 px-4 rounded-full p-links"
          to="/profile/accomodations"
        >
          <FaHotel style={{fontSize : '20px'}}/>
          My Accomodations
        </NavLink>
      </nav>
      {subpage === undefined && (
        <div className="flex flex-col gap-4 items-center mt-12">
          <span className="text-xl font-semibold">
            Logged in as {user?.result?.name || name}
          </span>
          <button
            onClick={logoutUser}
            className="w-1/4 bg-red-600 text-white rounded-full p-2 font-semibold"
          >
            Logout
          </button>
        </div>
      )}
      {subpage === "accomodations" && (
        <div className="flex flex-col gap-2  mt-8">
          
          <PlacesPage />
        </div>
      )}
    </div>
  );
}
