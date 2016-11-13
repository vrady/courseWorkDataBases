(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('specialityController', specialityController)
        .controller('specialityAddController', specialityAddController)
        .controller('specialityEditController', specialityEditController)
        .controller('specialityDeleteController', specialityDeleteController);

    specialityController.$inject = ['$scope', 'Speciality', 'orderByFilter'];
    function specialityController($scope, Speciality, orderBy) {

        $scope.specialities = Speciality.query();

        $scope.propertyName = 'id';
        $scope.reverse = true;

        $scope.sortBy = function (propertyName) {
            $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
                ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
            $scope.specialities = orderBy($scope.specialities, $scope.propertyName, $scope.reverse);
        };

    }

    specialityAddController.$inject = ['$scope', 'Speciality', '$location'];
    function specialityAddController($scope, Speciality, $loaction) {

        $scope.speciality = new Speciality();

        $scope.addSpeciality = function () {
            $scope.speciality.$save(function () {
                $loaction.path('/')
            })
        }

    }

    specialityEditController.$inject = ['$scope', 'Speciality', '$location', '$routeParams'];
    function specialityEditController($scope, Speciality, $location, $routeParams) {

        $scope.speciality = Speciality.get({ id: $routeParams.id });

        $scope.editSpeciality = function () {
            $scope.speciality.$save(function () {
                $location.path('/')
            })
        }
    }

    specialityDeleteController.$inject = ['$scope', 'Speciality', '$location', '$routeParams'];
    function specialityDeleteController($scope, Speciality, $location, $routeParams) {

        $scope.speciality = Speciality.get({ id: $routeParams.id });

        $scope.deleteSpeciality = function () {
            $scope.speciality.$remove({ id: $scope.speciality.id }, function () {
                $location.path('/')
            })
        }

    }
})();
