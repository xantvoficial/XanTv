const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🎬 *VENTA DE CUENTAS NETFLIX* 🔥

🛒 *Precio por perfil:* 
   ┗ 💰 S/ 18.00

📢 *¡Promo especial para seguidores de TikTok Live!*
   ┗ 🔥 Solo a *S/ 15.00*

⏳ *Duración del servicio:* 
   ┗ 📆 Garantía de *30 días*
   ┗ 📉 Reposición si hay caída

💳 *Métodos de pago disponibles:*
   ┗ 📱 Yape
   ┗ 📲 Plin
   ┗ 🏦 Transferencias y más

📌 Usa *.menu* para ver todos los comandos disponibles.

🔹 Selecciona una opción:
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}COMPRAR`,
      buttonText: { displayText: "🛍️ Comprar ahora" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}LISTADECUENTASENVENTAS`,
      buttonText: { displayText: "🔙 Volver" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/WSBNA.jpg' },
    caption: texto,
    footer: "🔐 XanTV - dv yer",
    buttons: buttons,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "🎥 XanTV - dv yer 🌌",
        body: "venta de cuentas de netflix",
        sourceUrl: "https://github.com/king123XZ/XanTv", // Puedes cambiar este enlace por tu repo si tienes uno
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

//handler.help = ['PROMOCIONES']
//handler.tags = ['CUENTAS']
handler.command = /^PROMOCIONES$/i

export default handler
