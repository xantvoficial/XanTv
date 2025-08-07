const handler = async (m, { conn, usedPrefix, command }) => {
  // Definir el texto que se enviará
  const texto = `

El buen servicio que brindo a todos los clientes que adquieren mis plataformas se demuestra en mi página! 🔍

📲 https://www.instagram.com/xann.tv 

¡Verifica por ti mismo nuestra trayectoria!

🔹 *Selecciona una opción para más información.*
        `.trim();

  // Enviar solo el texto
  await conn.sendMessage(m.chat, { text: texto });
}

handler.command = /^referencias$/i  // El comando que activará el envío de texto

export default handler;

