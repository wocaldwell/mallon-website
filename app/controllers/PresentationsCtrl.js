"use strict";

app.controller("PresentationsCtrl", function($scope, JsonFactory){

    // make this link appear "active"
    $("#portfolio-link").removeClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").addClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");

    $(document).ready(function(){
        $('.parallax').parallax();
    });

    JsonFactory.getJsonData("assets/jsons/presentations.json")
    .then(function(returnedData){
        $scope.presentations = returnedData;
    });

});