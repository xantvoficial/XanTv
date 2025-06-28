import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    const isQuotedImage = m.quoted && (m.quoted.msg || m.quoted).mimetype && (m.quoted.msg || m.quoted).mimetype.startsWith('image/')
    const username = `${conn.getName(m.sender)}`
    const basePrompt = `Tu nombre es ${botname} y fuiste creada por ${etiqueta}. Tu versión actual es ${vs}. Hablas español y te diriges a las personas por su nombre, en este caso ${username}. Eres una vendedora amigable, divertida y proactiva de cuentas de streaming como Netflix, Disney+, Amazon Prime, HBO Max y más. Tu objetivo es ofrecer estas cuentas de manera atractiva y convencer a ${username} de comprarlas. Siempre mantén una actitud positiva y servicial. Si detectas interés en comprar una cuenta (por ejemplo, si mencionan "Netflix", "streaming", "comprar", "cuenta", "interesado", etc.), ofrece enviar un menú con las opciones disponibles escribiendo (.Menú) al final de tu respuesta. Si es el primer mensaje o dicen "hola", preséntate y ofrece tus servicios de inmediato.`

    if (isQuotedImage) {
        const q = m.quoted
        const img = await q.download?.()
        if (!img) {
            console.error(`${msm} Error: No image buffer available`)
            return conn.reply(m.chat, '✘ No pude descargar la imagen.', m)
        }
        const content = `${emoji} ¿Qué se observa en la imagen?`
        try {
            const imageAnalysis = await fetchImageBuffer(content, img)
            const query = `${emoji} Descríbeme la imagen y detalla por qué actúan así. También dime quién eres`
            const prompt = `${basePrompt}. La imagen que se analiza es: ${imageAnalysis.result}`
            const description = await luminsesi(query, username, prompt)
            await conn.reply(m.chat, description, m)
        } catch {
            await m.react(error)
            await conn.reply(m.chat, '✘ No pude analizar la imagen.', m)
        }
    } else {
        await m.react(rwait)
        try {
            const { key } = await conn.sendMessage(m.chat, { text: `${emoji2} Estoy procesando tu mensaje, espera unos segundos.` }, { quoted: m })
            const query = text || "Hola, preséntate." // Si no hay texto, simula un "hola" para iniciar conversación
            const prompt = `${basePrompt}. Responde lo siguiente: ${query}`
            const response = await luminsesi(query, username, prompt)
            await conn.sendMessage(m.chat, { text: response, edit: key })
            await m.react(done)
        } catch {
            await m.react(error)
            await conn.reply(m.chat, '✘ No puedo responder en este momento. Intenta de nuevo.', m)
        }
    }
}

// Eliminamos la necesidad de comandos específicos
handler.help = []
handler.tags = []
handler.register = true
//handler.command = /.*/   // Responde a cualquier mensaje
handler.group = false // Funciona en cualquier chat, no solo grupos

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// Función para enviar una imagen y obtener el análisis
async function fetchImageBuffer(content, imageBuffer) {
    try {
        const response = await axios.post('https://Luminai.my.id', {
            content: content,
            imageBuffer: imageBuffer 
        }, {
            headers: {
                'Content-Type': 'application/json' 
            }
        })
        return response.data
    } catch (error) {
        console.error('Error:', error)
        throw error
    }
}

// Función para interactuar con la IA usando prompts
async function luminsesi(q, username, logic) {
    try {
        const response = await axios.post("https://Luminai.my.id", {
            content: q,
            user: username,
            prompt: logic,
            webSearchMode: false
        })
        return response.data.result
    } catch (error) {
        console.error(`${msm} Error al obtener:`, error)
        throw error
    }
}
