const Discord = require('discord.js');
const db = require("quick.db")
const consts = require("../consts.json")
exports.run = async (client, message, args) => {
 if (!message.member.roles.has(consts.kayıt_sroumlusu_role) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:agl:732944853909897217> Bilgi` , `<a:tikmor:732945123066904646> Bu Komutu Kullanmak İçin Kayıt Sorumlusu Rolüne Sahip Olman Gerek!!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:agl:732944853909897217> Bilgi` , `<a:tikmor:732945123066904646> Bir kullanıcı etiketlemelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let isim = args[1]
      if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:agl:732944853909897217>  Bilgi` , `<a:tikmor:732945123066904646> Bir isim girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
   let yas = args[2]
      if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:agl:732944853909897217> Bilgi` , `<a:tikmor:732945123066904646>   Bir yaş girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());    
await member.setNickname(`⚚ ${isim} | ${yas}`)
  member.addRole(consts.girl_role) // kız 1
  member.addRole('732942941059940512') // kız 2
  member.addRole('732942941735223368') //kız 3
  member.removeRole(consts.kayitsiz_role) // kayıtsız 1
  member.removeRole('732942958885732413') // kayıtsız 2

     const kanal = message.guild.channels.find(c => c.id == consts.chat) 
    const embed1 = new Discord.RichEmbed() 
    .addField(`Developer | Permisons`, `<a:venom:732944862890033233> ${member.user} **Hoşgeldin , Seninle Beraber** \`${member.guild.memberCount}\` **Üyeye Ulaştık.**\n<a:alici:732944733046964314>  **Sunucumuzun** \`Kurallarına\` <#732943026233802834> **Odasından Bakabilirsin.**`)
    .setColor("BLACK")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
  let embed = new Discord.RichEmbed() 
  .setColor("RED")
  .addField(`Developer | Permisons`, `<a:venom:732944862890033233> ${member.user} **adlı üyeye** <@&${consts.girl_role}> **rolünü verip ismini**  \`⚚ ${isim} | ${yas}\` **olarak ayarladım!**`)                                                                             
  .setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1))
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["k" , "ka"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}
exports.help = {
  name: 'kız',
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: 'kayıt isim yaş'
} 
 
