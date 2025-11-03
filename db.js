import mongoose from "mongoose";
//Define the mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotel'

//set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Get the default connection
//Mongoose maintain a default connection object representing the mongodb connection
const db = mongoose.connection;

//Define event listner for database connection
db.on('connected', ()=> {
    console.log('connected to mongodb server');    
})
db.on('error', (err)=> {
    console.log('Mongodb connection error',err);    
})
db.on('disconnected', ()=> {
    console.log('Mongodb disconnected');    
})

export default db;