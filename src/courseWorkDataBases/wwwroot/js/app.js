!function(){"use strict";angular.module("scheduleKpi",["ngAnimate","ngRoute","groupsService"]),angular.module("scheduleKpi").config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"partials/main.html",controller:"groupsController"}).when("/groups",{templateUrl:"partials/groups.html",controller:"groupsController"}).when("/groups/add",{templateUrl:"partials/add.html",controller:"groupsAddController"}).when("/groups/edit/:id",{templateUrl:"partials/edit.html",controller:"groupsEditController"}).when("/groups/delete/:id",{templateUrl:"partials/delete.html",controller:"groupsDeleteController"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]).directive("navbarkpi",function(){return{templateUrl:"partials/navbar.html"}})}(),function(){"use strict";function a(a,b,c){a.groups=b.query(),a.propertyName="id",a.reverse=!0,a.sortBy=function(b){a.reverse=null!==b&&a.propertyName===b&&!a.reverse,a.propertyName=b,a.groups=c(a.groups,a.propertyName,a.reverse)}}function b(a,b,c){a.group=new b,a.addGroup=function(){a.group.$save(function(){c.path("/")})}}function c(a,b,c,d){a.group=b.get({id:d.id}),a.editGroup=function(){a.group.$save(function(){c.path("/")})}}function d(a,b,c,d){a.group=b.get({id:d.id}),a.deleteGroup=function(){a.group.$remove({id:a.group.id},function(){c.path("/")})}}angular.module("scheduleKpi").controller("groupsController",a).controller("groupsAddController",b).controller("groupsEditController",c).controller("groupsDeleteController",d),a.$inject=["$scope","Group","orderByFilter"],b.$inject=["$scope","Group","$location"],c.$inject=["$scope","Group","$location","$routeParams"],d.$inject=["$scope","Group","$location","$routeParams"]}(),function(){"use strict";function a(a){return a("/api/groups/:id")}angular.module("groupsService",["ngResource"]).factory("Group",a),a.$inject=["$resource"]}();