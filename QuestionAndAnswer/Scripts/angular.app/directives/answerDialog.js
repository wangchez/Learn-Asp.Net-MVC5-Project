qaApp.directive('answerDialog', ['htmlTemplatesUrl', function (htmlTemplatesUrl) {
    return {
        restrict: 'E',
        transclude: true,
        templateUrl: htmlTemplatesUrl + '/answer-dialog.html'
    };
}]);