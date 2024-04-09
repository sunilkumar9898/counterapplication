import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="nav">
            <ul className="nav_link">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
               <Link to={"/service"}>Services</Link>

            </ul>
        </div>
    );
};

export default Header;
