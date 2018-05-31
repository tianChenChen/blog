var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.send('User22233')
});

module.exports=router;