 const Discord = require("discord.js")
const consts = require('../consts.json');
module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    var toplamEtiketliUyeler = message.guild.members.filter(member => member.user.username.includes("⚚")).size
    let count = 0;
    let boostcuk = consts.booster_roles
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.name === "tikmor")
      const emoji3 = client.emojis.find(emoji => emoji.name === "siyah");
  let boost = message.guild.members.filter(r=>r.roles.has(boostcuk)).size
  const melementembed = new Discord.RichEmbed()
  .setColor("RED")
        .setDescription(`${emoji3} Ses kanallarında **${count}** kişi bulunmaktadır.\n\n${emoji3} Taglı üyede **${toplamEtiketliUyeler}**  \n\n${emoji3} Sunucuyu boostlayan **${boost}** kişi bulunmaktadır`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/728118194606309437/728130688821362698/ezgif.com-video-to-gif_4.gif`)
        .setTimestamp()
        .setFooter(`Developed by Permisons`, `https://cdn.discordapp.com/attachments/728118194606309437/728130688821362698/ezgif.com-video-to-gif_4.gif`)
 
  message.channel.sendEmbed(melementembed)
  message.react(emoji)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ses',
  description: 'kullanıcıyı susturur.',
  usage: 'ses'
}; 