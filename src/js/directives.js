(function(angular){
'use strict';
    angular.module('bossWebApp.directives', [])
        
			.directive("myTabs",function () {
            	return {
                	restrict:"A",
                	replace:true,
                	scope:true,
                	templateUrl:"src/view/tabs/tabs.html"
            	}
        	})
			.directive('autoFocus', ['$location', function($location) {
            	return {
                	restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
                	link: function($scope, iElm, iAttrs, controller) {
                    //iElm是指令用在哪个元素上,这里是li标签
                    	$scope.$location = $location;
                    //只有路径改变才会触发下面方法
                    	$scope.$watch('$location.path()', function(now) {
                        	// console.log('path:'+$location.path());
                        // 当path发生变化时执行，now是变化后的值
                        	var aLink = iElm.children().attr('href');//获取a标签的href属性
                        // 正则表达式开头结尾是/，中间的/需要\转义,数字一个或者多个\d+
                        	var type = aLink.replace(/#!(\/.+?)/, '$1'); // '$1'提取第一组成员
                        //console.log('type:'+type);//type是四个a标签的href，这里会打印四次
                        	// console.log('now:'+now);
                        	if (now.startsWith(type)) {
                            // 访问的是当前链接
                            	iElm.parent().children().children().removeClass('active');
                            	iElm.children().addClass('active');
                        	}
                    	});
                	}
            	};
        	}]);
})(angular)