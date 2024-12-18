import axios from "axios";
import { BASE_URL } from "./AppUtil";
import axiosInstance from "../utils/axiosInstance";
const USERS_URL = `${BASE_URL}/users`; // Base API URL for users

export default class UserService {
  // Create a new user (POST request)
  static async createUser(userData) {
   return await axiosInstance(`${USERS_URL}`, "POST", userData);
  }

  // Get all users (GET request)
  static getUsers() {
    return axiosInstance(USERS_URL, "GET");

  }

  // Get a user by ID (GET request)
  static getUserById(userId) {
    return axiosInstance(`${USERS_URL}/${userId}`, "GET");
  }

  // Update a user by ID (PUT request)
  static updateUser(id, updatedData) {
    return axiosInstance(`${USERS_URL}/${id}`,'PUT', updatedData);
  }

  // Delete a user by ID (DELETE request)
  static deleteUser(id) {
    return axiosInstance(`${USERS_URL}/${id}`,'DELETE');
  }
}

