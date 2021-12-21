// GAK USAH RECODE KALO GAK BISA BENERIN🗿//
// KALO ADA ERROR FIX SENDIRI

const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReLexxyOFCectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./media/lib/simple.js");
const hx = require("hxz-api");
const yo = require("tod-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const crypto = require('crypto')
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const encodeUrl = require('encodeurl')
const os = require('os');
const ffmpeg = require("fluent-ffmpeg");
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const imgbb = require('imgbb-uploader')
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./media/lib/functions");
const { color, bgcolor } = require("./media/lib/color");
const { fetchJson } = require("./media/lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./media/lib/ytdl");
const { webp2mp4File } = require("./media/lib/webp2mp4");
const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./media/lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./media/lib/offline");
const { cmdadd } = require("./media/lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./media/lib/voting.json"));
const { addVote, delVote } = require("./media/lib/vote");
const reminder = require("./media/lib/reminder");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const premium = require('./database/premium');
/// PREMIUM ///
let _premium = JSON.parse(fs.readFileSync('./database/premium.json'));
/// PEMBATAS ///
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Tengah Malam 🌌";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat Malam 🌃";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat Sore 🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat Sore 🌄";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat Siang 🌅";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat Pagi 🌤️";
    }
    // change the one with my number: v, same name
banChats = setting.SelfMode
antidel = setting.AntiDellete
antical = setting.AntiCall
readGc = setting.ReadGc
readPc = setting.ReadPc
autovn = setting.AutoVN
autoketik = setting.AutoNgetik
prefix = setting.Prefix
offline = false,
welcome = true,
targetpc = "6282279915237";
owner = setting.OwnerNumber
namabot = setting.NameBot
namaowner = setting.NamaOwner
fakeyoi = setting.FakeNya
ytowner = setting.YtOwner
igowner = setting.IgOwner
grupWa = setting.GrupWa
HunterApi = setting.HunterApi
valkey = setting.ValKey
lolkey = setting.LolHuman
dapapi = setting.DapApi
alpkey = setting.AlphaApi
dhapi = setting.DenApi
nomorowner1 = "@6281317472616";
fake = setting.FakeText
caliphAPI = setting.CalipApi
ziyApi = setting.ZizApi
tb = fs.readFileSync("./media/gambar/fake.jpg");
thumb = fs.readFileSync("./media/gambar/thumb.jpg");
tes = fs.readFileSync("./media/gambar/loli.jpg");
numbernye = "0";
waktu = "-";
alasan = "-";
autojoin = false;
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// Function stick cmd , Sorry enc:v
(function(_0x220e81,_0x3c12ae){const _0x326ebc=_0x482f,_0x4d5749=_0x220e81();while(!![]){try{const _0x553737=-parseInt(_0x326ebc(0x111))/0x1+-parseInt(_0x326ebc(0x117))/0x2*(parseInt(_0x326ebc(0x112))/0x3)+-parseInt(_0x326ebc(0x10b))/0x4+-parseInt(_0x326ebc(0x10d))/0x5*(parseInt(_0x326ebc(0x107))/0x6)+parseInt(_0x326ebc(0x10c))/0x7*(-parseInt(_0x326ebc(0x108))/0x8)+-parseInt(_0x326ebc(0x116))/0x9+parseInt(_0x326ebc(0x110))/0xa;if(_0x553737===_0x3c12ae)break;else _0x4d5749['push'](_0x4d5749['shift']());}catch(_0x560007){_0x4d5749['push'](_0x4d5749['shift']());}}}(_0x2130,0xa9d2e));function _0x482f(_0x5134d7,_0x443d0b){const _0x21307c=_0x2130();return _0x482f=function(_0x482f5f,_0x6b910a){_0x482f5f=_0x482f5f-0x107;let _0x1da0d0=_0x21307c[_0x482f5f];return _0x1da0d0;},_0x482f(_0x5134d7,_0x443d0b);}function _0x2130(){const _0x437b77=['chats','./database/scommand.json','forEach','9248922PmrVDd','8epVsXQ','6poAHid','8HaglVK','push','writeFileSync','1768816vWoYAW','4880729kZirJL','5641595xQHAzi','stringify','keys','54641320ieJwQt','1277418OeBoaa','146766hJMjlB'];_0x2130=function(){return _0x437b77;};return _0x2130();}const addCmd=(_0x2926c8,_0x593445)=>{const _0x55f938=_0x482f,_0x3e419b={'id':_0x2926c8,'chats':_0x593445};_scommand[_0x55f938(0x109)](_0x3e419b),fs[_0x55f938(0x10a)](_0x55f938(0x114),JSON[_0x55f938(0x10e)](_scommand));},getCommandPosition=_0x3d358f=>{const _0x11c0da=_0x482f;let _0x5d17e6=null;Object[_0x11c0da(0x10f)](_scommand)[_0x11c0da(0x115)](_0x47b75e=>{_scommand[_0x47b75e]['id']===_0x3d358f&&(_0x5d17e6=_0x47b75e);});if(_0x5d17e6!==null)return _0x5d17e6;},getCmd=_0x7f0637=>{const _0xf97ace=_0x482f;let _0x5ec3c3=null;Object[_0xf97ace(0x10f)](_scommand)[_0xf97ace(0x115)](_0x1b6b89=>{_scommand[_0x1b6b89]['id']===_0x7f0637&&(_0x5ec3c3=_0x1b6b89);});if(_0x5ec3c3!==null)return _scommand[_0x5ec3c3][_0xf97ace(0x113)];},checkSCommand=_0x325e5e=>{const _0x518522=_0x482f;let _0x2e23c8=![];return Object[_0x518522(0x10f)](_scommand)['forEach'](_0x19a3fb=>{_scommand[_0x19a3fb]['id']===_0x325e5e&&(_0x2e23c8=!![]);}),_0x2e23c8;};
function bold(string) {
return '*' + string + '*'
}   
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = LexxyOFC = async (LexxyOFC, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
    const type = Object.keys(mek.message)[0];
    var l = 1;
    var prefixRegEx = /^[!&z?=#.+\/]/gi;
   let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
    let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
    budy =
      type === "conversation"
        ? mek.message.conversation
        : type === "extendedTextMessage"
        ? mek.message.extendedTextMessage.text
        : "";
    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
     let command = chats.split(/ +/g)[0];
    hit_today.push(command);
    const args = _chats.trim().split(/ +/).slice(1);
   const c = args.join(' ')
   const arg = budy.slice(command.length + 2, budy.length)
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");
    const botNumber = LexxyOFC.user.jid;
    
    const botNumberss = LexxyOFC.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// Auto Read Group 
var ampun = await LexxyOFC.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await LexxyOFC.chatRead(jid)
})
// Auto Read Private 
var chatss = await LexxyOFC.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await LexxyOFC.chatRead(jid)
})
if (autovn) {
	if (autovn === false) return
await LexxyOFC.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await LexxyOFC.updatePresence(from, Presence.composing)
}
// Anti Toxic GC
for (let anju of vien){
if (budy === anju){
result = fs.readFileSync(`./media/vn/toxic.mp3`)
LexxyOFC.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})}
}
    const sender = mek.key.fromMe
      ? LexxyOFC.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? LexxyOFC.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    // const isSelfNumber = config.NomorSELF
    // const isOwner = sender.id === isSelfNumber
    const totalchat = await LexxyOFC.chats.all();
    const ownerNumber = [`6282279915237@s.whatsapp.net`]
    const m = simple.smsg(LexxyOFC, mek);
    const groupMetadata = isGroup ? await LexxyOFC.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const itsMe = mek.key.fromMe ? true : false
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const isPremium = premium.checkPremiumUser(sender, _premium)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? LexxyOFC.user.jid
      : LexxyOFC.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? LexxyOFC.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./media/lib/totalcmd.json"))[0]
      .totalcmd;
    //Y
    const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu}\nSebelum Menggunakan Fitur Bot Verify Terlebih Dahulu Ya`
const daftar2 = 'Ketik Tombol Di Bawah Untuk Verify Kak\nBisa Juga Dengan Ketik .verify'
const daftar3 = [{buttonId: `!verify`,buttonText: {displayText: `Verify😈`,},type: 1,},]
    //MESS
    mess = {
      wait: "➤ *Sedang Proses Kak!*",
      success: "➤ *Berhasil dilakukan!*",
      wrongFormat: "➤ *Format tidak ada di Menu!*",
      error: {
        stick: "➤ *Bukan sticker itu Blok!*",
        apiz: "➤ *Error!*",
        api: "Error Kak",
        Iv: "➤ *Link tidak Valid Kak!*",
      },
      only: {
        group: "*❲❗❳  Khusus dalam Grup!*",
        ownerG: "*❲❗❳ Khusus Pemilik Grup!*",
		ownerB: "*❲❗❳  Lu Owner?*",
		admin: "*❲❗❳  Admin Grup Only!*",
		prem: "*❲❗❳  Premium User Only!*",
		Badmin: "*❲❗❳  Bot Bukan Admin!*"
      },
    };
    
const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
    /*const reply = (teks) => {
      LexxyOFC.sendMessage(from, teks, text, { quoted: mek });
    };*/
/*const reply = (teks) => {
			LexxyOFC.sendMessage(from, teks, text, { thumbnail: tb, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${time} WIB - ${week}`,body:"DON'T CLICK HERE",previewType:"PHOTO",thumbnail:tb,sourceUrl:`https://wa.me/p/6349482305092740/6281220670449`}}})
		};*/
const reply = (teks) => {
			LexxyOFC.sendMessage(from, teks, text, { quoted: mek });
			};		
    const sendMess = (hehe, teks) => {
      LexxyOFC.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? LexxyOFC.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : LexxyOFC.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6283871990243-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: fake,
          surface: 200,
          message: tb,
          orderTitle: "Alpha Botz",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpgThumbnail': fs.readFileSync('./media/gambar/fake.jpg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Love your name
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: tb, //The picture
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`, //Love your name
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake, //The picture
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6283871990243-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpgThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpgThumbnail: thumb } },
    };
const fview = {
      key: { participant: "0@s.whatsapp.net" },
      message: { viewOnceMessage: { title: fake, jpgThumbnail: thumb } },
    };                             
    const fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: tes,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6283871990243-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": tb,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6283871990243-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpgThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6283871990243-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpgThumbnail': tb
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*${fake}*`,
                 "title": `*${fake}*`,
                 'jpegThumbnail': tb
                        }
	                  } 
                     }   
const flexx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `*${fake}*`,
                 "title": `*${fake}*`,
                 'jpegThumbnail': fs.readFileSync("./media/gambar/loli.jpg"),
                        }
	                  } 
                     }   
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpgThumbnail: thumb } },
    };
    const fakethumb = (teks, yes) => {
      LexxyOFC.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./media/gambar/fake.jpg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      LexxyOFC.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6283871990243-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpgThumbnail: fs.readFileSync("./media/gambar/fake.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
LexxyOFC.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		LexxyOFC.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
		
      download(url, "./stik" + names + ".png", async function () {
        console.log("done");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            LexxyOFC.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}  
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpg",
              jpgThumbnail: fs.readFileSync(`./media/gambar/fake.jpg`), //The picture
            },
            title: "ALREADY DONE BRO", //Love your name
            description: "SELF BOT",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "Alpha Botz",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpg",
						"jpgThumbnail": fake.jpg //The picture
					},
					"title": `${ucapanWaktu} ${pushname}`, //Love your name 
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        LexxyOFC.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
LexxyOFC.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });    
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
LexxyOFC.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await LexxyOFC.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await LexxyOFC.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await LexxyOFC.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

        
     const math = (teks) => {
        return Math.floor(teks)
       }
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        LexxyOFC.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      LexxyOFC.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = LexxyOFC.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6283871990243-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/FpE1TXXUzuk0TASzYwX8ZM', "groupName": `Alpha-Bot Inc.`, "footerText": "*_© Alpha Botz_*", "jpgThumbnail": fake.jpg, "caption": teks}}, {quoted:mek})
            LexxyOFC.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            LexxyOFC.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6283871990243-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./media/gambar/fake.jpg`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`Alpha Botz`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
const katalog = (teks) => {
             res = LexxyOFC.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*Alpha Botz*", "thumbnail": tb, "surface": 'CATALOG' }}, {quoted:mek})
             LexxyOFC.relayWAMessage(res)
        }
const replyfakelink = (teks) => {
LexxyOFC.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${namabot}`,
                "body": "𝑩𝒚 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.postimg.cc/TY49kxbp/20211018-224841.jpg",
                "thumbnail": fake,
                "sourceUrl": `https://youtube.com/c/LEX4YOUU`
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
LexxyOFC.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${namabot}`,
                "body": `𝑩𝒚 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍`,
                "mediaType": "10",
                "mediaUrl": `https://youtube.com/c/LEX4YOUU`,
                "thumbnailUrl": "https://k.top4top.io/p_20779elwn0.jpg",
                "thumbnail": tb,
                "sourceUrl": `https://youtube.com/c/LEX4YOUU`,
},mentionedJid:[sender]}, quoted : mek})
};
    //FUNCTION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
//>>>>>>>>>>>>>[ STICKER ]<<<<<<<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./media/sticker/owner.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./media/sticker/notadmin.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./media/sticker/admin.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./media/sticker/wait.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./media/sticker/ok.webp')
			LexxyOFC.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
