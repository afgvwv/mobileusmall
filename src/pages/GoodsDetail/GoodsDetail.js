import React, { Component } from 'react'
import { getGoodsInfo, getCarAdd } from "../../util/request"
import "./GoodsDetail.css"
import img from "./img/cart_on.png"
import aa from ".././../util/filter"
import { successAlert } from "../../util/alert"
export default class GoodsDetail extends Component {
    constructor() {
        super()
        this.state = {
            detail: []
        }
    }
    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.id
        
        getGoodsInfo({ id: id }).then(res => {
            this.setState({
                detail: res.data.list
            })
        })
       
       
    }
    // 加入购物车
    addShop() {
        getCarAdd({
            uid: JSON.parse(sessionStorage.getItem('user')).uid,
            goodsid: this.props.match.params.id,
            num: 1
        }).then(res=>{
              successAlert(res.data.msg)
        })

    }
    goBack() {
        this.props.history.goBack()
    }
    render() {
        const { detail } = this.state
        return (
            <div className="detail">
                <div className="top">
                    <span onClick={() => this.goBack()}>返回</span>  <span>商品详情</span>
                </div>
                <div className="box1">
                {
                    detail.map(item => {
                        return <div key={item.id}> <img src={item.img} alt="" />
                            <img src={item.description} alt="" />
                            <div className="des">
                                <div className="good">
                                    <h3>{item.goodsname}</h3>
                                    <p>&yen;{aa(item.price)}
                                        <span>热卖</span>
                                        <span>新品</span>
                                    </p>
                                    <del>&yen;{aa(item.market_price)}</del>
                                </div>
                                <div className="car">
                                    <img src={img} alt="" />
                                    <p>收藏</p>
                                </div>
                            </div>
                            <div className="detailImgWrap" dangerouslySetInnerHTML={{ __html: item.description }}>

                            </div>
                            <div className="footer">
                                <div onClick={()=>this.addShop()} className="button">加入购物车</div>
                            </div>
                        </div>





                    })
                }
                </div>
            </div>
        )
    }
}
