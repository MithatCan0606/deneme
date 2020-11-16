const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db")
const ms = require("ms");
var prefix = ayarlar.prefix;
const fs = require('fs');
const consts = require('../consts.json');
let yazı = JSON.parse(fs.readFileSync("./database.json", "utf8"));
exports.run = async (client, message, args) => {
  let kisirolleri =[]
  if(!message.member.roles.get(consts.jail_hammer_role) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok!!").then(m => m.delete(5000));

  var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  var Karantina = message.guild.roles.get(consts.karantina_role)
if(!user) return message.reply ("Lütfen bir kullanıcı etiketleyiniz 1y = Yıl 1d Gün 1h = saat 1m = Dakika 1s = saniye ").then(m => m.delete(5000));
    //let reason = args.slice(1).join(" ")
      //if(!reason) return message.channel.send("Lütfen Bir İsim Yazınız.").then(m => m.delete(9000));
var muteTime = args[1];
    
    if(!muteTime) return message.channel.send("Süreyi Girmelisin!").then(m => m.delete(5000));
    let reason = args.slice(2).join(" ")
    
    if(!reason) return message.channel.send("Lütfen Bir Sebep Belirtin.").then(m => m.delete(5000));
  
  
     if(user.hasPermission("ADMINISTRATOR")) return message.reply("Yöneticileri Karantinaya Atamazsın!!").then(m => m.delete(5000));

        if(!Karantina) return message.channel.send ("Cezalı Rolü Yok").then(m => m.delete(5000));
    let sChannel = message.guild.channels.get(consts.karantina_log_channel)


       if(user.voiceChannel){
  user.setVoiceChannel(null).catch(e => console.log("bağlantı kesme yetkim yok"))
  }
  
  if(!user.roles.has(Karantina.id)){
    kisirolleri= user._roles
  /*  message.guild.members.get(user.id).roles.forEach(r => {
message.guild.members.get(user.id).removeRole(r)
      
      
})*/
    
    let roles = message.guild.members.get(user.id).roles.array()
   await message.guild.members.get(user.id).removeRoles(roles)
     
    db.set(`Karantinaroller_${user.id}`,"⛔ | Jail")  
  
    await (user.addRole(Karantina.id))
    
     db.add(`KarantinaSayısı_${message.author.id}`,1)  
   message.react('✅')
    setTimeout(async function(){

      
      if(!user.roles.get(Karantina.id)) return
      
      await message.guild.members.get(user.id).addRoles(kisirolleri)
      
      
      
       user.removeRole(Karantina.id);
    
      //let kisirolleri =  await db.fetch(`Karantinaroller_${user.id}`)
      
       
      
       db.delete(`Karantinaroller_${user.id}`)  
      
    let embed = new Discord.RichEmbed()
    .setColor(Karantina.color)
    .setDescription(`${user} adlı Kullanıcının **Karantine** süresi doldu `)
   .setFooter(`${client.user.tag}` , `${client.user.displayAvatarURL}`)
  .setTimestamp()  


    if(!sChannel) return
    sChannel.send(embed)
       
    },  ms(muteTime));
    let süre =muteTime
.replace(/y/g, " Yıl")
.replace(/d/g, " Gün")
.replace(/h/g, " Saat")
.replace(/m/g, " Dakika")
.replace(/s/g, " Saniye")
    if(!sChannel) return message.channel.send ("Karantina Kanalı yok!").then(m => m.delete(5000));
    let embed = new Discord.RichEmbed()
    .setColor(Karantina.color)
    .setDescription(`
 ${user} Adlı Hapishaneye Atıldı. 
 Karantinaya Atan Yetkili : **${message.author.tag}**
 Karantina Süresi : **${süre}**
 Sebebi : **${reason}**
`)
    .setFooter(`**Adalet Mülkün Temelidir.**`)

    sChannel.send(embed)
    let embed3 = new Discord.RichEmbed()
  .setDescription(`**ADALET**`)
  .setImage('https://cdn.discordapp.com/attachments/651414180280270864/651420631920934933/DimpledCompassionateAcouchi-size_restricted.gif')
         .setFooter(`**Adalet Mülkün Temelidir.**`)
    message.channel.send(embed3).then(m => m.delete(10000));

  }
  else {
 
    message.channel.send("Kullanıcı Zatan Karantinada").then(m => m.delete(5000));


  }
 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karantina',"jail","cezalı"],
  permLevel: 0
};

exports.help = {
  name: 'karantina',
  description: 'designer rolü verir.',
  usage: 'a!designer'
};
 
