let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    image: { url: 'https://tinyurl.com/26hgmdfm' },
    caption: `🎬 *VENTA DE CUENTAS* 🔥

🔥 Netflix, Disney+, Spotify y más.
💰 Precios accesibles y servicio garantizado.
📆 Duración mínima de 30 días.

📞 Contáctanos para más detalles.`,
  }, { quoted: m })
}

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler

