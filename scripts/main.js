'use strict';

const $ = require("jquery");
const factory = require("./factory");
const view = require("./view");

factory.getAllTrips()
    .then((trips) => {
        console.log(trips);
        view.printTrips(trips);
    })
    .catch(err => {
        console.log("oops", err);
    });

