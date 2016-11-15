(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('specialityController', specialityController)
        .controller('specialityEditController', specialityEditController);

    specialityController.$inject = ['$scope', 'Speciality', 'orderByFilter', '$route'];
    function specialityController($scope, Speciality, orderBy, $route) {

        $scope.specialities = Speciality.query();

        $scope.propertyName = 'id';
        $scope.reverse = true;

        $scope.sortBy = function (propertyName) {
            $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
                ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
            $scope.specialities = orderBy($scope.specialities, $scope.propertyName, $scope.reverse);
        };

        $scope.deleteSpeciality = function (deletedSpeciality) {
            $scope.deletedSpeciality = deletedSpeciality;
            $scope.deletedSpeciality.$remove({ id: $scope.deletedSpeciality.id }, function () {
                $route.reload();
            })
        }

        $scope.newSpeciality = new Speciality();
        $scope.addSpeciality = function () {
            $scope.newSpeciality.$save(function () {
                $route.reload();
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

})();
