"use strict";

app.factory("ConfirmationFactory", function() {

    let confirmationMessage = "";

    let setConfirmationMessage = function(message) {
        confirmationMessage = message;
    };

    let getConfirmationMessage = function() {
        return confirmationMessage;
    };

    return {
        setConfirmationMessage,
        getConfirmationMessage
    };
});