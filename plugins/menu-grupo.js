const handler = async (m, { conn }) => {
  const texto = `
🤵🏻‍♂️ *Cliente VIP*

¡Holaa! 👋🏼 Te comento que cuento con un *grupo oficial* donde informo sobre:
🎁 Sorteos
🎉 Regalos
💸 Descuentos
📺 Los días que hago *LIVE* en TikTok para todos mis clientes.

💎 *¡Únete para ser Cliente VIP!* 💎
`.trim();

  await conn.sendMessage(m.chat, {
    text: texto,
    footer: "🔐 XanTv - creador dv yer",
    templateButtons: [
      {
        index: 1,
        urlButton: {
          displayText: "💎 Unirme al Grupo",
          url: "https://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d"
        }
      }
    ],
    image: { url: "https://qu.ax/GKVqa.jpg" }
  }, { quoted: m });
}

handler.help = ['GRUPOOFICIAL'];
handler.tags = ['info'];
handler.command = /^GRUPOOFICIAL$/i;

export default handler;
