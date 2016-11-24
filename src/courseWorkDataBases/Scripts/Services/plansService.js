(function () {
    'use strict';

    angular
        .module('plansService', ['ngResource']).factory('Plan', Plan);

    Plan.$inject = ['$resource'];

    function Plan($resource) {
        return $resource('/api/plans/:id')
    }
})();