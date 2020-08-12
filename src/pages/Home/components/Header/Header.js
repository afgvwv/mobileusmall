import React from 'react'
import logo from "./img/logo.jpg"
import "./Header.css"
export default function Header() {
    return (
        <div className="header">
            
            <img src={logo} alt=""/>

            <div className="input">
                <input placeholder="寻找商品" type="text"/>
            </div>



        </div>
    )
}
