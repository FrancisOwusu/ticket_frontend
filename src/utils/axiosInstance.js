// axiosInstance.js
import axios from "axios";

// Get token from storage (or wherever you store it)
const token = localStorage.getItem("authToken"); // Or use sessionStorage, context, etc.

// Create an axios instance
// const axiosInstance = axios.create({
//   baseURL: "https://api.yourservice.com", // API base URL
//   headers: {
//     Authorization: `Bearer ${token}`, // Add Bearer token here
//   },
// });

const axiosInstance = async (url, method = "GET", data = null) => {
  // Get token from storage (or wherever you store it)
  const token = localStorage.getItem("authToken"); //get token from localStorage
  const config = {
    method: method,
    url: url, //Use the passed URL here
    headers: {
      Authorization: `Bearer ${token}`, // Add the Bearer token
      "Content-Type": "application/json",
    },
    data: data, //For POST or PUT requests,include the data
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};
export default axiosInstance;
