const handler = async (m, { conn, usedPrefix }) => {
  const texto = `
📢 *Promoción activa*

Revisa nuestras cuentas disponibles 👇
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}LISTADECUENTASENVENTAS`,
      buttonText: { displayText: "🔙 Volver" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://qu.ax/KNlQv.jpg' },
    caption: texto,
    footer: "🔐 XanTV - dv yer",
    buttons: buttons,
    headerType: 4
  }, { quoted: m });
}

handler.help = ['PROMOCIONES'];
handler.tags = ['info'];
handler.command = /^PROMOCIONES$/i;

export default handler;
