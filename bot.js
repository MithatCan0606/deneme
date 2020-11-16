const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const Jimp = require('jimp');
const db = require('quick.db');
require('./util/eventLoader')(client);
const stripIndents = require("common-tags")
const ms = require('parse-ms')
var boolStatus = false;

const consts = require('./consts.json');

const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);
var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

// -------------------------------------------------------------

// OYNUYOR KISIMI
function refreshStatus() {
  var x = 5;
  var x = x * 2;
  boolStatus = !boolStatus;
  if (boolStatus) {
  client.user.setActivity("Lawliet Krallığını", { type: "LISTENING" });
  } else {
    client.user.setActivity("Permisons Ä°le 101 Okey", { type: "PLAYING" });
  }
client.user.setActivity("ArsoneL Krallığını", { type: "WATCHING" });
  setTimeout(refreshStatus, x * 1000);
}
client.on('ready', () => {
   refreshStatus();
})


client.on("message", async message =>  {
   if(message.author.bot || message.channel.type === "dm") return;
  if(message.content.toLowerCase() ==="sa"||message.content.toLowerCase() ==="sea"||message.content.toLowerCase() ==="selamün aleyküm"||message.content.toLowerCase() ==="selamun aleykum"){
    message.reply("<a:sons:732944746569400343> __Aleyküm Selam Dostum Hoşgeldin__")
  }
})

client.on("message", async message =>  {
   if(message.author.bot || message.channel.type === "dm") return;
  if(message.content.toLowerCase() ==="tag"||message.content.toLowerCase() ==="tag"||message.content.toLowerCase() ==="tag"||message.content.toLowerCase() ==="tag"){
    message.reply("<a:yldz:732945097531850863> __Hey Bebeğim Tagımızı Almak İstermisin?__`⚚`")
  }
})

client.on("message", async message =>  {
   if(message.author.bot || message.channel.type === "dm") return;
  if(message.content.toLowerCase() ==="!tag"||message.content.toLowerCase() ==="!tag"||message.content.toLowerCase() ==="!tag"||message.content.toLowerCase() ==="!tag"){
message.reply("<a:yldz:732945097531850863> __Hey Bebeğim Tagımızı Almak İstermisin?__")
  }
})

client.on("message", async msg => {
  if (msg.content.toLowerCase() === 'tag') {
    msg.channel.sendMessage('`⚚`');
  }
});

client.on("message", async msg => {
  if (msg.content.toLowerCase() === '!tag') {
    msg.channel.sendMessage('`⚚`');
  }
});

client.on("message",async message => {
  
   if (message.channel.type === "dm") return;
    if (message.author.id === "671693250146336786") return;  
    if (message.author.id === "671693250146336786") return;  
    if (message.author.id === "671693250146336786") return;
  if (message.author.id === "671693250146336786") return;  

    
  
  if (message.channel.id === consts.partner_channel) return;
  if(message.author.bot && message.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g)){
    message.delete(80)
    message.reply("Reklam Yapmamalısın!").then(m => m.delete(5000));
  }
if(message.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g)&& !message.member.hasPermission('ADMINISTRATOR')) {
  
 message.delete(80)
    message.reply("Reklam Yapmamalısın!").then(m => m.delete(5000));
}
})

client.on("messageUpdate", function(oldMessage, newMessage){
  if(newMessage.author.bot || newMessage.channel.type === "dm") return;
  if (newMessage.author.id === "671693250146336786") return;
    if (newMessage.author.id === "671693250146336786") return;  
  if (newMessage.channel.id === "671693250146336786") return;
   if(newMessage.author.bot && newMessage.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) &&!newMessage.member.hasPermission('ADMINISTRATOR')){
    newMessage.delete(80)
    newMessage.reply("Reklam Yapmamalısın!").then(m => m.delete(5000));
  }
if(!newMessage.member.hasPermission('ADMINISTRATOR') && newMessage.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g)) {
  
 newMessage.delete(80)
    newMessage.reply("Reklam Yapmamalısın!").then(m => m.delete(5000));
}
});


client.login(ayarlar.token);

