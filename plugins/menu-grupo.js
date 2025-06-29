const handler = async (m, { conn }) => {
  const texto = `
🤵🏻‍♂️ *Cliente VIP*

¡Holaa! 👋🏼 Te comento que cuento con un *grupo oficial* donde informo sobre:
🎁 Sorteos.
🎉 Regalos.
💸 Descuentos.
📺 *LIVE* en TikTok.

💎 *¡Únete y seras  Cliente VIP!* 💎.

https://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d
`.trim();

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/GKVqa.jpg' },
    caption: texto,
    footer: "🔐 XanTv - creador dv yer"
  }, { quoted: m });
};

handler.help = ['GRUPOOFICIAL'];
handler.tags = ['info'];
handler.command = /^GRUPOOFICIAL$/i;

export default handler;

