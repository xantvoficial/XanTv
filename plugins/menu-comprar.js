let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    image: { url: '[![2.png](https://i.postimg.cc/hPQhFmNc/2.png)](https://postimg.cc/MvxzVnWF)' }
  }, { quoted: m })
}

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler
