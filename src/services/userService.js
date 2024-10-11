import axios from "axios";
import { BASE_URL } from "./AppUtil";
import axiosInstance from "../utils/axiosInstance";
const USERS_URL = `${BASE_URL}/users`; // Base API URL for users

export default class UserService {
  // Create a new user (POST request)
  static createUser(userData) {
    return axiosInstance(`${USERS_URL}/create`, "POST", userData);
    // return axios.post(`${API_URL}/create`, userData);
  }

  // Get all users (GET request)
  static getUsers() {
    return axiosInstance(USERS_URL, "GET");

    // return axios.get(API_URL);
  }

  // Get a user by ID (GET request)
  static getUserById(userId) {
    return axiosInstance(`${USERS_URL}/${userId}`, "GET");

    // return axios.get(`${API_URL}/${userId}`);
  }

  // Update a user by ID (PUT request)
  static updateUser(userId, updatedData) {
    return axios.put(`${USERS_URL}/update/${userId}`, updatedData);
  }

  // Delete a user by ID (DELETE request)
  static deleteUser(userId) {
    return axios.delete(`${USERS_URL}/delete/${userId}`);
  }
}

