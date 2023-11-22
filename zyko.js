// S C R I P T  O R I  B Y  ZYKO MD 🔭
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -

// • Zyko MD (me)
// • Aldi Lesmana
// • Wh Mods Dev
// • Danzz Coding
// • Adrian
// • XTRAM-TEAM

//[!] Jangan Lupa Ganti Ownernya settings.js

// •  ✓ MENYEDIAKAN

// • JASA RUN BOT ON 24 JAM
// • JASA SEWA BOT ON 24 JAM
// • JASA INSTALL PANEL
// • JASA INSTALL THEMA PANEL
// • JASA UP SC KE GH/GITHUB
// • JASA UBAH SCRIPT CJS/ESM/CASE
// • JASA FIX SCIPRT EROR
 
// • READY PANEL RUN BOT ON 24 JAM
// • READY ADMIN PANEL
// • READY NOKOS ALL APK
// • READY VPS DIGITAL OCEAN [ DO ]
// • READY SC NO ENC 100% BEBAS RECORD
// • JOIN GROUP CREATE SUBDOMAIN 5K

// • Wa : https://wa.me/6283133329293 [ON ✅]






/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zzyko_04
 * ig: @zyko_store
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/

      //✅✅✅✅✅ BACA ✅✅✅✅✅
/*

LAPOR BILA NEMU SC INI YANG JUAL KE ORANG LAIN 
KARENA SC INI FREE BUAT KALIAN DAN PARA SUBSCRIBER ZYKO MD OFFICIAL

YANG JUAL SEMOGA ATIM DAH 😎

LAPOR KE WHATSAPP BILA NEMU ORANG JUAL SC INI 
WHATSAPP

wa.me/6283133329293




*/
require(`./settings`)

//NODE
const { 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia 
} = require("@adiwajshing/baileys")
const { 
exec, 
spawn, 
execSync 
} = require("child_process")
const cheerio = require("cheerio")
const fetch = require("node-fetch")
const chalk = require("chalk")
const crypto = require("crypto")
const util = require("util")
const got = require("got")
const axios = require("axios")
const fs = require("fs")
const Jimp = require("jimp")
const path = require("path")
const fsx = require('fs-extra')
const PhoneNumber = require("awesome-phonenumber")
const speed = require("performance-now")
const moment = require("moment-timezone")
const https = require('https') //baru


//lib
const { 
getBuffer,
tanggal
} = require('./lib/myfunc')
const { 
getGroupAdmins, 
fetchJson, 
reSize, 
generateProfilePicture, 
sleep, 
clockString,
runtime,
jsonformat
} = require("./lib/functions.js")
const { TelegraPh } = require(`./lib/upload`)
// Time
///scrape
const scp1 = require('./lib/scrape/ssweb') 
//////Lib2
const { 
addResponList, 
delResponList, 
isAlreadyResponList, 
isAlreadyResponListGroup, 
sendResponList, 
updateResponList, 
getDataResponList 
} = require('./lib/list')
//

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
//const tanggal = moment().tz("Asia/Jakarta").format("ll")
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const wa = `0@s.whatsapp.net`
const Owner = global.owner + '@s.whatsapp.net'
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
// database
const owner = JSON.parse(fs.readFileSync('./database/json/owner.json'))
const datuser = JSON.parse(fs.readFileSync("./database/json/user.json"))
const contacts = JSON.parse(fs.readFileSync("./database/json/contacts.json"))
const db_respon_list = JSON.parse(fs.readFileSync('./database/json/list.json'))//baru
const dblist = JSON.parse(fs.readFileSync('./database/json/listall.json'))//baru
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
// read database
global.db.data = JSON.parse(fs.readFileSync('./database/json/database.json'))
if (global.db.data) global.db.data = {
users: {},
group: {},
chats: {},
database: {},
settings: {},
donate: {},
others: {},
sticker: {},
...(global.db.data || {})
}
module.exports = zyko = async (zyko, m, chatUpdate, store) => {
try {
const type = getContentType(m.message)
const content = JSON.stringify(m.message)
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.m || quoted).mimetype || ''
const body = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const groupMetadata = isGroup? await zyko.groupMetadata(m.chat).catch(e => {}) : ""
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupOwner = isGroup? groupMetadata.owner : ""
const participants = isGroup? await groupMetadata.participants : ""
const groupAdmins = isGroup? await participants.filter(v => v.admin !== null).map(v => v.id) : ""
const groupMembers = isGroup? groupMetadata.participants : ""
const isGroupAdmins = isGroup? groupAdmins.includes(m.sender) : false
const botNumber = await zyko.decodeJid(zyko.user.id)
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false
const sender = m.key.fromMe ? (zyko.user.id.split(':')[0]+'@s.whatsapp.net' || zyko.user.id) : (m.key.participant || m.key.remoteJid)
const pushname = m.pushName || "No Name"
const isContacts = contacts.includes(sender)
const isSeler = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isPremium = isOwner || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
/////cobaan




//////
// Limit
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}

// Afk
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
if (!('antilink2' in chats)) chats.antilink2 = false
if (!('promosi' in chats)) chats.promosi = false
if (!('promosi2' in chats)) chats.promosi2 = false
if (!('toxic' in chats)) chats.toxic = false
} else global.db.data.chats[m.chat] = {
antilink: false,
antilink2: false,
promosi: false,
promosi2: false,
toxic: false,
}
// Reset Limit

let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('autoread' in setting)) setting.autoread = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: true,
autoread: false,
}
} catch (err) {
console.error(err)
}

// Sayying time
const hours = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(hours < "23:59:00"){
var waktuucapan = 'Selamat Malam 🌃'
}
if(hours < "19:00:00"){
var waktuucapan = 'Selamat Petang 🌆'
}
if(hours < "18:00:00"){
var waktuucapan = 'Selamat Sore 🌅'
}
if(hours < "15:00:00"){
var waktuucapan = 'Selamat Siang 🏙'
}
if(hours < "10:00:00"){
var waktuucapan = 'Selamat Pagi 🌄'
}
if(hours < "05:00:00"){
var waktuucapan = 'Selamat Subuh 🌉'
}
if(hours < "03:00:00"){
var waktuucapan = 'Selamat Tengah Malam 🌌'
}
// auto set bio
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
await zyko.updateProfileStatus(`I am ${namebot} | Aktif Selama ${uptime}| Mode : ${zyko.public ? 'Public-Mode' : 'Self-Mode'} | User : ${Object.keys(global.db.data.users).length}`).catch(_ => _)
setting.status = new Date() * 1
}
}



const parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const color = (text, color) => { return !color ? chalk.green(text) : chalk.keyword(color)(text) }



const reply = (teks) => {
zyko.sendMessage(from, { text : teks }, { quoted : m })
}
// Anti Link 2 HAPUS
if (db.data.chats[m.chat].antilink2) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await zyko.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(``)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.sendMessage(m.chat, { delete: m.key })
}
}
// Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
let gclink = (`https://chat.whatsapp.com/`+await zyko.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return reply(``)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Anti promosi HAPUS
if (db.data.chats[m.chat].promosi2) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.sendMessage(m.chat, { delete: m.key })

}
}
// Anti promosi
if (db.data.chats[m.chat].promosi) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|list harga panel|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotAdmins) return reply(`Ehh bot gak admin`)
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//anti toxic
const isToxic = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|ngewe|go?blo?k|to?lo?l|idiot|(k|ng)e?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki ?(mak)?|kimak|babi|anj|bangsad|bgsd|peler|pantek|ngentod|kontol|ngentd|ngntod|koncol|kncl|kncol|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|tits|bastard|asshole|a(su|sw|syu)/i // tambahin sendiri

if (db.data.chats[m.chat].toxic) {
if (budy.match(`${isToxic}`)) {
if (isAdmins) return reply(`Admin Mah Bebas Yakan?`)
if (isOwner) return reply(`Gw Mah Bebas Yakan?`)
zyko.sendMessage(m.chat, { delete: m.key })
zyko.sendMessage(m.chat, { delete: m.key })
//zyko.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
if (isCmd && m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']')); 
}

if (isCmd && !m.isGroup) { 
console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']')); 
}

// Response Addlist
if (!isCmd && isGroup && isAlreadyResponList(from, body, db_respon_list)) {
var get_data_respon = getDataResponList(from, body, db_respon_list)
if (get_data_respon.isImage === false) {
zyko.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
quoted: m
})
} else {
zyko.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}




// Public & Self
if (!zyko.public) {
if (!m.key.fromMe && !isPremium && !isOwner) return
}
if (m.message) {
if (global.db.data.settings[botNumber].autoread) {
zyko.readMessages([m.key])
}
}

