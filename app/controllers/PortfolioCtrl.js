"use strict";

app.controller("PortfolioCtrl", function($scope, $window, $location, $anchorScroll, JsonFactory){

    // make this link appear "active"
    $("#portfolio-link").addClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");


    $(document).ready(function(){
        $('.parallax').parallax();
        $('.collapsible').collapsible();
        // $('ul.tabs').tabs();
    });

    // for possible nav
    // $scope.scrollTo = function(id) {
    //     $location.hash(id);
    //     $anchorScroll();
    // };

    JsonFactory.getJsonData("assets/jsons/embedded.json")
    .then(function(returnedData){
        $scope.vandyVideos = returnedData.vandy;
        $scope.wsuVideos = returnedData.wsu;
        $scope.prezis = returnedData.prezi;
    });

});