'use strict';
namespace App {
  angular.module('app', ['ngRoute', 'ngResource','ui.bootstrap','ngAnimate'])
  .config((
    $routeProvider: ng.route.IRouteProvider,
    $locationProvider: ng.ILocationProvider,
    $httpProvider: ng.IHttpProvider) => {

    $routeProvider.when('/', {
      templateUrl: '/templates/Home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    })
    .when('/addBeer', {
      templateUrl: '/templates/createBeer.html',
      controller: app.Controllers.BeerCreateController,
      controllerAs: 'vm'
    })
    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('HTTPFactory');
  });
}
