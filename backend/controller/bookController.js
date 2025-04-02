const bookSchema=require('../model/bookSchema');

const getBook=async(req,res)=>{
    try{
        const book=await bookSchema.find();
        res.status(200).json(book);
        console.log("got get req in console");
    }catch(err){
        res.status(500).json({err:err.message});
    }
}

const putBook=async(req,res)=>{
    try{
        const update=await bookSchema.findByIdAndUpdate(req.params.id,req.body,{new:true,});
        if(!update){
           return res.status(404).json({message:"Book not found"});
        }
        res.status(200).json(update);
        console.log("got put req in console");
    }catch(err){
        res.status(500).json({err:err.message});
    }
};


const postBook=async(req,res)=>{
    // try{
    //     const {name,price,author,genre}=req.body;
    //     const newBook=new bookSchema.insertMany({name,price,author,genre})
    //     await newBook.save();
    //     res.status(200).json({message:"Book Added Successfully", book:newBook});
    //     console.log("got post req in console");

    // }catch(err){
    //     res.status(500).json({err:err.message});
    // }

    try{
        let books =req.body;
        if(!Array.isArray(books)){
            books=[books];
        }
        for(const book of books){
            if(!book.name || !book.price || !book.author ||!book.genre ||!book.link){
                return res.status(400).json({message:"Name,Author,Price,Genre,Link should be their"});
            }
        }
        const newBooks=await bookSchema.insertMany(books);
        res.status(201).json({ message: "Books added successfully", books: newBooks });
        console.log("Received POST request and books added successfully");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}

const deleteBook=async(req,res)=>{
    try{
        const del=await bookSchema.findByIdAndDelete(req.params.id)
        if(!del)
            {
                return res.status(404).json({message:"Book not found"})
            }
        res.status(200).json({message:'Deleted Successfully'})
        console.log("got delete req in console");

    }catch(err){
        res.status(500).json({err:err.message});
    }
}


module.exports={getBook,putBook,postBook,deleteBook};