let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    image: { url: 'https://iili.io/FPVcig4.md.jpg' }
  }, { quoted: m })
}

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler
