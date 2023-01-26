const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
               message.channel.send('u!help, u!test, u!ping, u!userinfo. u!lockdown on/off, u!ban, u!backup, u!backupinfo, u!restore');
}

module.exports.help = {
  name:"help"
}
