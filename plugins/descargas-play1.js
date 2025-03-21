import fetch from 'node-fetch';


let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) {
    return conn.reply(
      m.chat,
      '[ ᰔᩚ ] Ingresa el nombre o enlace para buscar en *YouTube*.`,
      m
    );
  }

  await m.react('🕓');

  try {
    const response = await fetch(`https://api.nexfuture.com.br/api/downloads/youtube/play?query=${encodeURIComponent(text)}`);
    const result = await response.json();

    if (result.status) {
      const { titulo, imagem, audio, tempo, views } = result.resultado;

      const mensaje = `🐇 *Título:* ${titulo}\n` +
                      `🍬 *Duración:* ${tempo}\n` +
                      `👁️ *Vistas:* ${views}\n` +
                      `🐚 *Descargar Audio:* [Aquí](${audio})`;

      await conn.sendMessage(m.chat, {
        audio: {
          url: audio
        },
        mimetype: 'audio/mpeg',
        contextInfo: {
          externalAdReply: {
            title: titulo,
            body: 'Audio Descargado de YouTube',
            mediaType: 1,
            mediaUrl: imagem,
            thumbnailUrl: imagem,
            sourceUrl: null,
            containsAutoReply: true,
            renderLargerThumbnail: true,
            showAdAttribution: false,
          }
        }
      }, { quoted: m });
      await m.react('✅');
    } else {
      await m.react('❌');
      conn.reply(
        m.chat,
        '[ ᰔᩚ ] No se pudo obtener el video para esta búsqueda.',
        m
      );
    }
  } catch (error) {
    console.error(error);
    await m.react('❌');
    conn.reply(
      m.chat,
      '[ ᰔᩚ ] Ocurrió un error al procesar tu solicitud.',
      m
    );
  }
};

handler.help = ['play *<query>*'];
handler.tags = ['dl'];
handler.command = ['play']
handler.register = true;

export default handler;