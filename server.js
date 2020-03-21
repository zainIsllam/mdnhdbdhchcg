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




var DiscordStreamer = require("discordstreamer");
var stream = new DiscordStreamer("NjkwOTU3MTgxNTA3NjAwMzk1.XnZAZA.1suN5BhOHqOD9tZVx77lA7x0F8c", __dirname, {"vc": "498099616013746191", "feed": "670709609782312991", "djs": ["498099158524362764"], "masterUsers": ["458997221170479124"]});
stream.init();