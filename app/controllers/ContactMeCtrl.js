"use strict";

app.controller("ContactMeCtrl", function($scope, $window, $location, $http, ConfirmationFactory){

    const contactFormURL =  "http://localhost:8000";

    $("#portfolio-link").removeClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");

    $scope.contactForm = {
        firstName: 'ax',
        lastName: 'zzzz',
        sender: 'me@internet.com',
        subject: 'test',
        message: 'it'
    };

    $(document).ready(function(){
        $('.parallax').parallax();
    });

    $scope.sendFormToServer = function() {
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
        }).then(function successCallback(response) {
            let successMessage = "Thanks for your submission!";
            ConfirmationFactory.setConfirmationMessage(successMessage);
        }, function errorCallback(response){
            let errorMessage = "There was an error submitting your form. Please try again at a later time.";
            ConfirmationFactory.setConfirmationMessage(errorMessage);
        }).then(function() {
            $window.location.href = "#!/confirmation";
        });
    };
});