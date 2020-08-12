import React, { Component } from 'react'
import "./Spec.css"
import {getSpecGoods} from "../../util/request"
export default class Spec extends Component {

      constructor(){
          super()
          this.state ={
              spec:[],
              imgList:[],
              num:0,
              
          }
      }
     componentDidMount(){
         getSpecGoods().then(res=>{
             console.log(res.data.list);
             console.log(res.data.list[0].children);
             this.setState({
                 spec:res.data.list,
                 imgList:res.data.list
                
             })
           
         })
     }
     changeNum(index){
            this.setState({
                ...this.state,
                num:index,
             
               
            })
     }
     
     toDetail(id){
          this.props.history.push("/specdetail/"+id)
     }
    render() {
        const {spec,imgList,num} = this.state
        return (
            <div className="spec">
               <div className="top">
                   分类
               </div>
               <div className="list">
                 <ul>
                    {
                        spec.length>0?spec.map((item,index)=>{
                        return <li className={index===num?"select":""}  onClick={()=>this.changeNum(index)} key={item.id}>{item.catename}</li>
                        }):null
                         
                    }
                     
                 </ul>
                

                 <ol className="imgList"> 
                 
                      {
                          imgList.length>0?imgList[num].children.map(item=>{
                              return <li key={item.id} onClick={()=>this.toDetail(item.id)}>
                                 <img src={item.img} alt=""/>
                          <p>{item.catename}</p>
                              </li>
                          }):null
                        
                      }
                   </ol>
               </div>
               
            </div>
        )
    }
}
