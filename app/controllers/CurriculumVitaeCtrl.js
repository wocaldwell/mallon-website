"use strict";

app.controller("CurriculumVitaeCtrl", function($scope, $window, $location, JsonFactory){

    // make this link appear "active"
    $("#portfolio-link").removeClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#home-link").removeClass("active");
    $("#cv-link").addClass("active");


    $(document).ready(function(){
        $('.parallax').parallax();
    });

    JsonFactory.getJsonData("assets/jsons/cv.json")
    .then(function(returnedData){
        $scope.professionalExperience = returnedData.professionalExperience;
        $scope.education = returnedData.education;
        $scope.researchInterests = returnedData.researchInterests;
        $scope.service = returnedData.service;
        console.log($scope.service);
    });
});