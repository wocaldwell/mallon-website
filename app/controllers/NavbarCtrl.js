"use strict";

app.controller("NavbarCtrl", function($scope, $window, $location){

    $(document).ready(function(){
        $(".button-collapse").sideNav();
    });

    $scope.hideSideNav = function(){
        $('.button-collapse').sideNav('hide');
    };

});