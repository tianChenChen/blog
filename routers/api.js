var express = require('express');
var router = express.Router();

router.get('/user/register',function(req,res,next){
    //res.send('User33')
    console.log('register')
});

module.exports=router;