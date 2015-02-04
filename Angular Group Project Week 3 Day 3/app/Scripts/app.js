var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'HomeController',
        templateUrl: '/app/Views/HomeView.html',
        title: 'Home Page'
    }).when('/Post/:id', {
        templateUrl: '/app/View/PostView.html',
        title: 'Post Page'
    });
});