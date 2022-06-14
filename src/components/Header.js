import React from "react"
import logo from "../images/troll-face.png"

export default function Header(){
    return(
        <section className="header">
            <img className="header--logo"  src={logo} alt="troll face"></img>
            <h1 className="header--title">Meme Generator</h1>
            <h6>React Course - Project 3</h6>
        </section>
    )
}