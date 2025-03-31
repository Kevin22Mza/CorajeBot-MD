const handler = async (m, {conn, isAdmin, groupMetadata }) => {
  if (isAdmin) return m.reply(`.unmute @+50230076791`);
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  await m.react(done)
   m.reply(`.unmute @+50230076791`);
  } catch {
    m.reply(`${msm} Ocurrio un error.`);
  }
};
handler.tags = ['owner'];
handler.help = ['unmuteowner'];
handler.command = ['unmuteowner'];
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;

export default handler;