(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('specialityController', specialityController);

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

        $scope.showEditForm = function (editSpeciality) {
            setTimeout(function () {
                Materialize.updateTextFields();
            }, 200)
            $scope.editSpeciality = editSpeciality;
            $scope.editedSpecialityName = editSpeciality.name;
            $scope.editedSpeciality = Speciality.get({ id: $scope.editSpeciality.id });

            $scope.editSpeciality = function () {
                $scope.editedSpeciality.$save(function () {
                    $route.reload();
                })
            }
        }

    }

})();
