"use strict";

// defining app (remember to assign '"app": true' in your Gruntfile.js in grunt.initConfig under 'Globals"')
let app = angular.module("MelissaMallon", ["ngRoute"]);

// displaying different routing available with which partial and controller assigned to them
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    })
    .when("/portfolio", {
        templateUrl: "partials/portfolio.html",
        controller: "PortfolioCtrl"
    })
    .when("/publications", {
        templateUrl: "partials/publications.html",
        controller: "PublicationsCtrl"
    }).when("/contact-me", {
        templateUrl: "partials/contact-me.html",
        controller: "ContactMeCtrl"
    });
});
