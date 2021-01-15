const mongoose = require("mongoose");
const Article = require("../models/article");

module.exports = mongoose.connect(
  "mongodb+srv://Alexandr:12345@cluster0.2ixnd.mongodb.net/carBnB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  }
);

// const auto = new Article({
//   carName: "Lada Priora",
//   transmission: "auto",
//   productionYear: 2021,
//   mileage: "5000",
//   isActive: true,
//   city: "Махачкала",
//   carOwner: "60004818eea1f1774b452abf",
//   busyFrom: ["13/01/2021", "23/01/2021"],
//   busyUntil: ["21/01/2021", "25/01/2021"],
//   img: "https://pokatim.ru/uploads/posts/2020-06/1591883319_lada-priora.jpg",
// }).save();
