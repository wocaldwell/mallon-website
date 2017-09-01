"use strict";

// defining app (remember to assign '"app": true' in your Gruntfile.js in grunt.initConfig under 'Globals"')
let app = angular.module("MelissaMallon", ["ngRoute"])
  .constant('contactFormURL', "http://localhost:8000");

app.config(function($routeProvider, $sceDelegateProvider) {
    // displaying different routing available with which partial and controller assigned to them
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
    })
    .when("/presentations", {
        templateUrl: "partials/presentations.html",
        controller: "PresentationsCtrl"
    })
    .when("/contact-me", {
        templateUrl: "partials/contact-me.html",
        controller: "ContactMeCtrl"
    })
    .when("/curriculumvitae", {
        templateUrl: "partials/curriculumvitae.html",
        controller: "CurriculumVitaeCtrl"
    });

    $sceDelegateProvider.resourceUrlWhitelist([
       // Allow same origin resource loads.
       "self",
       // Allow loading from outside domains.
       "https://www.youtube.com/**",
       "https://prezi.com/**",
       "http://libresources.wichita.edu/**"
   ]);
});
