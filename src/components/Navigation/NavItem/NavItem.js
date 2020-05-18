import React from "react";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className="navItem">
            <NavLink to={props.href}>{props.name}</NavLink>
        </li>
    )
}

export default NavItem
