(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('groupsController', groupsController);

    groupsController.$inject = ['$scope', 'Groups'];

    function groupsController($scope, Groups) {
        $scope.groups = Groups.query();
    }
})();
