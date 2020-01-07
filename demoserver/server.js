const express = require('express')
const bodyparser = require('body-parser')
const static = require('express-static')
const mysql = require('mysql')
const sqlOpition = {
    host: 'localhost',
    user:'root',  //用户名
    password:'root',   //密码
    database:'demoserver',
    port:'3306'     //端口号
}
const port = 3000
const db = mysql.createPool(sqlOpition)
const server = express()
// server.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Credentials", 'true');
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
//     else next();
// });
server.use(bodyparser.urlencoded({extended: false}))
//登录
server.post('/login',(req,res,next) => {
    res.setHeader('Content-type', 'text/plain')
    console.log('username:',req.body.username)
    db.query(`SELECT * FROM user_table WHERE username='${req.body.username}'`,(err,data) => {
        if(err){
            res.send({'code':0,'msg':'登陆失败','data':err})
        }else{
            var message = data[0]
            console.log(message)
            if(message != null || message != undefined){
                if(message.password == req.body.password){
                    setTimeout(() => {
                        res.send({'code':200,'msg':'登陆成功'})
                        next()
                    },1000)
                }else{
                    res.send({'code':0,'msg':'用户名或密码错误'})
                    next()
                }
            }else{
                res.send({'code':0,'msg':'用户名或密码错误'})
                next()
            }
        }
    })
})
//注册
server.post('/regist', (req,res,next) => {
    res.setHeader('Content-type', 'text/plain')
    db.query(`SELECT * FROM user_table WHERE username='${req.body.username}'`,(err,data) => {
        if(err){
            res.send({'code':0,'msg':'注册失败','data':err})
        }else{
            if(data.username == null || message == undefined){
                db.query(`INSET INTO user_table(username,password) VALUES ('${req.body.username}','${req.body.password}')`,(err,data) => {
                    if(err){
                        res.send({'code':0,'msg':'注册失败'})
                        next()
                    }else{
                        res.send({'code':200,'msg':'注册成功'})
                        next()
                    }
                })
            }else{
                res.send({'code':0,'msg':'账户已存在 请重新输入'})
                next()
            }
        }
    })
})
server.get('/test',(req,res,next) => {
    console.log(req)
    res.setHeader('Content-type', 'text/plain')
    res.send({'data': 'success'})
    next()
})
server.listen(port)
console.log(`server starting success port: ${port}`)