// plugins/menu.js
import fs from 'fs'

const handler = async (m, { conn, usedPrefix }) => {
  const texto = `
*📽️ CUENTAS STREAMING 📽️*

🎬 *Servicios disponibles:*
   ┗ 📺 Netflix desde S/ 15.00
   ┗ 🤖 Disney desde S/ 7.00
   ┗ 🎞️ HBO, Movistar, DirecTv, Vix, Crunchyroll y más…

⏳ *Duración del servicio:* 
   ┗ 📆 Garantía de *30 días*
   ┗ 📉 Reposición si hay caída

💳 *Métodos de pago disponibles:*
   ┗ 📱 Yape
   ┗ 💰 Plin
   ┗ 🏦 Transferencias

🔹 Selecciona una opción:
`.trim()

  await conn.sendMessage(m.chat, {
    image: fs.readFileSync('./imagenes/imagen-menu.jpg'),
    caption: texto,
    footer: '🔐 XanTv - creador dv yer',
    templateButtons: [
      { index: 1, quickReplyButton: { displayText: '🛍 Comprar',      id: `${usedPrefix}promociones` } },
      { index: 2, quickReplyButton: { displayText: '💎 Grupo Vip',     id: `${usedPrefix}grupooficial` } },
      { index: 3, quickReplyButton: { displayText: '🛒 Renovar',       id: `${usedPrefix}renovar` } },
      { index: 4, quickReplyButton: { displayText: '🔍 Referencias',   id: `${usedPrefix}referencias` } },
    ],
    contextInfo: {
      externalAdReply: {
        title: 'XanTv 🌌',
        body: 'Calidad, confianza y buen precio. Creador: dv yer',
        thumbnailUrl: 'https://qu.ax/GKVqa.jpg',
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['LISTADECUENTASENVENTAS', 'MENU']
handler.tags = ['info']
handler.command = /^(LISTADECUENTASENVENTAS|MENU)$/i

export default handler
