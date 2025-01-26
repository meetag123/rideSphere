const express=require('express');
const colors=require('colors');
const morgan= require('morgan');
const dotenv=require('dotenv');
const mysqlPool = require('./config/db');


dotenv.config();
const app=express()



app.use(express.json());
//middleware
app.use(morgan("dev"));

app.use("/api/v1/user",require("./routes/userroute"));
//routes
app.get("/test",(req,res)=>
{
    res.status(200).send("<h1> meet Agrawal</h1>");
});
const PORT=process.env.PORT ||8000;

mysqlPool.query('SELECT 1').then(()=>
{
    console.log("MYSQL DB CONNECTED ".bgCyan.white)

    app.listen(PORT ,()=>
        {
            console.log(`SERVER IS RUNIING on PORT ${process.env.PORT}`.bgMagenta.white);
        
        });
        
}).catch((error)=>
{
    console.log(error)
})
