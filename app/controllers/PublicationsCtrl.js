"use strict";

app.controller("PublicationsCtrl", function($scope, JsonFactory, AnchorScrollFactory){

    // make this link appear "active"
    $("#portfolio-link").removeClass("active");
    $("#publications-link").addClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");

    $scope.defaultBookImagePath = "assets/images/open-book.jpg";

    // compensate scroll-links for fixed navs
    AnchorScrollFactory.setHeightOffset(100);

    // make links go to selected section of page on click
    $scope.goToSection = function(section){
        AnchorScrollFactory.scrollToSection(section);
    };

    $(document).ready(function(){
        $('.parallax').parallax();
        $(".dropdown-button").dropdown();
    });

    JsonFactory.getJsonData("assets/jsons/publications.json")
    .then(function(returnedData){
        $scope.publications = returnedData;
    });
});