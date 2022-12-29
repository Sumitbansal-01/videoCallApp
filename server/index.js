const dotenv=require('dotenv').config()
const express= require("express")
const app=express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const uri=`mongodb+srv://Sumit:${process.env.password}@cluster0.j4ymatd.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const database = client.db("VideoCallApp1")

app.get("/", (req,res)=>{
    res.send('Checking Get Method')
})

app.listen(process.env.PORT, () =>{
    console.log('File is running on',process.env.PORT)
})