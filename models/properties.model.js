const mongoose = require('mongoose')
    ,Schema = mongoose.Schema;

const propertieSchema = new Schema({
    city: String,
    bathrooms: Number,
    bedrooms: {type: Number, required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('Propertie', propertieSchema);