const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  if(!message.member.voiceChannel) return message.channel.send('Sesli Kanalda Değilsin.');
  
const kisi = message.mentions.members.first()
if(!kisi) return message.channel.send(new Discord.RichEmbed().setColor('black').setDescription('Yanına gideceğin kişiyi etiketlemedin!'))
const filter = (reaction, user) => {
    return ['✔️', '❌'].includes(reaction.emoji.name) && user.id === kisi.id;
};
if(!kisi.voiceChannel) return message.channel.send(new Discord.RichEmbed().setDescription('Yanına gitmek istediğin kişi sesli kanalda değil!').setColor('black'))
  message.channel.send(new Discord.RichEmbed()
.setDescription(`<@${kisi.id}>, <@${message.author.id}> senin yanına gelmek istiyor.`)
.setColor('Black'))
.then(m=>m.react('✔️').then(a=>m.react('❌')).then(s=>
  m.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first()

        if (reaction.emoji.name === '✔️') {
            message.channel.send(new Discord.RichEmbed().setColor('black').setDescription('<@'+message.author.id+'> isteğin kabul edildi. '));
      message.member.setVoiceChannel(kisi.voiceChannel.id)
        } else {
            message.channel.send(new Discord.RichEmbed().setColor('black').setDescription('<@'+message.author.id+'> isteğin reddedildi. '))
        }
    })
    ))
  
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'git',
  description: "xD",
  usage: 'git <@kisi>'
}