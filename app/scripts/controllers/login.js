'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:loginCtrl
 * @description
 * # loginCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp').controller('loginCtrl', function ($scope, $window, constant) {
  $scope.selectedSubjectList = constant.subjectList;


  $scope.gotoBeginTest= function () {
    $window.location = '#/beginTest';
  };

 
  // $scope.subjectList = [{
  //     id: '0',
  //     subject: '期中考试'
  //   },
  //   {
  //     id: '1',
  //     subject: '期末考试'
  //   },
  //   {
  //     id: '2',
  //     subject: '期中考试'
  //   },
  //   {
  //     id: '3',
  //     subject: '期末考试'
  //   },
  // ];
  $scope.selectSubject = function () {
    console.log($scope.list.selected);
  };

  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
