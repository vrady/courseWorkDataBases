(function () {
    'use strict';

    angular.module('scheduleKpi', [
        // Angular modules 
        'ngRoute',

        // Custom modules
        'groupsService'

        // 3rd Party Modules

    ]);

    angular.module('scheduleKpi').config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'groupsController'
            })
            .when('/groups', {
                templateUrl: 'partials/groups.html',
                controller: 'groupsController'
            }).when('/groups/add', {
                templateUrl: 'partials/add.html',
                controller: 'groupsAddController'
            }).when('/groups/edit/:id', {
                templateUrl: 'partials/edit.html',
                controller: 'groupsEditController'
            }).when('/groups/delete/:id', {
                templateUrl: 'partials/delete.html',
                controller: 'groupsDeleteController'
            }).otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

    }]);

})();