const mongoose = require('mongoose')
    ,Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    company: String,
    salary: Number,
    userName: String,
    password: String,
    address: {
        city: String,
        number: Number,
        neighborhood: String,
        street: String,
        about: { type: Schema.Types.ObjectId, ref: 'Propertie' }
    },
});

module.exports = mongoose.model('User', userSchema);