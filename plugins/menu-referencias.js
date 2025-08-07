const handler = async (m, { conn, usedPrefix, command }) => {
  // Definir el texto que se enviará
  const texto = `
El buen servicio que brindo a todos los clientes que adquieren mis plataformas se demuestra en mi página! 🔍

📲 https://www.instagram.com/xann.tv

¡Verifica por ti mismo nuestra trayectoria!
  `.trim();

  // URL de la imagen que se enviará
  const imageUrl = 'https://i.postimg.cc/nzhZZscH/VENTAS.png'; // Cambia esta URL por la de la imagen que deseas enviar

  // Enviar el texto
  await conn.sendMessage(m.chat, { text: texto });

  // Enviar la imagen
  await conn.sendMessage(m.chat, {
    image: { url: imageUrl }, // URL de la imagen
    caption: '¡Verifica nuestros servicios en Instagram!' // Opcional, texto debajo de la imagen
  });
}

handler.command = /^referencias$/i  // El comando que activará el envío de texto y la imagen

export default handler;
