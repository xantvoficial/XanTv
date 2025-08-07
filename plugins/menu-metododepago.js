import path from 'path'; // Para manejar las rutas de los archivos
import fs from 'fs'; // Para trabajar con archivos del sistema

// Usar import.meta.url para obtener el directorio en módulos ES
const __dirname = path.dirname(new URL(import.meta.url).pathname);

let handler = async (m, { conn }) => {
  try {
    // Ruta de la imagen en tu carpeta local
    const imagePath = path.join(__dirname, 'imagenes', 'metododepago.png');

    // Verificar si el archivo existe
    if (!fs.existsSync(imagePath)) {
      console.error('La imagen no se encuentra en la carpeta especificada.');
      return;
    }

    // Imprimir la ruta para verificar
    console.log('Ruta de la imagen:', imagePath);

    // Enviar la imagen
    await conn.sendMessage(m.chat, {
      image: fs.createReadStream(imagePath), // Usar fs.createReadStream para leer la imagen
      caption: 'Método de pago disponible' // Opcional: Puedes agregar un texto de descripción a la imagen
    }, { quoted: m });

    console.log('Imagen enviada correctamente.');
  } catch (error) {
    console.error('Error al enviar la imagen:', error);
  }
};

handler.command = ['pago']; // El comando que activará el envío de la imagen
export default handler;
