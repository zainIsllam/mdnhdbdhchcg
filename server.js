const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://probotfake.glitch.me/`);
}, 280000);

const { Attachment, Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config");
const talkedRecently = new Set();
const client = new Client({ disableEveryone: true });
const { exec } = require("child_process");
const canvas = require("canvas");
const { get } = require("request-promise-native");
const dat = {};
const Canvas = require("canvas");
const botversion = require("./package.json").version;
const moment = require("moment");
var request = require("request");
const fs = require("fs");
var figlet = require("figlet");
const util = require("util");
const ms = require("ms");
const jimp = require("jimp");
const guild = require("guild");
const dateFormat = require("dateformat");
const pretty = require("pretty-ms");
var table = require("table").table;
const Discord = require("discord.js");
const fetch = require("node-fetch");
const data = {};
client.login(TOKEN);
var now = new Date();

var sec = require('sec');
const credits = JSON.parse(fs.readFileSync("./credits.json"));
const rep = JSON.parse(fs.readFileSync("./rep.json"));
var time = require("./time.json");
var timess = require("./timess.json");
client.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") return;
  let args = message.content.split(" ");
  let author = message.author.id;
  if (!credits[author])
    credits[author] = {
      msgs: 0,
      credits: 0
    };
  if (!rep[author])
    rep[author] = {
      rep: 0
    };
let mentions = message.mentions.users.first();
  if(mentions) {
      if (!credits[mentions.id])
    credits[mentions.id] = {
      msgs: 0,
      credits: 0
    };
  if (!rep[mentions.id])
    rep[mentions.id] = {
      rep: 0
    };
};
      if (credits[message.author.id].msgs > 10) {
        credits[message.author.id].credit += Math.floor(Math.random() * 4);
        credits[message.author.id].msgs = 0;
    }
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));
  if (
    args[0].toLowerCase() == `${prefix}credits` ||
    args[0].toLowerCase() === `${prefix}credit`
  ) {
    const mention = message.mentions.users.first() || message.author;
    const mentionn = message.mentions.users.first();
    if (!args[2]) {
      message.channel.send(
        `**${mention.username}, Your :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
    } else if (mentionn && args[2]) {
      if (isNaN(args[2]))
        return message.channel.send(
          `** :interrobang: - ${message.author.username}, i can't find it!**`
        );
      if (args[2] < 1)
        return message.channel.send(
          `** :interrobang: - ${message.author.username}, type the credit you need to transfer!**`
        );
      if (mention.bot)
        return message.channel.send(
          `**:thinking: - ${message.author.username}, bots do not have credits**`
        );
      if (mentionn.id === message.author.id)
        return message.channel.send(
          `**:interrobang: - ${message.author.username}, I can't find User **`
        );
      if (args[2] > credits[author].credits)
        return message.channel.send(
          `**:thinking: - ${message.author.username}, Your balance is not enough for that!**`
        );
      if (args[2].includes("-"))
        return message.channel.send(
          `**:interrobang: - ${message.author.username}, type the credit you need to transfer!**`
        );
      let tax = Math.floor(args[2] * (5 / 100));
      let first = Math.floor(Math.random() * 10);
      let second = Math.floor(Math.random() * 10);
      let third = Math.floor(Math.random() * 10);
      let fourth = Math.floor(Math.random() * 10);
      let num = `${first}${second}${third}${fourth}`;
      let canvas = Canvas.createCanvas(100, 50);
      let ctx = canvas.getContext("2d");
      let Price = message.content.split(" ")[2];
      let resulting = Math.floor(Price - Price * (5 / 100));

      ctx.font = "25px Merriweather";
      ctx.fontSize = "7px";
      ctx.fillStyle = "White";
      message.delete();
      message.channel
        .send(
          `**${message.author.username}, Transfer Fees \`${tax}\`, Amount :\`${resulting}\` **
   type these numbers to confirm : `
        )
        .then(m => {
          ctx.fillText(num, canvas.width / 4.8, canvas.height / 1.5);
          message.channel.sendFile(canvas.toBuffer()).then(s => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (collected.first().content === num) {
                  message.channel.send(
                    `**:moneybag: - ${message.author.username}, has transferred \`$${resulting}\` to ${mentionn}**`
                  );
                  m.delete();
                  s.delete();
                  mention.send(
                    `**:atm: | Transfer Receipt**\`\`\`You Have Received \$${resulting}\ From User ${message.author.username}; (ID ${message.author.id})\`\`\``
                  );
                  m.delete();
                  s.delete();

                  credits[author].credits += Math.floor(-args[2]);
                  credits[mentionn.id].credits += Math.floor(+resulting);
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                  );
                } else {
                  m.delete();
                }
              });
          });
        });
    }
  }
 
  if (
    args[0].toLowerCase() === `${prefix}daily`
  ) {
    let cooldown = 86400000;
    let Daily = time[message.author.id];
    if (Daily !== null && cooldown - (sec(dateFormat(now, "HH:MM:ss")) - Daily) > 0) {
      let times = cooldown - (sec(dateFormat(now, "HH:MM:ss")) - Daily);
      message.channel.send( `**:rolling_eyes: | ${ message.author.username }, your daily credits refreshes in ${sec(times, { verbose: true })}.**`);
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
  
    } else {
      let ammount = [445, 521, 368, 601, 721, 584, 675, 691];
      time[message.author.id] = sec(dateFormat(now, "HH:MM:ss"));
      credits[message.author.id].credits += ammount[Math.floor(Math.random() * ammount.length)];
      let msg = `**:moneybag: ${message.author.username}, You got :dollar: `+ammount[Math.floor(Math.random() * ammount.length)]+` daily credits!**`
      message.channel.send(msg);
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {
        if (e) throw e;
      });
    }
  }
});