//>>>>>>>>>>>>>[ PEMBATAS ]<<<<<<<<<<<<<\\		
    cekafk(afk);
    if (!mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (isAfk(mek.key.remoteJid)) return;
        addafk(mek.key.remoteJid);
        heheh = ms(Date.now() - waktu);
        LexxyOFC.sendMessage(
          mek.key.remoteJid,
          `@${owner} Currently Offline!\n\n*Reason :* ${alasan}\n*Since :* ${heheh.hours} Hour, ${heheh.minutes} Minute, ${heheh.seconds} Seconds ago\n\nPlease contact again later`,
          MessageType.text,
          {
            contextInfo: {
              mentionedJid: [`${owner}@s.whatsapp.net`],
              stanzaId: "B826873620DD5947E683E3ABE663F263",
              participant: "0@s.whatsapp.net",
              remoteJid: "status@broadcast",
              quotedMessage: {
                imageMessage: {
                  caption: "*OFFLINE*",
                  jpgThumbnail: fs.readFileSync("./media/gambar/fake.jpg"),
                },
              },
            },
          }
        );
      }
    }
    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  LexxyOFC.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Currently Offline!\n\n *Reason :* ${alasan}\n *Since :* ${heheh.hours} Hour, ${heheh.minutes} Minute, ${heheh.seconds} Seconds ago\n\nPlease Call Again Later`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpgThumbnail: fs.readFileSync("./media/gambar/fake.jpg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }
    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return LexxyOFC.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
      
                
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
    if (isGroup && !isVote) {
      if (budy.toLowerCase() === "vote") {
        let vote = JSON.parse(fs.readFileSync(`./media/lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./media/lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283871990243@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " You have voted",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "✅",
          });
          fs.writeFileSync(`./media/lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Reason*: ${_votes[0].reason}\n*Number of Votes* : ${vote.length} Vote\n*Duration* : ${_votes[0].durasi} Minute\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      } else if (budy.toLowerCase() === "devote") {
        const vote = JSON.parse(fs.readFileSync(`./media/lib/${from}.json`));
        let _votes = JSON.parse(fs.readFileSync(`./media/lib/vote/${from}.json`));
        let fil = vote.map((v) => v.participant);
        let id_vote = sender ? sender : "6283871990243@s.whatsapp.net";
        if (fil.includes(id_vote)) {
          return mentions(
            "@" + sender.split("@")[0] + " You have voted",
            fil,
            true
          );
        } else {
          vote.push({
            participant: id_vote,
            voting: "❌",
          });
          fs.writeFileSync(`./media/lib/${from}.json`, JSON.stringify(vote));
          let _p = [];
          let _vote =
            "*Vote* " +
            "@" +
            _votes[0].votes.split("@")[0] +
            `\n\n*Reason*: ${_votes[0].reason}\n*Number of Votes* : ${vote.length} Vote\n*Duration* : ${_votes[0].durasi} Minute\n\n`;
          for (let i = 0; i < vote.length; i++) {
            _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${
              vote[i].voting
            }\n\n`;
            _p.push(vote[i].participant);
          }
          _p.push(_votes[0].votes);
          mentions(_vote, _p, true);
        }
      }
    }
    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      LexxyOFC.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    //love me if you make
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return reply("am not admin");
        reply("ANTILINK DETECTED!! SORRY YOU WILL BE KICKED ;V");
        LexxyOFC.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isAntiviewonce && m.mtype == "viewOnceMessage") {
      reply(
        `@${sender.split("@")[0]} Detected image/video viewonce!`
      );
      var msg = { ...mek };
      msg.mek = mek.message.viewOnceMessage.message;
      msg.mek[Object.keys(msg.mek)[0]].viewOnce = false;
      LexxyOFC.copyNForward(m.chat, msg);
    }
    if (
      isGroup &&
      isAntihidetag &&
      m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      reply(`@${sender.split("@")[0]} Detected hidetag messages!!`);
      kick(from, sender);
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 700) {
        if (isGroupAdmins) return reply(mess.only.Badmin);
        reply("ANTIVIRTEX DETECTED!! SORRY YOU WILL BE KICKED ;V");
        LexxyOFC.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("YAHAHAHHAHAH", "white")
        );
        LexxyOFC.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }
    if (isGroup && isKickarea && !mek.key.fromMe) {
      if (sender.includes("91")) {
        reply("GRUP ONLY +91!");
        LexxyOFC.groupRemove(from, [sender]);
      }
      }
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await LexxyOFC.setStatus(`Bot Active : ${uptime}`).catch((_) => _);
      settingstatus = new Date() * 1;
    }  
     if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case 'addprem':  
