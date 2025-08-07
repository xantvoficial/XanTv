const handler = async (m, { conn, usedPrefix, command }) => {
  // Enviar solo la imagen con la nueva URL
  await conn.sendMessage(m.chat, {
    image: { url: 'https://i.postimg.cc/nzhZZscH/VENTAS.png' }, 
    caption: 'Gracias', // 
    footer: "🔐 XanTV - dv yer", 
  }, { quoted: m })
}

handler.command = /^metododepago$/i 

export default handler
  
