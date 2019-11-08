// var express = require('express');
// var router = express.Router();
// const DiscoveryModel  = require("../models/discoveryModel")
//
//
//
// router.post("/add",async (req , res)=>{
//     let item = req.body || {}
//     return await DiscoveryModel.addItem(item)
// });
//
// router.get("/list",async (req,res)=>{
//     //pageIndex ?pid=1&size=1&title=
//     let query = req.query || {}
//     let where = {title:query.title}
//     let data= await DiscoveryModel.queryByPager(query.pid,1,where)
//     return res.json(data)
// })
//
//
// module.exports = router;