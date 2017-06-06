"use strict";

app.controller("PortfolioCtrl", function($scope, $window, $location){

    // make this link appear "active"
    $("#portfolio-link").addClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");


    $(document).ready(function(){
        $('.parallax').parallax();
    });

});