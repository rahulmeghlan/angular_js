function ShoppingController($scope, Items){  // Items is a service
    $scope.items = Items.query();
}