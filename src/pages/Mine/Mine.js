import React, { Component } from 'react'
import "./Mine.css"
import "./fonticon/iconfont.css"
import img from "./img/1.jpg"
import img2 from "./img/keep.png"
import img3 from "./img/icon_refund.png"
export default class Mine extends Component {
    render() {
        return (
            <div className="mine">
           
               <div className="header">
                   <p>
                       <span className="iconfont icon-xinxi"></span>
                       <span>个人中心</span>
                       <span className="iconfont icon-shezhi"></span>
                </p>  
            </div>
            <div className="people">
                <img src={img} alt=""/>
                <p>小不点儿</p>
            </div >   
              <div className="box">
              <div className="store">
                 <p><i><img src={img2} alt=""/></i>我的收藏(5)</p>
                </div> 
                <p className="line"></p>
                <div className="order">
                    <p>我的订单<span>订单查询</span></p>
                </div>
              </div>

             <ol className="goods">
                 <li>
                     <img src={img3} alt=""/>
                     <p className="sale">代发货</p>
                 </li>
                 <li>
                     <img src={img3} alt=""/>
                     <p className="sale">代发货</p>
                 </li>
                 <li>
                     <img src={img3} alt=""/>
                     <p className="sale">代发货</p>
                 </li>
                 <li>
                     <img src={img3} alt=""/>
                     <p className="sale">代发货</p>
                 </li>
                 <li>
                     <img src={img3} alt=""/>
                     <p className="sale">代发货</p>
                 </li>
                
             </ol>

            <div className="last">收货地址管理</div>
            </div>
        )
    }
}