try {
ppuser = await zyko.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
async function Tiktokdl(url) {
//async function tiktokdl(url) {
try {
function API_URL(aweme) {
return `https://api16-core-c-useast1a.tiktokv.com/aweme/v1/feed/?aweme_id=${aweme}&version_name=1.0.4&version_code=104&build_number=1.0.4&manifest_version_code=104&update_version_code=104&openudid=4dsoq34x808ocz3m&uuid=6320652962800978&_rticket=1671193816600&ts=1671193816&device_brand=POCO&device_type=surya&device_platform=android&resolution=1080*2179&dpi=440&os_version=12&os_api=31&carrier_region=US&sys_region=US%C2%AEion=US&app_name=TikMate%20Downloader&app_language=en&language=en&timezone_name=Western%20Indonesia%20Time&timezone_offset=25200&channel=googleplay&ac=wifi&mcc_mnc=&is_my_cn=0&aid=1180&ssmix=a&as=a1qwert123&cp=cbfhckdckkde1`;
};
async function getAwemeId(url) {
// any :/
let result;
const Konto1 = /video\/([\d|\+]+)?\/?/;
const valid = url.match(Konto1);
if (valid) {
return valid[1];
}
else {
try {
const data = await got
.get(url, {
headers: {
"Accept-Encoding": "deflate",
},
maxRedirects: 0,
})
.catch((e) => e.response.headers.location);
const _url = data;
const _valid = _url.match(Konto1);
if (_valid) {
result = _valid[1];
}
}
catch (error) {
// console.log(error)
result = false;
}
}
return result;
};
const valid = await getAwemeId(url);
//if (!valid) return false // result = false
const data = await got
.get(API_URL(valid), {
headers: {
"Accept-Encoding": "deflate",
"User-Agent": "okhttp/3.14.9",
},
})
.catch((e) => e.response);
//if (!data) return false // result = false
const body = JSON.parse(data.body);
const obj = body.aweme_list.find((o) => o.aweme_id === valid)
const results = {
aweme_id: obj.aweme_id,
region: obj.region,
desc: obj.desc,
create_time: obj.create_time,
author: {
uid: obj.author.uid,
unique_id: obj.author.unique_id,
nickname: obj.author.nickname,
birthday: obj.author.birthday,
},
duration: obj.music.duration,
download: {
nowm: obj.video.play_addr.url_list[0],
wm: obj.video.download_addr.url_list[0],
music: obj.music.play_url.url_list[0],
music_info: {
id: obj.music.id,
title: obj.music.title,
author: obj.music.author,
is_original: obj.music.is_original,
cover_hd: obj.music.cover_hd.url_list[0],
cover_large: obj.music.cover_large.url_list[0],
cover_medium: obj.music.cover_medium.url_list[0],
},
},
};
return {
status: true,
result: results//data.body //valid
}
} catch (e) {
return { status: false, result: e }
}
}
////


let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
switch (command) {
case "public": {
if (!isOwner) return reply(mess.owner)
zyko.public = true
reply(`*_Sukses Mode Public ✅_*`)
}
break
case "self": {
if (!isOwner) return reply(mess.owner)
zyko.public = false
reply(`*_Sukses Mode Self ✅_*`)
}
break
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return reply('Pesan tersebut bukan dikirim oleh bot!')
zyko.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
///MENU GROUP
case 'linkgroup': case 'linkgc': case 'link': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) reply(mess.botAdmin)
let response = await zyko.groupInviteCode(m.chat)
reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await zyko.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await zyko.groupParticipantsUpdate(m.chat, users, 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await zyko.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
await zyko.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
reply('*_Success ✅_*')
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
zyko.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
 case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isOwner) return reply(mess.owner)
zyko.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'antilink': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
reply(`Antilink Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'antilink2': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink2) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink2 = true
reply(`antilink2 Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink2) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink2 = false
reply(`antilink2 Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'promosi': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].promosi) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].promosi = true
reply(`Promosi Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].promosi) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].promosi = false
reply(`Promosi Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'promosi2': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].promosi2) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = true
reply(`promosi2 Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].promosi2) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = false
reply(`promosi2 Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'toxic': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === "on") {
if (db.data.chats[m.chat].toxic) return reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].toxic = true
reply(`Toxic Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].toxic) return reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].toxic = false
reply(`Toxic Tidak Aktif !`)
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
case 'group': case 'grup': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins) return reply(mess.admin)
if (args[0] === 'close'){
await zyko.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Group`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'open'){
await zyko.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Group`)).catch((err) => reply(jsonformat(err)))
} else {
reply(`Mode ${command}\n\n\nKetik ${prefix + command}Open/Close`)
}
}
break
case 'revoke': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !isGroupOwner && !isOwner) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
await zyko.groupRevokeInvite(m.chat)
.then(res => {
reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`)
}).catch((err) => reply(jsonformat(err)))
}
break
//////MENU DOWNLOAD
case 'ss': case 'ssweb':{
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} link`)
reply(mess.wait)
let krt = await scp1.ssweb(q)
zyko.sendMessage(m.chat,{image: krt.result, caption: mess.success},{quoted:m})
}
break
case 'tiktok': case 'tt': {
if (!isOwner) return reply('kenpa bang')
if (!q) return reply(`🚩 *Example:* ${prefix+command} https://vt.tiktok.com/ZS8TQkpTK/`)
await zyko.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}})  
spas = "             "
let ler = await Tiktokdl(q)
let cer = ler.result
let cap = `${spas}*「 T I K T O K 」*

*📛Author:* ${cer.author.nickname}
*📒Title:* ${cer.desc}

${footer}
`
zyko.sendMessage(m.chat, { video: { url: cer.download.nowm }, caption: cap }, { quoted: m})
};
break
case 'qc': case 'qcs': {
if (!isOwner) return reply('kenpa bang')
if (!q) return reply(`Contoh: ${prefix + command} pink hallo\n\nlist warna\npink\nbiru\mmerah\nhijau\nkuning\nungu\nbirutua\nbirumuda\nabu\norange\nhitam\nputih\nteal\nmerahmuda\ncokelat\nsalmon\nmagenta\ntan\nwheat\ndeeppink\napi\nbirulangit\njingga\nbirulangitcerah\nhotpink\nbirumudalangit\nhijaulaut\nmerahtua\noranyemerah\ncyan\nungutua\nhijaulumut\nhijaugelap\nbirulaut\noranyetua\nungukehitaman\nfuchsia\nmagentagelap\nabu-abutua\npeachpuff\nhijautua\nmerahgelap\ngoldenrod\nabu-abutua\nungugelap\nemas\nperak`)
if (text.length > 100) return reply(`🚩 Max 100 character.`)
let [color, ...message] = text.split(' ');
message = message.join(' ');
let backgroundColor;
switch(color) {
case 'pink':
backgroundColor = '#f68ac9';
break;
case 'biru':
backgroundColor = '#6cace4';
break;
case 'merah':
backgroundColor = '#f44336';
break;
case 'hijau':
backgroundColor = '#4caf50';
break;
case 'kuning':
backgroundColor = '#ffeb3b';
break;
case 'ungu':
backgroundColor = '#9c27b0';
break;
case 'birutua':
backgroundColor = '#0d47a1';
break;
case 'birumuda':
backgroundColor = '#03a9f4'; 
break;
case 'abu':
backgroundColor = '#9e9e9e';
break;
case 'orange':
backgroundColor = '#ff9800';
break;
case 'hitam':
backgroundColor = '#000000';
break;
case 'putih':
backgroundColor = '#ffffff';
break;
case 'teal':
backgroundColor = '#008080';
break;
case 'merahmuda':
backgroundColor = '#FFC0CB';
break;
case 'cokelat':
backgroundColor = '#A52A2A';
case 'salmon':
backgroundColor = '#FFA07A'; 
break; 
case 'magenta':
backgroundColor = '#FF00FF'; 
break; 
case 'tan':
backgroundColor = '#D2B48C'; 
break;
case 'wheat':
backgroundColor = '#F5DEB3'; 
break;
case 'deeppink':
backgroundColor = '#FF1493'; 
break; 
case 'api':
backgroundColor = '#B22222';
break;
case 'birulangit':
backgroundColor = '#00BFFF';
break; 
case 'jingga':
backgroundColor = '#FF7F50';
break;
case 'birulangitcerah':
backgroundColor = '#1E90FF'; 
break; 
case 'hotpink':
backgroundColor = '#FF69B4'; 
break; 
case 'birumudalangit':
backgroundColor = '#87CEEB'; 
break; 
case 'hijaulaut':
backgroundColor = '#20B2AA'; 
break; 
case 'merahtua':
backgroundColor = '#8B0000'; 
break; 
case 'oranyemerah':
backgroundColor = '#FF4500'; 
break; 
case 'cyan':
backgroundColor = '#48D1CC'; 
break; 
case 'ungutua':
backgroundColor = '#BA55D3'; 
break; 
case 'hijaulumut':
backgroundColor = '#00FF7F'; 
break; 
case 'hijaugelap':
backgroundColor = '#008000'; 
break; 
case 'birulaut':
backgroundColor = '#191970'; 
break; 
case 'oranyetua':
backgroundColor = '#FF8C00'; 
break; 
case 'ungukehitaman':
backgroundColor = '#9400D3'; 
break; 
case 'fuchsia':
backgroundColor = '#FF00FF'; 
break; 
case 'magentagelap':
backgroundColor = '#8B008B'; 
break;
case 'abu-abutua':
backgroundColor = '#2F4F4F'; 
break;
case 'peachpuff':
backgroundColor = '#FFDAB9'; 
break;
case 'hijautua':
backgroundColor = '#BDB76B'; 
break;
case 'merahgelap':
backgroundColor = '#DC143C'; 
break;
case 'goldenrod':
backgroundColor = '#DAA520'; 
break;
case 'abu-abutua':
backgroundColor = '#696969'; 
break;
case 'ungugelap':
backgroundColor = '#483D8B'; 
break;
case 'emas':
backgroundColor = '#FFD700'; 
break;
case 'perak':
backgroundColor = '#C0C0C0'; 
break;
default:
return reply('Warna yang dipilih tidak tersedia.')
}
let obj = {
type: 'quote',
format: 'png',
backgroundColor,
width: 512,
height: 768,
scale: 2,
messages: [
{
entities: [],
avatar: true,
from: {
id: 1,
name: pushname,
photo: { 
url: await zyko.profilePictureUrl(m.sender, "image").catch(() => 'https://telegra.ph/file/999b290ecb3e50107a9da.jpg'),
}
},
text: message,
replyMessage: {},
},
],
};
let response = await axios.post('https://bot.lyo.su/quote/generate', obj, {
headers: {
'Content-Type': 'application/json',
},
});
let buffer = Buffer.from(response.data.result.image, 'base64');
zyko.sendImageAsSticker(m.chat, buffer, m, { packname: `${global.packname}`, author: `${global.author}`})
}
break
////PUSHKONTAK
case 'pushkontak': case 'push': {
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!q) return reply(`Masukan teks ${prefix + command}text\nexample : ${prefix + command}assalamualaikum save Zyko MD`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)  
if (mem.length == 0) return reply('Tidak ada anggota yang ditemukan')  
let chatIds = mem.map(v => v.replace(/@.+/, ''))  
for (let chatId of chatIds) {
zyko.sendMessage(chatId + '@s.whatsapp.net', {
text: q
})
}  
reply('Sukses Push Kontak')
}
break
case 'pushkontakid': case 'pushid': {
if (!isOwner) return reply(mess.owner)
if (!q) return reply(`🚩 Enter the group id and text in the correct format, for Example: ${prefix+command}1234567890@g.us|assalamualaikum save Zyko MD`)
let [groupId, pushText] = text.split('|') //text.split("|")[0]
if (!groupId || !pushText) throw reply(`Enter the group id and text in the correct format, for Example: ${prefix+command}1234567890@g.us|assalamualaikum save Zyko MD`)
reply('🚩 Currently pushing contact please wait')
const metadata2 = await zyko.groupMetadata(groupId)
const halss = metadata2.participants
for (let mem of halss) {
zyko.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
}  
reply('🚩 Success Push Contacts')
}
break

