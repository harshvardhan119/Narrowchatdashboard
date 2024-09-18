import React from "react";
import Working from "./Working";


function Navbar() {
    return (
      
      <div className="App">
       <div id="logo">
        <b id="lo">Narrow Chat</b>
      
       </div>
       <div id="components">
        <a href='#' id="a"><b>Home</b></a>
        <a href='#'id="b"><b>About</b></a>
        <a href='#'id="c"><b>Services</b></a>
       </div>
       <div id="Login">
        <button>Login</button>
       </div>
      </div>
    );
  }
  
  export default Navbar;
  