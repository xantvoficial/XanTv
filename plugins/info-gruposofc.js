const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🌐 *Grupos Oficiales de NagiBotV3* 🚀

✨ Únete a nuestra comunidad, comparte ideas, reporta errores, o simplemente charla con otros usuarios. ¡Eres bienvenido!

📂 *Lista de grupos:*
1️⃣  *Soporte General*  
https://chat.whatsapp.com/C7B0xV6SZLvEQ6sBfEZCSD

2️⃣  *canal principal*  
https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W

3️⃣  *Testers & Beta*  
https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W

⚠️ Respeta las normas de cada grupo. NagiBotV3 ama la paz 🎋

─
📌 Usa *.menu* para ver todos los comandos.
`.trim() + "\n\n🔹 Selecciona una opción:";

  // Botones personalizados
  const buttons = [
    {
      buttonId: `${usedPrefix}owner`,
      buttonText: { displayText: "PARA COMPRAR TOQUE AQUI" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}code`,
      buttonText: { displayText: "TODAVIA NO SE QUE" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}grupos`,
      buttonText: { displayText: "LISTA DE CUENTAS EN VENTA" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    text: texto,
    footer: "NagiBotV3",
    buttons: buttons,
    headerType: 1,
    contextInfo: {
      externalAdReply: {
        title: "NagiBotV2 🌌",
        body: "Únete a nuestros grupos oficiales",
        thumbnailUrl: 'https://qu.ax/hcjnp.jpg',
        sourceUrl: "https://github.com/El-brayan502/NagiBotV2",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^grupos$/i

export default handler
