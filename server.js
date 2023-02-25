const express =require('express');
const bodyParser = require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.post("/",(req, res)=>{
    var fInput = Number( req.body.i-1)
    var sInput =Number( req.body.i-2);
    var result=fInput+sInput;
    res.send("The total is  " +result);
})

app.listen(3000,()=>{
    console.log("Server Started at port no. 3000")
})


