import React, { useEffect } from "react";

function Admin() {
  useEffect(() => {
    window.location.href = "http://localhost:3000/login";
  }, []);

  return <div></div>;
}

export default Admin;

//https://deluxe-fudge-4a432a.netlify.app/
