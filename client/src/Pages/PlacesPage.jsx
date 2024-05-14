import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";
function PlacesPage() {
  const { action } = useParams();
  return (
    <div>
      {action === "new" && (
        <div>
          <div className="places-form flex flex-col items-center gap-2">
            <h1 className="font-extrabold text-center">
              Add Details of Your Place
            </h1>
            <div className="flex gap-2 items-center justify-center w-full">
              <span className="font-semibold">Title : </span>
              <input
                type="text"
                name="title"
                className="p-2 w-1/3"
                placeholder="Enter title for example my lovely apartment"
              />
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <span className="font-semibold">Address : </span>

              <input
                type="text"
                name="address"
                className="p-2 w-1/3"
                placeholder="Enter Address for your place"
              />
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <span className="font-semibold">Description : </span>

              <input
                type="text"
                name="description"
                className="p-2 w-1/3"
                placeholder="Describe your place"
              />
            </div>
            <div className="flex  gap-2 items-center justify-center w-full">
              <span className="font-extrabold">Add Photos of Your place : </span>
              <input type="text" name="link" id="" placeholder="Add Using Links" className="p-2"/>
               <button className="flex gap-2 items-center bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full">Add <IoMdAddCircleOutline  style={{fontSize : '20px'}}/></button>
               <button className="bg-teal-600 hover:bg-green-700 flex gap-2 items-center px-6 py-2 text-white rounded-full font-semibold">Submit info <FaCloudUploadAlt style={{fontSize : '20px'}}/></button>
            </div> 
            <div className="photos mt-4 w-full">
                Photos will be displayed here
            </div>
          </div>
        </div>
      )}
      {action !== "new" && (
        <div className="flex flex-col gap-4 items-center">
          <Link
            to="new"
            className="px-6 hover:bg-red-700 flex gap-1 items-center bg-red-600 text-white font-semibold py-2 rounded-full"
          >
            <IoMdAddCircleOutline style={{ fontSize: "20px" }} /> Add new place
          </Link>
          Here are the places page
        </div>
      )}
    </div>
  );
}

export default PlacesPage;
