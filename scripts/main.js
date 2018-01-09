'use strict';

const $ = require("jquery");
const factory = require("./factory");
const view = require("./view");
const tripBuilder = require("./createTrip");

factory.getAllTrips()
    .then((trips) => {
        console.log(trips);
        view.printTrips(trips);
    })
    .catch(err => {
        console.log("oops", err);
    });

$("#save-button").click(function(){
    let tripObject = tripBuilder.createTrip();
    factory.createNewTrip(tripObject);
});