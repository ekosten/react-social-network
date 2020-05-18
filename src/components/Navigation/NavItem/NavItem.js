import React from "react";
import styles from "./NavItem.module.css"
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className={styles.navItem}>
            <NavLink to={props.href} activeClassName={styles.active}>{props.name}</NavLink>
        </li>
    )
}

export default NavItem
