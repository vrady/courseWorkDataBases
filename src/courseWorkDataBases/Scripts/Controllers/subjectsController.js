(function () {
    'use strict';

    angular
        .module('scheduleKpi')
        .controller('subjectsController', subjectsController);

    subjectsController.$inject = ['$scope', 'Subject', 'orderByFilter', '$route'];
    function subjectsController($scope, Subject, orderBy, $route) {

        $scope.subjects = Subject.query();

        $scope.propertyName = 'id';
        $scope.reverse = true;

        $scope.sortBy = function (propertyName) {
            $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
                ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
            $scope.subjects = orderBy($scope.subjects, $scope.propertyName, $scope.reverse);
        };

        $scope.newSubject = new Subject();
        $scope.addSubject = function () {
            console.log($scope.newSubject);
            $scope.newSubject.$save(function () {
                $route.reload();
            })
        }

        $scope.deleteSubject = function (deletedSubject) {
            $scope.deletedSubject = deletedSubject;
            $scope.deletedSubject.$remove({ id: $scope.deletedSubject.id }, function () {
                $route.reload();
            })
        }

        $scope.showEditForm = function (editSubject) {
            setTimeout(function () {
                Materialize.updateTextFields();
            }, 200)
            $scope.editSubject = editSubject;
            $scope.editedSubjectName = editSubject.name;
            $scope.editedSubject = Subject.get({ id: $scope.editSubject.id });

            $scope.editSubject = function () {
                $scope.editedSubject.$save(function () {
                    $route.reload();
                })
            }
        }

    }

})();