client.on('guildMemberAdd', member =>{
var msg = member;
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
var süp = member.guild.roles.get(consts.karantina_role)
var kayıtsız = member.guild.roles.get(consts.kayitsiz_role)
var kayıtsız2 = member.guild.roles.get("732942958885732413")
     let sChannel = member.guild.channels.get(consts.welcome_channel)
      let kanal = member.guild.channels.get(consts.karantina_channel)
function  sunucuyakayıt(){
       
     
           member.setNickname("⚚ İsim - Yaş")
        if(!kayıtsız) return member.guild.owner.send("kayıtsız rolü olmadığı için rol verilemedi")
        setTimeout(async() => {
          let kisirolleri =  await db.fetch(`Karantinaroller_${member.id}`)
       
          if(kisirolleri ==="Karantina"){
             member.addRole(süp.id)
            member.removeRole(kayıtsız.id)
            member.addRole(kayıtsız2.id)
          }else{
        member.addRole(kayıtsız.id)
        member.addRole(kayıtsız2.id)
          }
    },2000)
        if(!sChannel) return member.guild.owner.send("kayıt kanalı olmadığı için rol verirdi ama kanala yazı yazılamadı")
 setTimeout(() => {

/*let modlog2 = new Discord.RichEmbed() 
  .setColor('BLACK')
  .setDescription*/sChannel.send(`<a:elmas:732945117198942289> WELCOME TO LAWLİET  <a:venom:732944862890033233>

<a:venom:732944862890033233> Sunucuya hoş geldin, ${member} Seninle ${üyesayısı} Kişiyiz! <a:elmas:732945117198942289>

<a:alici:732944733046964314>  Kaydınızın yapılması için yeni bir hesap olmadığınızı yetkililere kanıtlamanız gerek. <a:alici:732944733046964314>

<a:siyah:732945023880003604> Kayıt sorumluları seninle ilgilenecektir. <a:siyah:732945023880003604>

<a:load:732944811308613712> Kayıt Sorumluların robot olmadığından emin olup lütfen beklemede kalın. <a:load:732944811308613712>

<a:kitap:732944750012924015> <#732943026233802834> Kanalından Kurallar'ı okumayı ihmal etmeyin. <a:kitap:732944750012924015>

<a:dn2:732945113856344204> <@&732942926979661974> | <@&732942958109786194> <a:dn2:732945113856344204>

<a:prlanta:732945128301264906> Şu anlık tagsız kayıt yoktur. Tagımız: ⚚ <a:prlanta:732945128301264906>

<a:tikmavi:732945124908335227> Hesap Güvenli.` + "**Hesabın Oluşturulma Tarihi :** " + moment(member.user.createdAt).format("DD MMMM YYYY, dddd") + `<a:tikmavi:732945124908335227> 
`,  new Discord.Attachment("https://cdn.discordapp.com/attachments/705155078968967349/707022129157242961/giphy.gif"))

    },500)
    }

var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
     member.addRole(süp.id)
     setTimeout(() => {
     member.removeRole(kayıtsız.id)
     },2000)
     
    if(!sChannel) return member.guild.owner.send("kayıt kanalı olmadığı için rol verirdi ama kanala yazı yazılamadı")
 let embed1 = new Discord.RichEmbed()
  .setColor("BLACK")
 .setDescription(`<a:venom:732944862890033233> WELCOME TO LAWLİET  <a:elmas:732945117198942289>

<a:elmas:732945117198942289> Sunucuya hoş geldin, ${member} Seninle ${üyesayısı} Kişiyiz! <a:venom:732944862890033233>

<a:priz:732945053059776553>  Kaydınızın yapılması için yeni bir hesap olmadığınızı yetkililere kanıtlamanız gerek. <a:priz:732945053059776553>

<a:siyah:732945023880003604> Kayıt sorumluları seninle ilgilenecektir. <a:siyah:732945023880003604>

<a:load:732944811308613712> Kayıt Sorumluların robot olmadığından emin olup lütfen beklemede kalın. <a:load:732944811308613712>

<a:kitapp:732944750025506922> <#732943026233802834> Kanalından Kurallar'ı okumayı ihmal etmeyin. <a:kitapp:732944750025506922>

<a:dn:732945115919679498> <@&732942926979661974> | <@&732942958109786194> | <@&732942923640864811> <a:dn:732945115919679498>

<a:prlanta2:732945072965943376> Şu anlık tagsız kayıt yoktur. Tagımız: ⚚ <a:prlanta2:732945072965943376>

<a:tiksiyah:732945022261133422> Hesabınız güvenli değildir.` + "**Hesabın Oluşturulma Tarihi :** " + moment(member.user.createdAt).format("DD MMMM YYYY, dddd") + `<a:tiksiyah:732945022261133422> 
`,  new Discord.Attachment("https://cdn.discordapp.com/attachments/705155078968967349/707022129157242961/giphy.gif")) 

     
     
     
     
     if(kanal){
     kanal.send(member + " **Hesabınız Yeni Açıldığı İçin Karantinaya Atıldınız. Buradan Çıkmak İçin Bir Yetkiliye Ulaşın Teşekkürler.**")
}
sChannel.send({embed:embed1})
  } else {
    sunucuyakayıt();
  }
}
);







