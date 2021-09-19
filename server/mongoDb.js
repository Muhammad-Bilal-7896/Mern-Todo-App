const moongose = require('mongoose');

module.exports = async () => {
    try{
        const connectionParams = {
            useNewUrlParser:true,
            useCreateIndex:true,
            useUnifiedTopology:true
        };
        await moongose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
        );
        console.log("Connected to Mongo Db database");
    }catch(err){
        console.log("Error connecting to Mongo database",err);
    }
}