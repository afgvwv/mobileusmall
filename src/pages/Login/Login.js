import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {getLogin} from "../../util/request"
import{successAlert} from "../../util/alert"
import "./Login.css"
export default class Login extends Component {

    constructor(){
        super()
        this.state={
            user:{
                phone:"",
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
    login(){
        getLogin(this.state.user).then(res=>{
            if(res.data.code===200){
                // console.log(this.state.user);
                sessionStorage.setItem("islogin",1)
                sessionStorage.setItem("user",JSON.stringify(res.data.list))
                successAlert(res.data.msg)
                this.props.history.push("/index")
               
            }else{
                successAlert(res.data.msg)
                this.props.history.push("/register")
            }
        })
    }
    render() {
        const {user} =this.state
        return (
            <div>
                <div className="top">
                  <div>登录</div>
                  <Link className="register" to="/register">注册</Link>
               </div>
               <div className="content">
                 <p>
                     账号: <input value={user.phone} onChange={(e)=>this.changeUser(e,"phone")} type="text"/>
                 </p>
                 <p>
                     密码: <input value={user.password} onChange={(e)=>this.changeUser(e,"password")} type="password"/>
                 </p>
                 <p><input onClick={()=>this.login()} className="submit" value="登录" type="submit"/></p>
               </div>
            </div>
        )
    }
}
