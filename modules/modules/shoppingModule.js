var shoppingModule = angular.module('ShoppingModule', []);

// Setup the service factory to create our Items interface to the server-side database

shoppingModule.factory('Items', function () {
    var items = {};
    items.query = function () {
        return [
            {title: 'Paint pots', description: 'Pots full of paint', price: 3.95},
            {title: 'Polka dots', description: 'Dots with polka', price: 2.95},
            {title: 'Pebbles', description: 'Just little rocks', price: 6.95}
        ];
    };
    return items;
});