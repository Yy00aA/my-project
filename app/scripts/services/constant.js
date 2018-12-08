'use strict';

/**
 * @ngdoc service
 * @name mbkportalApp.constant
 * @description
 * # constant
 * Service in the stockDogApp.
 */
angular.module('stockDogApp').service('constant', function() {
/*choose test subject */
 var subjectList = [{
      id: '0',
      subject: '期中考试'
    },
    {
      id: '1',
      subject: '期末考试'
    },
    {
      id: '2',
      subject: '英语四六级考试'
    },
    {
      id: '3',
      subject: '计算机二级考试'
    },
  ];

/*test status */
  var testStatus = {
    test: 0,
    finish: 1,
  };

  var testStatusInfo = {
    test:{
      bg:'label-success',
      info: '考试中',
    },
    finish:{
      bg:'label-info',
      info: '已交卷',
    }
  };

  
  return {
    subjectList: subjectList,
    testStatus:testStatus,
    testStatusInfo:testStatusInfo,

    dtSettings: {
      "lengthMenu": "显示 _MENU_ 项结果",
      "zeroRecords": "没有匹配结果",
      "info": "显示第 _START_ 至 _END_ 项结果，共 _TOTAL_ 项",
      "infoEmpty": "显示第 0 至 0 项结果，共 0 项",
      "infoFiltered": "(由 _MAX_ 项结果过滤)"
    },
  };
});