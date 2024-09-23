import React from "react";
import { Background } from "../component/background/home-bg";
import { Company } from "../component/background/home-bg2";
import { Navbar } from "../component/nav/navbar";
import { useState } from "react";
import ".././styles/home.css"
import { useLocation } from "react-router-dom";
import { Footer } from "../component/footer";
export const Main=()=>{
const [ currlocation ,setLocation] = useState('/');
var location= useLocation();
    return(
         <div className={currlocation === location.pathname ? "select-image" : " "}> 
            <Navbar/> 
            <Background/>
            <Company/>
            <Footer/>
         </div>
    );
};