//////BUATAN ZYKO MD JANGAN HAPUS YA TOT CREDITS NYA 
/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zzyko_04
 * ig: @zyko_store
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/
case "save": {
  if (!isOwner) return reply('ha...');
  if (!q) return reply('reply pesan text')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let phoneNumber = users.replace(/[^0-9]/g, ''); // Menghapus semua karakter non-angka dari nomor
if (phoneNumber.length === 11 && phoneNumber.startsWith('0')) {
  phoneNumber = '' + phoneNumber.substr(1); // Mengubah awalan '0' menjadi '62'
} else if (phoneNumber.length === 12 && phoneNumber.startsWith('00')) {
  phoneNumber = phoneNumber.substr(2); // Menghapus awalan '00'
} else if (phoneNumber.length === 13 && phoneNumber.startsWith('+')) {
  phoneNumber = phoneNumber.substr(1); // Menghapus awalan '+'
} else if (phoneNumber.length === 10) {
  phoneNumber = '' + phoneNumber; // Menambahkan awalan '62'
}
phoneNumber = '' + phoneNumber;

const uniqueContacts = [phoneNumber]; // Menggunakan nomor yang ditandai sebagai uniqueContacts
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${text}\nTEL;type=CELL;type=VOICE;waid=${uniqueContacts}:+${uniqueContacts}\nEND:VCARD`
await zyko.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: m })
reply(`*_VIP SAVE BY ZYKO MD_*\n*_NO DONE DI SAVE, SAVE BACK BY ${global.namaowner}_*`)
  }
break
////MAIN MENU
case 'zyko': case 'ko': {
let vooe = `*Hello @${m.sender.split("@")[0]}, ${waktuucapan}*,\n\n
𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭
Nᴀᴍᴀ Bᴏᴛᴢ : ${namebot}
Cʀᴇᴀᴛᴏʀ : ZYKO MD
Mᴏᴅᴇ : ${zyko.public ? 'Public' : `Self`}
Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
Oᴡɴᴇʀ : @${Owner.split('@')[0]}
Vᴇʀsɪᴏɴ : 1.0.0
Rᴜɴɴɪɴɢ : Pannel

╭──═[ 𝙇𝙞𝙨𝙩 𝙈𝙚𝙣𝙪 ]═────
│
│${emot} ${prefix}menuowner
│${emot} ${prefix}menugroup
│${emot} ${prefix}menuseller
│${emot} ${prefix}menupannel
│${emot} ${prefix}menuother
│${emot} ${prefix}menupushkontak
│${emot} ${prefix}menustore
│${emot} ${prefix}credits
│${emot} ${prefix}allmenu
│
╰──────────────˧

*_YT : https://www.youtube.com/@zykobotz_*`
zyko.sendMessage(m.chat, { text: vooe, mentions: [m.sender] }, { quoted: zyko.chat })
}
break

/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zzyko_04
 * ig: @zyko_store
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).




INGAT TQTO JANGAN PERNAH HAPUS 

GW YANG BUAT CAPE LO MALAH HAPUS 

TQTO LO TAMBAHIN AJA NAMA LO, JANGAN PERNH SATU NAMA PUN LO HAPUS TQTO NYA

YANG JUAL SC NYA GW DOA IN JADI YATIM




