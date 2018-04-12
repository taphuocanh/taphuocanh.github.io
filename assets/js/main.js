var app = angular.module('app', ["ngRoute", "ui.bootstrap", "ngSanitize", "ui.sortable"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl :  TEMPLATEDIR + "pages/home.html",
      controller: "homeCtrl"
    });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});
