var express = require('express');
var bodyparser = require('body-parser');
var app = express();
var fs = require('fs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded());

app.post('/', function(req, res){
    if(req.body.usr_city == 'jerusalem'){
        res.sendFile(__dirname + '/pages/jerusalem.html');
    }
    else if(req.body.usr_city == 'telaviv'){
        res.sendFile(__dirname + '/pages/telaviv.html');
    }
})

app.get('/', function(req, res){

    res.sendFile(__dirname + "/index.html");
   
})
    
app.listen(4000);
    