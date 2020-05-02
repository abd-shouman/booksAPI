const express = require("express"),
    app = express()

app.get("/", (req,res)=>{
    return res.status(200).json("you have to provide an ID for the book you need");
})

app.get("/:id", (req,res)=>{
    return res.status(200).json(`You have requested Book ${req.params.id}`)
})

module.exports  = app