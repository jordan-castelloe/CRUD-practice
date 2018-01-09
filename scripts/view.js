'use strict';

const $ = require("jquery");

module.exports.printTrips = function(tripObject){
    for (let trip in tripObject){
        $("#view-all-trips-container").append(`<h3 class = "trip-name">${tripObject[trip].name}</h3>`).append(`<p class = "trip-description" id = "trip-description-${tripObject[trip].id}">${tripObject[trip].description}</p><button class = "edit" id = "${tripObject[trip].id}">Edit</button><button class = "delete" id = "${tripObject[trip].id}">Delete</button>`);
    }

};

module.exports.clearTrips = function(){
    $("#view-all-trips-container").text("");
};