import mongoose, { Schema } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const bookSchema = Schema({
    title: {type: String, required: true, unique: true, index: true},
    author: {type: String, required: true},
    // publishe_date: { type: Date, required: true},
    image_url: {type: String, required: false}
});

bookSchema.plugin(uniqueValidator);


let bookModel = mongoose.model('Book',bookSchema);
bookModel.getAll = () => {
    return bookModel.find({}).exec();
}

bookModel.getById = (id) => bookModel.findById(id).exec();

bookModel.addBook = (book) => bookModel(book).save();

bookModel.updateBook = (book) => {
    let _id = book._id;
    delete book._id;
    console.log('will update this book');
    console.log(book)
    return bookModel.findByIdAndUpdate(_id, book, {new: true}).exec();
} 

bookModel.removeBook = (_id) => {
    return bookModel.findByIdAndDelete(_id).exec();
}

export default bookModel;