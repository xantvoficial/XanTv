let handler = async (m, { conn, usedPrefix }) => {
  let creatorNumber = '51907376960'
  let creatorName = 'XanTv'

  // Crear vCard del vendedor
  let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${creatorName};;;
FN:${creatorName}
TEL;type=CELL;type=VOICE;waid=${creatorNumber}:${creatorNumber}
END:VCARD`.trim()

  // Enviar contacto del vendedor
  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: creatorName,
      contacts: [{ vcard }]
    }
  }, { quoted: m })

  // Mensaje de anuncio
  let sections = [
    {
      title: "💎 Compra tu cuenta de streaming",
      rows: [
        { title: "📞 Contactar por WhatsApp", rowId: `https://wa.me/${creatorNumber}` },
        { title: "💬 Ver número del vendedor", rowId: `${usedPrefix}owner` }
      ]
    }
  ]

  let listMessage = {
    text: `🎬 *¡Obtén tu cuenta de streaming ahora!*

🔥 Netflix, Disney+, Spotify y más.
💰 Precios accesibles y servicio garantizado.
📆 Duración: 30 días mínimo.
📞 Contacta al vendedor para más detalles.`,
    footer: 'Selecciona una opción 👇',
    title: `${creatorName} - Venta de cuentas`,
    buttonText: "📋 Ver opciones",
    sections
  }

  // Enviar mensaje lista
  await conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler
