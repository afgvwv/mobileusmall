import React, { Component } from 'react'

 import {Switch,Route,Redirect,NavLink} from "react-router-dom"

import "./Index.css"
import home from "./img/tab_home_nor.png"
import spec from "./img/tab_menu_nor.png"
import shopcar from "./img/tab_shopping_nor.png"
import mine from "./img/tab_me_nor.png"
import img1 from "./img/tab_home_hig.png"
import img2 from "./img/tab_menu_hig.png"
import img3 from "./img/tab_shopping_hig.png"
import img4 from "./img/tab_me_hig.png"

import Home from "../Home/Home"
import Spec from "../Spec/Spec"
import ShopCar from "../ShopCar/ShopCar"
import Mine from "../Mine/Mine"

export default class Index extends Component {
    constructor(){
        super()
        this.state = {
             num:0
        }
    }
 
   
    changeNum(num){
         this.setState({
             num:num
         })
    }
    render() {
        return (
            <div className="index">
               
            <Switch>
                <Route path="/index/home" component={Home}></Route>
                <Route path="/index/spec" component={Spec}></Route>
                <Route path="/index/shopcar" component={ShopCar}></Route>
                <Route path="/index/mine" component={Mine}></Route>
                <Redirect to="/index/home"></Redirect>
            </Switch>
                <footer>
                   <NavLink onClick={()=>this.changeNum(0)} activeClassName="select "  to="/index/home"><p className="p1"><img src={this.state.num===0?img1:home} alt="#"/></p><p className="p2">首页</p></NavLink>
                   <NavLink onClick={()=>this.changeNum(1)} activeClassName="select "   to="/index/spec"><p className="p1"><img src={this.state.num===1?img2:spec} alt="#"/></p><p className="p2">分类</p></NavLink>
                   <NavLink onClick={()=>this.changeNum(2)} activeClassName="select "   to="/index/shopcar"><p className="p1"><img src={this.state.num===2?img3:shopcar} alt="#"/></p><p className="p2">购物车</p></NavLink>
                   <NavLink onClick={()=>this.changeNum(3)}  activeClassName="select "  to="/index/mine"><p className="p1"><img src={this.state.num===3?img4:mine} alt="#"/></p><p className="p2">我的</p></NavLink>
                </footer>
            </div>
        )
    }
}
