var mongoose = require('mongoose');
module.exports = new mongoose.Schema({
    username: string,
    password: string
})