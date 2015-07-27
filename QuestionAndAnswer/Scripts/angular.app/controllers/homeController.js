'use strict';

qaApp.controller('homeController', ["$scope",
    "questionDataSource", function ($scope, questionDataSource) {
        questionDataSource.loadQuestions($scope);
        $scope.totalCorrectedAnswer = 0;
        $scope.totalinCorrectedAnswer = 0;
        $scope.totalScore = 0;

        $scope.questionDialogHidden = true;
        $scope.boardLocked = false;

        $scope.showQuestion = function (selectedQuestion) {
            $scope.boardLocked = true;
            $scope.questionDialogHidden = false;
            $scope.selectedQuestion = selectedQuestion;
        };

        $scope.answerQuestion = function (selectedAnswer) {
            $scope.boardLocked = false;
            $scope.selectedQuestion.QuestionLocked = true;
            $scope.questionDialogHidden = true;

            

            if (selectedAnswer.IsCorrect) {
                $scope.answerResult = "恭喜你(妳), 答對啦!";
                $scope.totalCorrectedAnswer++;
                $scope.totalScore += $scope.selectedQuestion.QuestionValue;
            } else {
                var correctAnswer = $scope.selectedQuestion.Answers.filter(function (item) {
                    if(item.IsCorrect){
                        return true;
                    }
                    return false;
                });
                $scope.totalinCorrectedAnswer++;
                $scope.answerResult = "答錯了喔! 正確解答是" + correctAnswer[0].AnswerContent;
            }
            $('#answer_dialog').modal('toggle');
        };

        $scope.cssOfButton = function (value) {
            var className='';
            switch (value) {
                case 100:
                    className = "btn btn-default";
                    break;
                case 200:
                    className = "btn btn-info";
                    break;
                case 300:
                    className = "btn btn-primary";
                    break;
                case 400:
                    className = "btn btn-warning";
                    break;
                case 500:
                    className = "btn btn-danger";
                    break;
            }

            return className;
        }

        $scope.cssOfTd = function (value) {
            var className = '';
            switch (value) {
                case 100:
                    className = "active";
                    break;
                case 200:
                case 300:
                    className = "success";
                    break;
                case 400:
                    className = "warning";
                    break;
                case 500:
                    className = "danger";
                    break;
            }

            return className;
        }

        $scope.cssOfPanel = function (value) {
            var className = '';
            switch (value) {
                case 100:
                    className = "panel panel-default";
                    break;
                case 200:
                    className = "panel panel-info";
                    break;
                case 300:
                    className = "panel panel-primary";
                    break;
                case 400:
                    className = "panel panel-warning";
                    break;
                case 500:
                    className = "panel panel-danger";
                    break;
            }

            return className;
        }
    }]);