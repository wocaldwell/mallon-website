"use strict";

app.controller("ContactMeCtrl", function($scope, $window, $location, $http, contactFormURL){

    // make this link appear "active"
    // $("#portfolio-link").removeClass("active");
    // $("#publications-link").removeClass("active");
    // $("#presentations-link").removeClass("active");
    // $("#cv-link").removeClass("active");
    // $("#home-link").addClass("active");

    $scope.contactForm = {
        firstName: '',
        lastName: '',
        sender: 'me@me.com',
        subject: 'Hello',
        message: 'Nice try, dude!'
    };

    $(document).ready(function(){
        $('.parallax').parallax();
    });

    $scope.sendFormToServer = function() {
        console.log("hi");
        return $http({
            url: `${contactFormURL}/email/`,
            method: "POST",

            data: {
                "csrfmiddlewaretoken": "{% csrf_token %}",
                "from_email": $scope.contactForm.sender,
                "subject": $scope.contactForm.subject,
                "message": $scope.contactForm.message
            }
        });
    };
});