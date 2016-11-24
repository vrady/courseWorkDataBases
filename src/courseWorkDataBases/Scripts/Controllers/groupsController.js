(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('groupsController', groupsController);

    groupsController.$inject = ['$scope', 'Group', 'Speciality', 'orderByFilter', '$route'];

    function groupsController($scope, Group, Speciality, orderBy, $route) {
        $scope.groups = Group.query();
        $scope.specialities = Speciality.query();
        $scope.propertyName = 'id';
        $scope.reverse = true;
        //$scope.groups = orderBy($scope.groups, $scope.propertyName, $scope.reverse);

        $scope.sortBy = function (propertyName) {
            $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
                ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
            $scope.groups = orderBy($scope.groups, $scope.propertyName, $scope.reverse);
        };

        $scope.newGroup = new Group();
        $scope.addGroup = function () {
            $scope.newGroup.$save(function () {
                $route.reload();
            })
        }

        $scope.deleteGroup = function (deletedGroup) {
            $scope.deletedGroup = deletedGroup;
            $scope.deletedGroup.$remove({ id: $scope.deletedGroup.id }, function () {
                $route.reload();
            })
        }

        $scope.showEditForm = function (editGroup) {
            setTimeout(function () {
                Materialize.updateTextFields();
            },200)
            $scope.editGroup = editGroup;
            $scope.editedGroupName = editGroup.name;
            $scope.editedGroup = Group.get({ id: $scope.editGroup.id });

            $scope.editGroup = function () {
                console.log($scope.editedGroup)
                $scope.editedGroup.$save(function () {
                    $route.reload();
                })
            }
        }
    }

})();
