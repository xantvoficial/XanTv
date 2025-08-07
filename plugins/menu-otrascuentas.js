const handler = async (m, { conn, usedPrefix, command }) => {
  // Enviar solo la imagen
  await conn.sendMessage(m.chat, {
    image: { url: 'https://i.postimg.cc/hPQhFmNc/2.png' }, 
    caption: '', 
    footer: "🔐 XanTV - dv yer", 
  }, { quoted: m })
}

handler.command = /^otrascuentas$/i

export default handler
