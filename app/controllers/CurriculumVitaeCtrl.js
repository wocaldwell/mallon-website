"use strict";

app.controller("CurriculumVitaeCtrl", function($scope, $window, $location, $anchorScroll, JsonFactory){

    // make this link appear "active"
    $("#portfolio-link").removeClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#home-link").removeClass("active");
    $("#cv-link").addClass("active");

    $scope.cvCatagories = ["Service", "Research Interests", "Education", "Professional Experience"];

    // compensate for fixed navs
    $anchorScroll.yOffset = 100;

    // make links go to selected section of page on click
    $scope.goToHash = function(hashId){
        $anchorScroll(hashId);
    };


    $(document).ready(function(){
        $('.parallax').parallax();
        $('.collapsible').collapsible();
    });

    // get cv data stored in local json
    JsonFactory.getJsonData("assets/jsons/cv.json")
    .then(function(returnedData){
        $scope.professionalExperience = returnedData.professionalExperience;
        $scope.education = returnedData.education;
        $scope.researchInterests = returnedData.researchInterests;
        $scope.service = returnedData.service;
    });
});