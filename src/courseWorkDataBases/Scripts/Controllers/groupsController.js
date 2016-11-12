(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('groupsController', groupsController)
        .controller('groupsAddController', groupsAddController)
        .controller('groupsEditController', groupsEditController)
        .controller('groupsDeleteController', groupsDeleteController);

    groupsController.$inject = ['$scope', 'Groups'];
    groupsAddController.$inject = ['$scope', 'Groups', '$location'];
    groupsEditController.$inject = ['$scope', 'Groups', '$location', '$routeParams'];
    groupsDeleteController.$inject = ['$scope', 'Groups', '$location', '$routeParams'];

    function groupsController($scope, Groups) {
        $scope.groups = Groups.query();
    }

    function groupsAddController($scope, Groups, $location) {

        $scope.group = new Group();

        $scope.addGroup = () => {
            $scope.group.$save(() => {
                $location.path('/')
            })
        }
    }

    function groupsEditController($scope, Groups, $location, $routeParams) {

        $scope.group = Group.get({ id: $routeParams.id });

        $scope.editGroup = () => {
            $scope.group.$save(() => {
                $location.path('/')
            })
        }
    }

    function groupsDeleteController($scope, Groups, $location, $routeParams) {

        $scope.group = Group.get({ id: $routeParams.id });

        $scope.deleteGroup = () => {
            $scope.group.$remove({ id: $scope.group.id }, () => {
                $location.path('/')
            })
        }
    }

})();
