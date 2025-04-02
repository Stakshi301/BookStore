const {Schema,model}=require('mongoose');

const bookSchema=new Schema({
    name:{type:String,require:true},
    price:{type:Number,require:true},
    author:{type:String,require:true},
    genre:{type:String,require:true},
    link:{type: String, required: true }
})

const bookModel=model('bookModel',bookSchema);

module.exports=bookModel;