client.on("userUpdate", function(oldUser, newUser){

 //  var tagdakiler = 0;
  let tag = "⚚";
// client.guilds.get(ayarlar.server_id).members.forEach(member => {
 //  if(member.user.username.includes(tag)) {
 //     tagdakiler = tagdakiler+1
//}  
  //})
  
  //const channel =client.guilds.get(ayarlar.server_id).channels.get("694168918469640273")
  //channel.setName(`Tag: (${tagdakiler})`);
      
     if(oldUser.username !== newUser.username) {
       let takmaad =  client.guilds.get(ayarlar.server_id).members.get(newUser.id).displayName
let kanal =client.channels.get(consts.oto_tag)

        if(!newUser.username.includes(tag) && client.guilds.get(ayarlar.server_id).members.get(newUser.id).roles.has(consts.tagges_role)) {
           if(!client.guilds.get(ayarlar.server_id).members.get(newUser.id).removeRole(consts.tagges_role)) return newUser.guild.owner.send("ototag rolü olmadığı için rol alınamadı")
          client.guilds.get(ayarlar.server_id).members.get(newUser.id).removeRole(consts.tagges_role)
          
            let değişeceksembol1 = takmaad.replace(/taglı sembol/g, "tagsız sembol");
            client.guilds.get(ayarlar.server_id).members.get(newUser.id).setNickname(değişeceksembol1)   
           if(!kanal) return newUser.guild.owner.send("ototag bilgi kanalı olmadığı için rol verirdi ama kanala yazı yazılamadı")
            kanal.send("**"+newUser+",`"+tag+"` tagını Çıkardığı İcin  `"+tag+ "` | Rooted rolü alındı!**")
            newUser.send("<a:agl:732944853909897217>  **Aga Tagıda Salmazsın be?.**`"+tag+"` ")

        } 
         if(newUser.username.includes(tag) && !client.guilds.get(ayarlar.server_id).members.get(newUser.id).roles.has(consts.tagges_role)) {
         
         
           if(!client.guilds.get(ayarlar.server_id).members.get(newUser.id).addRole(consts.tagges_role))   return newUser.guild.owner.send("ototag rolü olmadığı için rol verilemedi")
            client.guilds.get(ayarlar.server_id).members.get(newUser.id).addRole(consts.tagges_role)
            let değişeceksembol2 = takmaad.replace(/tagsız sembol/g, "taglı sembol");
            client.guilds.get(ayarlar.server_id).members.get(newUser.id).setNickname(değişeceksembol2)    
           if(!kanal) return newUser.guild.owner.send("ototag bilgi kanalı olmadığı için rol verirdi ama kanala yazı yazılamadı")
           kanal.send("**"+newUser+",`"+tag+"` tagını Aldığın İcin  `"+tag+ "` | Rooted rolü verildi!**")
                  newUser.send("<a:sr:732945128779415603>  `" +tag+ "` **Tagını alarak bize destek verdiğin için teşekkürler. -  Ailemize Hoşgeldin..**")

         }
      }
          })



client.on("ready", () => {
const numbers = [
"<a:say0:732946596248944770>",
"<a:say1:732946653752983552>",
"<a:say2:732946655002755123>",
"<a:say3:732946656919552021>",
"<a:say4:732946657364410389>",
"<a:say5:732946658022654033>",
"<a:say6:732946659511763007>",
"<a:say7:732946660639899648>",
"<a:say8:732946662263226399>",
"<a:say9:732946664179892244>",
];
function returnnum(number) {
let finalString = "";
String(number).split("").forEach(number => {
finalString += " " + numbers[Number(number)]; //napıyosun amk aptalı?
});
return finalString;
}
let guild = client.guilds.get(ayarlar.server_id);
var onlayn = client.guilds.get(ayarlar.server_id).members.filter(m => m.presence.status !== "offline").size
setInterval(() => {client.channels.get(consts.chat).setTopic(`__LAWLİET__ ${returnnum(guild.members.size)} __Online__ ${returnnum(onlayn)}`);
}, 10000)
});

