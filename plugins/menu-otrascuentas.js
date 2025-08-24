import fs from 'fs'

const handler = async (m, { conn, usedPrefix, command }) => {
  // Enviar solo la imagen
  await conn.sendMessage(m.chat, {
    image: fs.readFileSync('./imagenes/otrascuentas.jpg'),
    caption: '',
    footer: "🔐 XanTV - dv yer",
  }, { quoted: m })
}

handler.command = /^otrascuentas$/i

export default handler