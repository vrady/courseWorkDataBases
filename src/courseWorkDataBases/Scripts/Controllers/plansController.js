(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('plansController', plansController);

    plansController.$inject = ['$scope', 'Plan', 'orderByFilter', '$route', '$routeParams', 'Subject', 'Teacher', 'Speciality'];
    function plansController($scope, Plan, orderBy, $route, $routeParams, Subject, Teacher, Speciality) {
        $scope.plan = Plan.query({ id: $routeParams.id });
        $scope.subjects = Subject.query();
        $scope.teachers = Teacher.query();
        $scope.specialityName = Speciality.get({ id: $routeParams.id });
        $scope.propertyName = 'subject.name';
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
            $scope.newSubject.specialityId = $routeParams.id;
            $scope.newSubject.$save(function () {
                $route.reload();
            })
        }

        $scope.showEditForm = function (editSubject) {
            setTimeout(function () {
                Materialize.updateTextFields();
            }, 200);
            $scope.editedSubject = $scope.plan.find(function (elem) {
                return elem.id == editSubject.id;
            });
            console.log($scope.editedSubject);
            $scope.editSubject = function () {
                $scope.editedSubject.$save(function () {
                    $route.reload();
                })
            }
        }

    }

})();
