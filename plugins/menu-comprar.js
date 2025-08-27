import fs from 'fs'

const handler = async (m, { conn, usedPrefix }) => {
  const texto = `
🔹 Selecciona una opción:
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}LISTADECUENTASENVENTAS`,
      buttonText: { displayText: "🔙 Volver" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}otrascuentas`,
      buttonText: { displayText: "📌 Promociones" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}metododepago`,
      buttonText: { displayText: "💰 Método de Pago" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: fs.readFileSync('./imagenes/comprar.jpg'),
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
