require('dotenv').config()
const express=require('express');
const app=express();
const cors=require('cors');
const connectDB = require('./config/db');
const bookRoute = require('./routes/bookRoutes');
const PORT=5000;
const path =require ('path');

app.use(cors());
app.use(cors({origin:"http://localhost:5173", credentials:true}));
app.use(express.json());
connectDB();

const  _dirname=path.resolve();

app.use('/book',bookRoute);

app.use(express.static(path.join(_dirname,'/frontend/dist')));
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,'frontend','dist','index.html'));
})

app.listen(PORT,()=>{
    console.log(`Listening ${PORT}`);
})  