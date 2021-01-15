const mongoose = require('mongoose');
const user = require('./article');

const ArticleSchema = new mongoose.Schema({
    carName: {
        type: String,
        required: true,
    },
    carImg: {
        type: String,
    },
    carOwner: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "User",
    },
    city: {
        type: String,
    },
    transmission: {
        type: String,
        // required: true,
    },
    productionYear: {
        type: Number,
        required: true,
    },
    mileage: {
        type: String
    },
    isActive: {
        type: Boolean,
    },
    busyFrom: {
        type: Array,
    },
    busyUntil: {
        type: Array,
    }
});

module.exports = mongoose.model('Article', ArticleSchema);

// 1. Название авто
// 2. Фотографии от владельцев
// 3. Ссылка на владельца авто
// 4. Трансмиссия
// 5. Год производства
// 6. Пробег