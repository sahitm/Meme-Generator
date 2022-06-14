import React from "react"
import logo from "../images/troll-face.png"

export default function Header(){
    return(
        <section className="header">
            <div className="logo--name">
                <img src={logo} alt="troll face"></img>
                <h1 className="app--name">Meme Generator</h1>
            </div>
            <h6>React Course - Project 3</h6>
        </section>
    )
}