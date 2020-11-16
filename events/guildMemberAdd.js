module.exports = (client, member) => {
  
var kanal = client.channels.get("728118150457065483")
kanal.send(`** :trophy: | ${member.user.username} adlı kişi sunucudan ayrıldı.*`)
  
}