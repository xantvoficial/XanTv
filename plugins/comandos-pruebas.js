import { xpRange } from '../lib/levelling.js'

const textCyberpunk = (text) => {
  const charset = {
    a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ꜰ', g: 'ɢ',
    h: 'ʜ', i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ',
    o: 'ᴏ', p: 'ᴘ', q: 'ǫ', r: 'ʀ', s: 'ꜱ', t: 'ᴛ', u: 'ᴜ',
    v: 'ᴠ', w: 'ᴡ', x: 'x', y: 'ʏ', z: 'ᴢ'
  }
  return text.toLowerCase().split('').map(c => charset[c] || c).join('')
}

let tags = {
  'main': textCyberpunk('sistema'),
  'group': textCyberpunk('grupos'),
  'serbot': textCyberpunk('sub bots'),
}

const defaultMenu = {
  before: `
╔═━⊱ Status del usuario  ⊰━═╗
║ ✦ 𝙽𝚘𝚖𝚋𝚛𝚎   » %name  
║ ⚙️ 𝙻𝚟𝚕     » %level  
║ ⚡ 𝙴𝚡𝚙     » %exp / %maxexp  
║ 🌐 𝙼𝚘𝚍𝚎    » %mode  
║ ⏳ 𝙰𝚌𝚝𝚒𝚟𝚘 » %muptime  
║ 👥 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜 » %totalreg  
╚═━⊱   𝙴𝚗𝚍 𝙾𝚏 𝙻𝚒𝚗𝚎.    ⊰━═╝

🧬 » 𝗛𝗔𝗖𝗞 𝗡𝗢𝗗𝗘 𝗔𝗖𝗧𝗜𝗩𝗢 «
👑 » 𝗢𝗽𝗲𝗿𝗮𝗱𝗼𝗿: 𝕿𝖍𝖊 𝕮𝖆𝖗𝖑𝖔𝖘 «
%readmore
`.trimStart(),

  header: '\n╭─〔 🦠 %category 〕─╮',
  body: '│ ⚙️ %cmd\n',
  footer: '╰────────────────╯',
  after: '\n⌬ 𝗖𝗬𝗕𝗘𝗥 𝗠𝗘𝗡𝗨 ☠️ - Sistema ejecutado con éxito.'
}

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let { exp, level } = global.db.data.users[m.sender]
    let { min, xp } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let _uptime = process.uptime() * 1000
    let muptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let mode = global.opts["self"] ? "Privado" : "Público"

    let help = Object.values(global.plugins).filter(p => !p.disabled).map(p => ({
      help: Array.isArray(p.help) ? p.help : [p.help],
      tags: Array.isArray(p.tags) ? p.tags : [p.tags],
      prefix: 'customPrefix' in p
    }))

    for (let plugin of help) {
      if (plugin.tags) {
        for (let t of plugin.tags) {
          if (!(t in tags) && t) tags[t] = textCyberpunk(t)
        }
      }
    }

    const { before, header, body, footer, after } = defaultMenu

    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        const cmds = help
          .filter(menu => menu.tags.includes(tag))
          .map(menu => menu.help.map(cmd => body.replace(/%cmd/g, menu.prefix ? cmd : _p + cmd)).join('\n'))
          .join('\n')
        return `${header.replace(/%category/g, tags[tag])}\n${cmds}\n${footer}`
      }),
      after
    ].join('\n')

    let replace = {
      '%': '%',
      name,
      level,
      exp: exp - min,
      maxexp: xp,
      totalreg,
      mode,
      muptime,
      readmore: String.fromCharCode(8206).repeat(4001)
    }

    let text = _text.replace(/%(\w+)/g, (_, key) => replace[key] || '')

    // Enviar solo el texto del menú
    await conn.sendMessage(m.chat, { text }, { quoted: m })

  } catch (e) {
    console.error(e)
    conn.reply(m.chat, '❎ Error al generar el menú del sistema.', m)
  }
}

//handler.help = ['menu', 'menú']
///handler.tags = ['main']
handler.command = ['ayuda1']
//handler.register = true
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':')
}