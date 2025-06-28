const handler = async (m, { conn, usedPrefix }) => {
  const texto = `
🤵🏻‍♂️ *Cliente VIP*

¡Holaa! 👋🏼 Te comento que cuento con un *grupo oficial* donde informo sobre:
🎁 Sorteos
🎉 Regalos
💸 Descuentos
📺 Los días que hago *LIVE* en TikTok para todos mis clientes.

💎 *¡Únete para ser Cliente VIP!* 💎

🔗 *Link:* https://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d
`.trim();



  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/GKVqa.jpg' },
    caption: texto,
    footer: "🔐 XanTv - creador dv yer",
    buttons: buttons,
    headerType: 4
  }, { quoted: m });
}

// Subcomando que envía el enlace de nuevo
const enlacegrupo = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    text: "🔗 *Aquí tienes el enlace para unirte:*\nhttps://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d"
  }, { quoted: m });
};

handler.help = ['GRUPOOFICIAL'];
handler.tags = ['info'];
handler.command = /^GRUPOOFICIAL$/i;

enlacegrupo.help = ['enlacegrupo'];
enlacegrupo.tags = ['info'];
enlacegrupo.command = /^enlacegrupo$/i;

export default handler;
export { enlacegrupo };
