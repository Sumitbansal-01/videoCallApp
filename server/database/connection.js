// const { MongoClient, ServerApiVersion} = require('mongodb')
// const uri=process.env.uri
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const database = client.db(process.env.database)
// console.log('connected')
// module.exports=database

const mongoose = require("mongoose")


const uri=process.env.uri;
mongoose.set('strictQuery', true)

mongoose.connect(uri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(()=>{
    console.log(`connection is successful`);
}).catch((err)=>console.log(err));


