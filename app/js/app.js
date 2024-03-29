'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/jvm', {templateUrl: 'partials/jvm-view.html', controller: JvmCtrl});
    $routeProvider.otherwise({redirectTo: '/jvm'});
  }]);
