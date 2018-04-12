var app = angular.module('app', ["ngRoute", "ui.bootstrap", "ngSanitize", "ui.sortable"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl :  TEMPLATEDIR + "pages/home.html",
      controller: "homeCtrl"
    });
    
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
});

const TOKEN = '434cc0448616d63d2d79d8774c010582adf7d4ef';
const user = 'taphuocanh';
const rootrepos = 'nodejs.taphuocanh.com';
const rootdir = 'Content-Blog';
const rootsha = '259f3fe6cf92c7e7afcdd8da4c0b6d9c26bd4ddf'; 