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
        `**:bank: | ${mention.username}, Your :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
    }
   else if (!args[2] && mentionn) {
      message.channel.send(
        `** ${mention.username}, :credit_card: balance is \`$${credits[mention.id].credits}\`**`
      );
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
      let first = Math.floor(Math.random() * 10);
      let second = Math.floor(Math.random() * 10);
      let third = Math.floor(Math.random() * 10);
      let fourth = Math.floor(Math.random() * 10);
      let num = `${first}${second}${third}${fourth}`;
      let Price = message.content.split(" ")[2];
      let resulting = Math.floor(Price - Price * (5 / 100));

      message.delete();
      message.channel
        .send(
          `**${message.author.username}, Transfer Fees \`${tax}\`, Amount :\`${resulting}\` **
   type these numbers to confirm : `
        )
        .then(m => {
        const item = speed[Math.floor(Math.random() * speed.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
        /*
message.channel.send('**Game is Start now...!**').then(msg => {         
msg.channel.send(item.type).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
message.channel.sendEmbed("dadae");
            let won = collected.first().author;
          })
        })
    })
        */
          message.channel.sendFile(item.type).then(s => {
            message.channel
              .awaitMessages(r => r.author.id === message.author.id, {
                max: 1,
                time: 20000,
                errors: ["time"]
              })
              .then(collected => {
                if (collected.content === filter) {
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

const speed = [
    {
            "type": "https://cdn.discordapp.com/attachments/690575420461940806/691996929487274014/captcha.png",
        "answers": ["9340"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/690575420461940806/691997171544752168/captcha.png",
        "answers": ["2901"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/690575420461940806/691997239190487070/captcha.png",
        "answers": ["3735"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/690575420461940806/691997294752563310/captcha.png",
        "answers": ["2"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
        "answers": ["امازون"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
        "answers": ["جافاسكربت"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
        "answers": ["سهله مو صعبه"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
        "answers": ["طبق رطب مرق بقر"]
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
        "answers": ["متجر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
        "answers": ["شجرة الأوغيري"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
        "answers": ["عش العصفور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
        "answers": ["قم بكتابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
        "answers": ["كانيكي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
        "answers": ["ليوبليانا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
        "answers": ["هواوي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
        "answers": ["ياخرا"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
        "answers": ["يوم الخميس"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
        "answers": ["DO YOU KNOW THE WAY"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
        "answers": ["الأرض"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
        "answers": ["البوابة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
        "answers": ["الجمل ابو راسين"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
        "answers": ["الحوت الأزرقء"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
        "answers": ["القارب المكسور"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
        "answers": ["المدرسة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
        "answers": ["اليابان"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
        "answers": ["بلايستايشن"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
        "answers": ["جزر القمر"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
        "answers": ["حشيش"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
        "answers": ["سوبراشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
        "answers": ["قوتشي"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
        "answers": ["ايفون"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
        "answers": ["تيستا لاغوسا"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
        "answers": ["بسكوت ابو ولد"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
        "answers": ["تكأكأتم"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
        "answers": ["الجملة المفيدة"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
        "answers": ["الأوسكار"]
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
        "answers": ["كنت امشي وأمشي"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
        "answers": ["لااااق بوتء"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
        "answers": ["ابو ناصر سرى ليله"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
        "answers": ["عدد اللي برمجوني 2"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
        "answers": ["Dark_Neet"]
 
          },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
        "answers": ["بابا سنفور متعاطي"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
        "answers": ["ميرندا حمضيات يلد"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
        "answers": ["هل الدمع من عينه"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
        "answers": ["طارت الطياره طارت"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
        "answers": ["أنا فوق راسي ريشه"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
        "answers": ["فريق النجمة"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
        "answers": ["خالد عبدالرحمن"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
        "answers": ["حبيت مره من قلبي"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
        "answers": ["كرستيانو يزق"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
        "answers": ["أنت قمر يا قمر"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
        "answers": ["انا اجمل مخلوق"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
        "answers": ["دونت تاتش"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
        "answers": ["توم وجيري"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
        "answers": ["دباب اربع كفرات"]
 
              },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
        "answers": ["القرش الأسودد"]
 
              },
    {
   
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
        "answers": ["ددسن موديل 85"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
        "answers": ["الحارثيء"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
        "answers": ["عزازي مسرع"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
        "answers": ["جاكي شاان"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
        "answers": ["دارك نت"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
        "answers": ["فانتاستيك"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
        "answers": ["زباله متنقلة"]
 
    },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
        "answers": ["اكس بوكس يلد"]
 
        },
    {
            "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
        "answers": ["بكسل يالوصخخ"]

    }
];
 
client.on('message', message => {
  if(!message.guild) return;
    let id = message.author.id,prefix="G.";
    if ( message.content == prefix+'speed') {
const item = speed[Math.floor(Math.random() * speed.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {         
msg.channel.send(item.type).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
message.channel.sendEmbed("dadae");
            let won = collected.first().author;
          })
        })
    })
}
});