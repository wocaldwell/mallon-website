"use strict";

app.controller("ContactMeCtrl", function($scope, $window, $location, $http){

    const contactFormURL =  "http://localhost:8000";

    $("#portfolio-link").removeClass("active");
    $("#publications-link").removeClass("active");
    $("#presentations-link").removeClass("active");
    $("#cv-link").removeClass("active");
    $("#home-link").removeClass("active");

    $scope.contactForm = {
        firstName: '',
        lastName: '',
        sender: '',
        subject: '',
        message: ''
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
            $window.location.href = "#!/confirmation";
        }, function errorCallback(response){
            console.log("somethings gone wrong");
        });
    };
});