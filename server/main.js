var express = require('express');
var app = new express();
var parser = require('body-parser');
var React = require('react/addons');
var GroceryItem = require('./models/GroceryItems');

require('babel/register');
require('./database.js');

app.get('/', function(req, res){
    //res.render('./../app/index.ejs', {});
    var application = React.createFactory(require('./../app/components/GroceryItemList.jsx'));

    GroceryItem.find(function(err, doc){
        var generated = React.renderToString(application({
            items: doc
        }));

        res.render('./../app/index.ejs', {reactOutput:generated});
    })
})
.use(express.static(__dirname + '/../.tmp'))
.listen(8888);

app.use(parser.json());
app.use(parser.urlencoded({extended:false}));

require('./routes/items.js')(app);