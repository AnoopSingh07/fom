import React from "react";
import { Link } from "react-router-dom";
import './Header.css';


const togglemenu = () => {
    let navId = document.getElementById("navid");
    if (navId.style["display"] === "none") {
        navId.style["display"] = "flex";
        navId.style["height"] = "127px";
        navId.style["transition"] = "2s";
    }
    else {
        navId.style["display"] = "none";
        navId.style["height"] = "0px";
        navId.style["transition"] = "2s";
    }
};

const Header = () => {

    return (
        <>
            < div id="header" >
                <div id="hamid" className="hamdiv" onClick={togglemenu}><i className="hamburger fa-solid fa-bars"></i></div>
                <nav id="navid">
                    <ul>
                        <li><Link className="navitem" to="/"><i className="fa-solid fa-house "></i></Link></li>
                        <li><Link className="navitem" to="/about">About Us</Link></li>
                        <li><Link className="navitem" to="/more">More</Link></li>

                    </ul>
                    <div className="searchBar">
                        <input type="text" className="searchBox" id="searchText" name="search" placeholder="Search all FOM" ></input>
                        <button id="searchButton"><i className=" searchIcon fa-solid fa-magnifying-glass" /></button>
                    </div>
                </nav>
                <img id="logo" src="https://d1fdloi71mui9q.cloudfront.net/up0uDQQoOByZCfQzrygQ_ayAm28UhmZx9VgcM" alt="logo" />
            </div >
        </>

    )
}

export const Poster = () => {
    return (
        <>
            <div id="poster">
                <img id="posterimg" src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/0/AmazonStores/A21TJRUUN4KGV/5b5903089604cdd946861bdc35c2ac13.w1500.h300._CR0%2C0%2C1500%2C300_SX1500_.jpg" alt="Friends Of Meditaion" />
            </div>
        </>
    )
}

export default Header;