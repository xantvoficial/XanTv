import fs from 'fs'

const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
Recuerda enviarnos captura! 👩🏻‍💻
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}menu`,
      buttonText: { displayText: "🔙 Volver" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: fs.readFileSync('./imagenes/renovar.jpg'),
    caption: texto,
    footer: "",
    buttons: buttons,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "🎥 XanTV - dv yer 🌌",
        body: "Venta de cuentas premium",
        sourceUrl: "https://github.com/king123XZ/XanTv", // Podés cambiarlo si querés
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.command = /^renovar$/i

export default handler