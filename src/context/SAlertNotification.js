// NotificationContext.js
import React, { createContext, useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

// Create SweetAlert instance with React content
const MySwal = withReactContent(Swal);

// Create Context
const NotificationContext = createContext();

// Notification Provider
export const SNotificationProvider = ({ children }) => {
  // Function to show alerts with custom message, title, and type
  const showAlert = ({ title = 'Alert', message, type = 'info' }) => {
    MySwal.fire({
      title,
      text: message,
      icon: type, // 'success', 'error', 'warning', 'info', 'question'
      confirmButtonText: 'OK',
    });
  };

  return (
    <NotificationContext.Provider value={{ showAlert }}>
      {children}
    </NotificationContext.Provider>
  );
};

// Custom Hook to use Notification Context
export const useNotification = () => useContext(NotificationContext);
