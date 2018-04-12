'use strict';

app.directive('headerTpl', function() {
    return {
        templateUrl: TEMPLATEDIR + 'header.html'
    }
});
app.directive('navbarTpl', function() {
    return {
        templateUrl: TEMPLATEDIR + 'navbar.html',
        controller: 'navbarCtrl'
    }
});
app.directive('sidebarTpl', function() {
    return {
        templateUrl: TEMPLATEDIR + 'sidebar.html',
        controller: 'sidebarCtrl'
    }
});
