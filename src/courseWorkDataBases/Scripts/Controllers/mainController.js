(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', 'Schedule', 'Group', 'orderByFilter', '$route', '$routeParams'];
    function mainController($scope, Schedule, Group, orderByFilter, $route, $routeParams) {
        $scope.groups = Group.query();
    }

})();