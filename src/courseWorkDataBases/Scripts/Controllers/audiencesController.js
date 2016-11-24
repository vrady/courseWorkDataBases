(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('audiencesController', audiencesController);

    audiencesController.$inject = ['$scope', 'Audience', 'orderByFilter', '$route'];
    function audiencesController($scope, Audience, orderBy, $route) {

        $scope.audiences = Audience.query();

        $scope.propertyName = 'id';
        $scope.reverse = true;

        $scope.sortBy = function (propertyName) {
            $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
                ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
            $scope.audiences = orderBy($scope.audiences, $scope.propertyName, $scope.reverse);
        };

        $scope.newAudience = new Audience();
        $scope.addAudience = function () {
            console.log($scope.newAudience);
            $scope.newAudience.$save(function () {
                $route.reload();
            })
        }

        $scope.deleteAudience = function (deletedAudience) {
            $scope.deletedAudience = deletedAudience;
            $scope.deletedAudience.$remove({ id: $scope.deletedAudience.id }, function () {
                $route.reload();
            })
        }

        $scope.showEditForm = function (editAudience) {
            setTimeout(function () {
                Materialize.updateTextFields();
            }, 200)
            $scope.editAudience = editAudience;
            $scope.editedAudienceName = editAudience.name;
            $scope.editedAudience = Audience.get({ id: $scope.editAudience.id });

            $scope.editAudience = function () {
                $scope.editedAudience.$save(function () {
                    $route.reload();
                })
            }
        }

    }

})();
