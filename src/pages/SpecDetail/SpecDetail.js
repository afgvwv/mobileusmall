import React, { Component } from 'react'
import {getCateInfo} from "../../util/request"
import "./SpecDetail.css"
import aa from "../../util/filter"
export default class SpecDetail extends Component {
    constructor(){
         super()
         this.state = {
             detail:[]
         }
    }
    componentDidMount(){
        // console.log(this.props);
        let id = this.props.match.params.id
        getCateInfo({fid:id}).then(res=>{
            this.setState({
                detail:res.data.list
            })
        })
    }
    componentDidUpdate(){
        // console.log(this.state);
    }
    goBack(){
        this.props.history.goBack()
    }
    render() {
        const {detail} = this.state
        return (
            <div className="cateDetail">
               <div className="top">
                    <span onClick={() => this.goBack()}>返回</span>  <span >商品详情</span>
                </div>
                <ul>
                    {
                        detail.length>0?detail.map(item=>{
                            return <li key={item.id}>
                                <img src={item.img} alt=""/>
                                <span>
                          <p>{item.catename}</p>
                          <p className="p2"> &yen;{aa(item.price)}</p>
                            <p className="p3">立即抢购</p>
                                 </span>
                            </li>
                        }):null
                    }
                </ul>
            </div>
        )
    }
}
