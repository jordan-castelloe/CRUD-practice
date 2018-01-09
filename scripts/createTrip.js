'use strict';

const $ = require("jquery");

module.exports.createTrip = function(){
    let tripName = $("#trip-name").val();
    let tripDescription = $("#trip-description").val();
    let categoryID = "";
    if ($('#itenerary-checkbox').is(':checked')){
        console.log("This is an itenerary");
        categoryID = 1;
    } else if ($('#collection-checkbox').is(':checked')) {
        console.log("This is a collection");
        categoryID = 2;
    }
    let tripObject = {
        name: tripName,
        description: tripDescription,
        category: categoryID,
        places : ["place id", "place id"]
    };
    console.log(tripObject);
    return tripObject;
};