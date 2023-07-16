import React from "react";
import "./App.css";
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Profile} from "./components/contents/pages/profile/ProfilePage";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="Page">
                <Navbar />
                <Profile />
            </div>
        </div>
    );
}

//add Routes + Navlinks in Navbar
//Profile for example main content

export default App;
