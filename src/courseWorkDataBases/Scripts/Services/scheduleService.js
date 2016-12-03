(function () {
    'use strict';

    angular
        .module('scheduleService', ['ngResource']).factory('Schedule', Schedule);

    Schedule.$inject = ['$resource'];

    function Schedule($resource) {
        return $resource('/api/schedule/:id')
    }
})();