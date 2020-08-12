import React, { Component } from 'react'
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"
import {getBanner} from "../../util/request"
import "./Home.css"
export default class Home extends Component {
    constructor(){
        super()
        this.state= {
            banner:[]
        }
    }

    componentDidMount(){
        getBanner().then(res=>{
             var arr = res.data.list;
             arr.forEach(item=>{
                 item.img = this.$img +item.img
             })
             this.setState({
                banner: arr
            })
        })
    }
    render() {
        const {banner} = this.state
        return (
            <div>
                 <Header></Header>
                 <div className="box1"> 
                <Banner banner={banner}></Banner>
                <Nav></Nav>
                <List></List>
                </div>
            </div>
        )
    }
}
