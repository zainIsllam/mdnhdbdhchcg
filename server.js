const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`https://probotfake.glitch.me`);
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
var sec = require('sec');
const jimp = require("jimp");
const guild = require("guild");
const dateFormat = require("dateformat");
const pretty = require("pretty-ms");
var table = require("table").table;
const Discord = require("discord.js");
const fetch = require("node-fetch");
const data = {};
client.login(TOKEN);
var Datie = new Date().toLocaleString("en-US", {
  timeZone: "America/New_York",
  timeZoneName: "short",
  weekday: "short",
  month: "long",
  day: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit"
});
client.on("ready", function() {
  client.user.setStatus("online");
    client.user.setGame("#help");
});

const cptcha = [
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692002715672379413/captcha.png",
        "answers": ["9340"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692002857704095785/captcha.png",
        "answers": ["2901"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692002944660275310/captcha.png",
        "answers": ["3735"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692003101883891762/captcha.png",
        "answers": ["2414"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692003169428832368/captcha.png",
        "answers": ["3517"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692003259379875840/captcha.png",
        "answers": ["2643"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/690575420461940806/691997461639594054/captcha.png",
        "answers": ["2517"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692003356226617415/captcha.png",
        "answers": ["7175"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692003638301687857/captcha.png",
        "answers": ["8705"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692003735693426719/captcha.png",
        "answers": ["6281"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692003816475852860/captcha.png",
        "answers": ["7331"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692003894963863663/captcha.png",
        "answers": ["4062"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692003969207238656/captcha.png",
        "answers": ["8698"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/634854460102803456/692004078858797086/captcha.png",
        "answers": ["3865"]
          }
];

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
    if (!timess[author])
    timess[author] = {
      time: 0
    };
    if (!time[author])
    time[author] = {
      time: 0
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
    if (!args[2] && !mentionn) {
      message.channel.send(
        `**:bank: | ${mention.username}, Your account balance is \`$${credits[mention.id].credits}\`**`
      );
    }
   else if (!args[2] && mentionn) {
     if (mentionn.bot) {
      message.channel.send(
        `**:thinking:  |  ${message.author.username}**, bots do not have credits!`) 
       return;
   }
      message.channel.send(`** ${mention.username}, :credit_card: balance is \`$${credits[mention.id].credits}\`**`);
    } else if (mentionn && args[2]) {
      if (isNaN(args[2]))
        return message.channel.send(
          `** :interrobang: - ${message.author.username}, i can't find it!**`
        );
      if (args[2] < 2)
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
      let Price = message.content.split(" ")[2];
      let resulting = Math.floor(Price - Price * (5 / 100));
      message.delete();
      message.channel
        .send(`**${message.author.username}, Transfer Fees \`${tax}\`, Amount :\`${resulting}\` **\n type these numbers to confirm : `)
        .then(m => {
        const item = cptcha[Math.floor(Math.random() * cptcha.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
        message.channel.send({
            files: [{
            attachment: item.type,
            name: "capatcha.png"
          }]
      }).then(s => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  message.channel.send(
                    `**:moneybag: - ${message.author.username}, has transferred \`$${resulting}\` to ${mentionn}**`
                  );
                  mention.send(
                    `**:atm: | Transfer Receipt**\`\`\`You Have Received \$${resulting}\ From User ${message.author.username}; (ID : ${message.author.id})\`\`\``
                  );
                  credits[author].credits += Math.floor(-args[2]);
                  credits[mentionn.id].credits += Math.floor(+resulting);
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                );
          
          s.delete();
          m.delete();
        })
        })
      });
    }
  }
 
  if (
    args[0].toLowerCase() === `${prefix}daily`
  ) {
    let cooldown = 8.64e7;
    let Daily = time[message.author.id].time;
    if (Daily !== null && cooldown - ((sec(pretty(Date.now(), {colonNotation: true})) * 1000) - Daily) > 0) {
      let times = cooldown - ((sec(pretty(Date.now(), {colonNotation: true})) * 1000) - Daily);
      message.channel.send( `**:rolling_eyes: | ${ message.author.username }, your daily credits refreshes in ${pretty(times, { verbose: true })}.**`);
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {
        if (e) throw e;
      });
  
    } else {
      let ammount = [445, 521, 368, 601, 721, 584, 675, 691];
      time[message.author.id] = {
       time: Math.floor(sec(pretty(Date.now(), {colonNotation: true})) * 1000)
      }
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
     let cooldown = 8.64e7;
    let Daily = timess[message.author.id].time;
    if (Daily !== null && cooldown - ((sec(pretty(Date.now(), {colonNotation: true})) * 1000) - Daily) > 0) {
      let tmes = cooldown - ((sec(pretty(Date.now(), {colonNotation: true})) * 1000) - Daily);
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
     if(mentionn.id == message.author.id) return message.channel.send(`:rolling_eyes:  | ${message.author.username}**, You cant give yourself a reputation !**`);
           timess[message.author.id] = {
       time: Math.floor(sec(pretty(Date.now(), {colonNotation: true})) * 1000)
      }
      rep[mentionn.id].rep += Math.floor(+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${mentionn} a reputation point!**`)
   fs.writeFile("./rep.json", JSON.stringify(rep), function(e) {
        if (e) throw e;
      });
       }
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
    }, Math.random() * (1 - 3) + 1 * 1000);
      message.channel.send({
        files: [
          {
            name: "cutie=HyPeD.png",
            attachment: `https://api.probot.io/profile/${message.author.id}`
          }
        ]
      });
  }
  if(member) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);
      message.channel.send({
        files: [
          {
            name: "cutie=HyPeD.png",
            attachment: `https://api.probot.io/profile/${member.id}`
          }
        ]
      })
     }else if(args[1] && !member) {
          client.fetchUser(args[1]).then(userr => {
  message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);
      message.channel.send({
        files: [
          {
            name: "cutie=HyPeD.png",
            attachment: `https://api.probot.io/profile/${userr.id}`
          }
        ]
      });
  })
    }
  }
});

client.on("message", message => {
  let args = message.content.split(" ");
 if (args[0].toLowerCase() === `${prefix}avatar`) {
  let member = message.mentions.users.first();
  if(args[0] && !args[1]) {
    const emb = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setColor("#51545b")
    .setTitle("Avatar Link")
    .setURL(`${message.author.avatarURL}`)
    .setImage(`${message.author.avatarURL}`)
.setFooter("Requested by" + message.author.tag, message.author.avatarURL)
     message.channel.sendEmbed(emb);
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

client.on("message", message => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("Pong").then(msg => {
      msg.edit(
          `\`\`\`javascript\nTime taken: ${msg.createdTimestamp -
            message.createdTimestamp} ms.\nDiscord API: ${Math.round(
            client.ping
          )} ms.\`\`\``
      );
    });
  }
});


client.on("message", message => {
    if (message.content.startsWith("Attention")) {
message.channel.send("H¥þêÐ#5555 = CutiePie")
  }
});

client.on("message", message => {
  let args = message.content.split(" ");
  if (message.author.bot) return;
  if (!message.member.hasPermission("BAN_MEMBERS")) return;
 if (args[0].toLowerCase() === `${prefix}ban`) {
   let reason = message.content.split(" ").slice(2).join(" ");
  let member = message.mentions.users.first();
  if(args[0] && !args[1]) {
    const emb = new Discord.RichEmbed()
    .setTitle("Command: ban")
    .setDescription("Bans a member.")
    .addField("**Usage:**", `${prefix}ban [user] [time m/h/d/mo/y] [reason]`)
    .addField("**Examples:**", `
${prefix}ban ${message.author}
${prefix}ban ${message.author} spamming
${prefix}ban ${message.author} 1h spamming
${prefix}ban ${message.author} 1d spamming
${prefix}ban ${message.author} 1w
`)
    
     message.channel.sendEmbed(emb);
  }
  if(member) {
  message.guild.ban(member, `By: ${message.author.username}, REASON: ${reason || " "}`).then(() => {
})
		message.channel.send(`** :white_check_mark: ${member.user.displayName} banned from the server! :airplane: **`);

  
  
  }else if(args[1] && !member) {
          client.fetchUser(args[1]).then(user => {

  message.guild.ban(user, `By: ${message.author.username}, REASON: ${reason || " "}`).then(() => {
})
		message.channel.send(`** :white_check_mark: ${user.username} banned from the server! :airplane: **`);
          
          
      })
    }
  }
});

client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
let args = message.content.split(" ");
    if(args[0] && !args[1]) {
    const emb = new Discord.RichEmbed()
    .setTitle("Command: unban")
    .setDescription("Unbans a member.")
    .addField("**Usage:**", `${prefix}unban [username / user id]`)
    .addField("**Examples:**", `
${prefix}ban ${message.author}
${prefix}ban ${message.author.id}
`)
     message.channel.sendEmbed(emb)
  return;
  }
    message.guild.unban(args[1]).then(m => {
        message.channel.send(`:white_check_mark: **${m.username}** unbanned!`);
      })
      .catch(stry => {
        message.channel.send(
          `**:rolling_eyes: -  I can't find ${args[1]} in the ban list**`
        );
      });
  }
});

client.on("message", message => {
  let args = message.content.split(" ");
  if (message.author.bot) return;
  if (!message.member.hasPermission("BAN_MEMBERS")) return;
 if (args[0].toLowerCase() === `${prefix}kick`) {
   let reason = message.content.split(" ").slice(2).join(" ");
  let member = message.mentions.users.first();
  if(args[0] && !args[1]) {
    const emb = new Discord.RichEmbed()
    .setTitle("Command: kick")
    .setDescription("Kicks a member.")
    .addField("**Usage:**", `${prefix}kick [user] [reason]`)
    .addField("**Examples:**", `
${prefix}kick ${message.author} 
${prefix}kick ${message.author.id}
`)
     message.channel.sendEmbed(emb);
  }
  if(member) {
  member.kick(member, `By: ${message.author.username}, REASON: ${reason || " "}`).then(() => {
})
		message.channel.send(`** :white_check_mark: @${member.user.displayName} kicked from the server!  **`);

  
  
  }else if(args[1] && !member) {
          client.fetchUser(args[1]).then(user => {

  user.kick(user, `By: ${message.author.username}, REASON: ${reason || " "}`).then(() => {
})
		message.channel.send(`** :white_check_mark: @${user.username} kicked from the server! **`);
          
          
      })
    }
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "lock")) {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return
    if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return;
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    });
    message.channel.send(
      `🔒 ${message.channel} **has been locked.**`
    );
  }
});

client.on("message", async message => {
  if (message.content.startsWith(prefix + "unlock")) {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return
    if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return;
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    });
 message.channel.send(
      `🔓 ${message.channel} **has been unlocked.**`
    );
  }
});


client.login(process.env.TOKEN);