*/
case 'tqto': case 'credits': case 'credit': {
let tqto = `
BiG Thanks To
Allah Yang Maha Esa
Orang Tua
Teman Gw
Pacar Gw Lisa Amelia

_The Name That Helped me_ 

Zyko MD (me)
Aldi Lesmana
Wh Mods Dev
Danzz Coding
Adrian
XTRAM-TEAM
`
zyko.sendMessage(m.chat, {
text: tqto,
contextInfo: {
externalAdReply: {
title: v,
thumbnailUrl: "https://telegra.ph/file/a0d4dadf97dc29fba2c32.jpg",
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
} 
break
case 'sc':
case 'script': 
sc = `
_Hello ${pushname} 👋_


*_Cari Sc Ya ?_*
*_Cek Ke Cannel Zykobotz_*
*_Atau Bisa click link bawah ini ⤵️_*
*_https://www.youtube.com/@zykobotz_*

*_Mau Beli Sc request Bisa hubungi saya ke WhatsApp zykobotz_*

*_Contact owner_*
wa.me/6283133329293`
zyko.sendMessage(m.chat, { text: sc }, { quoted: zyko.chat });
break
break
//MENU TESTIMONIAL X STORE
////HARAP JANGAN JUAL SC INI BILA NEMU ADA ORG YANG JUAL LAPOR KE GW
case 'store':
case 'shop': 
case 'list': {
let teks = '┌──⭓「 *LIST STORE* 」\n│\n'
for (let x of db_respon_list) {
teks += `│⭔ ${x.key}\n`
}
teks += `│\n└────────────⭓\n\n`
reply(teks)
}
break
case 'addlist':
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]    
if (!q.includes("@")) return reply(`Gunakan dengan cara ${prefix+command.slice(0)} *Nama Item@Item*\n\n_Contoh_\n\n${prefix+command.slice(0)} namalist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
media = await zyko.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses Add List Dengan Kunci : *${args1}*`)
}
break
case 'dellist':
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} namalist`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case 'updatelist':
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} namalist@List`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
media = await zyko.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(media)
updateResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Sukses update list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
}
break
case 'proses': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let pro = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${week} ${date}\n⌚ JAM     : ${jam} WIB\n✨ STATUS  : Pending\`\`\`\n\nPesanan @${users.split("@")[0]} sedang di proses!`
zyko.sendMessage(m.chat, { text: pro, mentions: [users] }, { quoted: zyko.chat })
}
break
case 'done': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
let don = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${week} ${date}\n⌚ JAM     : ${jam} WIB\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @${users.split("@")[0]} Next Order ya🙏`
zyko.sendMessage(m.chat, { text: don, mentions: [users] }, { quoted: zyko.chat })
}
break
///MENU OWNER
case 'author': case 'owner': case 'creator': {
await zyko.sendContact(m.chat, global.owner, m)
}
break
case 'pay': case 'payment': case 'bayar': {
reply(`Dana : ${adana}\nOvo : ${aovo}\nGopay : ${agopay}`)
}
break
case 'autoread': 
if (!isOwner) return reply(mess.owner)
if (args.length < 1) return reply(`Contoh ${prefix + command} on/off`)
if (q === 'on'){
global.db.data.settings[botNumber].autoread = true
reply(`Berhasil mengubah autoread ke ${q}`)
} else if (q === 'off'){
global.db.data.settings[botNumber].autoread = false
reply(`Berhasil mengubah autoread ke ${q}`)
}
break
case 'block': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await zyko.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isOwner) return reply(mess.owner)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await zyko.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'join': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply('Masukkan Link Group!')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return 'Link Invalid!'
reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await zyko.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'leave': {
if (!isOwner) return reply(mess.owner)
await zyko.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'cekidgc': case 'idgrup': {
if (!isOwner) return reply(mess.owner)
let getGroups = await zyko.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await zyko.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontakid idgroup|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'myip': {
if (!isOwner) return newReply(mess.owner)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
reply("🔎 My public IP address is: " + ip);
})
})
}
break
////ALLMENU
case 'ka': case 'bul': {
let allmenu = `*Hello @${m.sender.split('@')[0]}, ${waktuucapan}*,\n\n
𝗜𝗡𝗙𝗢 𝗕𝗢𝗧𝗭
Nᴀᴍᴀ Bᴏᴛᴢ : ${namebot}
Cʀᴇᴀᴛᴏʀ : ZYKO MD
Mᴏᴅᴇ : ${zyko.public ? 'Public' : `Self`}
Rᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
Oᴡɴᴇʀ : @${Owner.split('@')[0]}
Vᴇʀsɪᴏɴ : 1.0.0
Rᴜɴɴɪɴɢ : Pannel

╭─▸ *FITUR PANEL* 
│
│${emot} ${prefix}panel
│${emot} ${prefix}sgc
│${emot} ${prefix}vps
│${emot} ${prefix}pesan *<@user/text>*
│${emot} ${prefix}createadmin
│${emot} ${prefix}addusr
│${emot} ${prefix}delusr
│${emot} ${prefix}listusr
│${emot} ${prefix}listadmin
│${emot} ${prefix}detusr
│${emot} ${prefix}addsrv
│${emot} ${prefix}delsrv
│${emot} ${prefix}listsrv
│${emot} ${prefix}detsrv
│${emot} ${prefix}reinstall
│${emot} ${prefix}updatesrv
│${emot} ${prefix}startsrv
│${emot} ${prefix}stopsrv
│${emot} ${prefix}restartsrv
│
╰────────────˧

╭─▸ *FITUR RESELLER* 
│
│${emot} ${prefix}1gb,username,628xxx
│${emot} ${prefix}2gb,username,628xxx
│${emot} ${prefix}3gb,username,628xxx
│${emot} ${prefix}4gb,username,628xxx
│${emot} ${prefix}5gb,username,628xxx
│${emot} ${prefix}6gb,username,628xxx
│${emot} ${prefix}unli Khusus Owner
│
╰────────────˧

╭─▸ *FITUR STORE* 
│
│${emot} ${prefix}store
│${emot} ${prefix}addlist
│${emot} ${prefix}dellist
│${emot} ${prefix}updatelist
│${emot} ${prefix}proses *<reply/pesan>*
│${emot} ${prefix}done *<reply/pesan>*
│
╰────────────˧

╭─▸ *FITUR PUSHKONTAK* 
│
│${emot} ${prefix}pushkontakid *<idgc/pesan>*
│${emot} ${prefix}pushid *<idgc/pesan>*
│${emot} ${prefix}pushkontak *<text>*
│${emot} ${prefix}push *<text>*
│${emot} ${prefix}cekidgc
│${emot} ${prefix}save *<reply/pesan>*
│
╰────────────˧

╭─▸ *FITUR GROUP* 
│
│${emot} ${prefix}linkgroup 
│${emot} ${prefix}revoke
│${emot} ${prefix}tagall *<text>*
│${emot} ${prefix}group *<open/close>*
│${emot} ${prefix}add *<@user>*
│${emot} ${prefix}kick *<@user>*
│${emot} ${prefix}promote *<@user>*
│${emot} ${prefix}demote *<@user>*
│${emot} ${prefix}hidetag *<text>*
│${emot} ${prefix}antilink *<on/off>*
│${emot} ${prefix}antilink2 *<on/off>*
│${emot} ${prefix}promosi *<on/off>*
│${emot} ${prefix}promosi2 *<on/off>*
│
╰────────────˧

