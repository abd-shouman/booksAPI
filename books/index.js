const express = require("express"),
    app = express();

import booksModel from "../src/models/book.model";
import { response } from "express";

app.get("/", (req,res)=>{
    console.log('retreving all books')
    booksModel.getAll()
    .then( (books) => {
        return res.status(200).json(books);
    })
    .catch( (err) => {
        console.log('could not retrive books');
        console.log(err);
        return res.json(err);
      }
    )
})

app.get("/:id", (req,res)=>{
    console.log(`You have requested Book ${req.params.id}`);
    booksModel.getById(req.params.id)
    .then( (book) => {
        return res.status(200).json(book);
    })
    .catch( (err) => {
        console.log('could not find your book');
        console.log(err);
        return res.json(err);
      }
    )    
})

app.post("/", (req,res)=>{
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

app.put("/", (req, res)=>{
    console.log("updating a book");
    booksModel.updateBook(req.body)
    .then(updatedBook=>{
        console.log("book updated successfully");
        console.log(updatedBook);
        return res.status(200).json(updatedBook);
    })
    .catch( (err)=>{
        console.log('could not update book');
        console.log(err);
        return res.json(err);
    })

})

app.delete("/:id", (req, res)=>{
    console.log(`deleteing a book ${req.params.id}`);
    booksModel.removeBook(req.params.id)
    .then(response=>{
        console.log("book deleted successfully");
        console.log(response);
        return res.status(200).json(response);
    })
    .catch( (err)=>{
        console.log('could not delete book');
        console.log(err);
        return res.json(err);
    })

})


module.exports  = app