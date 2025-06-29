const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
🎬 *VENTA DE CUENTAS* 🔥


🔹 Selecciona una opción:
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}creador`,
      buttonText: { displayText: "🛍️ Comprar ahora" },
      type: 1,
    },
    {
      buttonId: `${usedPrefix}MENU`,
      buttonText: { displayText: "🔙 Volver" },
      type: 1,
    },
  ];

  await conn.sendMessage(m.chat, {
    image: { url: 'let handler = async (m, { conn, usedPrefix }) => {
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

  // Crear mensaje con lista + imagen
  let listMessage = {
    image: { url: 'let handler = async (m, { conn, usedPrefix }) => {
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

  // Crear mensaje con lista + imagen
  let listMessage = {
    image: { url: 'https://qu.ax/JULOR.jpg' },
    caption: `🎬 *¡Obtén tu cuenta de streaming ahora!*

🔥 Netflix, Disney+, Spotify y más.
💰 Precios accesibles y servicio garantizado.
📆 Duración: 30 días mínimo.
📞 Contacta a un vendedor para más detalles.

Selecciona una opción 👇`,
    footer: '',
    title: `${creatorName} - Venta de cuentas`,
    buttonText: "📋 Ver opciones",
    sections
  }

  await conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler
' },
    caption: `🎬 *¡Obtén tu cuenta de streaming ahora!*

🔥 Netflix, Disney+, Spotify y más.
💰 Precios accesibles y servicio garantizado.
📆 Duración: 30 días mínimo.
📞 Contacta a un vendedor para más detalles.

Selecciona una opción 👇`,
    footer: '',
    title: `${creatorName} - Venta de cuentas`,
    buttonText: "📋 Ver opciones",
    sections
  }

  await conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler
' },
    caption: texto,
    footer: "🔐 XanTV - dv yer",
    buttons: buttons,
    headerType: 4,
    contextInfo: {
      externalAdReply: {
        title: "🎥 XanTV - dv yer 🌌",
        body: "venta de cuentas",
        sourceUrl: "https://github.com/king123XZ/XanTv", // Puedes cambiar este enlace por tu repo si tienes uno
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

//handler.help = ['PROMOCIONES']
//handler.tags = ['CUENTAS']
handler.command = /^otrascuentas$/i

export default handler
