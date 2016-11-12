(function () {
    'use strict';

    var groupsService = angular.module('groupsService', ['ngResource']);

    groupsService.factory('Groups', ['$resource', function($resource) {
        return $resource('/api/groups/', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        });
    }])
})();