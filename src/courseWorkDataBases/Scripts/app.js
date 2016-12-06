var authorized = false;
(function () {
    'use strict';

    angular.module('scheduleKpi', [
        // Angular modules 
        'ngAnimate',
        'ngRoute',

        // Custom modules
        'groupsService',
        'specialityService',
        'teachersService',
        'plansService',
        'subjectsService',
        'audiencesService',
        'scheduleService'

        // 3rd Party Modules

    ]);

    angular.module('scheduleKpi').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'mainController'
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
            .when('/subjects', {
                templateUrl: 'partials/subjects.html',
                controller: 'subjectsController'
            })
            .when('/audiences', {
                templateUrl: 'partials/audiences.html',
                controller: 'audiencesController'
            })
            .when('/plans/:id', {
                templateUrl: 'partials/plan.html',
                controller: 'plansController'
            })
            .when('/schedules/:id', {
                templateUrl: 'partials/schedule.html',
                controller: 'scheduleController'
            })
            .otherwise('/');

        $locationProvider.html5Mode(true);

    }]).directive('navbar', function () {
        return {
            templateUrl: 'partials/navbar.html',
            controller: ['$scope', '$route', function navbarController($scope, $route) {
                $scope.authorized = authorized;
                $scope.login = function () {
                    var newWin = window.open("/account", "Login", "width=500,height=250");
                    newWin.onunload = function () {
                        setTimeout(function () {
                            $route.reload();
                        }, 500)
                        
                    }
                }
                $scope.signOut = function () {
                    authorized = false;
                }
            }]
        }
    });

})();