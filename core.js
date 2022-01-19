let mongoose = require('mongoose');
let schemas = require('./schemas')
let User = schemas.user;
let Guild = schemas.guild;

module.exports.newUser = async function (args1, args2) {
    let new_user = await User.create({ id: args1, data: args2 });
    await new_user.save();
    console.log('New User saved!');
}

module.exports.newGuild = async function (args1, args2) {
    let new_user = await Guild.create({ id: args1, data: args2 });
    await new_user.save();
    console.log('New Guild saved!');
}