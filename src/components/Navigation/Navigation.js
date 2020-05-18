import React from "react";
import NavItem from "./NavItem/NavItem";

const Navigation = (props) => {
    const navItems = props.navItems.map( el => <NavItem name={el.name} href={el.href} /> )
    return (
        <nav>
            <ul className="clear-list-styles">
                {navItems}
            </ul>
        </nav>
    )
}

export default Navigation
