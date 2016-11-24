(function () {
    'use strict';

    angular
        .module('audiencesService', ['ngResource']).factory('Audience', Audience);

    Audience.$inject = ['$resource'];

    function Audience($resource) {
        return $resource('/api/audiences/:id')
    }
})();