import React from "react";
import { StyledNavbar } from "./Navbar.style";

export default function Navbar() {
  return (
    <StyledNavbar>
      <div className="navbar-left-items">
        <p>KhataBook</p>
      </div>
      <div className="navbar-right-items">
        <button>Signup</button>
        <button>Login</button>
      </div>
    </StyledNavbar>
  );
}
