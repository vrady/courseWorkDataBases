(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('groupsController', groupsController)
        .controller('groupsEditController', groupsEditController);

    groupsController.$inject = ['$scope', 'Group', 'orderByFilter', '$route'];
    groupsEditController.$inject = ['$scope', 'Group', '$location', '$routeParams'];

    function groupsController($scope, Group, orderBy, $route) {
        $scope.groups = Group.query();

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
    }

    function groupsEditController($scope, Group, $location, $routeParams) {

        $scope.group = Group.get({ id: $routeParams.id });

        $scope.editGroup = function() {
            $scope.group.$save(function() {
                $location.path('/')
            })
        }
    }

})();
