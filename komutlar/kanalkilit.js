const Discord = require('discord.js');
const ms = require('ms');


exports.run = (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu Komutu Kullanmaya Yetkin Yok!!").then(m => m.delete(5000));
    message.react('✅')

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`kilit` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['kilitaç', 'unlock'];
  if (!time) return message.channel.send('**Doğru Kullanım** : `.kilitle 2min`');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('**Kanal Kilidi Açıldı.**');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`**Kanal Kilitlendi.<a:kilit:732945025847132210>** ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('**Kanalın Kilidi Açıldı.**')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kilitle',"kilit"],
  permLevel: 0
};

exports.help = {
  name: 'kanalkilit',
  description: 'Kanalı istediğiniz kadar süreyle kitler.',
  usage: 'kanalıkilitle'
};