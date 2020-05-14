const express = require("express"),
    app = express();

import booksModel from "../src/models/book.model";

app.get("/", (req,res)=>{
    return res.status(200).json(`${booksModel.getAll()}`);
})

app.get("/:id", (req,res)=>{
    return res.status(200).json(`You have requested Book ${req.params.id}`)
})

app.post("/add", (req,res)=>{
    console.log(req.body);
    booksModel.addBook(req.body)
    .then(addedBook=>{
        console.log("book saved successfully");
        console.log(addedBook);
        return res.json(addedBook);
    })
    .catch( (err)=>{
        console.log('could not add book');
        console.log(err);
        return res.json(err);
    })
    
    
})

module.exports  = app