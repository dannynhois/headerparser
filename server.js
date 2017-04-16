var express = require('express');
var app = express();

app.get("/", function(req,res){
    res.send("header parser");
})

app.listen(8080, function(){
    console.log("Listenin on port 8080...");
})