'use strict';

/**
 * @ngdoc service
 * @name stockDogApp.WatchlistService
 * @description
 * # WatchlistService
 * Service in the stockDogApp.
 */
angular.module('stockDogApp')
  .service('WatchlistService', function WatchlistService() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    //辅助方法1：
    var loadModel = function() {
      var model = {
        watchlists: localStorage['StockDog.watchlists'] ?
        JSON.parse(localStorage['StockDog.watchlists']) : [],
        nextId:localStorage['StockDog.nextId'] ?
        parseInt(localStorage['StockDog.nextId']) : 0
      }; 
      return model;
    };
    //辅助方法2：
    
  });
