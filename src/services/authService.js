import axios from "axios";
import { BASE_URL } from "./AppUtil";
const LOGIN_API_URL = `${BASE_URL}/auth/login`;

export const loginService = async (email, password) => {
  const response = await axios.post(LOGIN_API_URL, { email, password });
  return response.data; //Expected to return the token
};

export const getUser = async () => {
  const token = localStorage.getItem('token"');
  if (!token) throw new Error("No token found");
  //Optionally,verify or decode token here
  return token;
};
