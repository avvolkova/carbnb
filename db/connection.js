 const mongoose = require('mongoose');
 const Article = require("../models/article");
const User = require("../models/user");


 mongoose.connect('mongodb+srv://Alexandr:12345@cluster0.2ixnd.mongodb.net/carBnB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


 
 const user = new User ({name:'VANYA' })
 const user2= new User({name:"ARTEM!!!!!!"})
 user.save()
 user2.save()
// const diet1 = new Diet({ name: "Медоедская" });
