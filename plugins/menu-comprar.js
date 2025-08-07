let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    image: {url: 'https://i.postimg.cc/hPQhFmNc/2.png'}
  }, { quoted: m })
  
}

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler
