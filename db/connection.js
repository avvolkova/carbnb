 const mongoose = require('mongoose');
 const Article = require('../models/article');

 module.exports = mongoose.connect('mongodb+srv://Alexandr:12345@cluster0.2ixnd.mongodb.net/carBnB?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useFindAndModify: true,
     useUnifiedTopology: true,
     useFindAndModify: false
 });

 //  const auto = new Article({
 //      nameAuto: 'mazda',
 //      transmission: 'gg',
 //      yearAuto: 2012,
 //      mileage: '340000',
 //      isActive: true,
 //      city: "Moscow"
 //  }).save(
