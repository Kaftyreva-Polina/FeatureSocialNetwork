import React from "react";
import style from "./Header.module.css";

export const Header = () => {
    return (<div className={style.header}>
        name of SN
        <input type="text" placeholder={"Search"}/>
        <button>Settings</button>
    </div>)
}