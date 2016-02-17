'use strict';
namespace app {
  angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap', 'ngAnimate'])

  .config((
    $routeProvider: ng.route.IRouteProvider,
    $locationProvider: ng.ILocationProvider,
    $httpProvider: ng.IHttpProvider) => {

    $routeProvider.when('/', {
      templateUrl: '/templates/Home.html',
      controller: app.Controllers.homeController,
      controllerAs: 'vm'
    })

    .when('/comments', {
      templateUrl:'/templates/comments.html',
      controller: app.Controllers.commentController,
      controllerAs: 'vm'
    })
    .when('/addBeer', {
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

    .when("/userprofile/:username", {
      templateUrl: "/templates/userHome.html",
      controller: app.Controllers.userHomeController,
      controllerAs: "vm"
    })

    .when("/byLocation/:region", {
      templateUrl: "/templates/locationHome.html",
      controller: app.Controllers.locationHomeController,
      controllerAs: "vm"
    })

    .when("/addBeer/:id",{
        templateUrl: "/templates/createBeer.html",
        controller: app.Controllers.beerCreateController,
        controllerAs: "vm"
    })

    .when("/searchBeer",{
        templateUrl: "/templates/searchBeer.html",
        controller: app.Controllers.searchBeerController,
        controllerAs: "vm"
    })

    .otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('HTTPFactory');
  });
}
