var express = require('express');

var app = new express();

app.get('/', function(req, res){
    res.render('./../app/index.ejs', {});
})
.use(express.static(__dirname + '/../.tmp'))
.listen(8888);

require('./routes/items.js')(app);