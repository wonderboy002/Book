import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import { CiLogout } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";

function Navigation() {
  const { user, setUser } = useContext(UserContext);
  const [logUser,setLogUser]=useState(null);
  useEffect(() => {
    if (!user) {
      axios
        .get("/api/profile")
        .then((response) => setUser(response.data))
        .catch((error) =>
          console.log("Error while hitting /profile end point")
        );
    }
  },[]);

  useEffect(()=>{
    setLogUser(user);
  })

  return (
    <div>
      <header className="p-4 flex">
        <span className="flex items-center gap-2 font-bold text-xl text-[#ff3838]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 -rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          Airbnb
        </span>
        <div className="search-widget shadow-sm shadow-slate-400 border-2 border-gray-300 gap-2 p-[8px] rounded-full justify-evenly flex  text-slate-500 font-semibold items-center mx-auto">
          <div>Anywhere</div>
          <div>|</div>
          <div>Anyweek</div>
          <div>|</div>
          <div>Add Guests</div>
          <button className="Search p-2 bg-[#ff3838] rounded-full text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
        <Link
          to={!user && "register"}
          className="userProfile border-2 border-gray-300 p-3 rounded-full shadow-md flex gap-2  items-center"
        >
          {user && (
            <div className="flex items-center gap-2 rounded-full">
              <Link to="profile" className="Logout p-2"><FaUserAlt style={{fontSize : "20px"}}/></Link>
             
            </div>
          )}
          {!user && (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </>
          )}
        </Link>
      </header>
    </div>
  );
}

export default Navigation;
