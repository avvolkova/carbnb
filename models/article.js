const mongoose =require('mongoose');
 
const ArticleSchema = new mongoose.Schema({
  nameAuto:{
    type:String,
    required:true,
  },
  img: {
    type: String,
  },
  carOwner: {
    type: mongoose.Schema.Types.ObjectId, 
    required: true,
    ref:"User",
  },
  transmission: {
    type: String, 
    // required: true,
  },
  yearAuto:{
  type:Number,
  required:true,
  },
  mileage:{
  type:Number
  },
  isActive: {
    type: Boolean,
  },
});

module.exports = mongoose.model('Article', ArticleSchema);

// 1. Название авто
// 2. Фотографии от владельцев
// 3. Ссылка на владельца авто
// 4. Трансмиссия
// 5. Год производства
// 6. Пробег
