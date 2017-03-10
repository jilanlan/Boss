(function(angular) {
	'use strict';
	var messageModule = angular.module('bossWebApp.message',[]);
    messageModule.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/message', {
            templateUrl: './src/view/message/view.html',
            controller: 'MessageController'
        })
    }]);
    messageModule.controller('MessageController',['$scope','$http',function ($scope, $http) {
        $scope.messageList=[];
        $scope.loading = true;
        $http.get('src/resource_json/messageLists.json')
            .then(function(res) {
                $scope.messageList=res.data;
                $scope.loading = false;
            }, function(err) {
                $scope.loading = false;
            });
        
    }]);
    messageModule.directive('toggleClass', function(){
                return {
                    restrict: 'A',
                    scope: {
                        toggleClass: '@'
                    },
                    link: function($scope, $element){
                        $element.on('click', function(){
                            var uls = document.getElementsByClassName("message-lists");
                            console.log(uls);
                            var lis = $element.parent().children();
                            console.log(lis);
                            $element.parent().children().children().removeClass('active');
                            $element.children().addClass('active');
                            var i = $element;
                            console.log(i);
                            // uls[this.index].addClass('block');
                        });
                        
                        
                    }
                };
            });
})(angular);
