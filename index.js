const express=require("express");
const app=express();

require("dotenv").config();
const PORT = process.env.PORT || 3000

//middleware
app.use(express.json());

//import
const blog=require("./routes/blog")

//mount
app.use("/api/v1",blog);

const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT,()=>{
    console.log(`App is started at port no ${PORT}`);
})

app.get("/",(req,res) => {
    res.send(`<h1>this is my home page</h1>`)
})