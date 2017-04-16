var express = require('express');
var app = express();

app.get("/", function(req,res){
    //get ip address
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    
    res.send("ip: " + ip);
})

app.listen(8080, function(){
    console.log("Listenin on port 8080...");
})