var express=require("express");

var app=express();

app.get('/', function(req,res){
    res.end('Hola inmundo!!!');
});

app.listen(process.env.PORT);