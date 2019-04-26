const User = require('../../models/user.model');
const encrypting = require('../../util/encrypt');

const createUserDAO = async (body) => {
    let password = await encrypting.encrypt(body.password);
    let newUser = new User({
        name: body.name,
        company: body.company,
        salary: body.salary,
        userName: body.user,
        password: password,
        address: {
            city: body.city,
            numebr: body.number,
            neighborhood: body.neighborhood,
            street: body.street,
            about: body.propertie_id
        }
    });
    return newUser.save();
}
const readUserDAO = async (id) => {
    return await User.findOne({"_id": id}).populate('address.about').exec();
}
const updateUserDAO = async (id, body) => {
    return await User.findByIdAndUpdate(id, body)
}
const deleteUserDAO = async (id) => {
    return await User.deleteOne({"_id": id});
}
const listUsersDAO = async () => {
    return await User.find();
}

module.exports = {
    createUserDAO,
    readUserDAO,
    updateUserDAO,
    deleteUserDAO,
    listUsersDAO
}