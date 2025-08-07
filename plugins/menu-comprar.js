let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    image: {url: 'https://i.postimg.cc/hPQhFmNc/2.png'}
  }, { quoted: m })
  
  const buttons = [

    {
      buttonId: `${usedPrefix}menu`,
      buttonText: { displayText: "💰 Métodos de Pago" },
      type: 1,
    },
  ];

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler
