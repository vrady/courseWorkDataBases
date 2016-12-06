(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('scheduleController', scheduleController);

    scheduleController.$inject = ['$scope', 'Schedule', 'Group', 'Teacher','Plan', 'Subject', 'Audience', 'orderByFilter', '$route', '$routeParams'];
    function scheduleController($scope, Schedule, Group, Teacher, Plan, Subject, Audience, orderByFilter, $route, $routeParams) {
        $scope.authorized = authorized;
        $scope.group = Group.get({ id: $routeParams.id }, function (res) {
            Plan.query({ id: res.specialityId }, function (res) {
                $scope.plans = res.filter(function (el) {
                    return Math.floor(el.semester + 1) / 2 == $scope.group.course;
                })
            });
        });
        $scope.weeks = Schedule.query({ id: $routeParams.id });
        $scope.groups = Group.query();
        $scope.subjects = Subject.query();
        $scope.teachers = Teacher.query();
        $scope.audiences = Audience.query();

        $scope.newLesson = new Schedule();
        $scope.showEditLesson = function (week, number, day, id) {
            $scope.newLesson.lessonNumber = number;
            $scope.newLesson.day = day;
            $scope.newLesson.groupId = $routeParams.id;
            $scope.newLesson.id = id;
            $scope.newLesson.week = week;
            $scope.editLesson = function () {
                $scope.newLesson.$save(function () {
                    $route.reload();
                });
            }
        }
        
        $scope.deleteLesson = function (deletedLesson, days) {
            $scope.deletedLesson = deletedLesson;
            $scope.delDays = days;
            $scope.delDays.$remove({ id: $scope.deletedLesson.scheduleId }, function () {
                $route.reload();
            })
        }
    }
})();