"use strict";

app.controller("PublicationsCtrl", function($scope, $window, $location){

    // make this link appear "active"
    $("#portfolio-link").removeClass("active");
    $("#publications-link").addClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");


    $(document).ready(function(){
        $('.parallax').parallax();
    });
});