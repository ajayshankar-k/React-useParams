// Step-3
// AllData.jsx

// Import necessary modules from React and React Router
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

// Component to display all data
const AllData = () => {
  // Define state to store data
  const [data, setData] = useState([]);

  // Fetch data from API on component mount
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const mydata = await response.json();
        setData(mydata);
      } catch (error) {
        console.log(error);
      }
    };
    apiCall();
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        {/* Render data with links */}
        {data.map((items) => (
          <Link key={items.id} to={`/showdata/${items.id}`}>
            <p className="all-data">
              {items.id}) {items.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllData;
