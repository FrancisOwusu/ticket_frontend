import React, { createContext, useState, useEffect, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
// Create the AuthContext
export const AuthContext = createContext();

// Utility functions for token management
const getToken = () => localStorage.getItem("authToken");
const saveToken = (token) => localStorage.setItem("authToken", token);
const removeToken = () => localStorage.removeItem("authToken");
function getUserIdFromToken(token) {
  try {
    // Decode the token
    const decodedToken = jwtDecode(token);

    // Assuming the user ID is stored in `sub` or `userId`
    return decodedToken.userId || decodedToken.sub;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}
// AuthProvider component to provide authentication state and actions
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  
  // Check if a token exists on initial mount
  useEffect(() => {
    const token = getToken();

    if (token) {
      const decodeToken=  jwtDecode(token);
      localStorage.setItem("userId", decodeToken.userId);
      setUserId(getUserIdFromToken(token));
      setIsAuthenticated(true);
    }
    setLoading(false); // Set loading to false after checking token
  }, []);

  // Login function using useCallback to memoize the function
  const login = useCallback((token) => {
    saveToken(token);

    setIsAuthenticated(true);
  }, []); 

  // Logout function using useCallback to memoize the function
  const logout = useCallback(() => {
    removeToken();
    setIsAuthenticated(false);
  }, []);

  // Provide isAuthenticated, login, and logout to children components
  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, login, logout }}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};
