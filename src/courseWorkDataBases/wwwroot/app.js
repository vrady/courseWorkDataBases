!function(){"use strict";angular.module("scheduleKpi",["groupsService"])}(),function(){"use strict";function a(a,b){a.groups=b.query()}angular.module("scheduleKpi").controller("groupsController",a),a.$inject=["$scope","Groups"]}(),function(){"use strict";var a=angular.module("groupsService",["ngResource"]);a.factory("Groups",["$resource",function(a){return a("/api/groups/",{},{query:{method:"GET",params:{},isArray:!0}})}])}();