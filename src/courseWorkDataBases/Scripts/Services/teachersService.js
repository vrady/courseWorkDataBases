(function () {
    'use strict';

    angular
         .module('teachersService', ['ngResource']).factory('Teacher', Teacher);

    Teacher.$inject = ['$resource'];

    function Teacher($resource) {
        return $resource('/api/teachers/:id')
    }
})();