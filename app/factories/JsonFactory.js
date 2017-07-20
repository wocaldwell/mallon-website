"use strict";

app.factory("JsonFactory", function($q, $http) {

    let getJsonData = function(jsonFile){
        return $http.get(jsonFile)
        .then(function(result){
            let returnedData = result.data;
            return returnedData;
        });
    };

    return {
        getJsonData
    };
});