╭─▸ *FITUR OTHER* 
│
│${emot} ${prefix}tiktok *<url>* 
│${emot} ${prefix}ssweb *<url>*
│${emot} ${prefix}qc *<text>*
│
╰────────────˧`
zyko.sendMessage(m.chat, { image: { url: ppuser }, mentions: [m.sender], caption: `${allmenu}` })
}
break
case 'menustore': {
cop = `
╭─▸ *FITUR STORE* 
│
│${emot} ${prefix}store
│${emot} ${prefix}addlist
│${emot} ${prefix}dellist
│${emot} ${prefix}updatelist
│${emot} ${prefix}proses *<reply/pesan>*
│${emot} ${prefix}done *<reply/pesan>*
│
╰────────────˧`
zyko.sendMessage(m.chat, { image: { url: ppuser }, caption: cop }, { quoted: zyko.chat })
}
break
case 'menupushkontak': {
cpo = `
╭─▸ *FITUR PUSHKONTAK* 
│
│${emot} ${prefix}pushkontakid *<idgc/pesan>*
│${emot} ${prefix}pushid *<idgc/pesan>*
│${emot} ${prefix}pushkontak *<text>*
│${emot} ${prefix}push *<text>*
│${emot} ${prefix}cekidgc
│${emot} ${prefix}save *<reply/pesan>*
│
╰────────────˧`
zyko.sendMessage(m.chat, { image: { url: ppuser }, caption: cpo }, { quoted: zyko.chat })
}
break
case 'menuowner': {
if (!isOwner) return reply('kenpa om')
capo = `
╭─▸ *FITUR OWNER* 
│
│${emot} ${prefix}self
│${emot} ${prefix}public
│${emot} ${prefix}myip
│${emot} ${prefix}autoread *<on/off>*
│${emot} ${prefix}block *<reply/pesan>*
│${emot} ${prefix}unblock *<reply/pesan>*
│${emot} ${prefix}join *<urlgrup>*
│${emot} ${prefix}addseler *<@user>*
│${emot} ${prefix}delseler *<@user>*
│${emot} ${prefix}listseler
│${emot} ${prefix}leave
│${emot} ${prefix}payment
│
╰────────────˧`
zyko.sendMessage(m.chat, { image: { url: ppuser }, caption: capo }, { quoted: zyko.chat })
}
break
case 'menugroup': {
capo = `
╭─▸ *FITUR GROUP* 
│
│${emot} ${prefix}linkgroup 
│${emot} ${prefix}revoke
│${emot} ${prefix}tagall *<text>*
│${emot} ${prefix}group *<open/close>*
│${emot} ${prefix}add *<@user>*
│${emot} ${prefix}kick *<@user>*
│${emot} ${prefix}promote *<@user>*
│${emot} ${prefix}demote *<@user>*
│${emot} ${prefix}hidetag *<text>*
│${emot} ${prefix}antilink *<on/off>*
│${emot} ${prefix}antilink2 *<on/off>*
│${emot} ${prefix}promosi *<on/off>*
│${emot} ${prefix}promosi2 *<on/off>*
│
╰────────────˧`
zyko.sendMessage(m.chat, { image: { url: ppuser }, caption: capo }, { quoted: m })
}
break

case 'menuseller': {
capo = `
╭─▸ *FITUR RESELLER* 
│
│${emot} ${prefix}1gb,username,628xxx
│${emot} ${prefix}2gb,username,628xxx
│${emot} ${prefix}3gb,username,628xxx
│${emot} ${prefix}4gb,username,628xxx
│${emot} ${prefix}5gb,username,628xxx
│${emot} ${prefix}6gb,username,628xxx
│${emot} ${prefix}unli Khusus Owner
│
╰────────────˧`
zyko.sendMessage(m.chat, { image: { url: ppuser }, caption: capo }, { quoted: m })
}
break
case 'menupannel': {
capo = `
╭─▸ *FITUR PANEL* 
│
│${emot} ${prefix}panel
│${emot} ${prefix}sgc
│${emot} ${prefix}vps
│${emot} ${prefix}pesan *<@user/text>*
│${emot} ${prefix}createadmin
│${emot} ${prefix}addusr
│${emot} ${prefix}delusr
│${emot} ${prefix}listusr
│${emot} ${prefix}listadmin
│${emot} ${prefix}detusr
│${emot} ${prefix}addsrv
│${emot} ${prefix}delsrv
│${emot} ${prefix}listsrv
│${emot} ${prefix}detsrv
│${emot} ${prefix}reinstall
│${emot} ${prefix}updatesrv
│${emot} ${prefix}startsrv
│${emot} ${prefix}stopsrv
│${emot} ${prefix}restartsrv
│
╰────────────˧`
zyko.sendMessage(m.chat, { image: { url: ppuser }, caption: capo }, { quoted: m })
}
break
case 'menuother': {
capo = `
╭─▸ *FITUR OTHER* 
│
│${emot} ${prefix}tiktok *<url>* 
│${emot} ${prefix}ssweb *<url>*
│${emot} ${prefix}qc *<text>*
│
╰────────────˧`
zyko.sendMessage(m.chat, { image: { url: ppuser }, caption: capo }, { quoted: m })
}
break
case 'sgc': 
case 'gc':
case 'gczyko': {
reply(`*_Harap Join Group Sebelum Transaksi*
_*Dan Lihat Deskripsi Group Atau rules sebelum Transaksi Done*_

*_TERIMA KASIH_*


JOIN GROUP

⚡ PANNEL BY ZYKO MD ⚡
\n${sgc}`)
}
break
case 'listpanel': case 'panel': case 'buypanel':{
let menu_nya =`Hai Kak ${pushname}

*LIST HARGA PANEL BY ZYKO MD*

- RAM 1GB CPU 30% 3K/BULAN
- RAM 2GB CPU 50% 7K/BULAN
- RAM 3GB CPU 75% 10K/BULAN
- RAM 4GB CPU 100% 15K/BULAN
- RAM 5GB CPU 130% 20K/BULAN
- RAM 6GB CPU 150% 25K/BULAN
- RAM 7GB CPU 175% 30K/BULAN
- RAM 8GB CPU 175% 35K/BULAN

- RAM,CPU,DISK UNLIMITED 15K/BATAS

- RAM,CPU,DISK UNLIMITED 40K/BULAN

- ADMIN PANEL 50K/BULAN

*[ KEUNTUNGAN PANEL ]*

- BISA BUAT RUN BOT NO RIBET
- WEBSITE/APK CLOSE BOT TETAP ON/JALAN
- GA BOROS KUOTA
- GA MENUHIN MEMORI
- BISA OPEN MURBUG

*[ KEUNTUNGAN ADMIN PANEL ]*

- BISA CREATE PANEL SENDIRI
- BISA CREATE PANEL SEPUAS NYA
- BISA JUAL PANEL KE ORANG LAIN
- BISA BALMOD KALO LU NIAT JUALAN

