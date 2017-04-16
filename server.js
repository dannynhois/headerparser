var express = require('express');
var app = express();

app.get("/", function(req,res){
    //get ip address, language, and system information
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    
    //get operating system
    var os = req.headers['user-agent'];
    os = os.split(/[\(\)]/)[1];
    
    //get language
    var language = req.headers['accept-language'].split(',')[0];

    //create json file
    var data = {
        'ipaddress':ip,
        'language':language,
        'software':os
    };
    
    //return json file
    res.send(data);
})

app.listen(8080, function(){
    console.log("Listenin on port 8080...");
})