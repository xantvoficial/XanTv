const handler = async (m, { conn }) => {
  let gifUrl = "https://qu.ax/jrfeN.mp4";

  let text = `
 ──────── ⚔ ────────  
     **XanTv**  
──────── ⚔ ────────  

**ENLACE DE GRUPO**  
• ,👥➤ **Grupo de WhatsApp de la comunidad de SonGoku**  
   Únete para compartir y resolver dudas con otros usuarios. 
  ➤[https://chat.whatsapp.com/COGynlbC2SVHx72LaLPsVG] 

`.trim();


  await conn.sendMessage(
    m.chat,
    {
      video: { url: gifUrl },
      gifPlayback: true, 
      caption: text,
      mentions: [m.sender], 
    },
    { quoted: m }
  );
};

handler.command = /^(grupooficial)$/i; 
export default handler;
