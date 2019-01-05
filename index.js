const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: false});

bot.on("ready", async () => {
bot.user.setActivity("for errors", {type: 'WATCHING' })
});

bot.on("message", async message => {
  if(message.author.bot) return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}submit`) {
    let link = args[0]; // Remember arrays are 0-based!.
    let banID = args[1];
    let banChannel = message.guild.channels.find("name", "check-appeals")
    let submitEmbed = new Discord.RichEmbed()
    .setTitle("Ban Appeal")
    .setColor("#ffbb56")
    .addField("Submitter", `<@${message.author.id}>`)
    .addField("Link", link)
    .addField("banID", banID)
    .setFooter("TropidiseBANS")
    .setTimestamp();

    banChannel.send(submitEmbed);
    message.reply("Submitted, please wait at least 5 days!");
  }

if(cmd === `${prefix}accept`){
  const bUser = message.mentions.users.first();
  bUser.send("You've been unbanned from Tropidise's main server! Here's a new link, https://discord.gg/uZ6hkYB!");
}

if(cmd === `${prefix}decline`){
  const bUser = message.mentions.users.first();
  bUser.send("You've been declined access from Tropidise's main server! You have 2 more times that you can appeal your ban!");
}

});

bot.login(botconfig.token);
