const express = require("express"),
    app = express()

app.get('/', (req, res)=>{
    return res.status(200).json("Welcome to the BOOKs API. Use /books/:bookID to get your book");
})

const bookrouter = require("./books/index.js")
app.use("/books", bookrouter)

app.listen(5555, ()=>{
    console.log("Book API server started")
})

