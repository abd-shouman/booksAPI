import mongoose, { Schema } from "mongoose";
import uniqueValidator from 'mongoose-unique-validator';

const authorSchema = Schema({
    name: {type: String, required: true, index: true},
    dob: {type: Date, required: true}
});
authorSchema.plugin(uniqueValidator);

let authorModel = mongoose.model('Author',authorSchema);
authorModel.getAll = () => {
    return authorModel.find({}).exec();
}

authorModel.getById = (id) => authorModel.findById(id).exec();

authorModel.updateAuthor = (author) => {
    let _id = author._id;
    delete author._id;
    console.log('will update this author');
    console.log(author)
    return authorModel.findByIdAndUpdate(_id, author, {new: true}).exec();
}

authorModel.removeAuthor = (_id) => {
    return authorModel.findByIdAndDelete(_id).exec();
}

authorModel.addAuthor = (author) => authorModel(author).save();

export default authorModel;