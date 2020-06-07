import express from 'express';
import bodyParse from 'body-parser';
import bookrouter from "../books/index.js"
import authorrouter from "../authors/index.js"

const server = express();
server.use(bodyParse.json());
server.use("/books", bookrouter); 
server.use("/authors", authorrouter);

export default server; 
// const express = require("express"),
//     app = express()

// app.get('/', (req, res)=>{
//     return res.status(200).json("Welcome to the BOOKs API. Use /books/:bookID to get your book");
// })

// app.listen(5555, ()=>{
//     console.log("Book API server started")
// })

