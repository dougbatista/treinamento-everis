const express = require('express');
const router = express.Router();
const propertieAPI = require('./propertie.api');

router.route('/new_propertie')
    .post(propertieAPI.newPropertie);

module.exports = router;