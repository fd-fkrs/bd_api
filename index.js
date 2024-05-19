const express = require('express')
const jwt = require('jsonwebtoken')
const fs = require("fs/promises")
const path = require("path")

const app = express()


app.listen(4000,()=>{
    console.log('服务器已启动');
})

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next()
})

app.post('/login',(req,res)=>{
    const {username,password} = req.body

    if(username == 'test01' && password == '123456'){
        const token = jwt.sign({
            id:'1',
            name:'小明',
            age:19
        },'ganyu',{
            expiresIn:"1d"
        })  

        res.send({
            code:'200',
            data:{
                token
            }
        })
        

    }else{
        res.status(403).send({
            status:"error",
            msg:'用户名或密码错误'
        }
        )
    }
})


let STU_ARR = require("./data/students.json")


app.get("/students", (req, res) => {
    try {
        // 这个路由必须在用户登录后才能访问
        // 需要检查用户是否登录
        // 读取请求头
        // const token = req.get("Authorization").split(" ")[1]
        const token = req.get("Authorization")
        // console.log(token)


        // 对token进行解码
        const decodeToken = jwt.verify(token, "ganyu")
        // console.log(decodeToken)
        // 解码成功，token有效
        // 返回学生信息
        res.send({
            code:'200',
            msg:'学生数据',
            data: STU_ARR
        })
    } catch (e) {  
        // 解码错误，用户token无效
        res.status(403).send({
            status: "error",
            msg: "token无效"
        })
    }
})
app.post('/students',(req,res)=>{
    try {
        const token = req.get("Authorization")
        const id = STU_ARR.at(-1) ? STU_ARR.at(-1).id + 1 : 1
        const newUser = {
            id,
            name: req.body.name,
            age: +req.body.age,
            gender: req.body.gender,
            address: req.body.address
        }

        STU_ARR.push(newUser)

        fs.writeFile(
            path.resolve(__dirname, "./data/students.json"),
            JSON.stringify(STU_ARR)
        )



        const decodeToken = jwt.verify(token, "ganyu")

        res.send({
            code:'200',
            msg:'添加成功',
            data: newUser
        })
    } catch (e) {  
        res.status(403).send({
            status: "error",
            msg: "token无效"
        })
    }
})
app.delete('/students',(req,res)=>{
    try {
            const id = +req.query.id
            const token = req.get("Authorization")
            const decodeToken = jwt.verify(token, "ganyu") 

            if( STU_ARR.length > (STU_ARR.filter((stu) => stu.id !== id)).length ){


                STU_ARR = STU_ARR.filter((stu) => stu.id !== id)
                fs.writeFile(
                    path.resolve(__dirname, "./data/students.json"),
                    JSON.stringify(STU_ARR)
                )

                res.send({
                    code:'200',
                    msg:'删除成功'
                })
            }else{
                res.status(403).send({
                    status: "error",
                    msg: "id不存在"
                })
            }




            
    } catch (e) {  
        res.status(403).send({
            status: "error",
            msg: "token无效"
        })
    }
})

const STU_xingw = require("./data/xingw.json")

app.get("/xingw", (req, res) => {
    try {
        // 这个路由必须在用户登录后才能访问
        // 需要检查用户是否登录
        // 读取请求头
        // const token = req.get("Authorization").split(" ")[1]
        const token = req.get("Authorization")
        // console.log(token)


        // 对token进行解码
        const decodeToken = jwt.verify(token, "ganyu")
        // console.log(decodeToken)
        // 解码成功，token有效
        // 返回学生信息
        res.send({
            code:'200',
            msg:'IT行业相关新闻资讯',
            data: STU_xingw
        })
    } catch (e) {  
        // 解码错误，用户token无效
        res.status(403).send({
            status: "error",
            msg: "token无效"
        })
    }
})

const STU_wb = require("./data/wb.json")


app.get("/wb", (req, res) => {
    try {
        // 这个路由必须在用户登录后才能访问
        // 需要检查用户是否登录
        // 读取请求头
        // const token = req.get("Authorization").split(" ")[1]
        const token = req.get("Authorization")
        // console.log(token)


        // 对token进行解码
        const decodeToken = jwt.verify(token, "ganyu")
        // console.log(decodeToken)
        // 解码成功，token有效
        // 返回学生信息
        res.send({
            code:'200',
            msg:'微博热搜榜',
            data: STU_wb
        })
    } catch (e) {  
        // 解码错误，用户token无效
        res.status(403).send({
            status: "error",
            msg: "token无效"
        })
    }
})




const STU_dj = require("./data/dj.json")

app.get("/dj", (req, res) => {
    try {
        // 这个路由必须在用户登录后才能访问
        // 需要检查用户是否登录
        // 读取请求头
        // const token = req.get("Authorization").split(" ")[1]
        const token = req.get("Authorization")
        // console.log(token)


        // 对token进行解码
        const decodeToken = jwt.verify(token, "ganyu")
        // console.log(decodeToken)
        // 解码成功，token有效
        // 返回学生信息
        res.send({
            code:'200',
            msg:'电竞新闻',
            data: STU_dj
        })
    } catch (e) {  
        // 解码错误，用户token无效
        res.status(403).send({
            status: "error",
            msg: "token无效"
        })
    }
})

const STU_cp = require("./data/cp.json")

app.get("/cp", (req, res) => {
    try {
        // 这个路由必须在用户登录后才能访问
        // 需要检查用户是否登录
        // 读取请求头
        // const token = req.get("Authorization").split(" ")[1]
        const token = req.get("Authorization")
        // console.log(token)


        // 对token进行解码
        const decodeToken = jwt.verify(token, "ganyu")
        // console.log(decodeToken)
        // 解码成功，token有效
        // 返回学生信息
        res.send({
            code:'200',
            msg:'菜谱',
            data: STU_cp
        })
    } catch (e) {  
        // 解码错误，用户token无效
        res.status(403).send({
            status: "error",
            msg: "token无效"
        })
    }
})
