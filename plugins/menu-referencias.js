const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const qrcode = require('qrcode-terminal');

// Crear una nueva conexión de WhatsApp
const conn = new WAConnection();

// Generar el código QR para la conexión
conn.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

// Conexión exitosa
conn.on('ready', () => {
    console.log('Conexión establecida');
});

// Handler para el comando de carrusel de imágenes
conn.on('message-new', async (m) => {
    if (m.message && m.message.conversation === '/ellanoteama') {
        // Enlaces de las 7 imágenes para el carrusel
        const imageUrls = [
            'https://i.postimg.cc/nzhZZscH/VENTAS.png', // Imagen 1
            'https://i.postimg.cc/4ydfrbdw/VENTAS2.png', // Imagen 2
            'https://i.postimg.cc/rygd8r76/VENTAS3.png', // Imagen 3
            'https://i.postimg.cc/rygd8r76/VENTAS4.png', // Imagen 4
            'https://i.postimg.cc/rygd8r76/VENTAS5.png', // Imagen 5
            'https://i.postimg.cc/rygd8r76/VENTAS6.png', // Imagen 6
            'https://i.postimg.cc/rygd8r76/VENTAS7.png'  // Imagen 7
        ];

        // Enviar las imágenes secuenciales
        for (let i = 0; i < imageUrls.length; i++) {
            await conn.sendMessage(m.key.remoteJid, {
                image: { url: imageUrls[i] }, // Enviar la imagen desde el URL
                caption: `Imagen ${i + 1}`, // Título de la imagen
                footer: '🔐 XanTV - dv yer', // Pie de página
            }, MessageType.text);
        }
    }
});

// Iniciar la conexión
conn.connect();