client.on("ready", () => {
const numbers = [
"<a:say0:732946596248944770>",
"<a:say1:732946653752983552>",
"<a:say2:732946655002755123>",
"<a:say3:732946656919552021>",
"<a:say4:732946657364410389>",
"<a:say5:732946658022654033>",
"<a:say6:732946659511763007>",
"<a:say7:732946660639899648>",
"<a:say8:732946662263226399>",
"<a:say9:732946664179892244>",
];
function returnnum(number) {
let finalString = "";
String(number).split("").forEach(number => {
finalString += " " + numbers[Number(number)]; //napıyosun amk aptalı?
});
return finalString;
}
let guild = client.guilds.get(ayarlar.server_id);
var onlayn = client.guilds.get(ayarlar.server_id).members.filter(m => m.presence.status !== "offline").size
setInterval(() => {client.channels.get(consts.welcome_channel).setTopic(`__LAWLİET__ ${returnnum(guild.members.size)} __Online__ ${returnnum(onlayn)}`);
}, 10000)
});






client.on("message",async message => {
   if (message.author.bot || message.channel.type === "dm") return;
 
  //return message.channel.send(`**${user_tag}** Şu anda afk.\nNedeni:${key.reason}`)
  //return message.reply(`Artık afk değilsin. Tekrardan hoş geldin.`).then(msg => msg.delete(9000))
    var afklar =await db.fetch(`afk_${message.author.id}, ${message.guild.id}`)
    
  if(afklar){
    
    db.delete(`afk_${message.author.id}, ${message.guild.id}`)
    db.delete(`afk-zaman_${message.author.id}, ${message.guild.id}`)
    
    message.reply(`Artık afk değilsin. Tekrardan hoş geldin.`).then(msg => msg.delete(9000))
       try{
    let takma_ad = message.member.nickname.replace("[AFK]", "")
    message.member.setNickname(takma_ad).catch(err => console.log(err));
       }catch(err){   

 console.log(err.message)
  }
  }
  var kullanıcı = message.mentions.users.first()
  if(!kullanıcı) return
   let zaman =  await db.fetch(`afk-zaman_${kullanıcı.id}, ${message.guild.id}`)
  
   
    var süre = ms(Date.now() - zaman)
    
    
   var sebep = await db.fetch(`afk_${kullanıcı.id}, ${message.guild.id}`)
  if(await db.fetch(`afk_${message.mentions.users.first().id}, ${message.guild.id}`)){
  if(süre.days !== 0){
     message.channel.send(`**${kullanıcı}** Kullanıcısı **${süre.days}** Gün **${süre.hours}** Saat **${süre.minutes}** Dakika Önce **Afk** Oldu.\n Afk Nedeni: **${sebep}**`)
   return
   }
  
  if(süre.hours !== 0){
     message.channel.send(`**${kullanıcı}** Kullanıcısı **${süre.hours}** Saat **${süre.minutes}** Dakika Önce **Afk** Oldu.\n Afk Nedeni: **${sebep}**`)
   return
   }
  if(süre.minutes !== 0){
     message.channel.send(`**${kullanıcı}** Kullanıcısı **${süre.minutes}** Dakika Önce **Afk** Oldu.\n Afk Nedeni: **${sebep}**`)
   return
   }
   if(süre.seconds !== 0){
     message.channel.send(`**${kullanıcı}** Kullanıcısı **Bir Kaç Saniye** Önce **Afk** Oldu.\n Afk Nedeni: **${sebep}**`)
   return
   }
  }

})
///////
 client.on('guildMemberAdd', member => {
  let guild = member.guild;
let joinRole = guild.roles.find('name', '732942958109786194');// 'Üye'yazılan yeri otomatik rol vereceği rolü yapabilirsiniz.//Otorol Komudu :)
member.sendMessage( " , Tagımız : (⚚) Sunucumuza Hoş Geldiniz Keyifli Vakitler Geçirmenizi Dileriz. Taglı Alımdayız Dilerseniz Tagımızı Alabilirsiniz.")//Sunucuya Yeni Biri Geldiğinde Mesaj Atar istediğini yaz.
   member.addRole(joinRole);
});