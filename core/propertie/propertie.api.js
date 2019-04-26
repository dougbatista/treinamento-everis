const propertieDAO = require('./propertie.dao');

const newPropertie = async (req, res) => {
    let body = req.body;
    try {
        let propCreated =  await propertieDAO.newPropertieDAO(body);
        res.status(201).json(propCreated);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {newPropertie};