let handler = async (m, { conn, usedPrefix }) => {
  let creatorName = 'XanTv'
  let numbers = [
    //{ number: '51907376960', label: 'Vendedor 1' },
    { number: '51934920256', label: 'Vendedor 2' }
  ]

  // Crear múltiples vCards
  let vCards = numbers.map(num => `
BEGIN:VCARD
VERSION:3.0
N:;${creatorName};;;
FN:${creatorName} - ${num.label}
TEL;type=CELL;type=VOICE;waid=${num.number}:${num.number}
END:VCARD`.trim())

  let contacts = {
    displayName: creatorName,
    contacts: vCards.map(vcard => ({ vcard }))
  }

  // Enviar contactos
  await conn.sendMessage(m.chat, { contacts }, { quoted: m })

  // Crear opciones con ambos contactos
  let rows = numbers.map(num => ({
    title: `📞 Contactar ${num.label}`,
    rowId: `https://wa.me/${num.number}`
  }))

  let sections = [
    {
      title: "💎 Compra tu cuenta de streaming",
      rows: rows.concat([
        { title: "💬 Ver números de contacto", rowId: `${usedPrefix}owner` }
      ])
    }
  ]

  let listMessage = {
    text: `🎬 *¡Obtén tu cuenta de streaming ahora!*

🔥 Netflix, Disney+, Spotify y más.
💰 Precios accesibles y servicio garantizado.
📆 Duración: 30 días mínimo.
📞 Contacta a un vendedor para más detalles.`,
    footer: 'Selecciona una opción 👇',
    title: `${creatorName} - Venta de cuentas`,
    buttonText: "📋 Ver opciones",
    sections
  }

  await conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler

