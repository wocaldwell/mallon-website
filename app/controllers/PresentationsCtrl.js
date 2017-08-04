"use strict";

app.controller("PresentationsCtrl", function($scope, JsonFactory, AnchorScrollFactory){

    // make this link appear "active"
    $("#portfolio-link").removeClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").addClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");

    $scope.pageCatagories = ["Courses & Workshops","Featured Speaker"];

    AnchorScrollFactory.setHeightOffset(100);

    // make links go to selected section of page on click
    $scope.goToSection = function(section){
        AnchorScrollFactory.scrollToSection(section);
    };

    $(document).ready(function(){
        $('.parallax').parallax();
        $(".dropdown-button").dropdown();
    });

    JsonFactory.getJsonData("assets/jsons/presentations.json")
    .then(function(returnedData){
        $scope.presentations = returnedData;
    });

});