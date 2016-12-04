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
        $scope.showEditLesson = function (number, day, id) {
            console.log(number, day);
            $scope.newLesson.lessonNumber = number;
            $scope.newLesson.day = day;
            $scope.newLesson.groupId = $routeParams.id;
            $scope.newLesson.id = id;
            $scope.editLesson = function () {
                console.log($scope.newLesson);
                
                $scope.newLesson.$save(function () {
                    $route.reload();
                });
            }
        }
        
        $scope.deleteLesson = function (deletedLesson, row) {
            $scope.deletedLesson = deletedLesson;
            $scope.delRow = row;
            console.log($scope.delRow);
            $scope.delRow.$remove({ id: $scope.deletedLesson.scheduleId }, function () {
                $route.reload();
            })
            //$scope.days.$remove({id: $scope.deletedLesson.scheduleId}, function () {
            //    $route.reload();
            //})
        }
        
    }

})();