﻿(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('teachersController', teachersController);

    teachersController.$inject = ['$scope', 'Teacher', 'orderByFilter','$route'];
    function teachersController($scope, Teacher, orderBy, $route) {
        $scope.authorized = authorized;
        $scope.teachers = Teacher.query();

        $scope.propertyName = 'id';
        $scope.reverse = true;

        $scope.sortBy = function (propertyName) {
            $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
                ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
            $scope.teachers = orderBy($scope.teachers, $scope.propertyName, $scope.reverse);
        };

        $scope.newTeacher = new Teacher();
        $scope.addTeacher = function () {
            console.log($scope.newTeacher);
            $scope.newTeacher.$save(function () {
                $route.reload();
            })
        }
        
        $scope.deleteTeacher = function (deletedTeacher) {
            $scope.deletedTeacher = deletedTeacher;
            $scope.deletedTeacher.$remove({ id: $scope.deletedTeacher.id }, function () {
                $route.reload();
            })
        }

        $scope.showEditForm = function (editTeacher) {
            setTimeout(function () {
                Materialize.updateTextFields();
            }, 200)
            $scope.editTeacher = editTeacher;
            $scope.editedTeacherName = editTeacher.fullName;
            $scope.editedTeacher = Teacher.get({ id: $scope.editTeacher.id });

            $scope.editTeacher = function () {
                $scope.editedTeacher.$save(function () {
                    $route.reload();
                })
            }
        }

    }

})();
