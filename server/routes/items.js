module.exports = function(app){

    var GroceryItem = require('./../models/GroceryItems.js');

    app.route('/api/items')
    .get(function(req, res){
        GroceryItem.find(function(error, doc){
            res.send(doc);
        });
    })
    .post(function(req, res){
        var item = req.body;
        //items.push(item);
        var groceryItem = new GroceryItem(item);
        groceryItem.save(function(err, data){
            res.status(300).send();
        })
    });

    app.route('/api/items/:id')
    .delete(function(req ,res){
        GroceryItem.findOne({
            _id:req.params.id
        }).remove();
    })
    .patch(function(req, res){
        GroceryItem.findOne({
            _id: req.body._id
        }, function(err, doc){
            for(var key in req.body){
                doc[key] = req.body[key];
            }
            doc.save();
            res.status(200).send();
        })
    })
}