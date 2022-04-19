import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <div className=" fixed top-0 left-0 right-0 shadow bg-white">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div>
          <Menu></Menu>
        </div>
      </div>
    </div>
  );
}