client.on("message", message => {

  let args = message.content.split(" ");
  const mentions = message.mentions.users.first();
  if(args[0].toLowerCase() === `${prefix}rep`) {
       const mentionn = message.mentions.users.first();
     let cooldown = 86400000;
    let repi = timess[message.author.id];
    if (repi !== null && cooldown - (sec(dateFormat(now, "HH:MM:ss")) - repi) > 0) {
      let tmes = cooldown - (sec(dateFormat(now, "HH:MM:ss")) - repi);
      message.channel.send(
        `**:stopwatch: | ${message.author.username}, you can raward more reputation in ${pretty(tmes, {
          verbose: true
        })}.**`
      );
      fs.writeFile("./timess.json", JSON.stringify(timess), function(e) {
        if (e) throw e;
      });
    } else {
      if(!mentionn) return message.channel.send(`**:rolling_eyes: | ${message.author.username}**, The user could not be found.`);
     if(mentionn.id == message.author.id) return message.channel.send(`:rolling_eyes: | ${message.author.username}**, You cant give yourself a reputation !**`);
      timess[message.author.id] = sec(dateFormat(now, "HH:MM:ss"));
      rep[mentionn.id].rep += Math.floor(+1);
         message.channel.send(`**🆙  |  ${message.author.username} has given ${mentionn} a reputation point!**`)
   fs.writeFile("./rep.json", JSON.stringify(rep), function(e) {
        if (e) throw e;
      });
       }
     }
});

client.on("message", message => {

  let args = message.content.split(" ");
  const mentions = message.mentions.users.first();
  if(args[0].toLowerCase() === `${prefix}test`) {
message.channel.send(dateFormat(now, "HH:MM:ss"))
     }
});

client.on("message", message => {
  let args = message.content.split(" ");
  if (message.content.startsWith(prefix+"profile")) {
  let member = message.mentions.users.first();

  if(args[0] && !args[1]) {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000)
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${message.author.id}` 
          }
        ]
      })
  }
  if(member) {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${member.id}` 
          }
        ]
      })
      )
     }else if(args[1] && !member) {
          client.fetchUser(args[1]).then(user => {
        message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000).then(
         message.channel.send({
        files: [
          {
            name: "prfoilebycutie.png",
            attachment: `https://api.probot.io/profile/${user.id}` 
          }
        ]
      })
      )
  })
    }
  }
});

client.on("message", message => {
  let args = message.content.split(" ");
  if (message.content.startsWith(prefix+"avatar")) {
  let member = message.mentions.users.first();

  if(args[0] && !args[1]) {
        const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setColor("#51545b")
      .setTitle("Avatar Link")
      .setURL(`${message.author.avatarURL}`)
      .setImage(`${message.author.avatarURL}`)
      .setFooter("Requested by" + message.author.tag, message.author.avatarURL);
     message.channel.sendEmbed(embed);
  }
  if(member) {
      const embed = new Discord.RichEmbed()
      .setAuthor(member.tag, member.avatarURL)
      .setColor("#51545b")
      .setTitle("Avatar Link")
      .setURL(`${member.avatarURL}`)
      .setImage(`${member.avatarURL}`)
      .setFooter("Requested by" + message.author.tag, message.author.avatarURL);
     message.channel.sendEmbed(embed);
     }else if(args[1] && !member) {
          client.fetchUser(args[1]).then(user => {
    const embed = new Discord.RichEmbed()
      .setAuthor(user.tag, user.avatarURL)
      .setColor("#51545b")
      .setTitle("Avatar Link")
      .setURL(`${user.avatarURL}`)
      .setImage(`${user.avatarURL}`)
      .setFooter("Requested by" + message.author.tag, message.author.avatarURL);
     message.channel.sendEmbed(embed);
  })
    }
  }
});