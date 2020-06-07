import express from 'express';
const app = express();

import authorModel from "../src/models/author.model";

app.get("/", (req,res)=>{
    console.log('retreving all authors')
    authorModel.getAll()
    .then( (authors) => {
        return res.status(200).json(authors);
    })
    .catch( (err) => {
        console.log('could not retrive authors');
        console.log(err);
        return res.json(err);
      }
    )
})

app.get("/:id", (req,res)=>{
    console.log(`You have requested author ${req.params.id}`);
    authorModel.getById(req.params.id)
    .then( (author) => {
        return res.status(200).json(author);
    })
    .catch( (err) => {
        console.log('could not find your author');
        console.log(err);
        return res.json(err);
      }
    )    
})

app.post("/", (req,res)=>{
    console.log(req.body);
    authorModel.addAuthor(req.body)
    .then(addedAuthor=>{
        console.log("author saved successfully");
        console.log(addedAuthor);
        return res.json(addedAuthor);
    })
    .catch( (err)=>{
        console.log('could not add author');
        console.log(err);
        return res.json(err);
    })
})

app.put("/", (req,res)=>{
    console.log(req.body);
    authorModel.updateAuthor(req.body)
    .then(updatedAuthor=>{
        console.log("author updated successfully");
        console.log(updatedAuthor);
        return res.json(updatedAuthor);
    })
    .catch( (err)=>{
        console.log('could not update author');
        console.log(err);
        return res.json(err);
    })
})

app.delete("/", (req,res)=>{
    console.log(req.body);
    authorModel.removeAuthor(req.body)
    .then(res=>{
        console.log("author deleted");
        console.log(res);
        return res.json(res);
    })
    .catch( (err)=>{
        console.log('could not delete author');
        console.log(err);
        return res.json(err);
    })
})

export default app;