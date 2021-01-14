const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  img: {
    type: String,
  },
  registration: {
    type: Date,
    // required: true,
  },
  isCarOwner: {
    type: Boolean,
  },
});

module.exports = mongoose.model("User", UserSchema);

// 1. Имя 
// 2. Фотография
// 3. Дата регистрации
// 4. Является ли владельцем(если да,то)

// 5. Ссылка на объявление пользователя
// 6. Ссылка на отзывы
