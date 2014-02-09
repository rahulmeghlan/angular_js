/**
 * Created by Rahul on 2/9/14.
 */
var detailController = function($scope, $routeParams){
//    aMailServices.controller("detailController", function ($scope, $routeParams) {
        $scope.message = messages[$routeParams.id];
    };
