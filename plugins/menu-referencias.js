const { WAConnection, MessageType } = require('@whiskeysockets/baileys');
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
    if (m.message && m.message.conversation === '/referencias') {
        // Enlaces de las 7 imágenes para el carrusel
        const imageUrls = [
            'https://i.postimg.cc/nzhZZscH/VENTAS.png',
            'https://i.postimg.cc/4ydfrbdw/VENTAS2.png',
            'https://i.postimg.cc/rygd8r76/VENTAS3.png',
            'https://i.postimg.cc/rygd8r76/VENTAS4.png',
            'https://i.postimg.cc/rygd8r76/VENTAS5.png',
            'https://i.postimg.cc/rygd8r76/VENTAS6.png',
            'https://i.postimg.cc/rygd8r76/VENTAS7.png'
        ];

        // Enviar las imágenes secuencialmente
        for (let i = 0; i < imageUrls.length; i++) {
            await conn.sendMessage(m.key.remoteJid, {
                image: { url: imageUrls[i] }, // URL de la imagen
                caption: `Imagen ${i + 1}`, // Título de la imagen
                footer: '🔐 XanTV - dv yer', // Pie de página
            }, MessageType.text);
        }

        // Después de enviar las imágenes, ofrecer la opción de volver al menú o ver más imágenes
        await conn.sendMessage(m.key.remoteJid, {
            text: 'Selecciona una opción:',
            footer: '🔐 XanTV - dv yer',
            buttons: [
                {
                    buttonId: '/metododepago',
                    buttonText: { displayText: '🛍️ Ver más imágenes' },
                    type: 1
                },
                {
                    buttonId: '/menu',
                    buttonText: { displayText: '🔙 Volver al menú' },
                    type: 1
                }
            ]
        });
    }
});

// Iniciar la conexión
conn.connect();

