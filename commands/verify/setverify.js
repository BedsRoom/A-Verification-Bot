const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setverify",
  aliases: ["sv"],
  category: ":frame_photo: WELCOME",
  run: (client, message, args) => {

  
     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("You do not enough permission to use this command. [Permission Needed-Administrator]");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("You have to specify the channel")
    }
   
    db.set(`verify_${message.guild.id}`, channel.id)
    
    
    message.channel.send(`Verification channel updated as ${channel}`)
  }
}
