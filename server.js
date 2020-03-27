
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
const rep = JSON.parse(fs.readFileSync("./rep.json"));//By Cutie Pie azbi
var time = require("./time.json");//By Cutie Pie azbirf
var timess = require("./timess.json");//By Cutie Pie azbi
client.on("message", async message => {//By Cutie Pie azbige
  if (message.author.bot || message.channel.type === "dm") return;//By Cutie Pie azbi
  let args = message.content.split(" ");//By Cutie Pie azbifrzgg
  let author = message.author.id;//By Cutie Pie azbih
  if (!credits[author])//By Cutie Pie azbi//By Cutie Pie azbi
    credits[author] = {//By Cutie Pie azbi
      msgs: 0,//By Cutie Pie azbiefaef
      credits: 0//By Cutie Pie azbiafe
    };//By Cutie Pie azbidq
  if (!rep[author])//By Cutie Pie azbiaafe
    rep[author] = {//By Cutie Pie azbig
      rep: 0//By Cutie Pie azbifaf
    };//By Cutie Pie azbi//By Cutie Pie azbih
    if (!timess[author])//By Cutie Pie azbiadc
    timess[author] = {//By Cutie Pie azbi
      time: 0//By Cutie Pie azbi//By Cutie Pie azbi
    };//By Cutie Pie azbicf
    if (!time[author])//By Cutie Pie azbi
    time[author] = {//By Cutie Pie azbi
      time: 0//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
    };//By Cutie Pie azbi//By Cutie Pie azbi
let mentions = message.mentions.users.first();//By Cutie Pie azbi
  if(mentions) {//By Cutie Pie azbi//By Cutie Pie azbi
      if (!credits[mentions.id])//By Cutie Pie azbi//By Cutie Pie azbi
    credits[mentions.id] = {//By Cutie Pie azbi//By Cutie Pie azbi
      msgs: 0,//By Cutie Pie azbi//By Cutie Pie azbi
      credits: 0//By Cutie Pie azbi
    };//By Cutie Pie azbi//By Cutie Pie azbi
  if (!rep[mentions.id])//By Cutie Pie azbi
    rep[mentions.id] = {//By Cutie Pie azbi//By Cutie Pie azbi
      rep: 0//By Cutie Pie azbi//By Cutie Pie azbi
    };//By Cutie Pie azbi//By Cutie Pie azbi
};//By Cutie Pie azbi//By Cutie Pie azbi
      if (credits[message.author.id].msgs > 10) {//By Cutie Pie azbi
        credits[message.author.id].credit += Math.floor(Math.random() * 4);//By Cutie Pie azbi
        credits[message.author.id].msgs = 0;//By Cutie Pie azbi
    }//By Cutie Pie azbi//By Cutie Pie azbi
  fs.writeFileSync("./credits.json", JSON.stringify(credits, null, 4));//By Cutie Pie azbi//By Cutie Pie azbi
  if (//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
    args[0].toLowerCase() == `${prefix}credits` ||//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
    args[0].toLowerCase() === `${prefix}credit`//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
  ) {//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
    const mention = message.mentions.users.first() || message.author;//By Cutie Pie azbi//By Cutie Pie azbi
    const mentionn = message.mentions.users.first();//By Cutie Pie azbi//By Cutie Pie azbi
    if (!args[2] && !mentionn) {//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
      message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
        `**:bank: | ${mention.username}, Your account balance is \`$${credits[mention.id].credits}\`**`//By Cutie Pie azbi//By Cutie Pie azbi
      );//By Cutie Pie azbi//By Cutie Pie azbi
    }//By Cutie Pie azbi//By Cutie Pie azbi
   else if (!args[2] && mentionn) {//By Cutie Pie azbi//By Cutie Pie azbi
     if (mentionn.bot) {//By Cutie Pie azbi//By Cutie Pie azbi
      message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi
        `**:thinking:  |  ${message.author.username}**, bots do not have credits!`)//By Cutie Pie azbi//By Cutie Pie azbi 
       return;//By Cutie Pie azbi//By Cutie Pie azbi
   }//By Cutie Pie azbi//By Cutie Pie azbi
      message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi
        `** ${mention.username}, :credit_card: balance is \`$${credits[mention.id].credits}\`**`//By Cutie Pie azbi//By Cutie Pie azbi
      );//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
    } else if (mentionn && args[2]) {//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
      if (isNaN(args[2]))//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
        return message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi
          `** :interrobang: - ${message.author.username}, i can't find it!**`//By Cutie Pie azbi//By Cutie Pie azbi
        );//By Cutie Pie azbi//By Cutie Pie azbi
      if (args[2] < 2)//By Cutie Pie azbi//By Cutie Pie azbi
        return message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi
          `** :interrobang: - ${message.author.username}, type the credit you need to transfer!**`//By Cutie Pie azbi//By Cutie Pie azbi
        );//By Cutie Pie azbi//By Cutie Pie azbi
      if (mention.bot)//By Cutie Pie azbi//By Cutie Pie azbi
        return message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi
          `**:thinking: - ${message.author.username}, bots do not have credits**`//By Cutie Pie azbi//By Cutie Pie azbi
        );//By Cutie Pie azbi//By Cutie Pie azbi
      if (mentionn.id === message.author.id)//By Cutie Pie azbi//By Cutie Pie azbi
        return message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi
          `**:interrobang: - ${message.author.username}, I can't find User **`//By Cutie Pie azbi//By Cutie Pie azbi
        );//By Cutie Pie azbi//By Cutie Pie azbi
      if (args[2] > credits[author].credits)//By Cutie Pie azbi//By Cutie Pie azbi
        return message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi
          `**:thinking: - ${message.author.username}, Your balance is not enough for that!**`//By Cutie Pie azbi//By Cutie Pie azbi
        );//By Cutie Pie azbi//By Cutie Pie azbi
      if (args[2].includes("-"))//By Cutie Pie azbi//By Cutie Pie azbi
        return message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi
          `**:interrobang: - ${message.author.username}, type the credit you need to transfer!**`//By Cutie Pie azbi//By Cutie Pie azbi
        );//By Cutie Pie azbi//By Cutie Pie azbi
      let tax = Math.floor(args[2] * (5 / 100));//By Cutie Pie azbi//By Cutie Pie azbi
      let Price = message.content.split(" ")[2];//By Cutie Pie azbi//By Cutie Pie azbi
      let resulting = Math.floor(Price - Price * (5 / 100));//By Cutie Pie azbi
      message.delete();//By Cutie Pie azbi//By Cutie Pie azbi
      message.channel//By Cutie Pie azbi//By Cutie Pie azbi
        .send(`**${message.author.username}, Transfer Fees \`${tax}\`, Amount :\`${resulting}\` **//By Cutie Pie azbi type these numbers to confirm : `)//By Cutie Pie azbi//By Cutie Pie azbi
        .then(m => {//By Cutie Pie azbi//By Cutie Pie azbi
        const item = cptcha[Math.floor(Math.random() * cptcha.length)];//By Cutie Pie azbi//By Cutie Pie azbi
const filter = response => {//By Cutie Pie azbi//By Cutie Pie azbi
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());//By Cutie Pie azbi//By Cutie Pie azbi
};//By Cutie Pie azbi//By Cutie Pie azbi
        message.channel.send({//By Cutie Pie azbi//By Cutie Pie azbi
            files: [{//By Cutie Pie azbi//By Cutie Pie azbi
            attachment: item.type,//By Cutie Pie azbi//By Cutie Pie azbi
            name: "capatcha.png"//By Cutie Pie azbi//By Cutie Pie azbi
          }]//By Cutie Pie azbi//By Cutie Pie azbi
      }).then(s => {//By Cutie Pie azbi//By Cutie Pie azbi
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })//By Cutie Pie azbi//By Cutie Pie azbi
        .then((collected) => {//By Cutie Pie azbi//By Cutie Pie azbi
                  message.channel.send(//By Cutie Pie azbi//By Cutie Pie azbi
                    `**:moneybag: - ${message.author.username}, has transferred \`$${resulting}\` to ${mentionn}**`//By Cutie Pie azbi//By Cutie Pie azbi
                  );//By Cutie Pie azbi//By Cutie Pie azbi
                  mention.send(//By Cutie Pie azbi//By Cutie Pie azbi
                    `**:atm: | Transfer Receipt**\`\`\`You Have Received \$${resulting}\ From User ${message.author.username}; (ID : ${message.author.id})\`\`\``
                  );//By Cutie Pie azbi//By Cutie Pie azbi
                  credits[author].credits += Math.floor(-args[2]);//By Cutie Pie azbi//By Cutie Pie azbi
                  credits[mentionn.id].credits += Math.floor(+resulting);//By Cutie Pie azbi//By Cutie Pie azbi
                  fs.writeFileSync(
                    "./credits.json",
                    JSON.stringify(credits, null, 4)
                );//By Cutie Pie azbi//By Cutie Pie azbi
          //By Cutie Pie azbi//By Cutie Pie azbi
          s.delete();//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
          m.delete();//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
        })//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
        })//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
      });//By Cutie Pie azbi//By Cutie Pie azbi
    }//By Cutie Pie azbi//By Cutie Pie azbi
  }//By Cutie Pie azbi//By Cutie Pie azbi
 //By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
  if (//By Cutie Pie azbi//By Cutie Pie azbi
    args[0].toLowerCase() === `${prefix}daily`//By Cutie Pie azbi//By Cutie Pie azbi
  ) {//By Cutie Pie azbi//By Cutie Pie azbi
    let cooldown = 8.64e7;//By Cutie Pie azbi//By Cutie Pie azbi
    let Daily = time[message.author.id].time;//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
    if (Daily !== null && cooldown - ((sec(pretty(Date.now(), {colonNotation: true})) * 1000) - Daily) > 0) {//By Cutie Pie azbi//By Cutie Pie azbi
      let times = cooldown - ((sec(pretty(Date.now(), {colonNotation: true})) * 1000) - Daily);//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
      message.channel.send( `**:rolling_eyes: | ${ message.author.username }, your daily credits refreshes in ${pretty(times, { verbose: true })}.**`);//By Cutie Pie azbi//By Cutie Pie azbi
      fs.writeFile("./time.json", JSON.stringify(time), function(e) {//By Cutie Pie azbi//By Cutie Pie azbi
        if (e) throw e;//By Cutie Pie azbi//By Cutie Pie azbi
      });//By Cutie Pie azbi//By Cutie Pie azbi
  //By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
    } else {//By Cutie Pie azbi//By Cutie Pie azbi
      let ammount = [445, 521, 368, 601, 721, 584, 675, 691];//By Cutie Pie azbi//By Cutie Pie azbi
      time[message.author.id] = {//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
       time: Math.floor(sec(pretty(Date.now(), {colonNotation: true})) * 1000)//By Cutie Pie azbi//By Cutie Pie azbi
      }//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
      credits[message.author.id].credits += ammount[Math.floor(Math.random() * ammount.length)];//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
      let msg = `**:moneybag: ${message.author.username}, You got :dollar: `+ammount[Math.floor(Math.random() * ammount.length)]+` daily credits!**`//By Cutie Pie azbi//By Cutie Pie azbi
      message.channel.send(msg);//By Cutie Pie azbi//By Cutie Pie azbi//By Cutie Pie azbi
      fs.writeFile("./credits.json", JSON.stringify(credits), function(e) {//By Cutie Pie azbi//By Cutie Pie azbi
        if (e) throw e;//By Cutie Pie azbi//By Cutie Pie azbi
      });//By Cutie Pie azbi//By Cutie Pie azbi
    }//By Cutie Pie azbi//By Cutie Pie azbi
  }//By Cutie Pie azbi//By Cutie Pie azbi
});//By Cutie Pie azbi//By Cutie Pie azbi

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
            name: "nekoavatar.png",
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
            name: "nekoavatar.png",
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
            name: "nekoavatar.png",
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

client.on("message", async message => {
  let args = message.content.split(" ");
  if (message.content.startsWith(prefix+"help")) {
try {
    message.author.send(`
**${message.guild.name}** prefix is \`#\` 
Commands list at https://probot.io/commands
Dashboard at https://probot.io/ 
Join the support server at discord.gg/ProBot.
`).then(m => m.react("✅")
 )
  } catch(e) {
      message.react("❌")
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
  if (message.content.startsWith(prefix + "test")) {

  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "magik")) {
    let args = message.content.split(" ").slice(1);
    let member = message.mentions.users.first();
	  let	user = member;

    message.channel.fetchMessages({ limit: 100 }).then(messages => {
      const options = {
      url: `https://nekobot.xyz/api/imagegen?type=magik&image=${user.displayAvatarURL}`,
      json: true
    };
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);
    get(options).then(body => {
      message.channel.send({
        files: [
          {
            name: "magik.png",
            attachment: body.message
          }
        ]
      });
    });
});
    
    const options = {
      url: `https://nekobot.xyz/api/imagegen?type=magik&image=${user.displayAvatarURL}`,
      json: true
    };
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.stopTyping();
    }, Math.random() * (1 - 3) + 1 * 1000);
    get(options).then(body => {
      message.channel.send({
        files: [
          {
            name: "magik.png",
            attachment: body.message
          }
        ]
      });
    });
  }
});