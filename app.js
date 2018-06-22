var express=require('express');
var swig=require('swig');
var mongoose = require('mongoose');
vaR bodyParser = require('body-parser');
var app = express();

// 设置静态文件托管
app.use('/public', express.static(__dirname + '/public'));

app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine', 'html');
swig.setDefaults({cache: false});

app.use(bodyParser.urlencoded({extended: true}))

app.use('/admin', require('./routers/admin'))
app.use('/api',require('./routers/api'))
app.use('/', require('./routers/main'))

mongoose.connect('mongodb://localhost:27017/blog',function(err){
    if(err){
        console.log('数据库连接失败')
    }else{
        console.log('数据连接成功');
        app.listen(8082);
    }
});
