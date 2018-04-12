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

app.controller('sidebarCtrl', function($scope, $location) {
  
});
