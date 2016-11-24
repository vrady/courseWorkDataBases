(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('plansController', plansController);

    plansController.$inject = ['$scope', 'Plan', 'orderByFilter', '$route', '$routeParams'];
    function plansController($scope, Plan, orderBy, $route, $routeParams) {
        $scope.plan = Plan.get({ id: $routeParams.id });
        $scope.propertyName = 'name';
        $scope.reverse = true;

        $scope.sortBy = function (propertyName) {
            $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
                ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
            $scope.plan = orderBy($scope.plan, $scope.propertyName, $scope.reverse);
        };

        $scope.deleteSubject = function (deletedSubject) {
            $scope.deletedSubject = deletedSubject;
            $scope.deletedSubject.$remove({ id: $scope.deletedSubject.id }, function () {
                $route.reload();
            })
        }

        $scope.newSubject = new Plan();
        $scope.addSubject = function () {
            $scope.newSubject.$save(function () {
                $route.reload();
            })
        }

        $scope.showEditForm = function (editSubject) {
            setTimeout(function () {
                Materialize.updateTextFields();
            }, 200)
            $scope.editSubject = editSubject;
            $scope.editedSubjectName = editSubject.name;
            $scope.editedSubject = Plan.get({ id: $scope.editSubject.id });

            $scope.editSubject = function () {
                $scope.editedSubject.$save(function () {
                    $route.reload();
                })
            }
        }

    }

})();
