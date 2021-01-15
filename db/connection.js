const mongoose = require("mongoose");
const Article = require("../models/article");

module.exports = mongoose.connect(
    "mongodb+srv://Alexandr:12345@cluster0.2ixnd.mongodb.net/carBnB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    }
);

// const auto = new Article({
//     carName: "mazda",
//     transmission: "auto",
//     productionYear: 1952,
//     mileage: "5000",
//     isActive: true,
//     city: "Moscow",
//     carOwner: "60004818eea1f1774b452abf",
//     busyFrom: ['13/01/2021', '23/01/2021'],
//     busyUntil: ['21/01/2021', '25/01/2021'],
// }).save();