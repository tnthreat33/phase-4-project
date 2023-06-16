import React from 'react';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch('/logout', { method: 'DELETE' });

      if (response.ok) {
        // Clear user data or token from frontend (e.g., local storage or React context)
      } else {
        // Handle logout error
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;

