'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:homepageCtrl
 * @description
 * # homepageCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp').controller('homepageCtrl', function ($scope, $window) {
  $scope.gotoTest = function() {
    $window.location = '#/login';
  };
  $scope.gotoContent = function() {
    $window.location = '#/content';
  }
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


