let mongoose = require('mongoose');
let schemas = require('./schemas')
let User = schemas.user;
let Guild = schemas.guild;

module.exports.newUser = async function (args1, args2) {
    let new_user = await User.create({ id: args1, data: args2 });
    await new_user.save();
    console.log('New User saved!');
}

module.exports.editUser = async function (args1, args2) {
    let edit_user = await User.findOne({ id: args1 });
    if (!edit_user) return undefined;
    if (edit_user) {
        if (typeof args2 !== 'string') return undefined;
        if (typeof args2 === 'string') {
            edit_user.data = `${args2}`;
            await edit_user.save();
            console.log('User\'s data has been edited!');
        }
    }
}

module.exports.getUser = async function (args1) {
    let get_user = await User.findOne({id: args1});
    if (!get_user) return undefined;
    if (get_user) {
        console.log('User found!');
        return get_user.data;
    }
}

module.exports.removeUser = async function (args1) {
    await User.findOneAndRemove({id: args1});
    console.log('User has been removed!');
}

module.exports.newGuild = async function (args1, args2) {
    let new_guild = await Guild.create({ id: args1, data: args2 });
    await new_guild.save();
    console.log('New Guild saved!');
}

module.exports.editGuild = async function (args1, args2) {
    let edit_guild = await Guild.findOne({ id: args1 });
    if (!edit_guild) return undefined;
    if (edit_guild) {
        if (typeof args2 !== 'string') return undefined;
        if (typeof args2 === 'string') {
            edit_guild.data = `${args2}`;
            await edit_guild.save();
            console.log('Guild\'s data has been edited!');
        }
    }
}

module.exports.getGuild = async function (args1) {
    let get_guild = await Guild.findOne({id: args1});
    if (!get_guild) return undefined;
    if (get_guild) {
        console.log('Guild found!');
        return get_guild.data;
    }
}

module.exports.removeGuild = async function (args1) {
    await Guild.findOneAndRemove({id: args1});
    console.log('Guild has been removed!');
}
