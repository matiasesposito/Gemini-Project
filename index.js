// Abrir el/los archivo/s y extraer el texto

var textSrc=[
  {
    src: "documentos/Proceso_Liquidación_Haberes_Pasivos_Municipales.docx",
    type: "docx"
  },
  {
    src: "documentos/Documentación_Sist_Liq.docx",
    type: "docx"
  },
  {
    src: "documentos/Presentación_de_Novedades_de_Terceros.doc",
    type: "doc"
  }
]

var textoSource = "";

for (let i = 0; i < textSrc.length; i++) {
  let src = textSrc[i].src;
  let type = textSrc[i].type;
  const texto = await extractText(src, type);
  textoSource+=texto;
}




// Google Generative AI
import {
  GoogleGenerativeAI
} from "@google/generative-ai";

const API_KEY = "AIzaSyCpCTNhzw8P1wrygLOFpoWh1JS2brQQcUc";

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash"
});

// Parametros de generacion de texto
const generationConfig = {
  temperature: 0.5,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 5000,
  responseMimeType: "text/plain",
};

// Funcion para generar texto a partir de una pregunta
async function run() {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig // Optional
  });

  let pregunta = `¿Como funciona las Novedades de Terceros?`;

  const prompt = `A partir del siguiente texto: ${textoSource}, necesito que me 
                    contestes la siguiente pregunta: ${pregunta}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const respuesta = response.text();

  // Mostrar la respuesta en el editor
  typeWriter(respuesta, "editor");
}

run();



