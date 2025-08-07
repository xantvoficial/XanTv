const handler = async (m, { conn, usedPrefix, command }) => {
  // Definir el texto que se enviará
  const texto = `
... a qui texto chtne escrube

🔹 *Selecciona una opción para más información.*
        `.trim();

  // Enviar solo el texto
  await conn.sendMessage(m.chat, { text: texto });
}

handler.command = /^referencias$/i  // El comando que activará el envío de texto

export default handler;

