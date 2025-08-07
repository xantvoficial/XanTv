let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    image: {url: 'https://i.postimg.cc/hPQhFmNc/2.png'}
  }, { quoted: m })
}
🔹 Selecciona una opción:
`.trim();

  const buttons = [
    {
      buttonId: `${usedPrefix}📌OtrasCuentas`,
      buttonText: { displayText: "🛍 Métodos de Pago" },
      type: 1,
    },

handler.command = ['owner', 'creador', 'dueño', 'comprarcuenta']
export default handler
