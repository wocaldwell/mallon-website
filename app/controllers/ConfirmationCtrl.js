"use strict";

app.controller("ConfirmationCtrl", function($scope){

    $("#portfolio-link").removeClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");

    $(document).ready(function(){
        $('.parallax').parallax();
    });

});