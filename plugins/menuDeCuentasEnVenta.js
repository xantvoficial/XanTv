const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🌐 *CUENTAS EN VENTA DE STREAM - XanTv* 🚀

🎬 *Servicios disponibles:*
   ┗ 📺 Netflix desde S/ 15.00
   ┗ 🤖 ChatGPT Plus desde S/ 15.00
   ┗ 🎶 Spotify, Disney+, HBO Max, y más...

🎯 *Garantía de 30 días en todas las cuentas.*
💳 *Pagos por Yape, Plin, y transferencias.*

📌 Usa *.menu* para ver todos los comandos y ayuda general.

🔹 Selecciona una opción:
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}NETFLIX`,
      buttonText: { displayText: "📺 NETFLIX" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}CHATGPT`,
      buttonText: { displayText: "🤖 CHATGPT" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}grupos`,
      buttonText: { displayText: "📦 OTRAS CUENTAS" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/GKVqa.jpg' },
    caption: texto,
    footer: "🔐 XanTv - creador dv yer",
    buttons: buttons,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "XanTv 🌌",
        body: "Calidad, confianza y buen precio. Creador: dv yer",
        thumbnailUrl: 'https://qu.ax/GKVqa.jpg',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['LISTADECUENTASENVENTAS']
handler.tags = ['info']
handler.command = /^LISTADECUENTASENVENTAS$/i

export default handler

