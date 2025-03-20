import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-gray-600 text-white py-3 text-2xl">
      <h2 className="text-4xl font-semibold">SkySalse</h2>

      <ul className="flex gap-10">
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/aboutus">AboutUs</Link></li>
        <li><Link to="/contactus">ContactUs</Link></li>
        <li><Link to="/hoc">HOC</Link></li>

      </ul>
    </div>
  );
};

export default Navbar;
