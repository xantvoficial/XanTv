const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🤵🏻‍♂️ *Cliente VIP*

¡Holaa! 👋🏼 Te comento que cuento con un *grupo oficial* donde informo sobre:
🎁 Sorteos
🎉 Regalos
💸 Descuentos
📺 Los días que hago *LIVE* en TikTok para todos mis clientes.

💎 *¡Únete para ser Cliente VIP!* 💎
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}GRUPOOFICIALLINK`,
      buttonText: { displayText: "💎 Unirme al Grupo" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/GKVqa.jpg' }, // Imagen del grupo, cámbiala si quieres otra
    caption: texto,
    footer: "🔐 XanTv - creador dv yer",
    buttons: buttons,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "🎉 Grupo Oficial XanTv",
        body: "Sorteos, descuentos y regalos para clientes VIP",
        thumbnailUrl: 'https://qu.ax/GKVqa.jpg',
        sourceUrl: "https://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

// Subcomando para abrir enlace directo cuando toquen el botón
const linkHandler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, { text: "🔗 Únete aquí:\nhttps://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d" }, { quoted: m });
}

handler.help = ['GRUPOOFICIAL']
handler.tags = ['info']
handler.command = /^GRUPOOFICIAL$/i

linkHandler.help = ['GRUPOOFICIALLINK']
linkHandler.tags = ['info']
linkHandler.command = /^GRUPOOFICIALLINK$/i

export default handler
export { linkHandler }
