'use strict';
var app;
(function (app) {
    angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate'])
        .config(function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.when('/', {
            templateUrl: '/templates/Home.html',
            controller: app.Controllers.HomeController,
            controllerAs: 'vm'
        })
            .when("/register", {
            templateUrl: "/templates/register.html",
            controller: app.Controllers.uCtrl,
            controllerAs: "vm"
        })
            .when("/login", {
            templateUrl: "/templates/login.html",
            controller: app.Controllers.uCtrl,
            controllerAs: "vm"
        })
            .when("/loginFB", {
            templateUrl: "/templates/loginFB.html",
            controller: app.Controllers.uCtrl,
            controllerAs: "vm"
        })
            .when("/loginFB/return", {
            templateUrl: "/templates/home.html",
            controller: app.Controllers.uCtrl,
            controllerAs: "vm"
        })
            .when("/:username", {
            templateUrl: "/templates/uHome.html",
            controller: app.Controllers.uHomeCtrl,
            controllerAs: "vm"
        })
            .otherwise({ redirectTo: '/' });
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push('HTTPFactory');
    });
})(app || (app = {}));
