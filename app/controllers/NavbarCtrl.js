"use strict";

app.controller("NavbarCtrl", function($scope, $window, $location){

    $(document).ready(function(){
        $(".button-collapse").sideNav();
    });

    // commuter essentials link click
    $scope.goToEssentials = function() {
        $window.location.href = "#!/";
    };
});