▰▰▰▰▰▰▰▰▰▰▰▰▰▰

*MINAT? CHAT*
Wa.me/6283133329293

*© ZYKO MD*`
zyko.sendMessage(m.chat, { image: thumb, caption: `${menu_nya}` }, {quoted: zyko.chat})
}
break
case 'listvps': case 'vps': case 'buyvps':{
let menu_nya =`Hai Kak ${pushname}

*LIST HARGA VPS ZYKO MD*

- RAM 2GB CORE 1 : 15K
- RAM 2GB CORE 2 : 20K
- RAM 4GB CORE 2 : 30K
- RAM 8GB CORE 4 : 50K

*NOTE*
- GARANSI 7 HARI
- MASA AKTIF 1 BULAN
- VPS : DIGITALOCEAN [ DO ]

*MINAT? CHAT*
wa.me/6283133329293

*© ZYKO MD*`
zyko.sendMessage(m.chat, { image: thumb, caption: `${menu_nya}` }, {quoted: zyko.chat})
}
break
///Pesan buyer
case 'pesan': case 'buyer': {
if (!isOwner) return reply(mess.owner)
if (!args || !args[0]) return reply(`🚩 Please enter the message\nExample of Use: ${prefix + command} ${owner} pesan untuknya`)
let ngen = ['|']
if (args[0].includes(ngen)) return reply('Replace Symbol | So spaces')
if (args[0].length > 14) return reply('Extension Number')
if (args[0].length < 7) return reply('Abbreviation Number')
if (args[0].startsWith('0')) return reply('Use format 62')
if (!args[0]) return reply('Masukkan Teks')
let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[0] ? (args[0].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
let txt = (args.length > 1 ? args.slice(1).join(' ') : '') || ''
let q = m.quoted ? m.quoted : m
let mime = (q.m || q).mimetype || ''
let tujuan = `${txt}`
if (!m.quoted) {
zyko.sendText(mention, tujuan)
} else {
zyko.sendText(mention, tujuan)
let media = q ? await m.getQuotedObj() : false || m
await zyko.copyNForward(mention, media, false).catch(_ => _)
}
let suks = `Mengirim Pesan *${mime ? mime : 'Teks'}*
*_Success ✅_*

Text :
${txt}
`
zyko.sendMessage(m.chat, { text: `${suks}`, mentions: [suks] }, { quoted: m })

}
break
//MENU SELLER
case 'addseler': case 'addseller':{
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} @tag/nomor`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let cekadd = await zyko.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekadd.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/json/seller.json', JSON.stringify(owner))
reply(`Nomor ${bnnd} Sudah Bisa Akses!!!`)
}
break
case 'delseler': case 'delseller':{
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} @tag/nomor`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/json/seller.json', JSON.stringify(owner))
reply(`Nomor ${ya} Sudah Tidak Bisa Add Server`)
}
break
case 'listseler': case 'listseller':{
if (!isOwner) return reply(mess.owner)
let listseller =`*LIST SELLER ZYKO MD*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listseller +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listseller +=`Untuk Menghapus Akses Seller Ketik ${prefix}delseler 628xxx/@tag`
zyko.sendMessage(m.chat, {text: listseller },{quoted: zyko.chat})
}
break
//Create Panel Simple 1GB - UNLI
//Bagian Reseller Menu
case "1gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "1000"
let cpu = "30"
let disk = "1000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u,{image: {url: ppuser}, caption: ctf }, { quoted: zyko.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}
break
case "2gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "2000"
let cpu = "50"
let disk = "2000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u,{image: {url: ppuser}, caption: ctf }, { quoted: zyko.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}
break
case "3gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "3000"
let cpu = "75"
let disk = "3000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u,{image: {url: ppuser}, caption: ctf }, { quoted: zyko.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}

break
case "4gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "4000"
let cpu = "100"
let disk = "4000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u,{image: {url: ppuser}, caption: ctf }, { quoted: zyko.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}

break
case "5gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "5000"
let cpu = "130"
let disk = "5000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u,{image: {url: ppuser}, caption: ctf }, { quoted: zyko.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}

break
case "6gb": {
if (!isSeler && !isOwner) return reply(`Fitur Ini Khusus Seller Dan Owner`)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "6000"
let cpu = "150"
let disk = "6000"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u,{image: {url: ppuser}, caption: ctf }, { quoted: zyko.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
`)

}

break

case "unli": {
if (!isOwner) return reply(mess.owner)
let t = text.split(',');
if (t.length < 2) return reply(`*Format salah!*

Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = "15"
let loc = "1"
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "@gmail.com"
 
if (!u) return
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}


ID : ${user.id}
EMAIL : ${user.email}
USERNAME : ${user.username}
PASSWORD : ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN : ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}
`
zyko.sendMessage(u,{image: {url: ppuser}, caption: ctf }, { quoted: zyko.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`

*SUCCESSFULLY ADD USER + SERVER*

TYPE: user

ID : ${user.id}
USERNAME : ${user.username}
EMAIL : ${user.email}
NAME : ${user.first_name} ${user.last_name}
MEMORY : ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK : ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU : ${server.limits.cpu}%
TANGGAL : ${week} ${date}
JAM : ${jam} WIB

`)

}

break
// MENU PANEL BY ZYKOMD
////cret admin
case "createadmin": {
if (!isOwner) return reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = await zyko.sendMessage(m.chat, { text: `

*SUCCESSFULLY ADD USER*

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
️CREATED AT: ${week} ${date}
JAM : ${jam} WIB


*Password Telah Dikirim Di Private Chat @${u.split`@`[0]}*`, mentions:[u],
})
zyko.sendMessage(u, { text: `Hai Kak ${pushname} 

*BERIKUT DETAIL AKUN ADMIN PANEL ANDA*\n
 
ID: ${user.id}
EMAIL: ${user.email}
USERNAME: ${user.username}
PASSWORD: ${password.toString()}
TANGGAL : ${week} ${date}
JAM : ${jam} WIB
️LOGIN: ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us



*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}`,
})
}
break

case 'addusr': {
if (!isOwner) return reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
//let password
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return reply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await zyko.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[5]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes

let p = await zyko.sendMessage(m.chat, { text: `
*SUCCESSFULLY ADD USER*

TYPE: user

