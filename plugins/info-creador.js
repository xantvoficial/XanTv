let handler = async (m, { conn, usedPrefix }) => {
  let creatorNumber = '51907376960'
  let creatorName = 'XanTv'
  //let channelLink = 'https://whatsapp.com/channel/0029VajUPbECxoB0cYovo60W'

  let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${creatorName};;;
FN:${creatorName}
TEL;type=CELL;type=VOICE;waid=${creatorNumber}:${creatorNumber}
END:VCARD`.trim()

  // Enviar el contacto del creador
  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: creatorName,
      contacts: [{ vcard }]
    }
  }, { quoted: m })

  // Crear lista con botón hacia canal y contacto
  let sections = [
    {
      title: "Opciones del Creador",
      rows: [
        { title: "📞 Contactar por WhatsApp", rowId: `https://wa.me/${creatorNumber}` }
        //{ title: "📣 Ir al Canal Oficial", rowId: channelLink }
      ]
    }
  ]

  let listMessage = {
    text: 'comprar cuenta*',
    footer: 'Selecciona una opción 👇',
    title: `${creatorName}`,
    buttonText: "📋 Ver opciones",
    sections
  }

  // Enviar el mensaje con lista de opciones
  await conn.sendMessage(m.chat, listMessage, { quoted: m })
}

handler.command = ['owner', 'creador', 'dueño']
export default handler
