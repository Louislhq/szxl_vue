const express = require('express')
const Mock = require('mockjs')
const app = express()
const router = express.Router()

const LoginUser = [{
    id:1,
    username: 'admin',
    password: '123456',
    name: '王某某',
    nickname: "张三",
    mobile: "13600000000",
    avatar: "http://39.108.79.103:16356/2018051509375953931.jpg",
    email: "",
    access_token: "4e840407abdd0e04d1a1a11cd98c2228"
}]



router.post("/login", (req, res) => {
    let {username,password} = req.body
    return new Promise((resolve,reject) => {
        let user = null;
        let hasUser = LoginUser.some(userItem => {
            if(userItem.username == username && userItem.password == password){
                user = JSON.parse(JSON.stringify(userItem));
                user.password = undefined;
                return true
            }
        })
        if(hasUser){
            // resolve([200,{code:200,msg:'请求成功',user}])
            resolve(res.json(200,{
                "code": 0,
                "msg": '登录成功',
                "data": user
            }))
        }else{
            resolve(res.json(200,{
                "code": 400,
                "msg": "用户名或者密码错误，请重新输入",
                "data": []
            }))
        }
    })

})

router.get('/profile', (req, res) => {
    let { access_token } = req.query
    return new Promise((resolve, reject) => {
        let user = null
        let hasToken = LoginUser.some(userItem => {
            if(userItem.access_token == access_token){
                user = JSON.parse(JSON.stringify(userItem));
                user.password = undefined; 
                return true
            }
        })
        if(hasToken){
            resolve(res.json(200,{
                "code": 0,
                "msg": '获取成功',
                "data": user
            }))
        }
    })
})

module.exports = router