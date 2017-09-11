"use strict";

app.controller("ContactMeCtrl", function($scope, $window, $location, $http, contactFormURL){

    $("#portfolio-link").removeClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");

    $scope.contactForm = {
        firstName: 'Bob',
        lastName: 'Oblaw',
        sender: 'me@me.com',
        subject: 'Hello',
        message: 'Nice try, dude!'
    };

    $(document).ready(function(){
        $('.parallax').parallax();
    });

    $scope.sendFormToServer = function() {
        console.log("hi");
        $window.location.href = "#!/confirmation";
        return $http({
            url: `${contactFormURL}/email/`,
            method: "POST",

            data: {
                "first_name": $scope.contactForm.firstName,
                "last_name": $scope.contactForm.lastName,
                "from_email": $scope.contactForm.sender,
                "subject": $scope.contactForm.subject,
                "message": $scope.contactForm.message
            }
        });
    };
});