const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🤵🏻‍♂️ *Cliente VIP*

¡Holaa! 👋🏼 Te comento que cuento con un *grupo oficial* donde informo sobre:
🎁 Sorteos
🎉 Regalos
💸 Descuentos
📺 Los días que hago *LIVE* en TikTok para todos mis clientes.

👉 *Únete aquí:* 
https://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d

💎 *¡Únete para ser Cliente VIP!* 💎
`.trim();

  await conn.sendMessage(m.chat, {
    text: texto,
    footer: "🔐 XanTv - creador dv yer",
    contextInfo: {
      externalAdReply: {
        title: "🎉 Grupo Oficial XanTv",
        body: "Sorteos, descuentos y regalos para clientes VIP",
        thumbnailUrl: 'https://qu.ax/GKVqa.jpg', // Puedes cambiar por un logo si quieres
        sourceUrl: "https://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['GRUPOOFICIAL']
handler.tags = ['info']
handler.command = /^GRUPOOFICIAL$/i

export default handler
