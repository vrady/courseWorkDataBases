(function () {
    'use strict';

    angular
        .module('subjectsService', ['ngResource']).factory('Subject', Subject);

    Subject.$inject = ['$resource'];

    function Subject($resource) {
        return $resource('/api/subjects/:id')
    }
})();