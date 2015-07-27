
qaApp.factory('questionDataSource', ['$http', 'questionDataSourceUrl', function ($http, questionDataSourceUrl) {

    var getQuestions = function (scope) {
        return $http.get(questionDataSourceUrl).success(function (result, status, headers, config) {
            scope.questions = result.data;
            scope.categories = result.categories;
        }).error(function (data, status, headers, config) {
            alert(data);
        });
    }

    return { loadQuestions: getQuestions };
}]);