ID: ${user.id}
UUID: ${user.uuid}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}
LANGUAGE: ${user.language}
ADMIN: ${user.root_admin}
CREATED AT: ${week} ${date}
JAM : ${jam} WIB

LOGIN: ${domain}
*Password telah dikirim di private chat @${u.split`@`[0]}*`, mentions:[u],
})
zyko.sendMessage(u, {
text: `*BERIKUT DETAIL AKUN PANEL ANDA*\n
🆔ID: ${user.id}
📬EMAIL : ${email}
👤USERNAME: ${username}
🔐PASSWORD: ${password.toString()} 
☢️CREATED AT: ${week} ${date}
⌚JAM : ${jam} WIB

🖥️LOGIN: ${domain}
TUTORIAL : https://youtu.be/2PuFtZkL5Us

*NOTE*
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
-----------------------------------

*JOIN GROUP PANEL*
${sgc}`,

})
}
break
case 'delusr': {
if (!isOwner) return reply(mess.owner)
let usr = args[0]
if (!usr) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
//let res = await f.json()
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}
break
case "listusr": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await zyko.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case "listadmin": {
  if (!isOwner) return reply(`Maaf, Anda tidak dapat melihat daftar pengguna.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await zyko.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'detusr': {
let usr = args[0]
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
let u = res.attributes
reply(`*${u.username.toUpperCase()} USER DETAILS*

\`\`\`ID: ${u.id}
UUID: ${u.uuid}
USERNAME: ${u.username}
EMAIL: ${u.email}
NAME: ${u.first_name} ${u.last_name}
LANGUAGE: ${u.language}
ADMIN: ${u.root_admin}
CREATED AT: ${week} ${date}\`\`\``)
}
break
case 'addsrv': {
if (!isOwner) return reply(mess.owner)
let s = text.split(',');
if (s.length < 7) return reply(`*Format salah!*

Penggunaan:
${prefix + command} name,desc,userId,15,locId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];

let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
//console.log(data.attributes.startup)
let startup_cmd = data.attributes.startup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 0,
"backups": 20,
"allocations": 0,
},
// "allocation": {
// "default": 36
// }
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
JAM : ${jam} WIB
`)
}
break
case 'delsrv': {
if (!isOwner) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}
break
case 'listsrv': {
let page = args[0] ? args[0] : '1'
let f = await fetch(domain + "/api/application/servers?page=" + page, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
let servers = res.data
let sections = []
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + c_apikey
}
})
let data = await f3.json();
let obj = {
title: "2023 © ZYKO MD",
rows: [
{ title: `${s.id}. ${s.name}`, rowId: `${prefix}detsrv ` + s.id, description: `Status: ${data.attributes ? data.attributes.current_state : s.status}` },
]
}
await sections.push(obj)
if (sections.length >= 50 && res.meta.pagination.links.next) {
sections.push({
title: "𝗟𝗶𝘀𝘁 𝗬𝗼𝘂𝗿 𝗦𝗲𝗿𝘃𝗲𝗿'𝘀",
rows: [
{ title: `⏩ NEXT`, rowId: `${prefix}listsrv 2`, description: 'Page 2' },
]
})
}
}
await zyko.sendMessage(m.chat, {
text: "Berikut list server panel anda",
footer: `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}`,
title: "2023 © ZYKO MD",
buttonText: `${res.meta.pagination.count} Servers`,
sections
}, { quoted: m })
}
break
case 'detsrv': {
let srv = args[0]
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = await f.json();
if (res.errors) return reply('*SERVER NOT FOUND*')
let s = res.attributes
let f2 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + c_apikey
}
})
let data = await f2.json();
let t = data.attributes
reply(`*${s.name.toUpperCase()} SERVER DETAILS*

\`\`\`STATUS: ${t.current_state}

ID: ${s.id}
UUID: ${s.uuid}
NAME: ${s.name}
DESCRIPTION: ${s.description}
MEMORY: ${await (format(t.resources.memory_bytes)).toString()} / ${s.limits.memory === 0 ? 'Unlimited' : s.limits.memory + 'MB'}
DISK: ${await (format(t.resources.disk_bytes)).toString()} / ${s.limits.disk === 0 ? 'Unlimited' : s.limits.disk + 'MB'}
CPU: ${t.resources.cpu_absolute}% / ${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}
CREATED AT: ${week} ${date}\`\`\``)
}
break
case 'reinstall': {
if (!isOwner) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv + "/reinstall", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*REINSTALLING THE SERVER..*')
}
break
case 'updatesrv': {
if (!isOwner) return reply(mess.owner)
let t = text.split(',');
if (t.length < 4) return reply(`*Format salah*

Penggunaan:
${prefix + command} srvId,locId,memory/disk,cpu`)
let srv = t[0];
let loc = t[1];
let memo_disk = t[2].split`/`;
let cpu = t[3];
let f1 = await fetch(domain + "/api/application/servers/" + srv, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json()

let f = await fetch(domain + "/api/application/servers/" + srv + "/build", {
"method": "PATCH",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"allocation": parseInt(loc) || data.attributes.allocation,
"memory": memo_disk[0] || data.attributes.limits.memory,
"swap": data.attributes.limits.swap || 0,
"disk": memo_disk[1] || data.attributes.limits.disk,
"io": 500,
"cpu": cpu || data.attributes.limits.cpu,
"threads": null,
"feature_limits": {
"databases": 5,
"allocations": 5,
"backups": 5
}
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY UPDATED THE SERVER*

TYPE: ${res.object}

ID: ${server.id}
UUID: ${server.uuid}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%
CREATED AT: ${week} ${date}
UPDATED AT: ${server.updated_at}`)
}
break
case 'startsrv': case 'stopsrv': case 'restartsrv': {
let action = command.replace('srv', '')
if (!isOwner) return reply(mess.owner)
let srv = args[0]
if (!srv) return reply('ID nya mana?')
let f = await fetch(domain + "/api/client/servers/" + srv + "/power", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + c_apikey,
},
"body": JSON.stringify({
"signal": action
})
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
reply(`*SUCCESSFULLY ${action.toUpperCase()} THE SERVER*`)
}
break
//━━━━━━━━━━━━━━━[ BATAS AKHIR ]━━━━━━━━━━━━━━━━━//

//////batas
default:
}
if (budy.startsWith('>')) {
if (!isOwner) return reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (err) {
console.log(util.format(err))
let e = String(err)
zyko.sendMessage(`${global.owner}@s.whatsapp.net`, {text:e})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})