(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('scheduleController', scheduleController);

    scheduleController.$inject = ['$scope', 'Schedule', 'orderByFilter', '$route', '$routeParams'];
    function scheduleController($scope, Schedule, orderByFilter, $route, $routeParams) {
        $scope.days = Schedule.query();
        $scope.days[0] = {
            number: 1,
            0: {
                
            },
            1: {
                
            },
            2: {
                
            },
            3: {
                name: "Лінгвістичне запезпечення САПР 1",
                teacher: "ас. Третяк В.А.",
                type: "Лек",
                audience: "510"
            },
            4: {
                name: "Математичні методи дослідження операцій",
                teacher: "ст.вик. Кузьміних В.О.",
                type: "Лек",
                audience: "1"
            },
            5: {
                
            }
        };
        $scope.days[1] = {
            number: 2,
            0: {
                name: "Етика і естетика",
                teacher: "ст.вик. Анацька Н.В.",
                type: "Лек",
                audience: "1"
            },
            1: {

            },
            2: {
                name: "Комп'ютерні мережі",
                teacher: "ст.вик. Лабжинський В.А.",
                type: "Лек",
                audience: "1"
            },
            3: {
                name: "Економічна теорія",
                teacher: "доц. Кривда О.В.",
                type: "Лек",
                audience: "1"
            },
            4: {
                name: "Економічна теорія",
                teacher: "доц. Кривда О.В.",
                type: "Прак",
                audience: "421"
            },
            5: {
                name: "Лінгвістичне забезпечення САПР 1",
                teacher: "ас. Третяк В.А.",
                type: "Лаб",
                audience: "521"
            }
        };
        console.log($scope.days);
    }

})();