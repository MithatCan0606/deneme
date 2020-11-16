const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const consts = require('../consts.json');
const db = require("quick.db")
var prefix = ayarlar.prefix;
const fs = require('fs');
let yazı = JSON.parse(fs.readFileSync("./database.json", "utf8"));
exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
 if (!message.member.roles.has(consts.bot_komut_role) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`<a:dikkat:689759228109258754> Bilgi` , `<a:siyahtik:689759229279862822> Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

  
  var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  var Sair   = message.guild.roles.get(consts.sair_role)
  
if(!user) return message.reply ("Lütfen bir kullanıcı etiketleyiniz").then(m => m.delete(5000));

  
        if(!Sair) return message.channel.send ("Şair Rolü Yok").then(m => m.delete(5000));


  if(!user.roles.has(Sair.id)){
  
    await (user.addRole(Sair.id))
    
  
   message.react('✅')
    let embed = new Discord.RichEmbed()
    .setColor(Sair.color)
    .setDescription(`${user.user} Kullanıcısına <@&${Sair.id}> Rolü Verildi.`)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    message.channel.send(embed).then(message =>message.delete(10000))



  }
  else {
    
    await (user.removeRole(Sair.id));
    
 

    
   message.react('✅')
     let embed0= new Discord.RichEmbed()
    .setColor(Sair.color)
    .setDescription(`${user.user} Kullanıcısına <@&${Sair.id}> Rolü Alındı.`)
   .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    message.channel.send(embed0).then(message =>message.delete(10000))

    
  }
 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şair','sair'],
  permLevel: 0
};

exports.help = {
  name: 'şair',
  description: 'designer rolü verir.',
  usage: 'a!designer'
};
 
