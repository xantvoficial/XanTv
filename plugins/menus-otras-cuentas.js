const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🎬 *VENTA DE CUENTAS* 🔥

🔥 Netflix, Disney+, Spotify y más.
💰 Precios accesibles y servicio garantizado.
📆 Duración: mínimo 30 días.

🔹 Selecciona una opción:
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}creador`,
      buttonText: { displayText: "🛍️ Comprar ahora" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}menu`,
      buttonText: { displayText: "🔙 Volver al menú" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/JULOR.jpg' },
    caption: texto,
    footer: "🔐 XanTV - dv yer",
    buttons: buttons,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "🎥 XanTV - dv yer 🌌",
        body: "Venta de cuentas premium",
        sourceUrl: "https://github.com/king123XZ/XanTv", // Cambia por tu enlace si quieres
        //thumbnail: { url: 'https://qu.ax/JULOR.jpg' },
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.command = /^otrascuentas$/i

export default handler

