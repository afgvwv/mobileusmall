import axios from "axios"
import qs from "qs"
axios.interceptors.response.use(res=>{
    console.log(res.config.url);
    console.log(res);
    return res
})

// 获取注册信息
export const getRegister=(data)=>{
    return axios({
        url:"/api/register",
        method:"post",
        data:qs.stringify(data)
    })
}

// 获取登录信息
export const getLogin=(data)=>{
    return axios({
        url:"/api/login",
        method:"post",
        data:qs.stringify(data)
    })
}

// 获取首页的商品信息
export const getHomeGoods=()=>{
    return axios({
        url:"/api/getindexgoods", 
        method:"get"   
    })
}

// 获取一个商品信息
export const getGoodsInfo=(params)=>{
    return axios({
        url:"/api/getgoodsinfo",
        method:"get",
        params:params
    })
}

// 获取商品分类的信息
export const getSpecGoods=()=>{
    return axios({
        url:"/api/getcatetree", 
        method:"get"   
    })
}





// 获取分类信息
export const getCate=()=>{
     return axios({
         url:"/api/getcate",
         method:"get"
     })
}


// 获取轮播图信息
export const getBanner=()=>{
    return axios({
        url:"/api/getbanner",
        method:"get"
    })
}
// 获取限时秒杀
export const getSeckill=()=>{
    return axios({
        url:"/api/getseckill",
        method:"get"
    })
}
// 获取商品信息
export const getIndexGoods=()=>{
    return axios({
        url:"/api/getindexgoods",
        method:"get"
    })
}

// 获取分类商品
export const getGoods=()=>{
    return axios({
        url:"/api/getgoods",
        method:"get"
    })
}

// 获取分类的商品

export const getCateInfo=(params)=>{
    return axios({
        url:"/api/getgoods",
        method:"get",
        params:params
    })
}


// 获取购物车列表
export const getShopCar=(data)=>{
    return axios({
        url:"/api/cartlist", 
        method:"get",
        params:data   
    })
}


// 购物车添加
export const getCarAdd=(data)=>{
    return axios({
        url:"/api/cartadd", 
        method:"post",
        data:qs.stringify(data)   
    })
}

// 购物车修改

export const getCarEdit=(data)=>{
    return axios({
        url:"/api/cartedit", 
        method:"post",
        data:qs.stringify(data)   
    })
}

// 购物车删除
export const getCarDelete=(data)=>{
    return axios({
        url:"/api/cartdelete", 
        method:"post",
        data:qs.stringify(data)   
    })
}
