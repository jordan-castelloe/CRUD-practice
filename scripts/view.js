'use strict';

const $ = require("jquery");

module.exports.printTrips = function(tripObject){
    for (let trip in tripObject){
        $("#view-all-trips-container").append(`<h3 id = "trip-name">${tripObject[trip].name}</h3>`).append(`<p id = "trip-description">${tripObject[trip].description}</p>`);
    }

};