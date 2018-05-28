var express=require('express');
var app = express();

app.get('/', function(req,res,next){
    res.send('<h1>hellonode</h1>')
})

app.listen(8082);