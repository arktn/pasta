let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    id: String,
    data: String
});

let guildSchema = new mongoose.Schema({
    id: String,
    data: String
});

module.exports.user = mongoose.model('User', userSchema);
module.exports.guild = mongoose.model('Guild', guildSchema);