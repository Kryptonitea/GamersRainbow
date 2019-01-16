const Discord = require('discord.js');
const client = new Discord.Client();

// playing
client.on('ready', () => {                           
client.user.setGame(`♥GAMERS♥`,'https://www.twitch.tv/ℕ g A M Codes♥');
  });



client.on("ready", () => { // كود رينبو
  function lol() {
    client.guilds.get('535054009351012352').roles.find("name", "Rainbow").setColor("RANDOM");
  };
  setInterval(lol, 5000);
});

client.login(process.env.BOT_TOKEN);
