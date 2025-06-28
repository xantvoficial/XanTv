import { Client } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client();

client.on('qr', (qr) => {
    // Genera un código QR para escanear
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Bot está listo!');
});

// Comando para enviar el enlace del grupo oficial
client.on('message', async (message) => {
    if (message.body.toLowerCase() === '.grupooficial') {
        const grupoId = '123456789-123456789@g.us'; // Reemplaza con el ID de tu grupo oficial
        try {
            const groupInviteLink = await client.getGroupInviteLink(grupoId);
            await client.sendMessage(message.from, `📢 *Enlace del Grupo Oficial:*\n${groupInviteLink}`);
        } catch (error) {
            console.error('Error al obtener el enlace del grupo:', error);
            await client.sendMessage(message.from, '❌ *No se pudo obtener el enlace del grupo oficial.*');
        }
    }
});

client.initialize();

