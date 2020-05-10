import mongoose, { Connection } from "mongoose"

class DBConnection{
    constructor(){
        const url = `mongodb+srv://admin:${process.env.DBPASS}@cluster0-zuw0b.mongodb.net/test?retryWrites=true&w=majority`;
        mongoose.Promise = global.Promise;
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(url);
    }
}

//Exports Mongoose as a singleton
export default new DBConnection();