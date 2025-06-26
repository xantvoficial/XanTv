import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return m.reply(`💨 *Por favor, ingresa el nombre de una canción de Spotify.*\n\nEjemplo:\n${usedPrefix + command} Coldplay Yellow`);
  }

  await m.react('🎧');
  let msg = await m.reply('🔄 Cargando... 10%');

  try {
    // Simula progreso de carga
    await new Promise(r => setTimeout(r, 1000));
    await conn.sendMessage(m.chat, { edit: msg.key, text: '🔄 Cargando... 50%' });

    await new Promise(r => setTimeout(r, 1000));
    await conn.sendMessage(m.chat, { edit: msg.key, text: '🔄 Cargando... 100%' });

    // Llamada a la API
    let res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
    if (!res.ok) throw '❌ Error al buscar la canción.';

    let data = await res.json();
    let result = data.result;

    if (!result || !result.downloadUrl) throw '❌ No se encontró la canción.';

    // Descarga la imagen de portada como buffer
    let img = await fetch(result.thumbnail);
    let thumbnail = await img.buffer();

    // Enviar audio con imagen de portada
    await conn.sendMessage(m.chat, {
      audio: { url: result.downloadUrl },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${result.title || 'spotify'}.mp3`,
      contextInfo: {
        externalAdReply: {
          title: result.title || 'Spotify',
          body: result.artists || '',
          thumbnail,
          mediaType: 2,
          mediaUrl: result.url || '',
          sourceUrl: result.url || ''
        }
      }
    }, { quoted: m });

    await conn.sendMessage(m.chat, { edit: msg.key, text: '✅ ¡Listo! Canción enviada con portada.' });
    await m.react('✅');
  } catch (e) {
    console.error('[SPOTIFY ERROR]', e);
    await conn.sendMessage(m.chat, { edit: msg.key, text: typeof e === 'string' ? e : '⚠️ Error al procesar tu solicitud.' });
    await m.react('❌');
  }
};

handler.help = ['spotify *<nombre de canción>*'];
handler.tags = ['descargas'];
handler.command = ['spotify'];

export default handler;