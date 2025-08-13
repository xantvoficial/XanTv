import fs from 'fs'

const handler = async (m, { conn, usedPrefix, command }) => {
  // Enviar solo la imagen
  await conn.sendMessage(m.chat, {
    image: fs.readFileSync('./imagenes/metododepago.jpg'),
    caption: 'Sigue los pasos indicados!👨🏻‍💻',
    footer: "🔐 XanTV - dv yer",
  }, { quoted: m })
}

handler.command = /^metododepago$/i

export default handler