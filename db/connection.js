const mongoose = require("mongoose");
const Article = require("../models/article");

module.exports = mongoose.connect(
    "mongodb+srv://Alexandr:12345@cluster0.2ixnd.mongodb.net/carBnB?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

// const auto = new Article({
//   nameAuto: "bugatti",
//   transmission: "auto",
//   yearAuto: 2021,
//   mileage: "5000",
//   isActive: true,
//   city: "Moscow",
//   carOwner: "60004818eea1f1774b452abf",
// }).save();