const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const consts = require('../consts.json');
const fs = require('fs');
let yazı = JSON.parse(fs.readFileSync("./database.json", "utf8"));
var prefix = ayarlar.prefix;
const tag="⚚"
exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;

  if(!message.member.roles.get(consts.kayıt_sroumlusu_role)&&!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmak İçin Kayıt Sorumlusu Rolüne Sahip Olman Gerek!!").then(m => m.delete(5000));

    let rAd = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rAd) return message.channel.send("Lütfen Bir Kişiyi Etiketliyerek Kullanın").then(m => m.delete(5000));
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send("Lütfen Bir İsim Yazınız.").then(m => m.delete(5000));

    if(rAd.user.username.includes(tag)){
      await rAd.setNickname(tag+" " + reason);(e => console.log(e.message))
    }
    else if(!rAd.user.username.includes(tag)){
      await rAd.setNickname( tag+" " + reason);(e => console.log(e.message))
    }
 setTimeout(() => {
   let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
   .setTitle('• Kullanıcının takma adı değiştirildi.')
   .setThumbnail(rAd.user.avatarURL)
    .setDescription(`**
Değiştirilen Kullanıcı : ${rAd}
Düzenlenmiş Kullanıcı Adı : \`${rAd.displayName}\`
**`)
   .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
  .setTimestamp()  
    message.channel.send(embed)
   },1000)

    
   

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["isim"],
  permLevel: 0
};

exports.help = {
  name: 'nick',
  description: 'isim değitirir.',
  usage: 'a!isim'
};
 