const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
  let katildi = message.guild.roles.get("732942920654520322").members.size;
  const onlayn = message.guild.roles.get("732942920654520322").members.filter(m => m.presence.status !== "offline").size;
  let guild = ayarlar.server_id;
  if (!message.member.hasPermission("ADMINISTRATOR")) return
  client.premium_subscription_count == 0
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [, voiceChannel] of voiceChannels) { 
voiceChannel.members.filter(members =>
members.roles.has("732942920654520322"))

.forEach( () => count++)}
     var random = ['Eczanede Satılmalı Bence Yeni Rakı..','Kim Benim Düşmanım ? Kim Senin Dostun??','Sanki Siyah-Beyaz Ekrandaki Gök Kuşağı Benim..','Sahne Işıklarının Gidişi, Sokak Lambalarının Sönüşü, Son Bakışım..','Aslında , Çok Doldum.. Karşında Bu Gece Zor Durdum..','Güne Açan Çiçekler Gibiydin, Yalaaağnnn'
,'Ben Ölsem , Ölsem , Ölsem, Öldüm..','Herşeyi Gören Sen Beni Mi Göremedin..?','Sen Diye Kendimi Ben..','Bugün Her Yanımda İzler , Dökülen Saçımda Rüzgar..','Yazıp Yazıp Silme..','Nerenin Havası Bu Güzelim, Hint Kumaşı Mı Kalmış Şu Devirde?'];
  var randomla = Math.floor(Math.random() * random.length);
  //////////////////////////////////////////////////
 message.channel.send(new Discord.RichEmbed() .setDescription(`Katıldı Permine Sahip **${katildi}** Kişi Var\n\n Katıldı Permine Sahip **${count}** Online Üye Bulunmaktadır\n\n Sesli Kanallarda Katildi Permine Sahip **${count}** Üye Var`).setColor("RANDOM").setFooter(`${random[randomla]}`).setThumbnail(`https://cdn.discordapp.com/attachments/723606697196912682/723870919818215504/ezgif.com-video-to-gif_2.gif`))
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'katıldı'
};