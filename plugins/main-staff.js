let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño* ${creador}
✦ *Bot:* ${botname}
⚘ *Versión:* ${vs}
❖ *Libreria:* ${libreria} ${baileys}

❍ *Creador:*

ᰔᩚ 𝓚𝓮𝓿𝓲𝓷𝓙𝓼𒆜
> 🜸 Rol » *Creador*
> ✧ GitHub » https://github.com/Kevin22Mza

❒ *Colaboradores:*

ᰔᩚ 𝓜𝓻.𝓢𝓱𝓪𝓭𝓸𝔀666 
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/MRSHAD0W666

ᰔᩚ 𝓛𝓮𝓸𝓷𝓮𝓵 𝓞𝓯𝓬
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/leoneloficial

✧ 𝓩𝓪𝓱𝓹𝓴𝓲𝓮𝓵𝓙𝓼
> 🜸 Rol » *Developer*
> ✧ GitHub » https://github.com/EnderJs-CreatorGL

ᰔᩚ 
> 🜸 Rol » *Developer*
> ✧ GitHub » 

ᰔᩚ 
> 🜸 Rol » *Mini-Dev* 
> ✧ GitHub » 
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), fkontak)
}
  
handler.help = ['staff']
handler.command = ['admins']
handler.register = true
handler.tags = ['main']

export default handler
