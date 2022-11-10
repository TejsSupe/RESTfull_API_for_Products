import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbarcss">
      <div>
        <Link to="/">
          <button className="btninnavbar">Home</button>
        </Link>
        <Link to="/addproduct">
          <button className="btninnavbar">Add Product</button>
        </Link>
      </div>
    </div>
  );
};
