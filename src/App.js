import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom"
import Login from "./pages/Login/Login"
import Index from "./pages/Index/Index"
import GoodsDetail from "./pages/GoodsDetail/GoodsDetail"

import Register from "./pages/Register/Register"

import SpecDetail from "./pages/SpecDetail/SpecDetail"



function App() {
  return (
   
    <div className="App">
       <Switch>
       <Route path="/login" component={Login}></Route>
       <Route path="/index" component={Index}></Route>
       <Route path="/goodsdetail/:id" component={GoodsDetail}></Route>
       <Route path="/register" component={Register}></Route>
       <Route path="/specdetail/:id" component={SpecDetail}></Route>
     

       <Redirect to="/login"></Redirect>
       </Switch>


     
    </div>
    
  );
}

export default App;
