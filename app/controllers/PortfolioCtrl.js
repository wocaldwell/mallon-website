"use strict";

app.controller("PortfolioCtrl", function($scope, $window, $location, JsonFactory, AnchorScrollFactory){

    // make this link appear "active"
    $("#portfolio-link").addClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");

    // compensate scroll-links for fixed navs
    AnchorScrollFactory.setHeightOffset(100);

    // make links go to selected section of page on click
    $scope.goToSection = function(section){
        AnchorScrollFactory.scrollToSection(section);
    };

    $(document).ready(function(){
        $('.parallax').parallax();
        $('.collapsible').collapsible();
    });


    JsonFactory.getJsonData("assets/jsons/embedded.json")
    .then(function(returnedData){
        $scope.vandyVideos = returnedData.vandy;
        $scope.wsuVideos = returnedData.wsu;
        $scope.prezis = returnedData.prezi;
    });

});