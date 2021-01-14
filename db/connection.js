 const mongoose = require('mongoose');



 module.exports = mongoose.connect('mongodb+srv://Alexandr:12345@cluster0.2ixnd.mongodb.net/carBnB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


 
