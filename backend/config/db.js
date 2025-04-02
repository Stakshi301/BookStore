const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.Mongo_URL);
        console.log('DATABASE CONNECTED');
}catch(err){
    console.log(err.message);
    process.exit(1);
}
}

module.exports=connectDB;


