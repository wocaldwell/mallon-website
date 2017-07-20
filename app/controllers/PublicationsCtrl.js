"use strict";

app.controller("PublicationsCtrl", function($scope, JsonFactory){
    console.log('is this working?');
    // make this link appear "active"
    $("#portfolio-link").removeClass("active");
    $("#publications-link").addClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");


    $(document).ready(function(){
        $('.parallax').parallax();
    });

    JsonFactory.getJsonData("publications.json")
    .then(function(returnedData){
        $scope.publications = returnedData;
    });
});