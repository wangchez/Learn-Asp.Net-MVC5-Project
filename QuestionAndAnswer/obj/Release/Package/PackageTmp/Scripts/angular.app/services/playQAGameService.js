qaApp.factory('playQAGameService', [function () {

    var showQuestionDialog = function (scope) {
        return $http.get(questionDataSourceUrl).success(function (result, status, headers, config) {
            scope.questions = result.data;
            scope.categories = result.categories;
        }).error(function (data, status, headers, config) {
            alert(data);
        });
    }

    return getQuestions;
}]);