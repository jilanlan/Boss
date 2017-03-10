(function(angular){
	'use strict'

	var jobListModule = angular.module('bossWebApp.jobList',[]);
	jobListModule.config(['$routeProvider',function($routeProvider) {
		$routeProvider.when('/job', {
            templateUrl: 'src/view/jobList/view.html',
            controller: 'JobListController'
        }).when("/job/:jobId",{
            templateUrl: 'src/view/jobList/view_detail.html',
            controller: 'JobListDetailController'
        });
	}])
    jobListModule.controller('JobListController',['$scope','$http',function ($scope,$http) {
        $scope.companyList = [];
        $scope.loading = true;
        $scope.showFilter = false;
        $http.get('src/resource_json/companyLists.json')
            .then(function(res) {
                //console.log('company==', res.data);
                $scope.companyList=res.data;
                $scope.loading = false;
            }, function(err) {
                $scope.loading = false;
            });
        $scope.jobFilter = function(event){
            if ($scope.showjobFilter == false){
                $scope.showjobFilter = true;    
            }else {
                $scope.showjobFilter = false;
            }
        };   
        $scope.companyFilter = function(){
            if ($scope.showcompanyFilter == false){
                $scope.showcompanyFilter = true;
            }else {
                $scope.showcompanyFilter = false;
            }
        };
    }]).controller('JobListDetailController',['$scope','$http',function($scope,$http){
        $scope.companyDetail = {};
        $scope.selected = false;
        $scope.loading = true;
        $http.get('src/resource_json/alibaba.json')//ajax数据请求
            .then(function(res) {//成功的回调
                //console.log('companyDetail==', res.data);
                $scope.companyDetail = res.data;
                $scope.loading = false;
            }, function(err) {//失败的
                $scope.loading = false;
            });
        $scope.showDetail = function(){
            var article = document.getElementsByTagName('article')[0];
            var iconbottom = document.getElementById("icon-bottom");
            article.style.height = "auto";
            // iconbottom.removeClass('icon-bottom');
            // iconbottom.addClass('icon-top');
        }




    }]);
})(angular)




















