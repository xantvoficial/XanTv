import fs from 'fs'

const handler = async (m, { conn, usedPrefix, command }) => {
  // Enviar solo la imagen
  await conn.sendMessage(m.chat, {
    image: fs.readFileSync('https://i.postimg.cc/fTSFF24C/FLAYER-SEMANAL-4.png'),
    caption: '',
    footer: "🔐 XanTV - dv yer",
  }, { quoted: m })
}

handler.command = /^otrascuentas$/i

export default handler
