const Propertie = require('../../models/properties.model');

const newPropertieDAO = async (body) => {
    
    let newPropertie = new Propertie({
        city: body.city,
        bathrooms: body.bathrooms,
        bedrooms: body.bedrooms,
        price: body.price
    });

    return newPropertie.save();
}

module.exports = { newPropertieDAO }