let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    image: { url: 'https://ibb.co/RT0fV0xT' }
  }, { quoted: m })
}

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler
