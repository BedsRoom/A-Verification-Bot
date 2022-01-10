const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setrole",
  aliases: ["sr"],
  category: ":frame_photo: WELCOME",
  run: (client, message, args) => {

     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command. [Permission Needed-Administrator]");
    }
    let vrole = message.mentions.roles.first();
    if(!vrole) {
      return message.channel.send(`Give me a role you would want to give when verifying new users.`)
    }
    

    db.set(`verole_${message.guild.id}`, vrole.id)
    
    
    message.channel.send(`Now I will give\`${vrole}\` as verification role`)
  }
}
