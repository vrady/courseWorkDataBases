(function () {
    'use strict';

    let groupsService = angular.module('groupsService', ['ngResource']);

    groupsService.factory('Groups', ['$resource', $resource => {
        return $resource('/api/groups/', {}, {
            query: { method: 'GET', params: {}, isArray: true }
        });
    }])
})();