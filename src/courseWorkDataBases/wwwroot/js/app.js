!function(){"use strict";angular.module("scheduleKpi",["ngAnimate","ngRoute","groupsService","specialityService","teachersService","plansService","subjectsService","audiencesService","scheduleService"]),angular.module("scheduleKpi").config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"partials/main.html",controller:"mainController"}).when("/groups",{templateUrl:"partials/groups.html",controller:"groupsController"}).when("/specialities",{templateUrl:"partials/specialities.html",controller:"specialityController"}).when("/teachers",{templateUrl:"partials/teachers.html",controller:"teachersController"}).when("/subjects",{templateUrl:"partials/subjects.html",controller:"subjectsController"}).when("/audiences",{templateUrl:"partials/audiences.html",controller:"audiencesController"}).when("/plans/:id",{templateUrl:"partials/plan.html",controller:"plansController"}).when("/login",{templateUrl:"partials/login.html",controller:"adminsController"}).when("/schedules/:id",{templateUrl:"partials/schedule.html",controller:"scheduleController"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]).directive("navbar",function(){return{templateUrl:"partials/navbar.html"}})}(),function(){"use strict";function a(a,b,c,d){a.audiences=b.query(),a.propertyName="number",a.reverse=!0,a.sortBy=function(b){a.reverse=null!==b&&a.propertyName===b&&!a.reverse,a.propertyName=b,a.audiences=c(a.audiences,a.propertyName,a.reverse)},a.newAudience=new b,a.addAudience=function(){console.log(a.newAudience),a.newAudience.$save(function(){d.reload()})},a.deleteAudience=function(b){a.deletedAudience=b,a.deletedAudience.$remove({id:a.deletedAudience.id},function(){d.reload()})},a.showEditForm=function(c){setTimeout(function(){Materialize.updateTextFields()},200),a.editAudience=c,a.editedAudienceName=c.name,a.editedAudience=b.get({id:a.editAudience.id}),a.editAudience=function(){a.editedAudience.$save(function(){d.reload()})}}}angular.module("scheduleKpi").controller("audiencesController",a),a.$inject=["$scope","Audience","orderByFilter","$route"]}(),function(){"use strict";function a(a,b,c,d,e){a.groups=b.query(),a.specialities=c.query(),a.propertyName="id",a.reverse=!0,a.sortBy=function(b){a.reverse=null!==b&&a.propertyName===b&&!a.reverse,a.propertyName=b,a.groups=d(a.groups,a.propertyName,a.reverse)},a.newGroup=new b,a.addGroup=function(){a.newGroup.$save(function(){e.reload()})},a.deleteGroup=function(b){a.deletedGroup=b,a.deletedGroup.$remove({id:a.deletedGroup.id},function(){e.reload()})},a.showEditForm=function(c){setTimeout(function(){Materialize.updateTextFields()},200),a.editGroup=c,a.editedGroupName=c.name,a.editedGroup=b.get({id:a.editGroup.id}),a.editGroup=function(){console.log(a.editedGroup),a.editedGroup.$save(function(){e.reload()})}}}angular.module("scheduleKpi").controller("groupsController",a),a.$inject=["$scope","Group","Speciality","orderByFilter","$route"]}(),function(){"use strict";function a(a,b,c,d,e,f){a.groups=c.query()}angular.module("scheduleKpi").controller("mainController",a),a.$inject=["$scope","Schedule","Group","orderByFilter","$route","$routeParams"]}(),function(){"use strict";function a(a,b,c,d,e,f,g,h){a.plan=b.query({id:e.id}),a.subjects=f.query(),a.teachers=g.query(),a.specialityName=h.get({id:e.id}),a.propertyName="subject.name",a.reverse=!0,a.sortBy=function(b){a.reverse=null!==b&&a.propertyName===b&&!a.reverse,a.propertyName=b,a.plan=c(a.plan,a.propertyName,a.reverse)},a.deleteSubject=function(b){a.deletedSubject=b,a.deletedSubject.$remove({id:a.deletedSubject.id},function(){d.reload()})},a.newSubject=new b,a.addSubject=function(){a.newSubject.specialityId=e.id,a.newSubject.$save(function(){d.reload()})},a.showEditForm=function(b){setTimeout(function(){Materialize.updateTextFields()},200),a.editedSubject=a.plan.find(function(a){return a.id==b.id}),console.log(a.editedSubject),a.editSubject=function(){a.editedSubject.$save(function(){d.reload()})}}}angular.module("scheduleKpi").controller("plansController",a),a.$inject=["$scope","Plan","orderByFilter","$route","$routeParams","Subject","Teacher","Speciality"]}(),function(){"use strict";function a(a,b,c,d,e,f,g,h,i){a.group=c.get({id:i.id}),a.days=b.query({id:i.id}),a.groups=c.query(),a.subjects=e.query(),a.teachers=d.query(),a.audiences=f.query(),console.log(a.days),a.newLesson=new b,a.showEditLesson=function(b,c,d){console.log(b,c),a.newLesson.lessonNumber=b,a.newLesson.day=c,a.newLesson.groupId=i.id,a.newLesson.id=d,a.editLesson=function(){console.log(a.newLesson),a.newLesson.$save(function(){h.reload()})}},a.deleteLesson=function(b,c){a.deletedLesson=b,a.delRow=c,console.log(a.delRow),a.delRow.$remove({id:a.deletedLesson.scheduleId},function(){h.reload()})}}angular.module("scheduleKpi").controller("scheduleController",a),a.$inject=["$scope","Schedule","Group","Teacher","Subject","Audience","orderByFilter","$route","$routeParams"]}(),function(){"use strict";function a(a,b,c,d){a.specialities=b.query(),a.propertyName="id",a.reverse=!0,a.sortBy=function(b){a.reverse=null!==b&&a.propertyName===b&&!a.reverse,a.propertyName=b,a.specialities=c(a.specialities,a.propertyName,a.reverse)},a.deleteSpeciality=function(b){a.deletedSpeciality=b,a.deletedSpeciality.$remove({id:a.deletedSpeciality.id},function(){d.reload()})},a.newSpeciality=new b,a.addSpeciality=function(){console.log(a.newSpeciality),a.newSpeciality.$save(function(){d.reload()})},a.showEditForm=function(c){setTimeout(function(){Materialize.updateTextFields()},200),a.editSpeciality=c,a.editedSpecialityName=c.name,a.editedSpeciality=b.get({id:a.editSpeciality.id}),a.editSpeciality=function(){a.editedSpeciality.$save(function(){d.reload()})}}}angular.module("scheduleKpi").controller("specialityController",a),a.$inject=["$scope","Speciality","orderByFilter","$route"]}(),function(){"use strict";function a(a,b,c,d){a.subjects=b.query(),a.propertyName="id",a.reverse=!0,a.sortBy=function(b){a.reverse=null!==b&&a.propertyName===b&&!a.reverse,a.propertyName=b,a.subjects=c(a.subjects,a.propertyName,a.reverse)},a.newSubject=new b,a.addSubject=function(){console.log(a.newSubject),a.newSubject.$save(function(){d.reload()})},a.deleteSubject=function(b){a.deletedSubject=b,a.deletedSubject.$remove({id:a.deletedSubject.id},function(){d.reload()})},a.showEditForm=function(c){setTimeout(function(){Materialize.updateTextFields()},200),a.editSubject=c,a.editedSubjectName=c.name,a.editedSubject=b.get({id:a.editSubject.id}),a.editSubject=function(){a.editedSubject.$save(function(){d.reload()})}}}angular.module("scheduleKpi").controller("subjectsController",a),a.$inject=["$scope","Subject","orderByFilter","$route"]}(),function(){"use strict";function a(a,b,c,d){a.teachers=b.query(),a.propertyName="id",a.reverse=!0,a.sortBy=function(b){a.reverse=null!==b&&a.propertyName===b&&!a.reverse,a.propertyName=b,a.teachers=c(a.teachers,a.propertyName,a.reverse)},a.newTeacher=new b,a.addTeacher=function(){console.log(a.newTeacher),a.newTeacher.$save(function(){d.reload()})},a.deleteTeacher=function(b){a.deletedTeacher=b,a.deletedTeacher.$remove({id:a.deletedTeacher.id},function(){d.reload()})},a.showEditForm=function(c){setTimeout(function(){Materialize.updateTextFields()},200),a.editTeacher=c,a.editedTeacherName=c.fullName,a.editedTeacher=b.get({id:a.editTeacher.id}),a.editTeacher=function(){a.editedTeacher.$save(function(){d.reload()})}}}angular.module("scheduleKpi").controller("teachersController",a),a.$inject=["$scope","Teacher","orderByFilter","$route"]}(),function(){"use strict";function a(a){return a("/api/audiences/:id")}angular.module("audiencesService",["ngResource"]).factory("Audience",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a){return a("/api/groups/:id")}angular.module("groupsService",["ngResource"]).factory("Group",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a){return a("/api/plans/:id")}angular.module("plansService",["ngResource"]).factory("Plan",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a){return a("/api/schedules/:id")}angular.module("scheduleService",["ngResource"]).factory("Schedule",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a){return a("/api/specialities/:id")}angular.module("specialityService",["ngResource"]).factory("Speciality",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a){return a("/api/subjects/:id")}angular.module("subjectsService",["ngResource"]).factory("Subject",a),a.$inject=["$resource"]}(),function(){"use strict";function a(a){return a("/api/teachers/:id")}angular.module("teachersService",["ngResource"]).factory("Teacher",a),a.$inject=["$resource"]}();