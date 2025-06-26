const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🌐 *NETFLIX* 🚀


─
📌 Usa *.menu* para ver todos los comandos.
`.trim() + "\n\n🔹 Selecciona una opción:";

  // Botones personalizados
  const buttons = [
    {
      buttonId: `${usedPrefix}COMPRAR`,
      buttonText: { displayText: "COMPRAR " },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}LISTADECUENTASENVENTAS`,
      buttonText: { displayText: "ATRAS " },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    text: texto,
    footer: "XanTv",
    buttons: buttons,
    headerType: 1,
    contextInfo: {
      externalAdReply: {
        title: "xan tv🌌",
        body: "Únete a nuestros grupos oficiales",
        thumbnailUrl: 'https://qu.ax/hcjnp.jpg',
        sourceUrl: "https://github.com/El-brayan502/NagiBotV2",
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['NETFLIX']
handler.tags = ['CUENTAS']
handler.command = /^NETFLIX$/i

export default handler
