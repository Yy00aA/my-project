'use strict';

/**
 * @ngdoc overview
 * @name stockDogApp
 * @description
 * # stockDogApp
 *
 * Main module of the application.
 */
angular
  .module('stockDogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.select'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/show', {
      templateUrl: 'views/show.html',
      controller: 'ShowCtrl',
      controllerAs: 'dashboard'
    })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/homepage',{
        templateUrl:'views/homepage.html',
        controller:'homepageCtrl',
        controllerAs: 'dashboard'
      })
      .when('/login',{
        templateUrl:'views/login.html',
        controller:'loginCtrl',
        controllerAs: 'dashboard',
      })
      .when('/beginTest',{
        templateUrl:'views/beginTest.html',
        controller:'beginTestCtrl',
        controllerAs: 'dashboard',
      })
      .when('/midTest',{
        templateUrl:'views/midTest.html',
        controller:'midTestCtrl',
        controllerAs: 'dashboard',
      })
      .when('/content',{
        templateUrl:'views/content.html',
        controller:'contentCtrl'
      })
      .when('/watchlist/:listId', {
        templateUrl: 'views/watchlist.html',
        controller: 'WatchlistCtrl',
        controllerAs: 'watchlist'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
