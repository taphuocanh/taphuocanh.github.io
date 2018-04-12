'use strict';

app.controller('homeCtrl', function($scope, $location) {
    //console.log($location.path());

});

// app.controller('pdftoolCtrl', function ($scope) {
// });

app.controller('navbarCtrl', function($scope, $location) {
    $scope.$watch(function(){
        return $location.path();
    }, 
    function(value){
        let items = $('nav.navbar ul.nav.navbar-nav>li>a');  
        items.each(function(k,e) {
            $($('nav.navbar ul.nav.navbar-nav>li')[k]).removeClass("active");
            if ("/" + $(e).attr("href") == value) {
                $($('nav.navbar ul.nav.navbar-nav>li')[k]).addClass("active");
            }
            if (value == "/") {
                $($('nav.navbar ul.nav.navbar-nav>li')[0]).addClass("active");
            }
        });
    });
});

app.controller('sidebarCtrl', function($scope, $http) {
    $http({
        method : "GET",
        headers : {
            Authorization : "token 434cc0448616d63d2d79d8774c010582adf7d4ef"
        },
        url : "https://api.github.com/repos/" + user + "/" + rootrepos + "/git/trees/" + rootsha
    }).then(function mySuccess(response) {
        console.log(response.data);
    }, function myError(response) {
        console.log(response.statusText);
    });
});
