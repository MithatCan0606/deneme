const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {
  let guild = ayarlar.server_id;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "     ")
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
  /////////////////////////////////////////
  var tagdakiler = 0;
  let tag = "⚚";
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "      ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
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
  //////////////////////////////////////////
  var onlayn = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "     ")
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //////////////////////////////////////////////////
 msg.channel.send(stripIndents`
**Lawliet**: ${üyesayısı}  **Online**: ${onlayn}


           ⠀⠀    **Tagdakiler**: ${tagdakilerr}
 `)

  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["in",],
  permLevel: 0
};

exports.help = {
  name: 'info'
};