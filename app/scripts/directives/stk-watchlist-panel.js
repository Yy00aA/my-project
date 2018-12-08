'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDogApp')
  .directive('stkWatchlistPanel', function ($location, $model, WatchlistService, $routeParams) {
    return {
      template: 'view/templates/watchlist-panel.html',
      restrict: 'E',
      scope: {},
      link: function($scope) {
        //初始化变量
        $scope.watchlist = {};
        var addListModal = $modal({
          scope: $scope,
          template:'view/templates/addlist-modal.html',
          show: false
        });
        //将服务中的模型绑定到作用域中
        $scope.watchlist = WatchlistService.query();
        //显示addlist modal
        $scope.shoeModal = function() {
          addListModal.$promise.then(addListModal.show)
        } ;
        //根据模态框
        $scope.creatList = function() {
          WatchlistService.save($scope.watchlist);
          addListModal.hide();
          $scope.watchlist = {};
        };
        //删除目标
        $scope.delectList = function(list) {
          WatchlistService.remove(list);
          $location.path('/');
        };
      }
    };
   
  });
