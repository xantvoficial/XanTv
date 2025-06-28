const handler = async (m, { conn }) => {
  const texto = `
🤵🏻‍♂️ *Cliente VIP*

¡Holaa! 👋🏼 Te comento que cuento con un *grupo oficial* donde informo sobre:
🎁 Sorteos
🎉 Regalos
💸 Descuentos
📺 *LIVE* en TikTok 

💎 *¡Únete para ser Cliente VIP!* 💎
`.trim();

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/GKVqa.jpg' },
    caption: texto,
    footer: "🔐 XanTv - creador dv yer",
    buttons: [
      {
        buttonId: 'enlace_grupo',
        buttonText: { displayText: '🔗 Unirme al grupo VIP' },
        type: 1,
        url: 'https://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d' // Esto NO funciona en todos los frameworks, ver nota abajo
      }
    ],
    headerType: 4
  }, { quoted: m });
};

handler.help = ['GRUPOOFICIAL'];
handler.tags = ['info'];
handler.command = /^GRUPOOFICIAL$/i;

export default handler;
