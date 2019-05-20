const express = require('express');
const fs = require("fs");
const request = require('request');

var app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

request.get('https://jsonplaceholder.typicode.com/photos', function(err, data){
    if(err){
        console.log(err);
    }
    else{
        fs.writeFile('photos.json', data.body, function(err){
            if(err){
                console.log(err);
            }
        })
    }
});

// app.get('/photos', function(req, res) {
//     console.log(__dirname);
//     res.sendFile(__dirname + '/index.html');
// })

app.get('/photos', function(req, res) {
    res.sendFile(__dirname + '/photos.json');
})

app.listen(4001);
