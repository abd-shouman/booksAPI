import mongoose, { Connection } from "mongoose"

class DBConnection{
    constructor(){
        console.log("DBConnection Constructor")
        const url = `mongodb+srv://admin:${process.env.DBPASS}@cluster0-l03qk.mongodb.net/bookapi?retryWrites=true&w=majority` 

        mongoose.Promise = global.Promise;
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        
        // mongoose.connect(url).
        // catch(error => {
        //     console.log("On initial connection error");
        //     console.log(error)
        //     // handleError(error)
        // });

        console.log("trying to establish connection")
        mongoose.connect(url).then(
            () => { console.log('Successful connection') },
            (err) => { 
                console.log('Could not establish connection');
                console.log(err);
            }
        );
        
        mongoose.connection.on('error', err => {
            console.log(`loggin onConnection error`)
            console.log(err)
        });
    }
}

//Exports Mongoose as a singleton
export default new DBConnection();