"use strict";

app.controller("CurriculumVitaeCtrl", function($scope, $window, $location){

    // make this link appear "active"
    $("#portfolio-link").removeClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#home-link").removeClass("active");
    $("#cv-link").addClass("active");


    $(document).ready(function(){
        $('.parallax').parallax();
    });
});