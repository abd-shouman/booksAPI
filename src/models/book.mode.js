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
    return bookModel.find({});
}

bookModel.addCar = (book) => {
    return book.save();
}

bookModel.removeCar = (bookTitle) => {
    return bookModel.remove({title: bookTitle});
}

export default booksModel;