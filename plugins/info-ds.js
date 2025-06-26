import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs'
import path from 'path'

var handler = async (m, { conn, usedPrefix }) => {

  if (global.conn.user.jid !== conn.user.jid) {
    return conn.reply(m.chat, `⚠️ Utiliza este comando directamente en el número principal del Bot.`, m)
  }

  let chatId = m.isGroup ? [m.chat, m.sender] : [m.sender]
  let sessionPath = `./${sessions}/`

  try {
    // Leer todos los archivos en la carpeta de sesiones
    let files = await fs.readdir(sessionPath)

    // Verificar si hay más de 50 archivos
    if (files.length >= 50) {
      let filesDeleted = 0
      for (let file of files) {
        for (let id of chatId) {
          if (file.includes(id.split('@')[0])) {
            await fs.unlink(path.join(sessionPath, file))
            filesDeleted++
            break
          }
        }
      }

      if (filesDeleted === 0) {
        await conn.reply(m.chat, `📂 No se encontró ningún archivo que incluya la ID del chat.`, m)
      } else {
        await conn.reply(m.chat, `🧹 Se eliminaron ${filesDeleted} archivos porque la carpeta tenía más de 50.`, m)
        conn.reply(m.chat, `✅ ¡Hola! ¿logras verme?`, m)
      }
    } else {
      await conn.reply(m.chat, `📦 La carpeta aún no supera los 50 archivos (${files.length} archivos actuales).`, m)
    }

  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err)
    await conn.reply(m.chat, `⚠️ Error al leer la carpeta.\n\n> Canal: ${channel}`, m)
  }

}

handler.help = ['ds', 'fixmsgespera']
handler.tags = ['info']
handler.command = ['fixmsgespera', 'ds']
handler.register = true

export default handler