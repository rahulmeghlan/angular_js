var init_app = angular.module('crudOpt', ['ngRoute', 'app_controllers']);

init_app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/add.html',
        controller: 'addItems'
    })
        .when('/edit/:item', {
            templateUrl: 'templates/edit.html',
            controller: 'editItems'
        }).
        when('/search', {
            templateUrl: 'templates/search.html',
            controller: 'searchItems'
        }).
        otherwise({
            redirectTo: '/'
        })
});

var app_controllers = angular.module('app_controllers', []);
