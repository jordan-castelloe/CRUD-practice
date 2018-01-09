'use strict';
const $ = require("jquery");
//create
module.exports.createNewTrip = function (tripObject) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://fir-7e21a.firebaseio.com/trips.json",
            method: "POST",
            data: JSON.stringify(tripObject)
        })
            .done(tripObject => {
                resolve(tripObject);
            })
            .fail(error => {
                console.log("uh-oh", error.statusText);
                reject(error);
            });
    });

 };

// read
module.exports.getAllTrips = function () {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "https://fir-7e21a.firebaseio.com/trips.json"
        })
            .done(trips => {
                resolve(trips);
            })
            .fail(error => {
                console.log("uh-oh", error.statusText);
                reject(error);
            });
    });
};

// update
module.exports.updateTrip = function(tripID, description){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://fir-7e21a.firebaseio.com/trips/${tripID}.json`,
            method: "PATCH",
            data: JSON.stringify({ description })
        })
            .done(data => {
                resolve(data);
            })
            .fail(error => {
                console.log("uh-oh", error.statusText);
                reject(error);
            });
    });

};

// delete

module.exports.deleteTrip = function(tripID){
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `https://fir-7e21a.firebaseio.com/trips/${tripID}.json`,
            method: "DELETE"
        })
            .done(data => {
                resolve(data);
            })
            .fail(error => {
                console.log("uh-oh", error.statusText);
                reject(error);
            });
    });
};

