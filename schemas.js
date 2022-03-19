const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: String,
    data: String
});

const guildSchema = new mongoose.Schema({
    id: String,
    data: String
});

module.exports.user = mongoose.model('User', userSchema);
module.exports.guild = mongoose.model('Guild', guildSchema);
