'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:contentCtrl
 * @description
 * # contentCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp').controller('contentCtrl', function ( $scope, constant){
 
$(document).ready(function() {
  $('#example').DataTable();
} );

$scope.groupOne=[
  {id:0, name:'Tom', status:'0', type:'期中考试', time:'2018-12-5 14:39:55'},
  {id:1, name:'Alice', status:'1',type:'期中考试', time:'2018-12-5 14:39:55'},
  {id:2, name:'Sub', status:'0', type:'期中考试', time:'2018-12-5 14:39:55'},
  {id:3, name:'Tony', status:'1', type:'期中考试', time:'2018-12-5 14:39:55'},
  {id:4, name:'Telent', status:'0', type:'期中考试', time:'2018-12-5 14:39:55'},
  {id:5, name:'Juicy', status:'1', type:'期中考试', time:'2018-12-5 14:39:55'},
  {id:6, name:'姚静', status:'0', type:'期中考试', time:'2018-12-5 14:39:55'},
  {id:7, name:'马泳博', status:'1', type:'期中考试', time:'2018-12-5 14:39:55'}
];

$scope.groupOne.map(function (item){
  if (item.status === constant.testStatus.test) {
    item.testStatusInfo = constant.testStatusInfo.test;
  } else {
   item.testStatusInfo = constant.testStatusInfo.finish;
  }
});

// $scope.shareList = [];
// $scope.addTime = function () {
//   var modalInstance = $uibModal.open({
//     templateUrl: "addTime.html",
//     controller: "addTimeController",
//     size: "lg",
//     resolve: {
//       modalInfo: function () {
//         return {
//           msg: "add test's time"
//         };
//       }
//     }
//   });
//   modalInstance.result.then(function (creatShareInfo) {
//     $scope.shareList.push(creatShareInfo);
//   }, function () {
//     console.log('Modal dismissed at: ' + new Date());
//   });
// };

});

// angular.module('stockDogApp').controller('addTimeController', function ( $scope, $uibModalInstance){
//   $scope.cancel = function() {
//     $uibModalInstance.dismiss('cancel');
//   };

// });