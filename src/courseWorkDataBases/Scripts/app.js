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
            .when('/groups/add', {
                templateUrl: 'partials/add.html',
                controller: 'groupsAddController'
            })
            .when('/groups/edit/:id', {
                templateUrl: 'partials/edit.html',
                controller: 'groupsEditController'
            })
            .when('/groups/delete/:id', {
                templateUrl: 'partials/delete.html',
                controller: 'groupsDeleteController'
            })
            .when('/specialities', {
                templateUrl: 'partials/specialities.html',
                controller: 'specialityController'
            })
            .when('/specialities/add', {
                templateUrl: 'partials/specialitiesAdd.html',
                controller: 'specialityAddController'
            })
            .when('/specialities/edit/:id', {
                templateUrl: 'partials/specialitiesEdit.html',
                controller: 'specialityEditController'
            })
            .when('/specialities/delete/:id', {
                templateUrl: 'partials/specialitiesDelete.html',
                controller: 'specialityDeleteController'
            })
            .when('/teachers', {
                templateUrl: 'partials/teachers.html',
                controller: 'teachersController'
            })
            .when('/teachers/add', {
                templateUrl: 'partials/teachersAdd.html',
                controller: 'teachersAddController'
            })
            .when('/teachers/edit/:id', {
                templateUrl: 'partials/teachersEdit.html',
                controller: 'teachersEditController'
            })
            .when('/teachers/delete/:id', {
                templateUrl: 'partials/teachersDelete.html',
                controller: 'teachersDeleteController'
            })
            .when('/login', {
                templateUrl: 'partials/login.html',
                controller: 'adminsController'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);

    }]).directive('navbarkpi', function () {
        return {
            templateUrl: 'partials/navbar.html'
        }
    });

})();