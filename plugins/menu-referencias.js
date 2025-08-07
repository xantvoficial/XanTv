const handler = async (m, { conn, usedPrefix, command }) => {
  // URL de la imagen que se enviará
  const imageUrl = 'https://i.postimg.cc/RZ4mh03v/Imagen-de-Whats-App-2025-08-07-a-las-17-21-18-1ec7b9ae.jpg'; // Cambia esta URL por la de la imagen que deseas enviar

  // Definir el texto que se enviará junto con la imagen
  const texto = `
El buen servicio que brindo a todos los clientes que adquieren mis plataformas se demuestra en mi página! 🔍

📲 https://www.instagram.com/xann.tv

¡Verifica por ti mismo nuestra trayectoria!
  `.trim();

  // Enviar la imagen con el texto en el caption
  await conn.sendMessage(m.chat, {
    image: { url: imageUrl }, // URL de la imagen
    caption: texto // El texto va junto con la imagen
  });
}

handler.command = /^referencias$/i  // El comando que activará el envío de texto y la imagen

export default handler;
