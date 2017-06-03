const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.get('api/widgets', function(req, res){
    res.json([
        {
            name:'Widget 1', color:'blue', size:"large", quantity:3
        },
        {
            name:'Widget 2', color:'red', size:"small", quantity:5
        },
        {
            name:'Widget 3', color:'orange', size:"medium", quantity:10
        },
    ]);
});

server.listen(3000, function(){
    console.log('REST service running on port 3000');
});