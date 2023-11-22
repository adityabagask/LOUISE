// S C R I P T  O R I  B Y  ZYKO MD 🔭
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -

// • Zyko MD (me)
// • Aldi Lesmana
// • Wh Mods Dev
// • Danzz Coding
// • Adrian
// • XTRAM-TEAM

//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")
/*============== NOMOR ==============*/
global.owner = ['6281315379437']
global.premium = ['6281315379437']
global.namaowner = "Bagas x Louise Store"
global.namebot = "LouiseBOT"
global.sig = 'https://instagram.com/hei.gas'
global.sgc = 'https://chat.whatsapp.com/HHfMqTQYJ5fEcK9EzzLWNm'
/*============== PAYMENT ==============*/
global.adana = '6281315379437'
global.agopay = '6281315379437'
global.aovo = '6281315379437'
/*============== WATERMARK ==============*/
global.v = 'Credits Thanks Help Me'
global.wm = '© Bagas x Louise'
global.packname = ""
global.author = "Sticker By Louise"
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ Louise ッ'
/*============== CREATE PANEL ==============*/
global.domain = '-' // ISI LINK DOMAIN
global.apikey = '-' // ISI APIKEY PTLA
global.c_apikey = '-' // ISI APIKEY PTLC
/*============== MESS ==============*/
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Louise Store Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Louise Store',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Louise',
    wait: 'Sabar ya Louise sedang proses',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
//Thum
global.thumb = fs.readFileSync("./img/zyko.png")
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
