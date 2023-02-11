const express = require("express");
const app=express();
const cors= require("cors");
app.use(express.json());
app.use(cors());

app.get('/add/:firstNumber/and/:secondNumber', function(req, res, next) {
    console.log(req.params.firstNumber + req.params.secondNumber);
    let firstNo = parseInt(req.params.firstNumber),
        secondNo = parseInt(req.params.secondNumber);
    res.json({"Addition" : firstNo + secondNo});
});
app.listen(9000,()=>{
    console.log("server runss");
});