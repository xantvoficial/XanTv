const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `

🎥 *PERFILES DISPONIBLES* 🎥
⠀⠀📌 _Netflix_ 
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 15.00
⠀⠀📌 _Hbo Max_ 
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 8.00
⠀⠀📌 _Disney + ESPN_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 8.00
⠀⠀📌 _Prime Video_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 7.00
⠀⠀📌 _Crunchyroll MegaFan_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 5.00
⠀⠀📌 _IPTV_ ⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 8.00
⠀⠀📌 _Paramount_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 8.00
⠀⠀📌 _VIX_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 6.00
⠀⠀📌 _YouTube Premium_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 12.00
⠀⠀📌 _ChatGpt_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 18.00
⠀⠀📌 _Movistar Play_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 17.00
⠀⠀📌 _DIRECTV GO_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 25.00
⠀⠀📌 _Canva - Anual_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 20.00
⠀⠀📌 _Office 365 - Anual_
⠀⠀⠀⠀⠀⠀💰 ↳ S/ 55.00

🔹 Selecciona una opción:
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}creador`,
      buttonText: { displayText: "🛍️ Comprar ahora" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}menu`,
      buttonText: { displayText: "🔙 Volver al menú" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'https://tinyurl.com/296obofm' },
    caption: texto,
    footer: "🔐 XanTV - dv yer",
    buttons: buttons,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "🎥 XanTV - dv yer 🌌",
        body: "Venta de cuentas premium",
        sourceUrl: "https://github.com/king123XZ/XanTv", // Cambia por tu enlace si quieres
        //thumbnail: { url: 'https://qu.ax/JULOR.jpg' },
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.command = /^otrascuentas$/i

export default handler

