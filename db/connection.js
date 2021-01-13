const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/carbnb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});