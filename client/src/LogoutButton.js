import React from 'react';

function LogoutButton({onLogout}){
function handleLogout(){
  fetch("/logout", {
    method: "DELETE",
  }).then(() => onLogout());
}

  return (
    <button onClick={handleLogout}>Logout</button>
  );
  }

export default LogoutButton;

