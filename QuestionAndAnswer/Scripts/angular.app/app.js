'use strict';
angular.module('pageUrlApp', [])
    .constant('htmlTemplatesUrl', '/Scripts/angular.app/htmltemplates')
    .constant('questionDataSourceUrl', '/Question/GetQuestions');

var qaApp = angular.module('questionAndAnswerApp', ['ngRoute', 'ngAnimate', 'pageUrlApp'])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when('/home',
            {
                templateUrl: '/home/questions',
                controller: 'homeController'
            })
            .otherwise(
            {
                redirectTo: '/home'
            });
    }]);