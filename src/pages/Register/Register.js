import React, { Component } from 'react'
import {Link}  from "react-router-dom"
import "./Register.css"
import {getRegister} from "../../util/request"
import {successAlert} from "../../util/alert"
export default class Register extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                nickname:"",
                password:""

            }
        }
    }

    changeUser(e,key){
        this.setState({
            user:{
                ...this.state.user,
                [key]:e.target.value
            }
        })
    }
    register(){
        getRegister(this.state.user).then(res=>{
            // console.log(this.state.user);
            if(res.data.code===200){
                sessionStorage.setItem("isregister",1)
                successAlert(res.data.msg)
                this.props.history.push("/login")
               
            }else{
            successAlert(res.data.msg)
               
            }
        })
    }
     
    render() {
        const {user} = this.state
        return (
            <div >
               <div className="top">
                  <Link to="/login" className="back">返回</Link>
                  <div>注册</div>
               </div>
               <div className="content">
                 <p>
                     手机号: <input value={user.phone} onChange={(e)=>this.changeUser(e,"phone")} type="text"/>
                 </p>
                 <p>
                     昵称:&nbsp;&nbsp;&nbsp; <input value={user.nickname} onChange={(e)=>this.changeUser(e,"nickname")} type="text"/>
                 </p>
                 <p>
                     密码:&nbsp;&nbsp;&nbsp; <input value={user.password} onChange={(e)=>this.changeUser(e,"password")} type="password"/>
                 </p>
                 <p><input onClick={()=>this.register()} className="submit" value="注册" type="submit"/></p>
               </div>
              
            </div>
        )
    }
}
