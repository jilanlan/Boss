(function(angular) {
	'use strict';
	var userInfoModule = angular.module('bossWebApp.userInfo',[]);
    userInfoModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/userInfo', {
            templateUrl: './src/view/userInfo/view.html',
            controller: 'UserInfoController'
        })
    }]);
    userInfoModule.controller('UserInfoController',['$scope','$route', '$routeParams',function ($scope, $route, $routeParams) {

    }]);

})(angular);
