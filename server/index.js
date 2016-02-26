var express = require('express');
var app = express();
//var bodyParser = require('body-parser');

var router = express.Router();

var helloWorldRoute = require('./routes/helloWorld')(router);

//app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.json());

var port = process.env.PORT || 8080

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:' + port);
    res.setHeader('Access-Control-Allow-Origin', null);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/api', router);

app.listen(port);

console.log('API listening on port ' + port);