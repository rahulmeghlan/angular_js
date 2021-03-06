/**
 * Created by Rahul on 2/9/14.
 */

var aMailServices = angular.module('AMail', ['ngRoute', 'ngAnimate']);

aMailServices.config(function ($routeProvider) {
    console.log($routeProvider);
    $routeProvider.
        when('/', {
            controller: listController,
            templateUrl: 'templates/list.html'
        }).
        when('/view/:id', {
            controller: detailController,
            templateUrl: 'templates/detail.html'
        }).
        otherwise({
            redirectTo: '/'
        })
});