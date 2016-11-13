(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('teachersController', teachersController)
        .controller('teachersAddController', teachersAddController)
        .controller('teachersEditController', teachersEditController)
        .controller('teachersDeleteController', teachersDeleteController);

    teachersController.$inject = ['$scope', 'Teacher', 'orderByFilter'];
    function teachersController($scope, Teacher, orderBy) {

        $scope.teachers = Teacher.query();

        $scope.propertyName = 'id';
        $scope.reverse = true;

        $scope.sortBy = function (propertyName) {
            $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
                ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
            $scope.teachers = orderBy($scope.teachers, $scope.propertyName, $scope.reverse);
        };

    }

    teachersAddController.$inject = ['$scope', 'Teacher', '$location'];
    function teachersAddController($scope, Teacher, $loaction) {

        $scope.teacher = new Teacher();

        $scope.addTeacher = function () {
            $scope.teacher.$save(function () {
                $loaction.path('/')
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

    teachersDeleteController.$inject = ['$scope', 'Teacher', '$location', '$routeParams'];
    function teachersDeleteController($scope, Teacher, $location, $routeParams) {

        $scope.teacher = Teacher.get({ id: $routeParams.id });

        $scope.deleteTeacher = function () {
            $scope.teacher.$remove({ id: $scope.teacher.id }, function () {
                $location.path('/')
            })
        }

    }

})();
