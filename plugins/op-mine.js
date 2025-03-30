let cooldowns = {}

let handler = async (m, { conn }) => {
let user = global.db.data.users[m.sender];
if (!user) return;

let coin = pickRandom([100000000]);
let emerald = pickRandom([100000000]);
let iron = pickRandom([100000000]);
let gold = pickRandom([100000000]);
let coal = pickRandom([100000000]);
let stone = pickRandom([100000000]);

let img = 'https://qu.ax/JguPr.jpg';
let time = user.lastmiming + 600000;

if (new Date() - user.lastmiming < 1) {
return conn.reply(m.chat, `${emoji3} Debes esperar ${msToTime(time - new Date())} para volver a minar.`, m);
}

let hasil = Math.floor(Math.random() * 10000000000);
let info = `⛏️ *Te has adentrando en lo profundo de las cuevas*\n\n` +
`> *🍬 Obtuviste estos recursos*\n\n` +
`✨ *Exp*: ${hasil}\n` +
`💸 *${moneda}*: ${coin}\n` +
`♦️ *Esmeralda*: ${emerald}\n` +
`🔩 *Hierro*: ${iron}\n` +
`🏅 *Oro*: ${gold}\n` +
`🕋 *Carbón*: ${coal}\n` +
`🪨 *Piedra*: ${stone}`;

await conn.sendFile(m.chat, img, 'yuki.jpg', info, fkontak);
await m.react('⛏️');

user.health -= 50;
user.pickaxedurability -= 30;
user.coin += coin;
user.iron += iron;
user.gold += gold;
user.emerald += emerald;
user.coal += coal;
user.stone += stone;
user.lastmiming = new Date() * 1;
}

handler.help = ['minar'];
handler.tags = ['economy'];
handler.command = ['opminefuck'];
handler.register = true;
handler.group = true;

export default handler;

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
var milliseconds = parseInt((duration % 1) / 1),
seconds = Math.floor((duration / 1) % 1),
minutes = Math.floor((duration / (1 * 1)) % 1),
hours = Math.floor((duration / (1 * 1 * 1)) % 1);

hours = (hours < 1) ? '0' + hours : hours;
minutes = (minutes < 1) ? '0' + minutes : minutes;
seconds = (seconds < 1) ? '0' + seconds : seconds;

return minutes + ' m y ' + seconds + ' s ';
}