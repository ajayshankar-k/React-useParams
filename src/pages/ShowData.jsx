// Step-4
// ShowData.jsx

// Import necessary modules from React and React Router
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../App.css";

// Component to show individual data
const ShowData = () => {
  // Get parameter from URL
  const { id } = useParams();

  // Define state to store data
  const [data, setData] = useState([]);

  // Fetch data from API based on parameter
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const mydata = await response.json();
        // Find data matching parameter
        const filteredData = mydata.find((items) => items.id === parseInt(id));
        setData(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  }, [id]);

  return (
    <div className="wrapper">
      <div className="container">
        {/* Render individual data */}
        <p>Name : {data.name}</p>
        <p>Username : {data.username}</p>
        <p>Email : {data.email}</p>
        <p>Phone : {data.phone}</p>
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowData;

// Code by Ajay Shankar