import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return m.reply(`💨 *Por favor, ingresa el nombre de una canción de Spotify.*\n\nEjemplo:\n${usedPrefix + command} Coldplay Yellow`);
  }

  await m.react('🎧');
  let msg = await m.reply('🔄 Cargando... 10%');

  try {
    // Simulación de carga
    await new Promise(r => setTimeout(r, 1000));
    await conn.sendMessage(m.chat, { edit: msg.key, text: '🔄 Cargando... 50%' });

    await new Promise(r => setTimeout(r, 1000));
    await conn.sendMessage(m.chat, { edit: msg.key, text: '🔄 Cargando... 100%' });

    // Petición a la API
    let res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
    if (!res.ok) throw `❌ Error al buscar la canción. Intenta nuevamente.`;

    let data = await res.json();
    if (!data.result || !data.result.downloadUrl) {
      throw `❌ No se encontró una canción con ese nombre.`;
    }

    // Enviar como audio tipo PTT (nota de voz)
    await conn.sendMessage(m.chat, {
      audio: { url: data.result.downloadUrl },
      mimetype: 'audio/mpeg',
      ptt: true, // Esto hace que se envíe como nota de voz
      fileName: `${data.result.title || 'spotify'}.mp3`,
    }, { quoted: m });

    await conn.sendMessage(m.chat, { edit: msg.key, text: '✅ ¡Listo! Canción enviada como nota de voz.' });
    await m.react('✅');
  } catch (e) {
    console.error('[SPOTIFY ERROR]', e);
    await conn.sendMessage(m.chat, { edit: msg.key, text: typeof e === 'string' ? e : '⚠️ Hubo un problema al procesar tu solicitud.' });
    await m.react('❌');
  }
};

handler.help = ['spotify *<nombre de canción>*'];
handler.tags = ['descargas'];
handler.command = ['spotify'];

export default handler;