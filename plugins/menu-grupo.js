const handler = async (m, { conn }) => {
  // Opcionalmente puedes personalizar este texto
  const texto = `
🤵🏻‍♂️ *Cliente VIP*

¡Holaa! 👋🏼 Únete al grupo oficial para sorteos, descuentos, y más.
`.trim();

  await conn.sendMessage(m.chat, {
    text: texto,
    footer: "🔐 XanTv - creador dv yer",
    templateButtons: [
      {
        index: 1,
        urlButton: {
          displayText: '🔗 UNIRME AL GRUPO VIP',
          url: 'https://chat.whatsapp.com/Fu828nubauZ4Kk4fE1IC1d'
        }
      }
    ]
  }, { quoted: m });
};

handler.help = ['GRUPOOFICIAL'];
handler.tags = ['info'];
handler.command = /^GRUPOOFICIAL$/i;

export default handler;
