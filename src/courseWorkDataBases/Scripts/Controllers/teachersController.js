(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('teachersController', teachersController)
        .controller('teachersEditController', teachersEditController);

    teachersController.$inject = ['$scope', 'Teacher', 'orderByFilter','$route'];
    function teachersController($scope, Teacher, orderBy, $route) {

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

    }

    teachersEditController.$inject = ['$scope', 'Teacher', '$location', '$routeParams'];
    function teachersEditController($scope, Teacher, $location, $routeParams) {

        $scope.teacher = Teacher.get({ id: $routeParams.id });

        $scope.editTeacher = function () {
            $scope.teacher.$save(function () {
                $location.path('/')
            })
        }
    }

})();
