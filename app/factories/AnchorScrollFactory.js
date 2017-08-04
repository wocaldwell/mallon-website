"use strict";

app.factory("AnchorScrollFactory", function($anchorScroll) {

    let scrollToSection = function(section){
        console.log("I'm scrolling to ", section);
        $anchorScroll(section);
    };

    let setHeightOffset = function(pixels){
        $anchorScroll.yOffset = pixels;
    };

    return {
        scrollToSection,
        setHeightOffset
    };
});