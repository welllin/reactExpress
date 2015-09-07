var React = require('react/addons');

console.log('Hello from JSX!');

var GroceryItemList = require('./components/GroceryItemList.jsx');

var GroceryItemStore = require('./stores/GroceryItemStore.jsx');

var initial = GroceryItemStore.getItems();

function render(){
    React.render(<GroceryItemList items={initial}/>, app)
}

GroceryItemStore.onChange(function(items){
    initial = items;
    render();
})

render();