const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')
const consts = require('../consts.json')
exports.run = async (client ,message ) => {
  message.delete(10)
  let guild = ayarlar.server_id
  
 const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
  let count = 0;
  /////////////////////
   var countt = count.toString().replace(/ /g, "")
  var üs2 = countt.match(/([0-9])/g)
  countt = countt.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    countt = countt.replace(/([0-9])/g, d => {
      return {
        "1": "<a:say1:732946653752983552>",
        "2": "<a:say2:732946655002755123>",
        "3": "<a:say3:732946656919552021>",
        "4": "<a:say4:732946657364410389>",
        "5": "<a:say5:732946658022654033>",
        "6": "<a:say6:732946659511763007>",
        "7": "<a:say7:732946660639899648>",
        "8": "<a:say8:732946662263226399>",
        "9": "<a:say9:732946664179892244>",
        "0": "<a:say0:732946596248944770>"}[d];
      })
    }
  
  

  ///////////////////////////
      var tag = message.guild.members.filter(member => member.user.username.includes("⚚")).size.toString()
      if(tag) {
    tag = tag.replace(/([0-9])/g, d => {
      return {
        "1": "<a:say1:732946653752983552>",
        "2": "<a:say2:732946655002755123>",
        "3": "<a:say3:732946656919552021>",
        "4": "<a:say4:732946657364410389>",
        "5": "<a:say5:732946658022654033>",
        "6": "<a:say6:732946659511763007>",
        "7": "<a:say7:732946660639899648>",
        "8": "<a:say8:732946662263226399>",
        "9": "<a:say9:732946664179892244>",
        "0": "<a:say0:732946596248944770>"}[d];
      })
    }
      
  
  
  /////////////////////////////////
   var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
        "1": "<a:say1:732946653752983552>",
        "2": "<a:say2:732946655002755123>",
        "3": "<a:say3:732946656919552021>",
        "4": "<a:say4:732946657364410389>",
        "5": "<a:say5:732946658022654033>",
        "6": "<a:say6:732946659511763007>",
        "7": "<a:say7:732946660639899648>",
        "8": "<a:say8:732946662263226399>",
        "9": "<a:say9:732946664179892244>",
        "0": "<a:say0:732946596248944770>"}[d];
      })
    }
  
  
  
  
  //////////////////////////////    
    var üyesayısı = message.guild.memberCount.toString().replace(/ /g,"")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
        "1": "<a:say1:732946653752983552>",
        "2": "<a:say2:732946655002755123>",
        "3": "<a:say3:732946656919552021>",
        "4": "<a:say4:732946657364410389>",
        "5": "<a:say5:732946658022654033>",
        "6": "<a:say6:732946659511763007>",
        "7": "<a:say7:732946660639899648>",
        "8": "<a:say8:732946662263226399>",
        "9": "<a:say9:732946664179892244>",
        "0": "<a:say0:732946596248944770>"}[d];
      })
    }
  

  
  //////////////////////////////////////
    var boost = message.guild.members.filter(r=>r.roles.has(consts.booster_roles)).size.toString() 
  if(boost) {
    boost = boost.replace(/([0-9])/g, d => {
      return {
        "1": "<a:say1:732946653752983552>",
        "2": "<a:say2:732946655002755123>",
        "3": "<a:say3:732946656919552021>",
        "4": "<a:say4:732946657364410389>",
        "5": "<a:say5:732946658022654033>",
        "6": "<a:say6:732946659511763007>",
        "7": "<a:say7:732946660639899648>",
        "8": "<a:say8:732946662263226399>",
        "9": "<a:say9:732946664179892244>",
        "0": "<a:say0:732946596248944770>"}[d];
      })
    }
      
  
  
  
 ////////////////////////////////////
    var kadin = message.guild.members.filter(r=>r.roles.has(consts.girl_role)).size.toString() 
  if(kadin) {
    kadin = kadin.replace(/([0-9])/g, d => {
      return {
        "1": "<a:say1:732946653752983552>",
        "2": "<a:say2:732946655002755123>",
        "3": "<a:say3:732946656919552021>",
        "4": "<a:say4:732946657364410389>",
        "5": "<a:say5:732946658022654033>",
        "6": "<a:say6:732946659511763007>",
        "7": "<a:say7:732946660639899648>",
        "8": "<a:say8:732946662263226399>",
        "9": "<a:say9:732946664179892244>",
        "0": "<a:say0:732946596248944770>"}[d];
      })
    }
 
/////////////////////////////////////////
  var erkek = message.guild.members.filter(r=>r.roles.has(consts.man_role)).size.toString() 
  if(erkek) {
   erkek = erkek.replace(/([0-9])/g, d => {
      return {
        "1": "<a:say1:732946653752983552>",
        "2": "<a:say2:732946655002755123>",
        "3": "<a:say3:732946656919552021>",
        "4": "<a:say4:732946657364410389>",
        "5": "<a:say5:732946658022654033>",
        "6": "<a:say6:732946659511763007>",
        "7": "<a:say7:732946660639899648>",
        "8": "<a:say8:732946662263226399>",
        "9": "<a:say9:732946664179892244>",
        "0": "<a:say0:732946596248944770>"}[d];
      })
    }

/////////////////
  var kayıtsız = message.guild.members.filter(r=>r.roles.has(consts.kayitsiz_role)).size.toString() 
  if(kayıtsız) {
    kayıtsız = kayıtsız.replace(/([0-9])/g, d => {
      return {
        "1": "<a:say1:732946653752983552>",
        "2": "<a:say2:732946655002755123>",
        "3": "<a:say3:732946656919552021>",
        "4": "<a:say4:732946657364410389>",
        "5": "<a:say5:732946658022654033>",
        "6": "<a:say6:732946659511763007>",
        "7": "<a:say7:732946660639899648>",
        "8": "<a:say8:732946662263226399>",
        "9": "<a:say9:732946664179892244>",
        "0": "<a:say0:732946596248944770>"}[d];
      })
    }

const eren = new Discord.RichEmbed()

.setDescription(`
**Kişi Sayısı** : **${üyesayısı.toString()}**
**Aktif Üye** : **${onlayn}**
**Sesli Üye** : **${countt}**

**Booster Üye** : **${boost}**
**Tagli Üye** : **${tag}**

**Kız Üye** : **${kadin}**
**Erkek Üye** : **${erkek}**

**Kayıtsız Uye** : **${kayıtsız}**
`)
.setImage('https://cdn.discordapp.com/attachments/717074042670284820/730546399208276039/ezgif.com-gif-maker.gif')
.setThumbnail(`https://cdn.discordapp.com/attachments/717074042670284820/730546399208276039/ezgif.com-gif-maker.gif`)
message.channel.send(eren)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sb',],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
};