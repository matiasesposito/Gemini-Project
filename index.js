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

const historial = [
  {
    speaker: "user",
    text: "Hola, ¿cómo estás?"
  },
  {
    speaker: "bot",
    text: "Hola, estoy bien, ¿y tú?"
  },
  {
    speaker: "user",
    text: "Estoy bien, gracias por preguntar"
  },
  {
    speaker: "bot",
    text: "¿En qué puedo ayudarte?"
  }
];

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

  let pregunta = document.getElementById("search").value;

  /*const prompt = `Dado el siguiente historial en forma de json: ${JSON.stringify(historial)},
                  necesito que me contestes la siguiente pregunta: ${pregunta}
                  teniedo como contexto el siguiente texto: ${textoSource}`;*/


  const prompt = `A partir del siguiente texto: ${textoSource}, necesito que me 
                    contestes la siguiente pregunta: ${pregunta}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const respuesta = response.text();

  // Mostrar la respuesta en el editor
  typeWriter(respuesta, "editor");
}


// Event Listener para el boton de generar texto
const input_search = document.getElementById("search");
input_search.addEventListener("keydown",(e)=>{
  if(e.key === "Enter"){
    // Limpiar el editor
    document.getElementById("iblize_editor").innerHTML = "";
    // Ejecutar la funcion de generacion de texto
    run();
  }
})


