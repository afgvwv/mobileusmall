import React, { Component } from 'react'
import "./ShopCar.css"
import { getShopCar, getCarEdit,getCarDelete } from "../../util/request"
import aa from "../../util/filter"
import img1 from "./img/radio_hig.png"
import img2 from "./img/radio_nor.png"
import img3 from "./img/editor_nor.png"
import img4 from "./img/editor_hig.png"
export default class ShopCar extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            isEditor: false,
            isAll: false,

        }
    }

    componentDidMount() {
        let id = JSON.parse(sessionStorage.getItem('user')).uid
        getShopCar({ uid: id }).then(res => {
            const list = res.data.list
            list.forEach(item => {
                item.checked = false
            })
            this.setState({
                list: res.data.list
            })
        })
    }
    //    修改编辑
    changeIsEditor() {
        this.setState({
            isEditor: !this.state.isEditor
        })
    }
    //    修改全选
    changeIsAll() {
        this.setState({
            isAll: !this.state.isAll,
            list: this.state.list.map(item => {
                item.checked = !this.state.isAll
                return item
            })
        })
    }
    // 修改某条数据
    changeOne(index) {

        const arr = this.state.list;
        arr[index].checked = !arr[index].checked;
        const aa = arr.every(item => {
            return item.checked === true
        })
        this.setState({
            list: arr,
            isAll: aa
        })
    }
    // 编辑
    changeEdit(id, type,num) {
        if(num==1&&type=="1"){
            return 
        }
        getCarEdit({id, type}).then(res => {
            let id = JSON.parse(sessionStorage.getItem('user')).uid
            getShopCar({ uid: id }).then(res => {
                const list = res.data.list
                list.forEach(item => {
                    item.checked = false
                })
                this.setState({
                    list: res.data.list
                })
            })
        })
    }
    // 删除一条数据
    del(id){
          getCarDelete({id}).then(res=>{
            let id = JSON.parse(sessionStorage.getItem('user')).uid
            getShopCar({ uid: id }).then(res => {
                const list = res.data.list
                list.forEach(item => {
                    item.checked = false
                })
                this.setState({
                    list: res.data.list
                })
            })
          })
    }
    render() {
        let totalPrice = 0;
        this.state.list.forEach(item=>{
            totalPrice += item.num*item.price
        })

        const { list, isEditor, isAll } = this.state
        return (
            <div className="shopcar">
                <div className="top">
                    购物车
                </div>
                <div className="box1">
                    {
                        list.map((item, index) => {
                            return (
                                <div className="shop-item" key={item.id}>
                                    <ul className="inner">
                                        <li className="shop-item-icon">
                                            <img onClick={() => this.changeOne(index)} className="img2" src={item.checked ? img1 : img2} alt="" />
                                        </li>
                                        <li className="shop-item-good">
                                            <img src={item.img} alt="" />
                                        </li>
                                        <li className="shop-item-info">
                                            <p className="name">{item.goodsname}</p>
                                            <p className="count">
                                                <span className="btn" onClick={() => this.changeEdit(item.id, '1',item.num)}>-</span>
                                                <span className="btn">{item.num}</span>
                                                <span onClick={() => this.changeEdit(item.id, '2')}>+</span>
                                            </p>
                                            <p className="price">&yen;{aa(item.price * item.num)}</p>
                                        </li>
                                        <li className="total">
                                            <p className="toal-price">&yen;{aa(item.price)}</p>
                                        </li>

                                    </ul>
                                    <div className={isEditor ? null : 'innerdel'}>
                                        <div onClick={()=>this.del(item.id)} className="del">
                                            <span>删除</span>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>

                {/* 底部的全选反选 */}
                <ol className="shop-footer">
                    <li className="all" onClick={() => this.changeIsAll()}>
                        <img src={isAll ? img1 : img2} alt="" />
                        <p>全选</p>
                    </li>
                    <li onClick={() => this.changeIsEditor()} className="edit">
                        <img src={isEditor ? img4 : img3} alt="" />
                        <p >编辑</p>
                    </li>
                <li className="totalPrice">
                    <p>总价:</p>
                    <p> {totalPrice}</p>
                    </li>
                    <li className="goods-count">
                        <span>去结算</span>
                    </li>
                </ol>

            </div>
        )
    }
}

