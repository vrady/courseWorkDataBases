(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('scheduleController', scheduleController);

    scheduleController.$inject = ['$scope', 'Schedule', 'Group', 'Teacher', 'Subject', 'Audience', 'orderByFilter', '$route', '$routeParams'];
    function scheduleController($scope, Schedule, Group,Teacher,Subject, Audience, orderByFilter, $route, $routeParams) {
        $scope.group = Group.get({ id: $routeParams.id });
        $scope.days = Schedule.query({ id: $routeParams.id });
        $scope.groups = Group.query();
        $scope.subjects = Subject.query();
        $scope.teachers = Teacher.query();
        $scope.audiences = Audience.query();

        console.log($scope.days);

        $scope.newLesson = new Schedule();
        $scope.showEditLesson = function (number, day) {
            console.log(number, day);
            $scope.newLesson.lessonNumber = number;
            $scope.newLesson.day = day;
            $scope.newLesson.groupId = $routeParams.id;
            $scope.editLesson = function () {
                console.log($scope.newLesson);
                $scope.newLesson.$save(function () {
                    $route.reload();
                });
            }
        }
        
        $scope.deleteLesson = function (deletedLesson) {
            $scope.deletedLesson = deletedLesson;
            $scope.deletedLesson.$remove({id: $scope.deletedLesson.id},function () {
                $route.reload();
            })
        }
        
    }

})();