(function () {
    'use strict';

    angular.module('scheduleKpi', [
        // Angular modules 
        'ngAnimate',
        'ngRoute',

        // Custom modules
        'groupsService',
        'specialityService',
        'teachersService'

        // 3rd Party Modules

    ]);

    angular.module('scheduleKpi').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'groupsController'
            })
            .when('/groups', {
                templateUrl: 'partials/groups.html',
                controller: 'groupsController'
            })
            .when('/specialities', {
                templateUrl: 'partials/specialities.html',
                controller: 'specialityController'
            })
            .when('/teachers', {
                templateUrl: 'partials/teachers.html',
                controller: 'teachersController'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'adminsController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

    }]).directive('navbar', function () {
        return {
            templateUrl: 'partials/navbar.html'
        }
    });

})();