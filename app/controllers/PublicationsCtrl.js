"use strict";

app.controller("PublicationsCtrl", function($scope, JsonFactory){

    // make this link appear "active"
    $("#portfolio-link").removeClass("active");
    $("#publications-link").addClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");

    $scope.defaultBookImagePath = "assets/images/open-book.jpg";

    $(document).ready(function(){
        $('.parallax').parallax();
    });

    JsonFactory.getJsonData("assets/jsons/publications.json")
    .then(function(returnedData){
        $scope.publications = returnedData;
    });
});