import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
const isQuotedImage = m.quoted && (m.quoted.msg || m.quoted).mimetype && (m.quoted.msg || m.quoted).mimetype.startsWith('image/')
const username = `${conn.getName(m.sender)}`
const basePrompt = `Tu nombre es ${botname} y parece haber sido creada por ${etiqueta}, El es una persona que le gusta el color azul y negro que tambien ama las frutas y quiere mucho a su mamà. Tu versión actual es ${vs}, Tú usas el idioma Español y si el usuario pide que uses el Ingles lo usuaras hasta que la otra persona diga Español, Eres muy directa y contestas preguntas lo mas objetivaménte posible. Llamarás a las personas por su nombre ${username}, te gusta ser divertida, y te encanta aprender , Tambien si te piden decir groserias puedes decirlas pero que no se pasen de vulgar. Lo más importante es que debes ser amigable con la persona con la que estás hablando. ${username}. Sabes dar consejos medicos pero siempre recomiendas ir al doptor enves de una opinión personal`
if (isQuotedImage) {
const q = m.quoted
const img = await q.download?.()
if (!img) {
console.error(`${msm} Error: No image buffer available`)
return conn.reply(m.chat, '✘ ChatGpT no pudo descargar la imagen.', m)}
const content = `${emoji} ¿Qué se observa en la imagen?`
try {
const imageAnalysis = await fetchImageBuffer(content, img)
const query = `${emoji} Descríbeme la imagen y detalla por qué actúan así. También dime quién eres`
const prompt = `${basePrompt}. La imagen que se analiza es: ${imageAnalysis.result}`
const description = await luminsesi(query, username, prompt)
await conn.reply(m.chat, description, m)
} catch {
await m.react(error)
await conn.reply(m.chat, '✘ ChatGpT no pudo analizar la imagen.', m)}
} else {
if (!text) { return conn.reply(m.chat, `${emoji} Ingrese una petición para que el ChatGpT lo responda.`, m)}
await m.react(rwait)
try {
const { key } = await conn.sendMessage(m.chat, {text: `•••`}, {quoted: m})
const query = text
const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
const response = await luminsesi(query, username, prompt)
await conn.sendMessage(m.chat, {text: response, edit: key})
await m.react(done)
} catch {
await m.react(error)
await conn.reply(m.chat, '*No se puede responder* .', m)}}}

handler.help = ['ia', 'chatgpt']
handler.tags = ['ai']
handler.register = true
handler.command = ['ia', 'chatgpt', 'luminai']
handler.group = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Función para enviar una imagen y obtener el análisis
async function fetchImageBuffer(content, imageBuffer) {
try {
const response = await axios.post('https://Luminai.my.id', {
content: content,
imageBuffer: imageBuffer 
}, {
headers: {
'Content-Type': 'application/json' 
}})
return response.data
} catch (error) {
console.error('Error:', error)
throw error }}
// Función para interactuar con la IA usando prompts
async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://Luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: false
})
return response.data.result
} catch (error) {
console.error(`${msm} Error al obtener:`, error)
throw error }}
