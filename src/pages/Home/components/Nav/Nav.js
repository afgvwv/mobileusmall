import React from 'react'
import img from "./img/1.jpg"
import "./Nav.css"
export default function Nav() {
    return (
        <div className="nav">
             <div className="navIcon">
             <img src={img} alt=""/>
              <img src={img} alt=""/>
              <img src={img} alt=""/>
              <img src={img} alt=""/>
             </div>
              <ul>
                  <li>限时抢购</li>
                  <li>积分商城</li>
                  <li>联系我们</li>
                  <li>商品分类</li>
              </ul>
        </div>
    )
}
