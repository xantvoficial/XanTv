  const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🌐 *CUENTAS DIGITALES EN VEMTA- XanTv* 🚀

🎬 *Servicios disponibles:*
   ┗ 📺 Netflix desde S/ 15.00
   ┗ 🤖 ChatGPT Plus desde S/ 15.00
   ┗ 🎶 Spotify, Disney+, HBO Max, y más...

📌 Usa *.menu* para ver todos los comandos y ayuda general.

🔹 Selecciona una opción:
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}PROMOCIONES`,
      buttonText: { displayText: "PROMOCIONES" },
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
