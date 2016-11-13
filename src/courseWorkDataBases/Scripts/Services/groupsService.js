(function () {
    'use strict';

    angular.module('groupsService', ['ngResource']).factory('Group', Group);

    Group.$inject = ['$resource'];

    function Group($resource) {
        return $resource('/api/groups/:id')
    }

    //groupsService.factory('Groups', ['$resource', function ($resource) {
    //    return $resource('/api/groups/', {}, {
    //        //query: { method: 'GET', params: {}, isArray: true },
    //        get: { method: 'GET', isArray: false}
    //    });
    //}])
})();