if (!isOwner && !mek.key.fromMe ) return reply(mess.only.owner)
if (args[0] === 'add') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
premium.addPremiumUser(mentioned[0], args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
  } else {
premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
  } else if (args[0] === 'del') {
if (mek.message.extendedTextMessage != undefined) {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
reply('*Success Hapus User Premium*')
  } else {
_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(_premium))
reply('*Success Menambahkan User Premium*')
}
  } else {
reply(mess.wrongFormat)
}
break
case 'gcbot':
reply(`*Grup Developer Bot :*
${grupWa}`)
break
case 'verify':
if (isRegistered) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
 try {
ppimg = await LexxyOFC.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
verif = ` *PENDAFTARAN USER* 」

${bold}💠Nama${bold} : *${pushname}*
${bold}💠API${bold} : *+${sender.split('@')[0]}*
${bold}💠Serial${bold} : *${serialUser}*
${bold}💠Total${bold} : *${_registered.length} Pengguna*`

ok = `${namabot}`
img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
but = [{buttonId: `.menu`,buttonText:{displayText: `Menu`},type:1}]
sendButImage(from, verif, ok, img, but)
setTimeout( () => {
reply(`*Terimakasih Telah Mendaftarkan Diri Ke Database Bot*`)
}, 3000)
break
case 'scbot':
sc =`[  *${namabot}*  ]
Bot Ini Menggunakan Sc Ori Dari YouTube Lexxy Official

𝙄𝙣𝙛𝙤 𝘿𝙚𝙫𝙚𝙡𝙤𝙥𝙚𝙧 ♛
𝐺𝑟𝑢𝑝 𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 :
https://chat.whatsapp.com/LeGxfgT6gjV0sdAOkYC5fG

𝑌𝑜𝑢𝑇𝑢𝑏𝑒 :
https://youtube.com/c/LEX4YOUU

𝑊ℎ𝑎𝑡𝑠𝑎𝑝𝑝 :
Wa.me/6285789004732

𝐺𝑖𝑡ℎ𝑢𝑏 :
https://github.com/Lexxy24`
replywa(sc)
 break
case 'menu':
var z = '```'
groups = LexxyOFC.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = LexxyOFC.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              uptime = process.uptime();
              timestampe = speed();
              latensie = speed() - timestampe
get = await fetchJson(`https://ziy.herokuapp.com/api/hitungmundur?bulan=12&tanggal=31`)
ini = get.result

yoiii =`𝐇𝐢𝐭𝐮𝐧𝐠 𝐌𝐮𝐧𝐝𝐮𝐫 𝐓𝐚𝐡𝐮𝐧 𝐁𝐚𝐫𝐮 ࿋\n${ini}`
yoii =`━━━━━━━━━━━━━━━━━━━━
*「 𝑰𝑵𝑭𝑶 𝑩𝑶𝑻 」*
*📈 Prefix : ${prefix ? "Multi Prefix" : "No Prefix"}*
*🌐 Mode : ${prefix ? "Public" : "Self"}*
*📦 Chat Group : [ ${groups.length} ]*
*📂 Chat Private : [ ${privat.length} ]*
*⚔️ Speed : ${latensie.toFixed(4)} second*
*⏰ Active : ${runtime(process.uptime())}*
━━━━━━━━━━━━━━━━━━`
buttons = [
{buttonId:`${prefix}allmenu`,buttonText:{displayText: 'ALL MENU'},type:1},

{buttonId:`${prefix}owner`,buttonText:{displayText: 'OWNER'},type:1}
]

 buttons = [
{buttonId:`${prefix}allmenu`, buttonText: {displayText: 'ALL MENU'}, type:1},
{buttonId:`${prefix}owner`, buttonText: {displayText: 'OWNER'}, type:1}
]
const menuuu = {
    contentText: `${yoiii}`,
    footerText: `${yoii}`,
    buttons: buttons,
    headerType: 1
}
await LexxyOFC.sendMessage(from, menuuu, MessageType.buttonsMessage, {quoted: flexx})
		break
case 'allmenu':
allmenu =`❏ 𝑶𝑾𝑵𝑬𝑹 𝑴𝑬𝑵𝑼
ꕥ⸗ ${prefix}isbaileys
ꕥ⸗ ${prefix}banchat
ꕥ⸗ ${prefix}unbanchat
ꕥ⸗ ${prefix}listbc
ꕥ⸗ ${prefix}antidelete [ on/off ]
ꕥ⸗ ${prefix}autotype [ on/off ]
ꕥ⸗ ${prefix}autoread [ pc/gc ]
ꕥ⸗ ${prefix}autovn [ on/off ]
ꕥ⸗ ${prefix}anticall [ on/off ]
ꕥ⸗ ${prefix}getcaption
ꕥ⸗ ${prefix}on
ꕥ⸗ ${prefix}off
ꕥ⸗ ${prefix}status
ꕥ⸗ ${prefix}setthumb [ reply image ]
ꕥ⸗ ${prefix}settarget
ꕥ⸗ ${prefix}setfakeimg [ reply image ]
ꕥ⸗ ${prefix}setreply
ꕥ⸗ ${prefix}hacked
ꕥ⸗ ${prefix}setprefix [button]
ꕥ⸗ ${prefix}mode [button]
ꕥ⸗ ${prefix}term [ code ]
ꕥ⸗ ${prefix}eval [ code ]
ꕥ⸗ ${prefix}colongsw [ reply sw ]

❏ 𝑮𝑹𝑶𝑼𝑷 𝑴𝑬𝑵𝑼
ꕥ⸗ ${prefix}grup [button]
ꕥ⸗ ${prefix}promote @tag
ꕥ⸗ ${prefix}demote @tag
ꕥ⸗ ${prefix}setdesc [ teks ]
ꕥ⸗ ${prefix}setname [ teks ]
ꕥ⸗ ${prefix}setppgrup [ reply image ]
ꕥ⸗ ${prefix}kick @tag
ꕥ⸗ ${prefix}add @tag
ꕥ⸗ ${prefix}getbio [ reply chat ]
ꕥ⸗ ${prefix}getname [ reply chat ]
ꕥ⸗ ${prefix}reminder [ msg/2s ]
ꕥ⸗ ${prefix}listonline
ꕥ⸗ ${prefix}sider [ reply chat bot ]
ꕥ⸗ ${prefix}antilink [button]
ꕥ⸗ ${prefix}tod 
ꕥ⸗ ${prefix}tospam [ jumlah ]
ꕥ⸗ ${prefix}antihidetag [button]
ꕥ⸗ ${prefix}antiviewonce [button]
ꕥ⸗ ${prefix}autojoin [button]
ꕥ⸗ ${prefix}antivirtex [button]
ꕥ⸗ ${prefix}kickarea [button]

❏ 𝑴𝑨𝑲𝑬𝑹 𝑴𝑬𝑵𝑼
ꕥ⸗ ${prefix}sticker [ reply image ]
ꕥ⸗ ${prefix}nulis [ teks ]
ꕥ⸗ ${prefix}attp [ teks ]
ꕥ⸗ ${prefix}fancytext [ teks ]
ꕥ⸗ ${prefix}tahta <text>
ꕥ⸗ ${prefix}transformer <text>
ꕥ⸗ ${prefix}epepserti <text>
ꕥ⸗ ${prefix}logoff <text>
ꕥ⸗ ${prefix}maker3d <text>
ꕥ⸗ ${prefix}maker2d <text>
ꕥ⸗ ${prefix}cslogo <text>
ꕥ⸗ ${prefix}matrix <text>
ꕥ⸗ ${prefix}skytext <text>
ꕥ⸗ ${prefix}barcode <text>
ꕥ⸗ ${prefix}naruto <text>
ꕥ⸗ ${prefix}bneon <text>
ꕥ⸗ ${prefix}pubg <text>
ꕥ⸗ ${prefix}snow <text>
ꕥ⸗ ${prefix}cans <text>
ꕥ⸗ ${prefix}ganz <text>
ꕥ⸗ ${prefix}tfire <text>
ꕥ⸗ ${prefix}lithg <text>
ꕥ⸗ ${prefix}wall <text>
ꕥ⸗ ${prefix}dropair <text>
ꕥ⸗ ${prefix}wolf <text>
ꕥ⸗ ${prefix}flower <text>
ꕥ⸗ ${prefix}flame <text>
ꕥ⸗ ${prefix}gplay <text>
ꕥ⸗ ${prefix}splay <text>
ꕥ⸗ ${prefix}serti1 <text>
ꕥ⸗ ${prefix}serti2 <text>
ꕥ⸗ ${prefix}serti3 <text>
ꕥ⸗ ${prefix}serti4 <text>
ꕥ⸗ ${prefix}tomlol <text>
ꕥ⸗ ${prefix}logogx <text>
ꕥ⸗ ${prefix}logogb <text>

❏ 𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫 𝑴𝑬𝑵𝑼
ꕥ⸗ ${prefix}ttmp3 [ link ] <TikTok>
ꕥ⸗ ${prefix}ttmp4 [ link ] <TikTok>
ꕥ⸗ ${prefix}play [ judul ] <MusikMp3>
ꕥ⸗ ${prefix}ytmp3 [ link ] <Musik>
ꕥ⸗ ${prefix}ytmp4 [ link ] <Video>
ꕥ⸗ ${prefix}instagram [ link ]
ꕥ⸗ ${prefix}twitter [ link ]

❏ 𝑶𝑻𝑯𝑬𝑹 𝑴𝑬𝑵𝑼
ꕥ⸗ ${prefix}ping
ꕥ⸗ ${prefix}inspect
ꕥ⸗ ${prefix}join [ link ]
ꕥ⸗ ${prefix}dice
ꕥ⸗ ${prefix}numbers 
ꕥ⸗ ${prefix}calculator
ꕥ⸗ ${prefix}pantun
ꕥ⸗ ${prefix}ss [ link ]
ꕥ⸗ ${prefix}lyrics [ query ]
ꕥ⸗ ${prefix}namemeaning [ nama ]
ꕥ⸗ ${prefix}loli 
ꕥ⸗ ${prefix}earthquakeinfo
ꕥ⸗ ${prefix}recipes
ꕥ⸗ ${prefix}chat
ꕥ⸗ ${prefix}searchmessage [ query ]
ꕥ⸗ ${prefix}get url
ꕥ⸗ ${prefix}githubstalk [ query ]
ꕥ⸗ ${prefix}ytsearch [ query ]
ꕥ⸗ ${prefix}igstalk [ query ]
ꕥ⸗ ${prefix}tiktokstalk [ query ]
ꕥ⸗ ${prefix}video [ query ]
ꕥ⸗ ${prefix}igstory [ username ]
ꕥ⸗ ${prefix}fb [ link ]
ꕥ⸗ ${prefix}brainly [ query ]
ꕥ⸗ ${prefix}image [ query ]
ꕥ⸗ ${prefix}anime [ query ]
ꕥ⸗ ${prefix}pinterest [ query ]
ꕥ⸗ ${prefix}comic [ query ]
ꕥ⸗ ${prefix}lyrics [ query ]
ꕥ⸗ ${prefix}char [ query ]
ꕥ⸗ ${prefix}playstore [ query ]
ꕥ⸗ ${prefix}otaku [ query ]
ꕥ⸗ ${prefix}toimg [ reply image ]
ꕥ⸗ ${prefix}tomp3
ꕥ⸗ ${prefix}tomp4
ꕥ⸗ ${prefix}slow [ reply audio ]
ꕥ⸗ ${prefix}fast [ reply audio ]
ꕥ⸗ ${prefix}reverse
ꕥ⸗ ${prefix}tourl

❏ 𝑺𝑶𝑼𝑵𝑫 𝑴𝑬𝑵𝑼
*Note :* _Total Sound 1-75_

ꕥ⸗ ${prefix}sound1
ꕥ⸗ ${prefix}sound2
ꕥ⸗ ${prefix}sound3
ꕥ⸗ ${prefix}sound4
ꕥ⸗ ${prefix}sound5
ꕥ⸗ ${prefix}sound6
ꕥ⸗ ${prefix}sound7
ꕥ⸗ ${prefix}sound8
ꕥ⸗ ${prefix}sound9
ꕥ⸗ ${prefix}sound10
ꕥ⸗ ${prefix}sound11
ꕥ⸗ ${prefix}sound12
ꕥ⸗ ${prefix}sound13
ꕥ⸗ ${prefix}sound14
ꕥ⸗ ${prefix}sound15

❏ 𝑭𝑼𝑵 𝑴𝑬𝑵𝑼
ꕥ⸗ ${prefix}neko1
ꕥ⸗ ${prefix}neko2
ꕥ⸗ ${prefix}neko3
ꕥ⸗ ${prefix}neko4
ꕥ⸗ ${prefix}neko5
ꕥ⸗ ${prefix}neko6
ꕥ⸗ ${prefix}neko7
ꕥ⸗ ${prefix}neko8
ꕥ⸗ ${prefix}neko9
ꕥ⸗ ${prefix}neko10
ꕥ⸗ ${prefix}neko11
ꕥ⸗ ${prefix}neko12
ꕥ⸗ ${prefix}neko13
ꕥ⸗ ${prefix}neko14
ꕥ⸗ ${prefix}neko15
ꕥ⸗ ${prefix}dosa1
ꕥ⸗ ${prefix}dosa2
ꕥ⸗ ${prefix}dosa3
ꕥ⸗ ${prefix}dosa4
ꕥ⸗ ${prefix}dosa5
ꕥ⸗ ${prefix}dosa6
ꕥ⸗ ${prefix}dosa7
ꕥ⸗ ${prefix}dosa8
ꕥ⸗ ${prefix}dosa9
ꕥ⸗ ${prefix}dosa10
ꕥ⸗ ${prefix}dosa11
ꕥ⸗ ${prefix}dosa12
ꕥ⸗ ${prefix}dosa13
ꕥ⸗ ${prefix}dosa14
ꕥ⸗ ${prefix}dosa15

❏ 𝑹𝑨𝑵𝑫𝑶𝑴 𝑴𝑬𝑵𝑼
ꕥ⸗ ${prefix}pantun
ꕥ⸗ ${prefix}quote
ꕥ⸗ ${prefix}nickff
ꕥ⸗ ${prefix}darkjoke
ꕥ⸗ ${prefix}meme
ꕥ⸗ ${prefix}estetik
ꕥ⸗ ${prefix}jadwaltv
ꕥ⸗ ${prefix}jadwalsholat
ꕥ⸗ ${prefix}resep
ꕥ⸗ ${prefix}lomli
ꕥ⸗ ${prefix}quotesmuslim
ꕥ⸗ ${prefix}asupan
ꕥ⸗ ${prefix}ass
ꕥ⸗ ${prefix}santuy
ꕥ⸗ ${prefix}leaky
ꕥ⸗ ${prefix}ukhti
ꕥ⸗ ${prefix}rika
ꕥ⸗ ${prefix}ghea
━━━━━━━━━━━━━━━━━━`
reply(allmenu)
break
       case 'rules':
            ruls =`*[ RULES BOT ]*
Patuhi atau Kena *Sanksi* dari Owner!

1. Jangan Spam Bot!
Sanksi: *WARN/SOFT BLOCK*

2. Jangan Call / VC Bot!
Sanksi: *SOFT BLOCK*

3. Jangan Mengejek SC Bot!
Sanksi: *PERMANENT BLOCK*

4. Gakpapa SC Jelek
Yang Penting Gak Copas Wkwk.
Jika Sudah Dipahami Rules-nya, Silahkan ketik *${prefix}menu*

*[ OWNER BOT ]*
https://wa.me/${owner}
Mau Chat? *Utamakan kesopanan!*`
reply(ruls)
break
case 'isbaileys': 
case 'bail':
case 'baileys':
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (!mek.key.fromMe) return;
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'iggw':
  reply('https://www.instagram.com/rellnjoy_')
break
      /*case "owner":
        sendKontak(from, owner, "Alpha Botz", "Busy");*/
             case 'setprofile':
			case 'setpp':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				LexxyOFC.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('➤ *Reply imagenya!*')
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await LexxyOFC.downloadAndSaveMediaMessage(enmediau)
					await LexxyOFC.updateProfilePicture(botNumber, mediau)
					reply('*➤ Berhasil kak!*\nSupport 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍')
					break
 case 'owner':
    case 'creator':
               sendKontak(from, `${owner}`, `${namaowner} 🐣✨`)
               await sleep(1000)
               break      
              case 'dice':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			LexxyOFC.sendMessage(from, damdu, sticker, {quoted: mek})
			break
        // banchat fixed by Alpha Botz
case "banchat":
if (!isGroup) return reply(mess.only.group)
if (!itsMe && !isOwner && !isGroupAdmins)return mentions(`*This Order is Special @${ownerN} !*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`already banned`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Successful disabled bot in this group`)
break;

case "unbanchat":
if (!itsMe && !isOwner)return reply(mess.only.ownerB)
if (!isBanchat) return reply(`Already at UnBan`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`The bot has been unbanned in this group`)
break;

case "listbanchat": case "listbc":
 teks = `*List Banchat Group!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await LexxyOFC.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nama Group : ' + met.subject + '\n\n'
}
reply(teks)
break;
      case "antilink":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply("only admin can do this");
        if (args[0] == "on") {
          if (isAntilink) return reply("Activated!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("*Berhasil Mengaktifkan Antilink!*");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("*Antilink dimatikan di Group Ini!*");
        } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `*Pilih salah satu Dibawah!*`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antihidetag":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply("only admin can do this");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Activated!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Successfully activated antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Successfully turn off antihidetag!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `*Pilih salah satu Dibawah!*`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `ON`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `OFF`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
      case "antiviewonce":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Admin only");
        if (args[0] == "on") {
          if (isAntiviewonce) return reply("Activated!!");
          antivo.push(from);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Successfully activated antiviewonce!");
        } else if (args[0] == "off") {
          antivo.splice(from, 1);
          fs.writeFileSync("./database/antivo.json", JSON.stringify(antivo));
          reply("Successfully turn off antiviewonce!");
        } else if (!q) {
          sendButMessage(
            from,
            `MODE ANTIVIEWONCE`,
            `Please choose one`,
            [
              {
                buttonId: `${prefix}antiviewonce on`,
                buttonText: {
                  displayText: `ON`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antiviewonce off`,
                buttonText: {
                  displayText: `OFF`,
                },
                type: 1,
              },
            ]
          );
        }
        break;
       case "autotype":
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Choose on or off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Success activate autotype`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Success turns off autotype`)
} else {
reply(`Choose on or off`)
}
break;
case "autovn":
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('Choose on or off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
reply(`Success activated autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(`Successfully off autovn`)
} else {
reply(`Choose on or off`)
}
break;
case "anticall":
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Choose on or off')
if (args[0] === "on") {
if(antical)return reply('Its been activated before!')
antical = true
reply(`Success activate anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('Its been deactivated before!')
antical = false
reply(`Success turn off anticall`)
} else {
reply(`Choose on or off`)
}
break;

case "autoread":
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return
readGc = true
reply(`Success activated autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Success turning off autoread group`)
} else {
reply(`Choose on or off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return
readPc = true
reply(`Success activate autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Success turning off PC autoread`)
} else {
reply(`Choose on or off`)
}
} else {
reply(`*List Auto Read*\n➤ gc\n➤ pc`)
}
break;
      case "autojoin":
        if (!isGroup) return reply(mess.only.group);
        if (!mek.key.fromMe) return reply("only owner can do this");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Activated!!");
          autojoin = true;
          reply("Successfully activate autojoin!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Successfully turn off autojoin!");
        } else if (!q) {
          sendButMessage(from, `MODE AUTOJOIN`, `Please choose one`, [
            {
              buttonId: `${prefix}autojoin on`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}autojoin off`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "antivirtex":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
        if (args[0] == "on") {
          if (isAntivirtex) return reply("*Udah aktif!*");
          antivirtex.push(from);
          fs.writeFileSync(
            "./database/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply("*Berhasil Mengaktifkan AntiVirtex!*");
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./database/antivirtex.json", JSON.stringify(ant));
          reply("*Antivirtex dimatikan di Group ini!*");
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `*Pilih salah satu Dibawah!*`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
      case "kickarea":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply("only admin can do this");
        if (args[0] == "on") {
          if (isKickarea) return reply("Activated!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Successfully activate kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/antibule.json",
            JSON.stringify(kickarea)
          );
          reply("Successfully turn off kickarea!");
        } else if (!q) {
          sendButMessage(from, `MODE KICKAREA`, `Please choose one`, [
            {
              buttonId: `${prefix}kickarea on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}kickarea off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Group Features >-------------------
      case "listonline": //code by Alpha Botz
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(LexxyOFC.chats.get(id).presences),
            LexxyOFC.user.jid,
          ];
          LexxyOFC.reply(
            m.chat,
            "┌─〔 *ONLINE MEMBERS* 〕\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n└────",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
         } catch (e) {
          m.reply("");
        }
        break;
      case "sider": //code by Alpha Botz
        if (!m.quoted) throw `Reply to bot messages!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await LexxyOFC.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await LexxyOFC.messageInfo(
          m.quoted.chat,
          m.quoted.id
        );
        let txt = `
*Read by:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Sent to:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `${jid.split`@`[0]}\n_${formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
          contextInfo: {
            mentionedJid: LexxyOFC.parseMention(txt),
          },
        });
        break;
        //━━━━━━━━━━━━━━━[ Action Menu  ]━━━━━━━━━━━━━━━━━//        
case 'bg1':
qute = fs.readFileSync('./media/action/image/bg1.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg2':
qute = fs.readFileSync('./media/action/image/bg2.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg3':
qute = fs.readFileSync('./media/action/image/bg3.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg4':
qute = fs.readFileSync('./media/action/image/bg4.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg5':
qute = fs.readFileSync('./media/action/image/bg5.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg6':
qute = fs.readFileSync('./media/action/image/bg6.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg7':
qute = fs.readFileSync('./media/action/image/bg7.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg8':
qute = fs.readFileSync('./media/action/image/bg8.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg9':
qute = fs.readFileSync('./media/action/image/bg9.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg10':
qute = fs.readFileSync('./media/action/image/bg10.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg11':
qute = fs.readFileSync('./media/action/image/bg11.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg12':
qute = fs.readFileSync('./media/action/image/bg12.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg13':
qute = fs.readFileSync('./media/action/image/bg13.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg14':
qute = fs.readFileSync('./media/action/image/bg14.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
case 'bg15':
qute = fs.readFileSync('./media/action/image/bg15.jpeg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'Nih Kak Hasilnya ^_^'})
break
        //━━━━━━━━━━━━━━━[ Neko Menu  ]━━━━━━━━━━━━━━━━━//        
                 case 'neko1':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko2':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko3':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko4':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko5':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_Chichi-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko6':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_Chichi-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko7':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko8':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_Himekishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'neko9':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftex, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break                
        //━━━━━━━━━━━━━━━[ Dosa Menu  ]━━━━━━━━━━━━━━━━━//
case 'dosa1':				 

qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })

break

case 'dosa2':

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'dosa3':	

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'dosa4':	

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'dosa5':	

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'dosa6':	

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'dosa7':

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'dosa8':	

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'dosa10':	

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break

case 'dosa11':	

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   

break

case 'dosa12':	

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   

break

case 'dosa13':	

qute = fs.readFileSync('./media/gambar/thumb.jpg') 

LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   

break
case 'dosa14':	
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
break
case 'dosa15':
qute = fs.readFileSync('./media/gambar/thumb.jpg') 
LexxyOFC.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
break
      case "q":
        if (!m.quoted) return reply("reply message!");
        let qse = LexxyOFC.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("the message you replied does not contain a reply!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (!isGroup) return reply(mess.only.group);
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply(mess.only.Badmin);
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("*Tag yang mau di Kick!*");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          LexxyOFC.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          LexxyOFC.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          LexxyOFC.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
sound
      case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case 'sound70':
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
          break
      case 'sound71':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
      case 'sound75':
      omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
          break      
case "add":
					if (!isGroup) return reply(mess.only.group);
				    if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin);
					if (!isBotGroupAdmins) return reply(mess.only.Badmin);
					if (args.length < 1) return reply('do you want to add a genie?')
					if (args[0].startsWith('08')) return reply('use the country code')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						LexxyOFC.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('*Gagal menambahkan!* Mungkin di Private')
					}
					break;
      case "getbio":
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await LexxyOFC.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Status Profile Not Found");
        }
        break;
      // Get Name
      case "getname":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          LexxyOFC.contacts[ambl] != undefined
            ? LexxyOFC.contacts[ambl].sname || LexxyOFC.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply(mess.only.Badmin);
        if (!isGroup) return;
        LexxyOFC.groupUpdateDescription(from, `${args.join(" ")}`);
        LexxyOFC.sendMessage(from, "*Berhasil mengubah Deskripsi Grup!*", text, {
          quoted: mek,
        });
        break;
        // Jadwal Pljrn
       case 'matpel':
              result =`• 𝗦𝗲𝗹𝘂𝗿𝘂𝗵 𝘁𝘂𝗷𝘂𝗮𝗻 𝗽𝗲𝗻𝗱𝗶𝗱𝗶𝗸𝗮𝗻 𝗮𝗱𝗮𝗹𝗮𝗵 𝗠𝗲𝗻𝗴𝘂𝗯𝗮𝗵 𝗰𝗲𝗿𝗺𝗶𝗻 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 𝗝𝗲𝗻𝗱𝗲𝗹𝗮.\n*[ Yadika 2k21 ]*`
              buttons = [{buttonId:`${prefix}senin`,buttonText:{displayText:'SENIN'},type:1},{buttonId:`${prefix}selasa`,buttonText:{displayText:'SELASA'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Sukses berawal dari Proses!', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
         case 'senin':
              result =`*[ MATPEL HARI SENIN ]*\nSMP Yadika 12 - IX B\n*Usaha Tidak Mengkhianati Hasil!*\n\n➣ Bahasa inggris\n➣ BP/BK\n➣ PPKN\n➣ Bahasa Indonesia\n\n"𝗠𝘂𝗹𝗮𝗶𝗹𝗮𝗵 𝗱𝗮𝗿𝗶 𝗺𝗮𝗻𝗮 𝗸𝗮𝗺𝘂 𝗯𝗲𝗿𝗮𝗱𝗮, 𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗺𝗶𝗹𝗶𝗸𝗶. 𝗟𝗮𝗸𝘂𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗯𝗶𝘀𝗮!"`
              buttons = [{buttonId: `${prefix}selasa`,
              buttonText:{displayText: 'SELASA'},type:1},{buttonId:`${prefix}rabu`,buttonText:{displayText:'RABU'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: '*Semangat Belajarnya!*', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
         case 'rabu':
              result =`*[ MATPEL HARI RABU ]*\nSMP Yadika 12 - IX B\n*Usaha Tidak Mengkhianati Hasil!*\n\n➣ EC\n➣ BP/BK\n➣ PPKN\n➣ Seni Budaya\n➣ Matematika\n\n"𝗠𝘂𝗹𝗮𝗶𝗹𝗮𝗵 𝗱𝗮𝗿𝗶 𝗺𝗮𝗻𝗮 𝗸𝗮𝗺𝘂 𝗯𝗲𝗿𝗮𝗱𝗮, 𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗺𝗶𝗹𝗶𝗸𝗶. 𝗟𝗮𝗸𝘂𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗯𝗶𝘀𝗮!"`
              buttons = [{buttonId: `${prefix}kamis`,
              buttonText:{displayText: 'KAMIS'},type:1},{buttonId:`${prefix}jumat`,buttonText:{displayText:'JUMAT'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: '*Semangat Belajarnya!*', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
          case 'selasa':
              result =`*[ MATPEL HARI SELASA ]*\nSMP Yadika 12 - IX B\n*Usaha Tidak Mengkhianati Hasil!*\n\n➣ IPA\n➣ Matematika\n➣ Seni Budaya\n➣ Bahasa Mandarin\n\n"𝗠𝘂𝗹𝗮𝗶𝗹𝗮𝗵 𝗱𝗮𝗿𝗶 𝗺𝗮𝗻𝗮 𝗸𝗮𝗺𝘂 𝗯𝗲𝗿𝗮𝗱𝗮, 𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗺𝗶𝗹𝗶𝗸𝗶. 𝗟𝗮𝗸𝘂𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗯𝗶𝘀𝗮!"`
              buttons = [{buttonId: `${prefix}rabu`,
              buttonText:{displayText: 'RABU'},type:1},{buttonId:`${prefix}KAMIS`,buttonText:{displayText:'KAMIS'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: '*Semangat Belajarnya!*', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
          case 'kamis':
              result =`*[ MATPEL HARI KAMIS ]*\nSMP Yadika 12 - IX B\n*Usaha Tidak Mengkhianati Hasil!*\n\n➣ TIK\n➣ Pend. Agama\n➣ Bahasa Indonesia\n➣ SBK\n➣ Penjaskes\n\n"𝗠𝘂𝗹𝗮𝗶𝗹𝗮𝗵 𝗱𝗮𝗿𝗶 𝗺𝗮𝗻𝗮 𝗸𝗮𝗺𝘂 𝗯𝗲𝗿𝗮𝗱𝗮, 𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗺𝗶𝗹𝗶𝗸𝗶. 𝗟𝗮𝗸𝘂𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗯𝗶𝘀𝗮!"`
              buttons = [{buttonId: `${prefix}jumat`,
              buttonText:{displayText: 'JUMAT'},type:1},{buttonId:`${prefix}sabtu`,buttonText:{displayText:'SABTU'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: '*Semangat Belajarnya!*', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
          case 'jumat':
              result =`*[ MATPEL HARI JUMAT ]*\nSMP Yadika 12 - IX B\n*Usaha Tidak Mengkhianati Hasil!*\n\n➣ IPA\n➣ Matematika\n➣ Seni Budaya\n➣ Bahasa Mandarin\n\n"𝗠𝘂𝗹𝗮𝗶𝗹𝗮𝗵 𝗱𝗮𝗿𝗶 𝗺𝗮𝗻𝗮 𝗸𝗮𝗺𝘂 𝗯𝗲𝗿𝗮𝗱𝗮, 𝗚𝘂𝗻𝗮𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗺𝗶𝗹𝗶𝗸𝗶. 𝗟𝗮𝗸𝘂𝗸𝗮𝗻 𝗮𝗽𝗮 𝘆𝗴 𝗸𝗮𝗺𝘂 𝗯𝗶𝘀𝗮!"`
              buttons = [{buttonId: `${prefix}jumat`,
              buttonText:{displayText: 'JUMAT'},type:1},{buttonId:`${prefix}matpel`,buttonText:{displayText:'SABTU'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: '*Semangat Belajarnya!*', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
           case 'sabtu':
ruls =`*• XrutzBot Menyatakan bahwa :*
*Hari Sabtu adalah Hari =*
© 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍

 Libur Sekolah
  Libur Sekolah
   Libur Sekolah
    Libur Sekolah
     Libur Sekolah
      Libur Sekolah
       Libur Sekolah
        Libur Sekolah
         Libur Sekolah
          Libur Sekolah
            Libur Sekolah
             Libur Sekolah
              Libur Sekolah
               Libur Sekolah
                Libur Sekolah
                 Libur Sekolah
                  Libur Sekolah
                   Libur Sekolah
                    Libur Sekolah
                     Libur Sekolah
                      Libur Sekolah
                       Libur Sekolah
                        Libur Sekolah
                         Libur Sekolah
                          Libur Sekolah
                           Libur Sekolah
                            Libur Sekolah
                             Libur Sekolah
                              Libur Sekolah
                               Libur Sekolah
                                Libur Sekolah
                                 Libur Sekolah
                                  Libur Sekolah
                                   Libur Sekolah
                                    Libur Sekolah
                                     Libur Sekolah
                                      Libur Sekolah
                                       Libur Sekolah
                                        Libur Sekolah
                                         Libur Sekolah
                                          Libur Sekolah
                                           Libur Sekolah
                                            Libur Sekolah
                                           Libur Sekolah
                                          Libur Sekolah
                                         Libur Sekolah
                                        Libur Sekolah
                                       Libur Sekolah
                                      Libur Sekolah
                                     Libur Sekolah
                                    Libur Sekolah
                                   Libur Sekolah
                                  Libur Sekolah
                                 Libur Sekolah
                                Libur Sekolah
                               Libur Sekolah
                              Libur Sekolah
                             Libur Sekolah
                            Libur Sekolah
                           Libur Sekolah
                          Libur Sekolah
                         Libur Sekolah
                        Libur Sekolah
                       Libur Sekolah
                      Libur Sekolah
                     Libur Sekolah
                    Libur Sekolah
                   Libur Sekolah
                  Libur Sekolah
                 Libur Sekolah
                Libur Sekolah
               Libur Sekolah
              Libur Sekolah
             Libur Sekolah
            Libur Sekolah
           Libur Sekolah
          Libur Sekolah
         Libur Sekolah
        Libur Sekolah
       Libur Sekolah
      Libur Sekolah
     Libur Sekolah
    Libur Sekolah
   Libur Sekolah
  Libur Sekolah
 Libur Sekolah
  Libur Sekolah
   Libur Sekolah
    Libur Sekolah
     Libur Sekolah
      Libur Sekolah
       Libur Sekolah
        Libur Sekolah
         Libur Sekolah
          Libur Sekolah
            Libur Sekolah
             Libur Sekolah
              Libur Sekolah
               Libur Sekolah
                Libur Sekolah
                 Libur Sekolah
                  Libur Sekolah
                   Libur Sekolah
                    Libur Sekolah
                     Libur Sekolah
                      Libur Sekolah
                       Libur Sekolah
                        Libur Sekolah
                         Libur Sekolah
                          Libur Sekolah
                           Libur Sekolah
                            Libur Sekolah
                             Libur Sekolah
                              Libur Sekolah
                               Libur Sekolah
                                Libur Sekolah
                                 Libur Sekolah
                                  Libur Sekolah
                                   Libur Sekolah
                                    Libur Sekolah
                                     Libur Sekolah
                                      Libur Sekolah
                                       Libur Sekolah
                                        Libur Sekolah
                                         Libur Sekolah
                                          Libur Sekolah
                                           Libur Sekolah
                                            Libur Sekolah
                                           Libur Sekolah
                                          Libur Sekolah
                                         Libur Sekolah
                                        Libur Sekolah
                                       Libur Sekolah
                                      Libur Sekolah
                                     Libur Sekolah
                                    Libur Sekolah
                                   Libur Sekolah
                                  Libur Sekolah
                                 Libur Sekolah
                                Libur Sekolah
                               Libur Sekolah
                              Libur Sekolah
                             Libur Sekolah
                            Libur Sekolah
                           Libur Sekolah
                          Libur Sekolah
                         Libur Sekolah
                        Libur Sekolah
                       Libur Sekolah
                      Libur Sekolah
                     Libur Sekolah
                    Libur Sekolah
                   Libur Sekolah
                  Libur Sekolah
                 Libur Sekolah
                Libur Sekolah
               Libur Sekolah
              Libur Sekolah
             Libur Sekolah
            Libur Sekolah
           Libur Sekolah
          Libur Sekolah
         Libur Sekolah
        Libur Sekolah
       Libur Sekolah
      Libur Sekolah
     Libur Sekolah
    Libur Sekolah
   Libur Sekolah
  Libur Sekolah
 Libur Sekolah
  Libur Sekolah
   Libur Sekolah
    Libur Sekolah
     Libur Sekolah
      Libur Sekolah
       Libur Sekolah
        Libur Sekolah
         Libur Sekolah
          Libur Sekolah
            Libur Sekolah
             Libur Sekolah
              Libur Sekolah
               Libur Sekolah
                Libur Sekolah
                 Libur Sekolah
                  Libur Sekolah
                   Libur Sekolah
                    Libur Sekolah
                     Libur Sekolah
                      Libur Sekolah
                       Libur Sekolah
                        Libur Sekolah
                         Libur Sekolah
                          Libur Sekolah
                           Libur Sekolah
                            Libur Sekolah
                             Libur Sekolah
                              Libur Sekolah
                               Libur Sekolah
                                Libur Sekolah
                                 Libur Sekolah
                                  Libur Sekolah
                                   Libur Sekolah
                                    Libur Sekolah
                                     Libur Sekolah
                                      Libur Sekolah
                                       Libur Sekolah
                                        Libur Sekolah
                                         Libur Sekolah
                                          Libur Sekolah
                                           Libur Sekolah
                                            Libur Sekolah
                                           Libur Sekolah
                                          Libur Sekolah
                                         Libur Sekolah
                                        Libur Sekolah
                                       Libur Sekolah
                                      Libur Sekolah
                                     Libur Sekolah
                                    Libur Sekolah
                                   Libur Sekolah
                                  Libur Sekolah
                                 Libur Sekolah
                                Libur Sekolah
                               Libur Sekolah
                              Libur Sekolah
                             Libur Sekolah
                            Libur Sekolah
                           Libur Sekolah
                          Libur Sekolah
                         Libur Sekolah
                        Libur Sekolah
                       Libur Sekolah
                      Libur Sekolah
                     Libur Sekolah
                    Libur Sekolah
                   Libur Sekolah
                  Libur Sekolah
                 Libur Sekolah
                Libur Sekolah
               Libur Sekolah
              Libur Sekolah
             Libur Sekolah
            Libur Sekolah
           Libur Sekolah
          Libur Sekolah
         Libur Sekolah
        Libur Sekolah
       Libur Sekolah
      Libur Sekolah
     Libur Sekolah
    Libur Sekolah
   Libur Sekolah
  Libur Sekolah
 Libur Sekolah
  Libur Sekolah
   Libur Sekolah
    Libur Sekolah
     Libur Sekolah
      Libur Sekolah
       Libur Sekolah
        Libur Sekolah
         Libur Sekolah
          Libur Sekolah
            Libur Sekolah
             Libur Sekolah
              Libur Sekolah
               Libur Sekolah
                Libur Sekolah
                 Libur Sekolah
                  Libur Sekolah
                   Libur Sekolah
                    Libur Sekolah
                     Libur Sekolah
                      Libur Sekolah
                       Libur Sekolah
                        Libur Sekolah
                         Libur Sekolah
                          Libur Sekolah
                           Libur Sekolah
                            Libur Sekolah
                             Libur Sekolah
                              Libur Sekolah
                               Libur Sekolah
                                Libur Sekolah
                                 Libur Sekolah
                                  Libur Sekolah
                                   Libur Sekolah
                                    Libur Sekolah
                                     Libur Sekolah
                                      Libur Sekolah
                                       Libur Sekolah
                                        Libur Sekolah
                                         Libur Sekolah
                                          Libur Sekolah
                                           Libur Sekolah
                                            Libur Sekolah
                                           Libur Sekolah
                                          Libur Sekolah
                                         Libur Sekolah
                                        Libur Sekolah
                                       Libur Sekolah
                                      Libur Sekolah
                                     Libur Sekolah
                                    Libur Sekolah
                                   Libur Sekolah
                                  Libur Sekolah
                                 Libur Sekolah
                                Libur Sekolah
                               Libur Sekolah
                              Libur Sekolah
                             Libur Sekolah
                            Libur Sekolah
                           Libur Sekolah
                          Libur Sekolah
                         Libur Sekolah
                        Libur Sekolah
                       Libur Sekolah
                      Libur Sekolah
                     Libur Sekolah
                    Libur Sekolah
                   Libur Sekolah
                  Libur Sekolah
                 Libur Sekolah
                Libur Sekolah
               Libur Sekolah
              Libur Sekolah
             Libur Sekolah
            Libur Sekolah
           Libur Sekolah
          Libur Sekolah
         Libur Sekolah
        Libur Sekolah
       Libur Sekolah
      Libur Sekolah
     Libur Sekolah
    Libur Sekolah
   Libur Sekolah
  Libur Sekolah
 Libur Sekolah
  Libur Sekolah
   Libur Sekolah
    Libur Sekolah
     Libur Sekolah
      Libur Sekolah
       Libur Sekolah
        Libur Sekolah
         Libur Sekolah
          Libur Sekolah
            Libur Sekolah
             Libur Sekolah
              Libur Sekolah
               Libur Sekolah
                Libur Sekolah
                 Libur Sekolah
                  Libur Sekolah
                   Libur Sekolah
                    Libur Sekolah
                     Libur Sekolah
                      Libur Sekolah
                       Libur Sekolah
                        Libur Sekolah
                         Libur Sekolah
                          Libur Sekolah
                           Libur Sekolah
                            Libur Sekolah
                             Libur Sekolah
                              Libur Sekolah
                               Libur Sekolah
                                Libur Sekolah
                                 Libur Sekolah
                                  Libur Sekolah
                                   Libur Sekolah
                                    Libur Sekolah
                                     Libur Sekolah
                                      Libur Sekolah
                                       Libur Sekolah
                                        Libur Sekolah
                                         Libur Sekolah
                                          Libur Sekolah
                                           Libur Sekolah
                                            Libur Sekolah
                                           Libur Sekolah
                                          Libur Sekolah
                                         Libur Sekolah
                                        Libur Sekolah
                                       Libur Sekolah
                                      Libur Sekolah
                                     Libur Sekolah
                                    Libur Sekolah
                                   Libur Sekolah
                                  Libur Sekolah
                                 Libur Sekolah
                                Libur Sekolah
                               Libur Sekolah
                              Libur Sekolah
                             Libur Sekolah
                            Libur Sekolah
                           Libur Sekolah
                          Libur Sekolah
                         Libur Sekolah
                        Libur Sekolah
                       Libur Sekolah
                      Libur Sekolah
                     Libur Sekolah
                    Libur Sekolah
                   Libur Sekolah
                  Libur Sekolah
                 Libur Sekolah
                Libur Sekolah
               Libur Sekolah
              Libur Sekolah
             Libur Sekolah
            Libur Sekolah
           Libur Sekolah
          Libur Sekolah
         Libur Sekolah
        Libur Sekolah
       Libur Sekolah
      Libur Sekolah
     Libur Sekolah
    Libur Sekolah
   Libur Sekolah
  Libur Sekolah
 Libur Sekolah
  Libur Sekolah
   Libur Sekolah
    Libur Sekolah
     Libur Sekolah
      Libur Sekolah
       Libur Sekolah
        Libur Sekolah
         Libur Sekolah
          Libur Sekolah
            Libur Sekolah
             Libur Sekolah
              Libur Sekolah
               Libur Sekolah
                Libur Sekolah
                 Libur Sekolah
                  Libur Sekolah
                   Libur Sekolah
                    Libur Sekolah
                     Libur Sekolah
                      Libur Sekolah
                       Libur Sekolah
                        Libur Sekolah
                         Libur Sekolah
                          Libur Sekolah
                           Libur Sekolah
                            Libur Sekolah
                             Libur Sekolah
                              Libur Sekolah
                               Libur Sekolah
                                Libur Sekolah
                                 Libur Sekolah
                                  Libur Sekolah
                                   Libur Sekolah
                                    Libur Sekolah
                                     Libur Sekolah
                                      Libur Sekolah
                                       Libur Sekolah
                                        Libur Sekolah
                                         Libur Sekolah
                                          Libur Sekolah
                                           Libur Sekolah
                                            Libur Sekolah
                                           Libur Sekolah
                                          Libur Sekolah
                                         Libur Sekolah
                                        Libur Sekolah
                                       Libur Sekolah
                                      Libur Sekolah
                                     Libur Sekolah
                                    Libur Sekolah
                                   Libur Sekolah
                                  Libur Sekolah
                                 Libur Sekolah
                                Libur Sekolah
                               Libur Sekolah
                              Libur Sekolah
                             Libur Sekolah
                            Libur Sekolah
                           Libur Sekolah
                          Libur Sekolah
                         Libur Sekolah
                        Libur Sekolah
                       Libur Sekolah
                      Libur Sekolah
                     Libur Sekolah
                    Libur Sekolah
                   Libur Sekolah
                  Libur Sekolah
                 Libur Sekolah
                Libur Sekolah
               Libur Sekolah
              Libur Sekolah
             Libur Sekolah
            Libur Sekolah
           Libur Sekolah
          Libur Sekolah
         Libur Sekolah
        Libur Sekolah
       Libur Sekolah
      Libur Sekolah
     Libur Sekolah
    Libur Sekolah
   Libur Sekolah
  Libur Sekolah
 Libur Sekolah
  Libur Sekolah
   Libur Sekolah
    Libur Sekolah
     Libur Sekolah
      Libur Sekolah
       Libur Sekolah
        Libur Sekolah
         Libur Sekolah
          Libur Sekolah
            Libur Sekolah
             Libur Sekolah
              Libur Sekolah
               Libur Sekolah
                Libur Sekolah
                 Libur Sekolah
                  Libur Sekolah
                   Libur Sekolah
                    Libur Sekolah
                     Libur Sekolah
                      Libur Sekolah
                       Libur Sekolah
                        Libur Sekolah
                         Libur Sekolah
                          Libur Sekolah
                           Libur Sekolah
                            Libur Sekolah
                             Libur Sekolah
                              Libur Sekolah
                               Libur Sekolah
                                Libur Sekolah
                                 Libur Sekolah
                                  Libur Sekolah
                                   Libur Sekolah
                                    Libur Sekolah
                                     Libur Sekolah
                                      Libur Sekolah
                                       Libur Sekolah
                                        Libur Sekolah
                                         Libur Sekolah
                                          Libur Sekolah
                                           Libur Sekolah
                                            Libur Sekolah
                                           Libur Sekolah
                                          Libur Sekolah
                                         Libur Sekolah
                                        Libur Sekolah
                                       Libur Sekolah
                                      Libur Sekolah
                                     Libur Sekolah
                                    Libur Sekolah
                                   Libur Sekolah
                                  Libur Sekolah
                                 Libur Sekolah
                                Libur Sekolah
                               Libur Sekolah
                              Libur Sekolah
                             Libur Sekolah
                            Libur Sekolah
                           Libur Sekolah
                          Libur Sekolah
                         Libur Sekolah
                        Libur Sekolah
                       Libur Sekolah
                      Libur Sekolah
                     Libur Sekolah
                    Libur Sekolah
                   Libur Sekolah
                  Libur Sekolah
                 Libur Sekolah
                Libur Sekolah
               Libur Sekolah
              Libur Sekolah
             Libur Sekolah
            Libur Sekolah
           Libur Sekolah
          Libur Sekolah
         Libur Sekolah
        Libur Sekolah
       Libur Sekolah
      Libur Sekolah
     Libur Sekolah
    Libur Sekolah
   Libur Sekolah
  Libur Sekolah
 Libur Sekolah
Libur Sekolah
*Selfbot ini di Recode asli Xrutz Official!*`

buttons = [{buttonId:`${prefix}owner`,
buttonText:{displayText: 'DEVELOPER BOT'},type:1},
{buttonId:`${prefix}matpel`,buttonText:{displayText:'JADWAL SEKOLAH'},type:1}]
buttonsMessage = { contentText: `${ruls}`, footerText: '© 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍\n*Semangat Belajarnya!*', buttons: buttons, headerType: 1 }
prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
LexxyOFC.relayWAMessage(prep)
break
       // Set Profile Group
       case 'setppgrup':
              if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await LexxyOFC.downloadMediaMessage(encmedia)
              LexxyOFC.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
      // Set Name Group
      case "setname":
        if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.Badmin);
        if (!isBotGroupAdmins) return reply(mess.only.Badmin);
        if (!isGroup) return;
        LexxyOFC.groupUpdateSubject(from, `${args.join(" ")}`);
        LexxyOFC.sendMessage(from, "*Berhasil Mengubah Nama Grup!*", text, {
          quoted: mek,
        });
        break;
      // Group Info
      case "groupinfo":
        if (!isGroup) return;
        ppUrl = await LexxyOFC.getProfilePicture(from); // leave empty to get your own
        buffergbl = await getBuffer(ppUrl);
        LexxyOFC.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `*「 INFO GRUP 」*\n*➤ Name* : ${groupName}\n*➤ Member* : ${groupMembers.length}\n*➤ Admin* : ${groupAdmins.length}\n*➤ Description* : \n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "demote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin);
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply(mess.only.Badmin);
        if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*tag the person u want to demote!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*you have been domoted from admin, lmao* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						LexxyOFC.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Sukses Dilakukan!*\nDemote : @${mentioned[0].split('@')[0]} Kasian di Demote 🗿`, mentioned, true)
						LexxyOFC.groupDemoteAdmin(from, mentioned)
					}
					break;
      // Promote Members
      case "promote":
        if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin);
        if (!isGroup) return;
        if (!isBotGroupAdmins) return reply(mess.only.Badmin);
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*tag the person u want to make admin!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat! Sekarang sudah jadi Admin!*:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						LexxyOFC.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat @${mentioned[0].split('@')[0]}! Sekarang sudah jadi Admin!*`, mentioned, true)
						LexxyOFC.groupMakeAdmin(from, mentioned)
					}
					break;
      case "closegc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply(mess.only.Badmin);
        if (!isGroup) return;
        reply(`*Berhasil Menutup Grup!*`);
        LexxyOFC.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Most!')
if (!Number(oi2)) return reply('Amount must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  LexxyOFC.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Amount must be a number!')
if (Number(args[0]) >= 50) return reply('Most!')
	  for (let i = 0; i < args[0]; i++) {
	  LexxyOFC.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await LexxyOFC.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('Most!')
	  for (let i = 0; i < args[0]; i++) {
	  LexxyOFC.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await LexxyOFC.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('Most!')
	  for (let i = 0; i < args[0]; i++) {
	  LexxyOFC.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await LexxyOFC.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Most!')
	if (!Number(oi2)) return reply('Amount must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  LexxyOFC.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
      case "revoke":
        if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply(mess.only.Badmin);
        if (!isGroup) return;
        LexxyOFC.revokeInvite(from);
        reply("*Berhasil revoke Grup!*");
        break;
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply(mess.only.admin);
        if (!isBotGroupAdmins) return reply(mess.only.Badmin);
        if (!isGroup) return;
        reply(`*Sukses Membuka Grup!*`);
        LexxyOFC.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "reminder": // by Alpha Botz
        if (!q)
          return reply(
            `EXAMPLE OF USE:\n${prefix}reminder text/2s\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`
          );
        teks = body.slice(10);
        const messRemind = teks.split("/")[0];
        const timeRemind = teks.split("/")[1];
        typeRemind = "Text";
        if (isQuotedImage) typeRemind = "Image";
        if (isQuotedSticker) typeRemind = "Sticker";
        if (isQuotedAudio) typeRemind = "Audio";
        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)
          typeRemind = "Text";
        const parsedTime = ms(toMs(timeRemind));
        reminder.addReminder(
          sender,
          messRemind,
          typeRemind,
          timeRemind,
          _reminder
        );
        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {
          await LexxyOFC.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder activated successfully!
➸ Message: ${messRemind}
➸ Type: Text
➸ Duration: ${parsedTime.hours} jam ${parsedTime.minutes} minute ${
              parsedTime.seconds
            } detik
➸ To: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              LexxyOFC.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Message: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedSticker) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
          await LexxyOFC.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder activated successfully!
➸ Message: ${messRemind}
➸ Type: Sticker
➸ Duration: ${parsedTime.hours} jam ${parsedTime.minutes} minute ${
              parsedTime.seconds
            } detik
➸ To: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              LexxyOFC.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Message: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              LexxyOFC.sendMessage(from, fs.readFileSync(media), sticker);
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedImage) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
          await LexxyOFC.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder activated successfully!
➸ Message: ${messRemind}
➸ Type: Image
➸ Duration: ${parsedTime.hours} jam ${parsedTime.minutes} minute ${
              parsedTime.seconds
            } detik
➸ To: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              teks = `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Message: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`;
              LexxyOFC.sendMessage(from, media, image, {
                contextInfo: { mentionedJid: [sender] },
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        } else if (isQuotedAudio) {
          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
            .message.extendedTextMessage.contextInfo;
          media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
          await LexxyOFC.sendMessage(
            from,
            `── 「 REMINDER 」 ──
    
Reminder activated successfully!
➸ Message: ${messRemind}
➸ Type: Audio
➸ Duration: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${
              parsedTime.seconds
            } detik
➸ To: @${sender.split("@")[0]}
    `,
            text,
            { contextInfo: { mentionedJid: [sender] } }
          );
          const intervRemind = setInterval(async () => {
            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
              anu = await reminder.getReminderMsg(sender, _reminder);
              LexxyOFC.sendMessage(
                from,
                `── 「 REMINDER 」 ──

⏰ @${sender.split("@")[0]} ⏰
➸ Message: ${messRemind}
➸ Type: ${reminder.getReminderType(sender, _reminder)}`,
                text,
                { contextInfo: { mentionedJid: [sender] } }
              );
              LexxyOFC.sendMessage(from, fs.readFileSync(media), audio, {
                contextInfo: { mentionedJid: [sender] },
                mimetype: "audio/mp4",
                ptt: true,
                caption: teks,
              });
              _reminder.splice(
                reminder.getReminderPosition(sender, _reminder),
                1
              );
              fs.writeFileSync(
                "./database/reminder.json",
                JSON.stringify(_reminder)
              );
              clearInterval(intervRemind);
            }
          }, 1000);
        }
        break;
case 'hacked':
  if (!mek.key.fromMe) return;
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('The text?')
              reply('Auto Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   LexxyOFC.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                LexxyOFC.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                LexxyOFC.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                LexxyOFC.sendMessage(from, 'Succes Hacked', text, {quoted: fyt})
case 'ytgw':
  reply('https://youtube.com/c/LEX4YOU')
					break;
   case 'ss':
      reply(mess.wait)
					sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`, `Ni Kak`)
					break
case 'treasure':
  reply(mess.wait)
  sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/chartatahta?text=${args[0]}&apikey=${HunterApi}`, `Ni 🗿`)
  break
//>>>>>>>>>MAKER MENU<<<<<<<<<<<<<//
case 'serti1':
bo = args.join(" ")
sendMediaURL(from, `https://hansxd.nasihosting.com/serti4/img.php?nama=${bo}`, `Nih Kak Hasilnya ^_^`)
break
case 'serti2':
bo = args.join(" ")
sendMediaURL(from, `https://hansxd.nasihosting.com/serti2/img.php?nama=${bo}`, `Nih Kak Hasilnya ^_^`)
break
case 'serti3':
bo = args.join(" ")
sendMediaURL(from, `https://hansxd.nasihosting.com/serti6/img.php?nama=${bo}`, `Nih Kak Hasilnya ^_^`)
break
case 'serti4':
bo = args.join(" ")
sendMediaURL(from, `https://hansxd.nasihosting.com/serti5/img.php?nama=${bo}`, `Nih Kak Hasilnya ^_^`)
break

//>>>>>>>> PEMBATAS >>>>>>>>>> //
case 'tahta': 
if (args.length < 1) return reply('*Teks nya mana?*') 
tahta = args.join(" ")
sticWait(from)
tahta = await getBuffer(`https://api.zeks.me/api/hartatahta?text=${tahta}&apikey=apivinz`)
LexxyOFC.sendMessage(from, tahta, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'snow': 
if (args.length < 1) return reply('*Teks nya mana?*') 
snow = args.join(" ")
sticWait(from)
snow = await getBuffer(`https://api.zeks.me/api/snowwrite?text1=HartaTahta&text2=${snow}&apikey=apivinz`)
LexxyOFC.sendMessage(from, snow, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'pubg': 
if (args.length < 1) return reply('*Teks nya mana?*') 
pubg = args.join(" ")
sticWait(from)
pubg = await getBuffer(`https://api.zeks.me/api/pubglogo?text1=PUBG&text2=${pubg}&apikey=apivinz`)
LexxyOFC.sendMessage(from, pubg, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'smoke': 
if (args.length < 1) return reply('*Teks nya mana?*') 
smoke = args.join(" ")
sticWait(from)
smoke = await getBuffer(`https://api.zeks.me/api/smoketext?text=${smoke}&apikey=apivinz`)
LexxyOFC.sendMessage(from, smoke, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'bneon': 
if (args.length < 1) return reply('*Teks nya mana?*') 
bneon = args.join(" ")
sticWait(from)
bneon = await getBuffer(`https://api.zeks.me/api/bneon?apikey=apivinz&text=${bneon}`)
LexxyOFC.sendMessage(from, bneon, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'matrix': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
sticWait(from)
matrix = await getBuffer(`https://api.zeks.me/api/matrix?apikey=apivinz&text=${matrix}`)
LexxyOFC.sendMessage(from, matrix, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'gplay': 
if (args.length < 1) return reply('*Teks nya mana?*') 
gplay = args.join(" ")
sticWait(from)
gplay = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${gplay}&apikey=apivinz`)
LexxyOFC.sendMessage(from, gplay, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'splay': 
if (args.length < 1) return reply('*Teks nya mana?*') 
splay = args.join(" ")
sticWait(from)
splay = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${splay}&apikey=apivinz`)
LexxyOFC.sendMessage(from, splay, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'text3d': 
if (args.length < 1) return reply('*Teks nya mana?*') 
text3d = args.join(" ")
sticWait(from)
text3d = await getBuffer(`https://api.zeks.me/api/text3dbox?apikey=apivinz&text=${text3d}`)
LexxyOFC.sendMessage(from, text3d, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'tfire': 
if (args.length < 1) return reply('*Teks nya mana?*') 
tfire = args.join(" ")
sticWait(from)
tfire = await getBuffer(`https://api.zeks.me/api/tfire?text=${tfire}&apikey=apivinz`)
LexxyOFC.sendMessage(from, tfire, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'lithg': 
if (args.length < 1) return reply('*Teks nya mana?*') 
lithg = args.join(" ")
sticWait(from)
lithg = await getBuffer(`https://api.zeks.me/api/lithgtext?text=${lithg}&apikey=apivinz`)
LexxyOFC.sendMessage(from, lithg, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'wall': 
if (args.length < 1) return reply('*Teks nya mana?*') 
wall = args.join(" ")
sticWait(from)
wall = await getBuffer(`https://api.zeks.me/api/breakwall?apikey=apivinz&text=${wall}`)
LexxyOFC.sendMessage(from, wall, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'dropair': 
if (args.length < 1) return reply('*Teks nya mana?*') 
dropair = args.join(" ")
sticWait(from)
dropair = await getBuffer(`https://api.zeks.me/api/dropwater?apikey=apivinz&text=${dropair}`)
LexxyOFC.sendMessage(from, dropair, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'logocrs': 
if (args.length < 1) return reply('*Teks nya mana?*') 
logocrs = args.join(" ")
sticWait(from)
logocrs = await getBuffer(`https://api.zeks.me/api/crosslogo?text=${logocrs}&apikey=apivinz`)
LexxyOFC.sendMessage(from, logocrs, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'flame': 
if (args.length < 1) return reply('*Teks nya mana?*') 
flame = args.join(" ")
sticWait(from)
flame = await getBuffer(`https://api.zeks.me/api/flametext?text=${flame}&apikey=apivinz`)
LexxyOFC.sendMessage(from, flame, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'flower': 
if (args.length < 1) return reply('*Teks nya mana?*') 
flower = args.join(" ")
sticWait(from)
flower = await getBuffer(`https://api.zeks.me/api/flowertext?text=${flower}&apikey=apivinz`)
LexxyOFC.sendMessage(from, flower, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'wolf': 
if (args.length < 1) return reply('*Teks nya mana?*') 
wolf = args.join(" ")
sticWait(from)
wolf = await getBuffer(`https://api.zeks.me/api/wolflogo?apikey=apivinz&text1=WOLF&text2=${wolf}`)
LexxyOFC.sendMessage(from, wolf, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'nulis': 
if (args.length < 1) return reply('*Teks nya mana?*') 
catat = args.join(" ")
sticWait(from)
catat = await getBuffer(`https://api.zeks.me/api/nulis?text=${catat}&apikey=apivinz`)
LexxyOFC.sendMessage(from, catat, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'ganz': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
sticWait(from)
ganz = await getBuffer(`https://api.zeks.me/api/gtext?text1=${matrix}&text2=GANZ&apikey=apivinz`)
LexxyOFC.sendMessage(from, ganz, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'cans': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
sticWait(from)
cans = await getBuffer(`https://api.zeks.me/api/gtext?text1=${matrix}&text2=CANS&apikey=apivinz`)
LexxyOFC.sendMessage(from, cans, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'naruto': 
if (args.length < 1) return reply('*Teks nya mana?*') 
naruto = args.join(" ")
sticWait(from)
naruto = await getBuffer(`https://api.zeks.me/api/naruto?text=${naruto}&apikey=apivinz`)
LexxyOFC.sendMessage(from, naruto, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'logoff': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
sticWait(from)
logoff = await getBuffer(`https://api.zeks.me/api/epep?text=${matrix}&apikey=apivinz`)
LexxyOFC.sendMessage(from, logoff, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'barcode': 
if (args.length < 1) return reply('*Teks nya mana?*') 
matrix = args.join(" ")
sticWait(from)
bccode = await getBuffer(`https://api.zeks.me/api/barcode?apikey=apivinz&text=${matrix}`)
LexxyOFC.sendMessage(from, bccode, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'skytext':
if (args.length < 1) return reply('*Teks nya mana?*') 
sky = args.join(" ")
sticWait(from)
sky = await getBuffer(`https://api.zeks.me/api/skytext?text=${sky}&apikey=apivinz`)
LexxyOFC.sendMessage(from, sky, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'cslogo': 
if (args.length < 1) return reply('*Teks nya mana?*') 
cslogo = args.join(" ")
sticWait(from)
cslogo = await getBuffer(`https://api.zeks.me/api/cslogo?text=${cslogo}&apikey=apivinz`)
LexxyOFC.sendMessage(from, cslogo, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'style':
if (args.length < 1) return reply('*Teks nya mana?*') 
bo = args.join(" ")
reply(mess.wait)
var anu = await fetchJson(`https://api-yogipw.herokuapp.com/api/textpro/techstyle?text=${bo}`)
sendMediaURL(from, anu.result.result, `Nih Kak Hasilnya ^_^`)
       break
case 'love':        
            if (args.length == 0) return reply(`contoh: ${prefix + command} Alpha Botz`)
            reply(mess.wait)
            bo = args.join(" ")
            bufff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/lovemessage?apikey=${lolkey}&text=${bo}`)            
            LexxyOFC.sendMessage(from, bufff, image, { thumbnail: tb, caption: `*nih kak*`, quoted: mek})
            break
//>>>>>>>>>PEMBATAS<<<<<<<<<<<<<//
 case 'asupan':
reply(mess.wait)
sendMediaURL(from,`https://LexxyOFC.herokuapp.com/api/asupan?apikey=${valkey}`, `Ni Kak`)
break
case 'ass':
var tes = await fetchJson(`https://api-yogipw.herokuapp.com/api/nsfw/ass`)
sendMediaURL(from, tes.result, `Nih Kak Hasilnya ^_^`)
break
//>>>>>>>RANDOM MENU<<<<<<<<\\
case 'nickff':
sticWait(from)
anu = await fetchJson(`https://api.zeks.me/api/nickepep?apikey=apivinz`)
teks = anu.result
reply(`${teks}`)
break
case 'quote':
sticWait(from)
anu = await fetchJson(`https://api.zeks.me/api/quote?apikey=apivinz`)
teks = anu.result
get = teks
reply(`${teks.quotes}\n\nBy : ${teks.author}`)
break
case 'pantun':
sticWait(from)
anu = await fetchJson(`https://api.zeks.me/api/pantun?apikey=apivinz`)
teks = anu.result
get = teks
reply(`${teks.pantun}`)
break
case 'darkjoke':
sticWait(from)
anu = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=apivinz`)
get = anu
sendMediaURL(from, get.result, image, { thumbnail: tb})
break
case 'meme':
sticWait(from)
anu = await fetchJson(`https://api.zeks.me/api/memeindo?apikey=apivinz`)
get = anu
sendMediaURL(from, get.result, image, { thumbnail: tb})
break
case 'estetik': 
sticWait(from)
bugg = await getBuffer(`https://api.zeks.me/api/estetikpic?apikey=apivinz`)
LexxyOFC.sendMessage(from, bugg, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Dah Jadi'})
break
case 'wallpaper': 
sticWait(from)
anu = await fetchJson(`https://restapibotz.herokuapp.com/api/random/wallpaper?apikey=Alphabot`)
get = anu.result
sendMediaURL(from, get.url, `*Nih Kak*`)
break
case 'jadwalsholat': 
if (args.length < 1) return reply('*Daerah mana?*') 
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://api.zeks.me/api/jadwalsholat?apikey=apivinz&daerah=${bo}`)
get = anu.data
ini_txt =`*Jadwal Sholat Ditemukan*
*Daerah : ${args.join(" ")}*

${get.string}`
reply(ini_txt)
break
case 'quotesmuslim': 
sticWait(from)
anu = await fetchJson(`https://lex4you-api.herokuapp.com/api/randomquote/muslim?apikey=${alpkey}`)
get = anu.result
ini_txt =`*Quote Muslim*

${get.text_id}`
reply(ini_txt)
break
case 'jadwaltv':
var z = '```'
if (args.length < 1) return reply('Nama Tv?')
bo = args.join(" ")
anu = await fetchJson(`https://api.zeks.me/api/jadwaltv?channel=${bo}&apikey=apivinz`)
teks = anu
yoi =`${z}${teks.result}${z}`
reply(yoi)
break
case 'resep': 
if (args.length < 1) return reply('*Mau Resep Masak Apa?*') 
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://api.zeks.me/api/resep-masak?apikey=apivinz&q=${bo}`)
get = anu
sendMediaURL(from, get.thumb, `${get.title}\n\n${get.bahan}\n\nCaranya:\n${get.cara}`)
break
case 'play': 
if (args.length < 1) return reply('*Judulnya Apa?*') 
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://ziy.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=${ziyApi}`)
get = anu
sendMediaURL(from, get.thumb, `「 *PLAY MP3* 」\n\nJudul: ${get.title}\nViews: ${get.views}\nChannel: ${get.channel}\nPublished: ${get.published}\n\n𝐴𝑢𝑑𝑖𝑜 𝑆𝑒𝑑𝑎𝑛𝑔 𝐷𝑖 𝐾𝑖𝑟𝑖𝑚\n𝑀𝑜ℎ𝑜𝑛 𝑇𝑢𝑛𝑔𝑔𝑢 𝑆𝑒𝑏𝑒𝑛𝑡𝑎𝑟..`)
sendMediaURL(from, get.url)
break
     case "tiktok":
        if (!isUrl(args[0]) && !args[0].includes("tiktok.com"))
          return reply(mess.Iv);
        var bv = await fetchJson(
          `https://api.dhnjing.xyz/downloader/tiktok/nowatermark?url=${args[0]}`
        );
        var b = bv.result.author_metadata;
        var tamnel = await getBuffer(
          bv.result.media_resources.image.contentUrl
        );
        var a = bv.result.media_metadata;
        sendButImage(
          from,
          `⚜️ *Nickname*: ${b.username}\n❤️ *Like*: ${a.stats.diggCount}\n💬 *Comment*: ${a.stats.commentCount}\n🔁 *Share*: ${a.stats.shareCount}\n🎞️ *Views*: ${a.stats.playCount}`,
          `Please select a format you want to download`,
          tamnel,
          [
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|video`,
              buttonText: {
                displayText: `VIDEO`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}tiktokdl ${args[0]}|audio`,
              buttonText: {
                displayText: `AUDIO`,
              },
              type: 1,
            },
          ]
        );
        break;
        case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!c) return reply('Linknya?')
var { TiktokDownloader } = require('./media/lib/tiktokdl')
sticWait(from)
res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
case 'lomli': 
sticWait(from)
lolii = await getBuffer(`http://hadi-api.herokuapp.com/api/loli`)
LexxyOFC.sendMessage(from, lolii, image, {quoted: mek, thumbnail: fs.readFileSync('./media/gambar/fake.jpg'), caption: 'Nih Bro Loli'})
break
//>>>>>>>PEMBATASAN<<<<<<<<<<\\
case 'size':
if (args.length < 1) return reply('Enter the numbers')
filsize = args[0]
costick = await LexxyOFC.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:fgif})
LexxyOFC.relayWAMessage(costick)
break

case 'sizeimg':
if (args.length < 1) return reply('Enter the numbers')
filsizei = args[0]
costick3 = await LexxyOFC.prepareMessageFromContent(from,{
"imageMessage": {
	"url": m.quoted.url,
	"mimetype": m.quoted.mimetype,
	"caption": m.quoted.caption,
	"fileSha256": m.quoted.fileSha256.toString('base64'),
	"fileLength": filsizei,
	"height": m.quoted.height,
	"width": m.quoted.width,
	"mediaKey": m.quoted.mediaKey.low,
	"jpgThumbnail": m.quoted.jpgThumbnail
}
}, {quoted:ftroli})
LexxyOFC.relayWAMessage(costick3)
break

      //------------------< Features that use buttons >-------------------
      case "setprefix":
        if (!mek.key.fromMe) return;
        sendButMessage(
          from,
          `PREFIX : ${prefixStatus ? "Multi Prefix" : "No Prefix"}`,
          `Please choose one`,
          [
            {
              buttonId: `${prefix}noprefix`,
              buttonText: {
                displayText: `NOPREFIX`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}multiprefix`,
              buttonText: {
                displayText: `MULTIPREFIX`,
              },
              type: 1,
            },
          ]
        );
        break;
	case 'chat':
			if (args[0].startsWith('08')) return reply('Prefix number with 91')
            if (args[0].startsWith('+62')) return reply('Start number with 91')
			if (args.length < 1) return reply(`Use ${prefix}chat 91xx|text`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            LexxyOFC.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Success in sending chat:\n${org},@${nomor}`)
            break
case 'viewonce':
res = await LexxyOFC.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpg',
"jpgThumbnail": tb,
"viewOnce": true
}
}
}
}, {}) 
LexxyOFC.relayWAMessage(res)
break
case 'bugcombine':
  if (!mek.key.fromMe) return;
 reply(mess.only.ownerB)
                 LexxyOFC.toggleDisappearingMessages(from, 'HACKED')
LexxyOFC.sendMessage(from, `${fakeyoi}`, text, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: `${fakeyoi}`,
    orderTitle: `${fakeyoi}`, // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
setTimeout( () => {
	    LexxyOFC.updatePresence(from, Presence.composing)
	    sendMess(`dahlah`)
	    }, 2000)
	    reply(`dahlah`)
break
case 'bugloc':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
LexxyOFC.updatePresence(from, Presence.composing)
		       LexxyOFC.sendMessage(from, {degreesLatitude: 34.0184,
						degreesLongitude: -118.411,
						name: `${fakeyoi}`,
						address: `${fakeyoi}`,
                        jpgThumbnail: tb },location,{
 quoted: {
  key: {
   participant: '111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${fakeyoi}`,
    orderTitle: `${fakeyoi}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'bugpc':
					case 'bugpc':
  if (!mek.key.fromMe) return;
LexxyOFC.updatePresence(from, Presence.composing)
LexxyOFC.sendMessage(from, 'okay okay',text, {
 quoted: {
  key: {
   participant: '1111111111@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 70000, // Bug
    status: 1,
    surface: 1,
    message: `${fakeyoi}`,
    orderTitle: `${fakeyoi}`, // 
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'hbd': case 'zodiak': case 'zodiac':
let textus = args.join(" ")
if (!q) return reply(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
*Birthday :* ${birth.join('-')}
*Upcoming HBD :* ${birthday.join('-')}
*Umur :* : ${cekusia}
*Status Zodiac :* ${zodiac}
`.trim()
reply(teksh)
break
				
   /*switch (command) {*/
        /*case 'asupan':
          var menulist = LexxyOFC.prepareMessageFromContent(from, {
            "listMessage" :{
              "title": `${ucapanWaktu} kak ${pushname}\n this is my bot :v`,
              "description": `bot ini berjalan selama \n${runtime(process.uptime())}`,
              "buttonText": "click here👈",
              /*"footerText": '@WinBellz',
              "listType": "SINGLE_SELECT",
              "sections": [{
              "footerText": '@WinBell',
                "title": `Prefix Bot :「 ${prefixStatus ? "Multi Prefix" : "No Prefix"} 」`,
                "rows": [{
                    "title": "+91",
                    "rowId": "0",
                    "description": ""
                  },{
                    "title": "intake",
                    "rowId": "1",
                    "description": ""
                  },{
                    "title": "intake",
                    "rowId": "2",
                    "description": ""
                  }]
              }]
            }
          }, {})
          LexxyOFC.relayWAMessage(menulist, {waitForAck: true})*/
              
                 break
			      case "mode":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `MODE SELF/PUBLIC`, `Please choose one`, [
          {
            buttonId: `${prefix}self`,
            buttonText: {
              displayText: `SELF MODE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}public`,
            buttonText: {
              displayText: `PUBLIC MODE`,
            },
            type: 1,
          },
        ]);
        break;
case "intake": // by Alpha Botz
        sendButMessage(from, `Hi bro ${pushname} 🐤`, `Please select your intake sis✨`, [
          {
            buttonId: `${prefix}+91`,
            buttonText: {
              displayText: `➤ intake +91`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ghea`,
            buttonText: {
              displayText: `➤ Ghea intake`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}intake2`,
            buttonText: {
              displayText: `Next Intake >`,
            },
            type: 1,
          },
        ]);
        break;
case "intake2": // by Alpha Botz
        sendButMessage(from, `Hi bro ${pushname} 🐤`, `Please select the intake V.2 sis✨`, [
          {
            buttonId: `${prefix}santuy`,
            buttonText: {
              displayText: `➤ Intake of Santuy`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}leaky`,
            buttonText: {
              displayText: `➤ Small intake`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}intake3`,
            buttonText: {
              displayText: `Next Intake >`,
            },
            type: 1,
          },
        ]);
        break;
case "asupan3": // by Alpha Botz
        sendButMessage(from, `Hi bro ${pushname} 🐤`, `Please select the intake V.3 sis✨`, [
          {
            buttonId: `${prefix}rikagusriani`,
            buttonText: {
              displayText: `➤ Rikagusriani intake`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ukhti`,
            buttonText: {
              displayText: `➤ Ukhti intake`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}ytgw`,
            buttonText: {
              displayText: `SUBSCRIBE MY CHANEL BRO🤗`,
            },
            type: 1,
          },
        ]);
        break;
      case "grup":
        if (!mek.key.fromMe) return;
        sendButMessage(from, `GROUP SETTING`, `Please choose one`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}revoke`,
            buttonText: {
              displayText: `REVOKE INVITE`,
            },
            type: 1,
          },
        ]);
        break;
      //end
      //------------------< Downloader Features >-------------------
      //JCCHCCGHTHDTRSRS
      case "twitter":
        if (!isUrl(args[0]) && !args[0].includes("twitter.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("the link?");
        ten = args[0];
        var res = await hx.twitter(`${ten}`);
        ren = `${g.HD}`;
        sendMediaURL(from, ren, "DONE");
        break;
      case "facebook":
        if (!q) return reply("The link?");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "instagram":
        if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
          return reply(mess.Iv);
        if (!q) return fakegroup("The link?");
        reply(mess.wait);
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              LexxyOFC.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              LexxyOFC.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
      case 'wiki':
      if (args.length < 1) return reply('*Teks nya mana?*') 
      bo = args.join(" ")
      anu = await fetchJson(`https://api.zeks.me/api/wiki?q=${bo}&apikey=apivinz`)
     get = anu.result
          ini_txt =`*WIKI PEDIA*
          ${get.result}*`
reply(ini_txt)
        break;
      case "noprefix":
        if (!mek.key.fromMe) return;
        if (prefixStatus == false) return reply("No prefix is recently on!");
        prefixStatus = false;
        reply("Successfully changed prefix to noprefix");
        break;
      case "multiprefix":
        if (!mek.key.fromMe) return;
        if (prefixStatus == true) return reply("Multi prefix is recently on!");
        prefixStatus = true;
        reply("Successfully changed prefix to multiprefix");
        break;

      case "delvote":
        if (!mek.key.remoteJid) return;
        if (isVote) return reply("No Voting session");
        delVote(from);
        reply("Successfully Deleting Voting Session In This Group");
        break;
      case "voting":
        if (!isGroupAdmins && !mek.key.fromMe) return;
        if (!isGroup) return reply(mess.only.group);
        if (isVote) return reply("Voting Session In Progress In This Group");
        if (!q)
          return reply(
            "*Voting*\n\n" +
              prefix +
              "voting @tag target | reason  | 1 (1 = 1 Minute)"
          );
        if (
          mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||
          mek.message.extendedTextMessage.contextInfo == null
        ) {
          let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
          split = args.join(" ").replace("@", "").split("|");
          if (!Number(split[2]))
            return reply(
              "enter number in line 3\nExample: 1-9999\n1 = 1 Minute"
            );
          await mentions(
            "Vote " +
              "@" +
              id.split("@")[0] +
              " Di Mulai" +
              "\n\n" +
              `vote = ✅\ndevote = ❌\n\nReason: ${split[1]}`,
            [id],
            true
          );
          addVote(from, split[1], split[0], split[2], reply);
        }
        break;
      case "linkwa":
        if (!q) return reply("what group are you looking for??");
        hx.linkwa(q).then((result) => {
          let res = "*「 _LINK WA_ 」*\n\n";
          for (let i of result) {
            res += `*Name*: *${i.nama}\n*Link*: ${i.link}\n\n`;
          }
          reply(res);
        });
        break;
     /* case "igstalk":
        if (!q) return reply("Username?");
        const tod = await fetchJson(
          `https://api.dhnjing.xyz/stalk/instagram?user=${q}`
        );
        buff = await getBuffer(tod.result.user_profile_hd);
        const tt = `*INSTAGRAM STALK*
    Username: ${tod.result.username}
    Fullname: ${tod.result.user_fullname}
    Bio: ${tod.result.user_bio}

    Number of posts: ${tod.result.user_post_total}
    Following: ${tod.result.user_following}
    Follower: ${tod.result.user_followers}`;
        LexxyOFC.sendMessage(from, buff, image, { quoted: mek, caption: tt });
        break;*/
      
      case "tiktokstalk":
        if (!q) return reply("Username? ");
        var i = await fetchJson(
          `https://api.dhnjing.xyz/stalk/tiktok?user=@${q}`
        );
        buff = await getBuffer(i.result.user.avatarLarger);
        var ii = `*TIKTOK STALK*
    Username: ${q}
    Nickname: ${i.result.user.nickname}
    Bio: ${i.result.user.signature}

    Number of posts: ${i.result.stats.videoCount}
    Following: ${i.result.stats.followingCount}
    Follower: ${i.result.stats.followerCount}`;
        LexxyOFC.sendMessage(from, buff, image, { quoted: mek, caption: ii });
        break;
      case "igstory":
        if (!q) return reply("Username?");
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              LexxyOFC.sendMessage(from, link, video, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            } else {
              let link = await getBuffer(i.url);
              LexxyOFC.sendMessage(from, link, image, {
                quoted: mek,
                caption: `Type : ${i.type}`,
              });
            }
          }
        });
        break;
case 'vnsecond':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await LexxyOFC.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						LexxyOFC.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'videosecond':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await LexxyOFC.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						LexxyOFC.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
      case "colongsw": //Alpha Botz
        if (!mek.key.fromMe) return;
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await LexxyOFC.downloadAndSaveMediaMessage(ger);
          LexxyOFC.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("*Berhasil Kak!*");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await LexxyOFC.downloadAndSaveMediaMessage(ger);
          LexxyOFC.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("*Berhasil Kak!*");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply to the photo / video that you want to help");
        }
        break;
      case "searchmessage":
        if (!q) return reply("whats the message?");
        let v = await LexxyOFC.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`Found ${el.length} message`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await LexxyOFC.sendMessage(from, "Heres the message", text, {
              quoted: el[i],
            });
          }
         } catch (e) {
          reply("Message not found!");
        }
        break;
      case "lyrics":
        if (!q) return reply("What song is it?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case "otaku":
        if (!q) return reply("anime title?");
        let anime = await hx.otakudesu(q);
        rem = `*Title* : ${anime.judul}
*Japan* : ${anime.jepang}
*Rating* : ${anime.rate}
*Producer* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Duration* : ${anime.durasi}
*Release* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Synopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`;
        ram = await getBuffer(anime.img);
        LexxyOFC.sendMessage(from, ram, image, { quoted: mek, caption: rem });
        break;
      case "comic":
        if (!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`);
        let komik = await hx.komiku(q);
        result = `*Title* : ${komik.title}\n
*Title* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Early Chapter* : ${komik.chapter_awal}
*Final Chapter* : ${komik.chapter_akhir}`;
        sendMediaURL(from, komik.image, result);
        break;
      case "char":
        if (!q) return reply(`gambar apa?\n${prefix}chara LexxyOFC`);
        let im = await hx.chara(q);
        let acak = im[Math.floor(Math.random() * im.length)];
        let li = await getBuffer(acak);
        await LexxyOFC.sendMessage(from, li, image, { quoted: mek });
        break;
      case "pinterest":
        if (!q) return reply("What picture is it?");
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await LexxyOFC.sendMessage(from, di, image, { quoted: mek });
        break;
      case "playstore":
        if (!q) return reply("what are you looking for?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n*「 _PLAY STORE_ 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```YOU ARE ONLINE``` ");
        break;
      case "status":
        fakestatus(
          `*STATUS*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> SELF-MODE" : "> PUBLIC-MODE"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (!mek.key.fromMe) return;
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```YOU ARE OFFLINE``` ");
        break;
      case "get":
        if (!q) return reply("The link?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "contag":
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        LexxyOFC.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await LexxyOFC.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await LexxyOFC.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          LexxyOFC.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Reply sticker that has been sent*`);
        }
        break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await LexxyOFC.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await LexxyOFC.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          LexxyOFC.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await LexxyOFC.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await LexxyOFC.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          LexxyOFC.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await LexxyOFC.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await LexxyOFC.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          LexxyOFC.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await LexxyOFC.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await LexxyOFC.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          LexxyOFC.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply image/sticker/audio/video with caption ${prefix}totag`
          );
        }
        break;
      case "slander":
        if (args.length < 1)
          return reply(
            `Usage :\n${prefix}slander [@tag|message|replybot]]\n\nEx : \n${prefix}slander @tagmember|hi|hi too`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        LexxyOFC.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "settarget":
        if (!q) return reply(`${prefix}settarget 91xx`);
        targetpc = args[0];
        fakegroup(`Success Changing the target of slanderpc : ${targetpc}`);
        break;
      case "slanderpc":
        if (!q) return reply(`${prefix}fitnahpc teks target|teks lu`);
        jids = `${targetpc}@s.whatsapp.net`; // target number
        var split = args.join(" ").replace(/@|\d/gi, "").split("|");
        var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0];
        var options = {
          contextInfo: {
            quotedMessage: { extendedTextMessage: { text: split[0] } },
          },
        };
        const responye = await LexxyOFC.sendMessage(
          jids,
          `${split[1]}`,
          MessageType.text,
          options
        );
        await LexxyOFC.deleteMessage(jids, {
          id: responye.messageID,
          remoteJid: jids,
          fromMe: true,
        });
        break;
      case "tomp3":
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          LexxyOFC.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            LexxyOFC.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Err: ${err}`);
            buffer453 = fs.readFileSync(ran);
            LexxyOFC.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (!isQuotedVideo) return fakegroup("Reply the video!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Err: ${err}`);
          buffer453 = fs.readFileSync(ran);
          LexxyOFC.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
  case 'buttons5':
              const mathdare = dare[Math.floor(Math.random() * (dare.length))]
              result = `${mathdare}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'TRUTH'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'DARE'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'MAIN ULANG'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Semoga Beruntung >3', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
              case 'buttons6':
              const randomtruth = truth[Math.floor(Math.random() * truth.length)]
              result = `${randomtruth}`
              buttons = [{buttonId: `${prefix}buttons6`,buttonText:{displayText: 'TRUTH'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'DARE'},type:1},{buttonId:`${prefix}tod`,buttonText:{displayText:'MAIN ULANG'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Semoga Beruntung >3', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
              case 'tod':
              result =`Hallo ${pushname}\n*Apakah ${pushname} Siap Memainkan Truth or Dare?*`
              buttons = [{buttonId:`${prefix}todsiap`,buttonText:{displayText:'SUDAH SIAP!'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Permainan Truth or Dare', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
          case 'todsiap':
              result =`Hai ${pushname}\n*Untuk memulai Permainan,* Silahkan Pilih Dibawah`
              buttons = [{buttonId: `${prefix}buttons6`,
              buttonText:{displayText: 'TRUTH'},type:1},{buttonId:`${prefix}buttons5`,buttonText:{displayText:'DARE'},type:1}]
              buttonsMessage = { contentText: `${result}`, footerText: 'Truth or Dare', buttons: buttons, headerType: 1 }
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: fgif})
              LexxyOFC.relayWAMessage(prep)
              break
      case "anime":
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                LexxyOFC.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "HERE",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;
case 'calculator':
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				
				case 'fancytext':
				if (args.length < 1) return reply('The text?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'🐤OWNER'},type:1}]
              imageMsg = ( await LexxyOFC.prepareMessage(from, fs.readFileSync(`./${sender}.jpg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Dont forget to donate bro ☕', imageMessage: imageMsg,
              contentText:`Click Next to go to the next picture`,buttons,headerType:4}
              prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              LexxyOFC.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpg`)
              break
   case'lyricssong':
     reply(mess.wait)
  apa = await fetchJson(`https://bx-hunter.herokuapp.com/api/music/liriklagu?query=${args[0]}&apikey=${HunterApi}`,{method:'get'})
  apa2 = apa.result
  reply(apa2)
  break
case 'attp':
					if (!c) return reply(`Where is the text, Bro?\nExample :\n${prefix}attp ${fakeyoi}`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					LexxyOFC.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
				case 'recipes':
				if (args.length < 1) return reply('The title?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${teks}&apikey=${HunterApi}`, {method: 'get'})
					hasilresep = `❏ $*${anu.results.title}*\n\n❏ $Portion : ${anu.results.servings}\n❏ $Time : ${anu.results.times}\n❏ $Difficulty : ${anu.results.dificulty}\n❏ $ User : ${anu.results.author.user}\n❏ $Publish Date : ${anu.results.author.datePublished}\n❏ $description : ${anu.results.desc}\n\n────────────────────\n❏ $*Tutorial*\n\n❏ $Ingredients : ${anu.results.ingredient}\n❏ $Step : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					LexxyOFC.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
					case 'githubstalk':
					if (args.length < 1) return reply('Username?')
					var teks = body.slice(13)
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
					gstalk = `❏ $*GITHUB STALK*\n\n❏ $Name : ${anu.result.name}\n❏ $Followers : ${anu.result.followers}\n❏ $Following : ${anu.result.following}\n❏ $Id : ${anu.result.id}\n❏ $Node Id : ${anu.result.node_id}\n❏ $Type : ${anu.result.type}\n❏ $Company : ${anu.result.company}\n❏ $Location : ${anu.result.location}\n❏ $Bio : ${anu.result.bio}\n❏ $Site Admin : ${anu.result.site_admin}\n❏ $Email : ${anu.result.email}\n❏ $Created At : ${anu.result.created_at}\n❏ $Updated At : ${anu.result.updated_at}\n❏ $Twitter Username : ${anu.result.twitter_username}\n❏ $Blog : ${anu.result.blog}\n❏ $Avatar Url : ${anu.result.avatar_url}\n❏ $Gravatar Id : ${anu.result.gravatar_id}\n❏ $Html Url : ${anu.result.html_url}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.avatar_url)
					LexxyOFC.sendMessage(from, buff, image, {quoted: ftok, caption: gstalk})
					break 
					case 'earthquakeinfo':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
					gempa = `❏ $*EARTHQUAKE INFO*\n\n❏ $Time : ${anu.result.Waktu}\n❏ $Latitude : ${anu.result.Lintang}\n❏ $longitude : ${anu.result.Bujur}\n❏ $Magnitude : ${anu.result.Magnitudo}\n❏ $Depth : ${anu.result.Kedalaman}\n❏ $Region : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					LexxyOFC.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
      case "contact":
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Invalid phone number");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        LexxyOFC.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
case "antidelete":
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('Choose on or off')
if (args[0] === "on") {
if(antidel)return reply('Its been activated before!')
antidel = true
reply(`Success activate antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('Its been deactivated before!')
antidel = false
reply(`Success turn off antidelete`)
} else {
reply(`Choose on or off`)
}
break;
                
      case "take":
      case "colong":
        if (!isQuotedSticker) return reply("Just a sticker");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
        anu = args.join(" ").split("|");
        satu = anu[0] !== "" ? anu[0] : `SELF`;
        dua = typeof anu[1] !== "undefined" ? anu[1] : `BOT`;
        require("./media/lib/fetcher.js").createExif(satu, dua);
        require("./media/lib/fetcher.js").modStick(media, LexxyOFC, mek, from);
        break;
      case "stikerwm":
      case "stickerwm":
      case "swm":
        pe = args.join("");
        var a = pe.split("|")[0];
        var b = pe.split("|")[1];
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              LexxyOFC.sendMessage(from, "There is an error", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                LexxyOFC.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
          pe = args.join("");
          var a = pe.split("|")[0];
          var b = pe.split("|")[1];
          await createExif(a, b);
          out = getRandom(".webp");
          ffmpeg(media)
            .on("error", (e) => {
              console.log(e);
              LexxyOFC.sendMessage(from, "There is an error", "conversation", {
                quoted: mek,
              });
              fs.unlinkSync(media);
            })
            .on("end", () => {
              _out = getRandom(".webp");
              spawn("webpmux", [
                "-set",
                "exif",
                "./stik/data.exif",
                out,
                "-o",
                _out,
              ]).on("exit", () => {
                LexxyOFC.sendMessage(
                  from,
                  fs.readFileSync(_out),
                  "stickerMessage",
                  { quoted: mek }
                );
                fs.unlinkSync(out);
                fs.unlinkSync(_out);
                fs.unlinkSync(media);
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(out);
        } else {
          reply(
            `Send a picture with a caption ${prefix}swm text|text or image tags that have been sent`
          );
        }
        break;
      case "upswteks":
        if (!q) return fakestatus("Fill in the text!");
        LexxyOFC.sendMessage("status@broadcast", `${q}`, extendedText);
        fakegroup(`Success Up story wea text ${q}`);
        break;
      case "upswimage":
        if (isQuotedImage) {
          const swsw = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await LexxyOFC.downloadMediaMessage(swsw);
          LexxyOFC.sendMessage("status@broadcast", cihcih, image, {
            caption: `${q}`,
          });
          bur = `Successfully Upload Story Image with Caption: ${q}`;
          LexxyOFC.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("Reply the picture!");
        }
        break;
      case "upswvideo":
        if (isQuotedVideo) {
          const swsw = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          cihcih = await LexxyOFC.downloadMediaMessage(swsw);
          LexxyOFC.sendMessage("status@broadcast", cihcih, video, {
            caption: `${q}`,
          });
          bur = `Successfully Upload Story Video with Caption: ${q}`;
          LexxyOFC.sendMessage(from, bur, text, { quoted: mek });
        } else {
          fakestatus("Reply the video!");
        }
        break;
      
      case "public":
        if (!mek.key.fromMe) return replyfakelink("SELF-BOT");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        replyfakelink(`「 *PUBLIC-MODE* 」\nSupport © 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍`);
        break;
      case "self":
        if (!mek.key.fromMe) return replyfakelink("SELF-BOT");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        replyfakelink(`「 *SELF-MODE* 」\nSupport © 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍`);
        break;
                case "hidetag":
					// source code by Alpha Botz
					if (!isGroup) return reply(mess.only.group);
					if (!isGroupAdmins) return reply(mess.admin);
					var value = body.slice(9)
					var group = await LexxyOFC.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					LexxyOFC.sendMessage(from, options, text)
					break;
              case "tagall":
					if (!isGroup) return reply(mess.only.group);
					if (!isGroupAdmins) return reply(mess.admin);
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `** @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break;
     
      case "video":
        if (args.length === 0)
          return reply(
            `Send orders *${prefix}video* _The title of the song to be searched_`
          );
        var srch = args.join("");
        aramas = await yts(srch);
        aramat = aramas.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if (Number(filesize) >= 100000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For durations more than the limit are presented in the link_`
                  );
                const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Please wait for the media file to be sent it may take a few minutes_`;
                sendMediaURL(from, thumb, captions);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Finish");
              LexxyOFC.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Started : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Failed, at the time of converting ${tipe} to sticker`);
            })
            .on("end", function () {
              console.log("Finish");
              LexxyOFC.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Send a picture with a caption ${prefix}sticker\nVideo Sticker Duration 1-9 Seconds`
          );
        }
        break;
     
      case "toimg":
        if (!isQuotedSticker) return reply("𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !");
        replyfakelink(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Well failed, try again ^_^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `here bro ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
        if (args.length < 1) return reply("Please enter a query!");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await LexxyOFC.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += "「 *YOUTUBE SEARCH* 」";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ $Title: " + video.title + "\n";
          ytresult += "❏ $Link: " + video.url + "\n";
          ytresult += "❏ $Duration: " + video.timestamp + "\n";
          ytresult +=
            "❏ Upload: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *SELF-BOT*";
        await fakethumb(tbuff, ytresult);
        break;
      case "setreply":
      case "setfake":
        if (!q) return fakegroup(mess.wrongFormat);
        fake = q;
        fakegroup(`Success Changing Conversation Fake : ${q}`);
        break;
      case "setfakeimg":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await LexxyOFC.downloadMediaMessage(boij);
          fs.writeFileSync(`./media/gambar/fake.jpg`, delb);
          replyfakelink("*Berhasil Kak!*");
        } else {
          reply(`Send a picture with a caption ${prefix}sethumb`);
        }
        break;
      case "setthumb":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedSticker) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedSticker
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          delb = await LexxyOFC.downloadMediaMessage(boij);
          fs.writeFileSync(`./media/gambar/fake.jpg`, delb);
          replyfakelink("*Berhasil Kak!*");
        } else {
          reply(`Send a picture with a caption ${prefix}sethumb`);
        }
        break;
      case "ytmp4":
        if (args.length === 0)
          return reply(`Send orders *${prefix}ytmp4 [linkYt]*`);
        let isLinks2 = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks2) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          ytv(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 40000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For durations more than the limit are presented in the link_`
                  );
                const captionsYtmp4 = `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Please wait for the media file to be sent it may take a few minutes_`;
                sendMediaURL(from, thumb, captionsYtmp4);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "emoji":
        if (!q) return fakegroup("the emoji?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "ytmp3":
        if (args.length === 0)
          return reply(`Send orders *${prefix}ytmp3 [linkYt]*`);
        let isLinks = args[0].match(
          /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply(mess.error.Iv);
        try {
          reply(mess.wait);
          yta(args[0]).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then((a) => {
                if (Number(filesize) >= 30000)
                  return sendMediaURL(
                    from,
                    thumb,
                    `*Data Successfully Obtained!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_For durations more than the limit are presented in the link_`
                  );
                const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Please wait for the media file to be sent it may take a few minutes_`;
                sendMediaURL(from, thumb, captions);
                sendMediaURL(from, dl_link).catch(() => reply(mess.error.api));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        break;
      case "image":
      case "gimage":
      case "googleimage":
        if (args.length < 1) return reply("What do you want to search?");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error Found Error Or Result Not Found_"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;

      case "brainly":
        if (args.length < 1) return reply("What kind of question is that");
        brien = args.join(" ");
        brainly(`${brien}`).then((res) => {
          teks = "❉───────────────────────❉\n";
          for (let Y of res.data) {
            teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Question:* ${Y.pertanyaan}\n\n*➸ Answer:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`;
          }
          LexxyOFC.sendMessage(from, teks, text, {
            quoted: mek,
            detectLinks: false,
          });
        });
        break;

      case "igstalk":
        if (!q) return fakegroup("Username?");
        ig.fetchUser(`${args.join(" ")}`).then((Y) => {
          console.log(`${args.join(" ")}`);
          ten = `${Y.profile_pic_url_hd}`;
          teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join(
            ""
          )}\n*Full Name* : ${Y.full_name}\n*Bio* : ${
            Y.biography
          }\n*Followers* : ${Y.followers}\n*Following* : ${
            Y.following
          }\n*Private* : ${Y.is_private}\n*Verified* : ${
            Y.is_verified
          }\n\n*Link* : https://instagram.com/${args.join("")}`;
          sendMediaURL(from, ten, teks);
        });
        break;
      case "fb":
        if (!q) return reply("*Linknya?*");
        if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
          return reply(mess.Iv);
        reply(mess.wait);
        te = args.join(" ");
        hx.fbdown(`${te}`).then((G) => {
          ten = `${G.HD}`;
          sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`);
        });
        break;
      case "term":
        if (!q) return fakegroup(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return fakegroup(`SELF-BOT:~ ${err}`);
          if (stdout) {
            fakegroup(stdout);
          }
        });
        break;
      case "join":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return replyfakelink("*Kirim tautan grup*");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("*Pastikan linknya terbuka!*");
          var response = await LexxyOFC.acceptInvite(codeInvite);
          replyfakelink("➤ *Berhasil Kak!*\nSupport © 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍");
        } catch {
          fakegroup("*Link Tidak Valid!*");
        }
        break;
      case "runtime":
      case "test":
        run = process.uptime();
        teks = `${kyun(run)}`;
        fakegroup(teks);
        break;
      case "speed":
      case "ping":
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
          replyfakelink(pingnya);
        });
        break;
        case 'botstat':
              groups = LexxyOFC.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = LexxyOFC.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              uptime = process.uptime();
              timestampe = speed();
              latensie = speed() - timestampe
teks = `*「 STATUS BOT 」*
*➤ Username :* @${sender.split("@")[0]}
*➤ Prefix :* ${prefixStatus ? "Multi Prefix" : "No Prefix"}
*➤ Group Chats :* ${groups.length}
*➤ Private Chats :* ${privat.length}
*➤ Speed Bot :* ${latensie.toFixed(4)}

*「 SOCIAL MEDIA 」*
*➤ Youtube :* LEX4YOU
*➤ Insta :* @Rellnjoy_
*➤ Link Grup :* Chat Owner!

*Bot Grup :* https://chat.whatsapp.com/H9OjMEFgvaKDVi2iHbmT0j
© 𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍`
             replyfakelink(teks)
             break;
      case "totag":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await LexxyOFC.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await LexxyOFC.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          LexxyOFC.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await LexxyOFC.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await LexxyOFC.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          LexxyOFC.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await LexxyOFC.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await LexxyOFC.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          LexxyOFC.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await LexxyOFC.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await LexxyOFC.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          LexxyOFC.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `reply image/sticker/audio/video with caption ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await LexxyOFC.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Done");
          });
        } else {
          replyfakelink("reply stiker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await LexxyOFC.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("send/reply pictures/videos");
        }
        break;
      case "inspect":
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("enter the link wa");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("make sure its the link https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await LexxyOFC.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split("@")[0]}` : "*Owner* : -"}
*Name Gc* : ${subject}
*Gc created Date* : ${formatDate(creation * 1000)}
*Number of Members* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc* : there is not any"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc modified by* : @${descOwner.split("@")[0]}`
    : "*Desc modified by* : -"
}\n*Date* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Saved contacts*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Yes" : "tidak"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          LexxyOFC.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link error");
        }
        break;
      case "listdm1":
 listMsg = {
 buttonText: 'CHECK LIST',
 footerText: '© 𝑳𝒆𝒙𝒙𝒚 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍',
 description: `*Hallo kak @${sender.split("@")[0]}!*\n\n\List diamond by ${namabot} disini Kak, *Silahkan di pilih!*`,
 sections: [
                     {
                      "title": `${time} - ${week} ${weton} - ${date}`,
 rows: [
                          {
                              "title": "70💎 = IDR _10.000_",
                              "rowId": ""
                           },
                           {
                              "title": "100💎 = IDR _15.000_",
                              "rowId": ""
                           },
                           {
                              "title": "140💎 = IDR _20.000_",
                              "rowId": ""
                           },
                           {
                              "title": "210💎 = IDR _30.000_",
                              "rowId": ""
                           },
                           {
                              "title": "355💎 = IDR _50.000_",
                              "rowId": ""
                           },
                           {
                              "title": "500💎 = IDR _70.000_",
                              "rowId": ""
                           },
                           {
                              "title": "720💎 IDR _100.000_",
                              "rowId": ""
                           },
                           {
                              "title": "1000💎 IDR _140.000_",
                              "rowId": ""
                           },
                           {
                              "title": "1215💎 IDR _167.000_",
                              "rowId": ""
                           },
                           {
                              "title": "2005💎 IDR _270.000_",
                              "rowId": ""
                           },
                           {
                              "title": "4005💎 IDR _535.000_",
                              "rowId": ""
                           }
                        ]
                     }],
headerType: 1
}
LexxyOFC.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid:[sender]}, quoted : fgif})
break;
      case "eval":
        if (!mek.key.fromMe) return;
        LexxyOFC.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return// reply(`This command can not be carried out by rentbot temporarily`)
if (!q)return 
var itsme = `${sender}`
var split = `*LexxyOFC-BotWeA*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return LexxyOFC.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
LexxyOFC.sendMessage(from, stdout, text, term)
}
})
}

      default:
     if (!mek.key.fromMe) return;
        if (_chats.startsWith(">")) {
          try {
            return LexxyOFC.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}