import React from "react";
import "./header.css";

export default function Header() {
    return (
        <>
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node </span>
                <span className="headerTitleLg">Blog </span>
            </div>
            <div className="header">
                
                <img className="headerImg" src="images/image-2.jpg" alt=""/>
            </div>
        </>
        
    )
}