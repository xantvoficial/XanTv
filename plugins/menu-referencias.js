import fs from 'fs'

const handler = async (m, { conn, usedPrefix, command }) => {
  const texto = `
El buen servicio que brindo a todos los clientes que adquieren mis plataformas se demuestra en mi página! 🔍

📲 https://www.instagram.com/xann.tv

¡Verifica por ti mismo nuestra trayectoria!
  `.trim();

  await conn.sendMessage(m.chat, {
    image: fs.readFileSync('./imagenes/referencias.jpg'),
    caption: texto
  });
}

handler.command = /^referencias$/i

export default handler