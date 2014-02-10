var myModule = angular.module("myApp", ['ngRoute']);

/*
 *  Handle the routing here
 * */

myModule.config(function ($routeProvider) {
//    $routeProvider.config(function($routeProvider){
        $routeProvider.
            when('/home', {
                controller : homePageCtrl,
                templateUrl:'templates/home.html'
            }).
            otherwise({
                redirectTo : "/home"
            });
//    });
});