import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../utils/axiosInstance";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [data, setData] = useState(null);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance(
          "http://localhost:4000/dashboard",
          "GET"
        );
  
        setData(response.data);
      }  catch (error) {
        if (error.response && error.response.status === 401) {
          // Navigate to the 401 Unauthorized page
          navigate("/unauthorized");
        } else {
          console.log("Error:", error.message);
        }
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const barData = {
    labels: [
      "Total Tickets",
      "Assigned",
      "Unassigned",
      "New",
      "In Progress",
      "Completed",
    ],
    datasets: [
      {
        label: "Tickets",
        data: [
          data.totalTickets,
          data.assignedTickets,
          data.unassignedTickets,
          data.newTickets,
          data.inProgressTickets,
          data.completedTickets,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Assigned", "Unassigned", "New", "In Progress", "Completed"],
    datasets: [
      {
        label: "Tickets",
        data: [
          data.assignedTickets,
          data.unassignedTickets,
          data.newTickets,
          data.inProgressTickets,
          data.completedTickets,
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleLogout = () => {
    logout(); // Call the logout function to clear the token
    navigate("/login"); // Redirect to the login page
  };
  return (
    <div>
      <h1>Ticket Dashboard</h1>
      <div>
        <Bar data={barData} />
      </div>
      <div>
        <Pie data={pieData} />
      </div>
      <button onClick={handleLogout}>Logout</button> {/* Logout button */}
    </div>
  );
};

export default Dashboard;
