import React from "react";
import style from "./Navbar.module.css"

export const Navbar = () => {
    return (
    <div className={style.navbar}>
        <div>Profile</div>
        <div>Dialogs</div>
        <div>Music</div>
        <div>News</div>
        <div>Settings</div>
    </div>
    )
}