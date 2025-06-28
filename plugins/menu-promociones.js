const handler = async (m, { conn, usedPrefix, command }) => {
  const buttons = [
    {
      buttonId: `${usedPrefix}menu`,
      buttonText: { displayText: "🔙 Volver" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/WSBNA.jpg' }, // Ensure this URL is valid
    footer: "🔐 XanTV - dv yer",
    buttons: buttons,
    headerType: 4,
  }, { quoted: m });
}

//handler.help = ['PROMOCIONES']
//handler.tags = ['CUENTAS']
handler.command = /^PROMOCIONES$/i

export default handler;
