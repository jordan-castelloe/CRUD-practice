'use strict';

const $ = require("jquery");
const factory = require("./factory");
const view = require("./view");
const tripBuilder = require("./createTrip");

function updateTrips(){
    factory.getAllTrips()
        .then((trips) => {
            let keys = Object.keys(trips);
            keys.forEach(key => {
                trips[key].id = key;
                return trips;
            });
            console.log("these should have id assigned", trips);
            view.printTrips(trips);
        })
        .catch(err => {
            console.log("oops", err);
        });
}


$("#save-button").click(function(){
    let tripObject = tripBuilder.createTrip();
    factory.createNewTrip(tripObject)
        .then((trips) => {
            view.clearTrips();
            updateTrips();
        })
        .catch(err => {
            console.log("oops", err);
        });
    
});

$("body").on("click", ".edit", function(){
    let tripId = $(this).attr("id");
    let textarea = $(`<input type = "text" id = "edit-description-${tripId}" placeholder = "edit your description"><button class = "save-edits" id = "${tripId}">Save</button>`);
    $(`#trip-description-${tripId}`).replaceWith(textarea);
});

$("body").on("click", ".save-edits", function(){
    let tripId = $(this).attr("id");
    let newDescription = $(`#edit-description-${tripId}`).val();
    factory.updateTrip(tripId, newDescription)
        .then((trips) => {
            view.clearTrips();
            updateTrips();
        })
        .catch(err => {
            console.log("oops", err);
        });
});



$("body").on("click", ".delete", function(){
    let tripId = $(this).attr("id");
    factory.deleteTrip(tripId)
        .then((trips) => {
            view.clearTrips();
            updateTrips();
        })
        .catch(err => {
            console.log("oops", err);
        });

});

updateTrips();

