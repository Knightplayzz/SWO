const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var helloEmbed = new discord.MessageEmbed()
    .setTitle("**Game update info**")
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(`© created by philippe#0354`)
    .setDescription(`**What is new?** World 1 base \n\n **When is the next update?** \n The next update is **1-12-2020**. \n \n **What is new in that update?** \n Hole world 1 done.`);

    message.channel.send(helloEmbed)

}

module.exports.help = {
    name: "gameupdate"
}