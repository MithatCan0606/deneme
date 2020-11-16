const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok ❌").then(msg => msg.delete(9000))
let sestekiler = message.guild.members.filter(m => m .voiceChannel&&!m.user.bot);
  if(!sestekiler) return message.channel.send("Sesli Kanallarda Hiçbir Kullanıcı Yok").then(m =>m.delete(5000))
  const voiceChannel = message.member.voiceChannel.id;
if(!voiceChannel) return
 sestekiler.forEach(async function(member){
  member.setVoiceChannel(voiceChannel);

 })
   
  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`Başarılı Şekilde Odaya Çekildi`)
    .setTimestamp()  
    message.channel.send(embed).then(message =>message.delete(10000))

   message.react('✅')
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}
exports.help = {
  name: 'toplantıçek',
  description: " ",
  usage: ' '
}