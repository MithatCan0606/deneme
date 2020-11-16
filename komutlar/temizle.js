const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("<a:hata:732946503923925062>   **Lütfen Silinicek Mesaj Miktarını Yazın.!** <a:hata:732946503923925062>");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` **${args[0]} Adet Mesajı Sildim.** <a:tik3:732944816437985290>`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};