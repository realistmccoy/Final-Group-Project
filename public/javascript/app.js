'use strict';
var app;
(function (app) {
    angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate'])
        .config(function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/home.html',
            controller: app.Controllers.homeController,
            controllerAs: 'vm'
        })
            .when('/comments', {
            templateUrl: '/templates/comments.html',
            controller: app.Controllers.updateCommentController,
            controllerAs: 'vm'
        })
            .when('/addBeer', {
            templateUrl: '/templates/createBeer.html',
            controller: app.Controllers.beerCreateController,
            controllerAs: 'vm'
        })
            .when('/addBeer/:id', {
            templateUrl: '/templates/createBeer.html',
            controller: app.Controllers.beerCreateController,
            controllerAs: 'vm'
        })
            .when('/beerPage', {
            templateUrl: '/templates/beerPage.html',
            controller: app.Controllers.beerPageController,
            controllerAs: 'vm'
        })
            .when('/details/:id', {
            templateUrl: '/templates/beerDetails.html',
            controller: app.Controllers.beerDetailsController,
            controllerAs: 'vm'
        })
            .when('/updateBeer/:id', {
            templateUrl: '/templates/beerUpdate.html',
            controller: app.Controllers.beerUpdateController,
            controllerAs: 'vm'
        })
            .when("/register", {
            templateUrl: "/templates/register.html",
            controller: app.Controllers.userController,
            controllerAs: "vm"
        })
            .when("/login", {
            templateUrl: "/templates/login.html",
            controller: app.Controllers.userController,
            controllerAs: "vm"
        })
            .when("/?code=", {
            templateUrl: "/templates/login.html",
            controller: app.Controllers.userController,
            controllerAs: "vm"
        })
            .when("/myprofile", {
            templateUrl: "/templates/userHome.html",
            controller: app.Controllers.userHomeController,
            controllerAs: "vm"
        })
            .when("/popular", {
            templateUrl: "/templates/popularHome.html",
            controller: app.Controllers.categoryHomeController,
            controllerAs: "vm"
        })
            .when("/byLocation/:location", {
            templateUrl: "/templates/locationHome.html",
            controller: app.Controllers.categoryHomeController,
            controllerAs: "vm"
        })
            .when("/byType/:type", {
            templateUrl: "/templates/typeHome.html",
            controller: app.Controllers.categoryHomeController,
            controllerAs: "vm"
        })
            .when("/searchBeer", {
            templateUrl: "/templates/searchBeer.html",
            controller: app.Controllers.searchBeerController,
            controllerAs: "vm"
        })
            .when("/userprofile/:id", {
            templateUrl: "/templates/userDetails.html",
            controller: app.Controllers.userDetailsController,
            controllerAs: "vm"
        })
            .when("/breweryDetails/:id", {
            templateUrl: "templates/breweryDetails.html",
            controller: app.Controllers.breweryDetailsController,
            controllerAs: "vm"
        })
            .when('/updateComment/:id', {
            templateUrl: '/templates/commentEdit.html',
            controller: app.Controllers.updateCommentController,
            controllerAs: 'vm'
        })
            .when("/updateUser/:_id", {
            templateUrl: "/templates/updateUser.html",
            controller: app.Controllers.updateUserController,
            controllerAs: "vm"
        })
            .when('/forgot', {
            templateUrl: '/templates/forgot.html',
            controller: app.Controllers.forgotController,
            controllerAs: 'vm'
        })
            .when('/reset/:id', {
            templateUrl: '/templates/reset.html',
            controller: app.Controllers.forgotController,
            controllerAs: 'vm'
        })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('HTTPFactory');
    });
})(app || (app = {}));
