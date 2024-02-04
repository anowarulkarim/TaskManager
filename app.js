
const connectDb=require('./db/connect')
const express=require('express')
const app=express()
const taskes=require('./routes/tasks')
app.use(express.json());
require('dotenv').config()



app.use(express.static('./public'));


app.use('/api/v1/taskes',taskes);


const port=5000

const start=async ()=>{
    try{
        connectDb(process.env.MONGO_URI)
        app.listen(port,console.log(`server is listening to port ${port}...`))
    }
    catch(error){
        console.log(error)
    }
}
start()

