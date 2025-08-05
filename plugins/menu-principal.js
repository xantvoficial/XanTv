  const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
*📽️CUENTAS STREAMING📽️*

🎬 *Servicios disponibles:*
   ┗ 📺 Netflix desde S/ 15.00
   ┗ 🤖 Disney desde S/ 7.00
   ┗ 🎞️ HBO, Movistar, DirecTv, vix, Crunchyroll y más…

⏳ *Duración del servicio:* 
   ┗ 📆 Garantía de *30 días*
   ┗ 📉 Reposición si hay caída

💳 *Métodos de pago disponibles:*
   ┗ 📱 Yape
   ┗ 💰 Plin
   ┗ 🏦 Transferencias

🔹 Selecciona una opción:
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}PROMOCIONES`,
      buttonText: { displayText: "COMPRAR" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}grupooficial`,
      buttonText: { displayText: "GRUPO OFICAL" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}otrascuentas`,
      buttonText: { displayText: "📦 OTRAS CUENTAS" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/mOkkb.jpg' },
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

handler.help = ['LISTADECUENTASENVENTAS', 'MENU']
handler.tags = ['info']
handler.command = /^(LISTADECUENTASENVENTAS|MENU)$/i

export default handler
