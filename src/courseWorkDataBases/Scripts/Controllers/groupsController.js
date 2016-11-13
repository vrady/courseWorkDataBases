(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('groupsController', groupsController)
        .controller('groupsAddController', groupsAddController)
        .controller('groupsEditController', groupsEditController)
        .controller('groupsDeleteController', groupsDeleteController);

    groupsController.$inject = ['$scope', 'Group'];
    groupsAddController.$inject = ['$scope', 'Group', '$location'];
    groupsEditController.$inject = ['$scope', 'Group', '$location', '$routeParams'];
    groupsDeleteController.$inject = ['$scope', 'Group', '$location', '$routeParams'];

    function groupsController($scope, Group) {
        $scope.groups = Group.query();
    }

    function groupsAddController($scope, Group, $location) {

        $scope.group = new Group();

        $scope.addGroup = function() {
            $scope.group.$save(function() {
                $location.path('/')
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

    function groupsDeleteController($scope, Group, $location, $routeParams) {

        $scope.group = Group.get({ id: $routeParams.id });

        $scope.deleteGroup = function () {
            $scope.group.$remove({ id: $scope.group.id }, function () {
                $location.path('/')
            })
        }
    }

})();
