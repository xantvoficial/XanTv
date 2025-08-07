const handler = async (m, { conn, usedPrefix, command }) => {
  // Definir el texto que se enviará
  const texto = `
.
  `.trim();

  // URL de la imagen que se enviará
  const imageUrl = 'https://i.postimg.cc/RZ4mh03v/Imagen-de-Whats-App-2025-08-07-a-las-17-21-18-1ec7b9ae.jpg'; // Cambia esta URL por la de la imagen que deseas enviar

  // Enviar el texto
  await conn.sendMessage(m.chat, { text: texto });

  // Enviar la imagen
  await conn.sendMessage(m.chat, {
    image: { url: https://i.postimg.cc/RZ4mh03v/Imagen-de-Whats-App-2025-08-07-a-las-17-21-18-1ec7b9ae.jpg}, // URL de la imagen
    caption: 'El buen servicio que brindo a todos los clientes que adquieren mis plataformas se demuestra en mi página! 🔍

📲 https://www.instagram.com/xann.tv

¡Verifica por ti mismo nuestra trayectoria!' // Opcional, texto debajo de la imagen
  });
}

handler.command = /^referencias$/i  // El comando que activará el envío de texto y la imagen

export default handler;
