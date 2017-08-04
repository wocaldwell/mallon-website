"use strict";

app.controller("FooterCtrl", function($scope, JsonFactory){

    // get year for copyright staement
    let currentDate = new Date();
    $scope.currentYear = currentDate.getFullYear();

    // get social media data stored in local json
    JsonFactory.getJsonData("assets/jsons/socialMedia.json")
    .then(function(returnedData){
        $scope.socialMediaLinks = returnedData.socialAccounts;
    });
});