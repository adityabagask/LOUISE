require(`./settings`)
const { default: 
makeWASocket, 
DisconnectReason, 
downloadContentFromMessage, 
useSingleFileAuthState, 
jidDecode, 
areJidsSameUser, 
makeInMemoryStore 
} = require('@adiwajshing/baileys')
const { 
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid 
} = require('./lib/exif')
const chalk = require('chalk')
const { state } = useSingleFileAuthState('./session.json')
const PhoneNumber = require('awesome-phonenumber')
const fs = require('fs')
const pino = require('pino')
const FileType = require('file-type')
const _ = require('lodash')
const figlet = require('figlet')
const yargs = require('yargs/yargs')
const { Boom } = require('@hapi/boom')
const { smsg } = require('./lib/myfunc')
const { color } = require('./lib/color')

// Console
listcolor = ['aqua','red','blue','purple','magenta']
const randomcolor = listcolor[Math.floor(Math.random() * (listcolor.length))]

// Space
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '


const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

// MongoDb
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/json/database.json`)
)

global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// Save Data
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
const startZyko = () => {
const zyko = makeWASocket({ logger: pino ({ level: 'silent' }), printQRInTerminal: true, auth: state, browser: ["Thank you Zykobotz", "Safari", "1.0.0"]})
console.log(color(figlet.textSync('ZykoBotz-MDz', {
		font: 'Small',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
	    width: 90,
		whitespaceBreak: true
        }), `${randomcolor}`))
	console.log(color(`${spc2}           [ Created by: Zyko MD ]` ,`${randomcolor}`))
	console.log(color(`${spc4}                       < =============================== >`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Hai         : i.m ${namebot}`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Bot Version : 1.0.0`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Library     : Baileys Multi Device`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Status      : Online!`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Owner       : ${namaowner}`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Author      : Zyko MD`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Base Ori By : Zyko MD`, `${randomcolor}`))
	console.log(color(`${spc4}                       < =============================== >`, `${randomcolor}`))

store.bind(zyko.ev)

zyko.ev.on('messages.upsert', async chatUpdate => {
try {
m = chatUpdate.messages[0]
if (!m.message) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
if (!zyko.public && !m.key.fromMe && chatUpdate.type === 'notify') return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = smsg(zyko, m, store)
require('./zyko')(zyko, m, chatUpdate, store)
} catch (err) {
console.log(err)}})

zyko.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if (connection === 'close') { lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? startZyko() : ''}
else if (connection === 'open') {
zyko.sendMessage(global.owner + "@s.whatsapp.net", {text:`${JSON.stringify(update, undefined, 2)}` + `\n\nBot WhatsApp By ` + namaowner})}
console.log(update)})

zyko.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

zyko.ev.on('contacts.update', update => {
for (let contact of update) {
let id = zyko.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

zyko.getName = (jid, withoutContact  = false) => {
id = zyko.decodeJid(jid)
withoutContact = zyko.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = zyko.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === zyko.decodeJid(zyko.user.id) ?
zyko.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

zyko.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await zyko.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await zyko.getName(i + '@s.whatsapp.net')}\nFN:${await zyko.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
})
}
zyko.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
zyko.public = true

zyko.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.m ? message.m : message
let mime = (message.m || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

zyko.downloadMediaMessage = async (message) => {
let mime = (message.m || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

const { getImg } = require('./lib/functions')
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    zyko.sendText = (jid, text, quoted = '', options) => zyko.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    zyko.sendTextWithMentions = async (jid, text, quoted, options = {}) => zyko.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */

zyko.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getImg(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await zyko.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

zyko.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */

let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getImg(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await zyko.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
zyko.sendButMessage = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
zyko.sendMessage(jid, buttonMessage, { quoted, ...options })
}

}

startZyko()