const express = require("express")
const router = express.Router()
const searchMessageModel = require("../models/searchForMessage");
const classifyModel = require("../models/classify_list");
const cartModel = require("../models/cart_message");
/**
 * 解决访问的跨域问题 no-cors micro services  restful gateway router spring cloud
 */
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})

router.get("/homepage", async (req,res)=>{
    console.log(req.query);
    let data = await searchMessageModel.queryItem({});
    res.json(data);
})
router.get("/classify", async (req,res)=>{
    console.log(req.query);
    let data = await classifyModel.queryItem({});
    res.json(data);
})
router.get("/cart", async (req,res)=>{
    console.log(req.query);
    let data = await cartModel.queryItem({});
    res.json(data);
})

module.exports = router;