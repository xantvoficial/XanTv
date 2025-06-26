const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🤖 *VENTA DE CUENTAS CHATGPT PLUS* ⚡

🛒 *Precio por cuenta:* 
   ┗ 💰 S/ 18.00

📢 *¡Promo especial para seguidores de TikTok Live!*
   ┗ 🔥 Solo a *S/ 15.00*

✨ *Ventajas de ChatGPT Plus:*
   ┗ 🚀 Acceso a GPT-4
   ┗ ⚡ Respuestas más rápidas
   ┗ ⏳ Prioridad en horarios pico
   ┗ 🧠 Ideal para tareas, código, estudios y más

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
      buttonText: { displayText: "💳 Comprar ChatGPT Plus" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}LISTADECUENTASENVENTAS`,
      buttonText: { displayText: "🔙 Volver" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/WSBNA.jpg' }, // Puedes cambiar la imagen por una relacionada con ChatGPT si deseas
    caption: texto,
    footer: "🔐 XanTV - dv yer",
    buttons: buttons,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "🤖 XanTV - dv yer 🌌",
        body: "Venta oficial de cuentas ChatGPT Plus",
        sourceUrl: "https://github.com/king123XZ/XanTv", // Tu enlace personalizado
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['CHATGPT']
handler.tags = ['CUENTAS']
handler.command = /^CHATGPT$/i

export default handler

