const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🌐 *CUENTAS EN VENTA DE STREAM XanTv* 🚀


─
📌 Usa *.menu* para ver todos los comandos.
`.trim() + "\n\n🔹 Selecciona una opción:";

  // Botones personalizados
  const buttons = [
    {
      buttonId: `${usedPrefix}NETFLIX`,
      buttonText: { displayText: "NETFLIX" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}code`,
      buttonText: { displayText: "CHAT GPT " },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}grupos`,
      buttonText: { displayText: "OTRAS CUENTAS " },
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

handler.help = ['LISTADECUENTASENVENTAS']
handler.tags = ['info']
handler.command = /^LISTADECUENTASENVENTAS$/i

export default handler
