(function () {
    'use strict';

    angular
        .module('specialityService', ['ngResource']).factory('Speciality', Speciality);

    Speciality.$inject = ['$resource'];

    function Speciality($resource) {
        return $resource('/api/specialities/:id')
    }
})();