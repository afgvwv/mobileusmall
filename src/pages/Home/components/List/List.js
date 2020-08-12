
import React, { Component } from 'react'
import {getHomeGoods} from "../../../../util/request"
import aa from "../../../../util/filter"
import "./List.css"
import {withRouter} from "react-router-dom"
 class List extends Component {
    constructor(){
        super()
        this.state={
            goods:[]
        }
    }

    componentDidMount(){
        getHomeGoods().then(res=>{
            // console.log(res.data.list[0].content);
           this.setState({
              goods:res.data.list[0].content
          })
        })
    }

    changePage(id){
        // console.log(id);
        this.props.history.push("/GoodsDetail/"+id)
    }

    render() {
        const {goods} =this.state
        return (
            <div>
            
                 <ul className="list">
                      
                     {
                       
                          goods.length>0?goods.map(item=>{
                              return <li onClick={()=>this.changePage(item.id)}  className="goods" key={item.id}>
                                     
                                         
                                         <img src={item.img} alt=""/>
                                         
                                 
                                
                                 <span>
                          <p>{item.goodsname}</p>
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

export default withRouter(List)

