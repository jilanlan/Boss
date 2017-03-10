// 主js文件功能：定义模块，添加依赖模块，设置重定向。


(function(angular) {
	'use strict';
	angular.module('bossWebApp', [
		'ngRoute',
		'bossWebApp.jobList',
		'bossWebApp.company',
		'bossWebApp.message',
		'bossWebApp.userInfo',
        'bossWebApp.directives'
		])
		.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
			// 定义hash的前缀为#！
			$locationProvider.hashPrefix("!");
			$routeProvider.otherwise({ redirectTo: '/job' });
			// .otherwise('/job');
		}]);
})(angular);


