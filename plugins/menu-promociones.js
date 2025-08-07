const handler = async (m, { conn, usedPrefix }) => {
  const texto = `
📢 *Promoción activas*

Revisa nuestras cuentas disponibles 👇
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}LISTADECUENTASENVENTAS`,
      buttonText: { displayText: "🔙 Volver" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}comprarcuenta`,
      buttonText: { displayText: "📌 Otras Cuentas" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://iili.io/FPMK9Jp.md.jpg' },
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
