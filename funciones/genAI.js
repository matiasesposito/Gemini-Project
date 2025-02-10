import {
    GoogleGenerativeAI
  } from "@google/generative-ai";

const api_key = 'AIzaSyCpCTNhzw8P1wrygLOFpoWh1JS2brQQcUc';
const genAI = new GoogleGenerativeAI(api_key);
const generationConfig = {
    temperature: 0.5,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 5000000,
    responseMimeType: "text/plain",
};
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

async function resumirTexto(textoCV){
      const prompt = `Necesito un resumen del CV de esta persona. Como ésta informacion
                      la voy a guardar en una base de datos para su posterior consulta, 
                      necesito que seas lo mas detallada posible pero a su vez no debe 
                      ser demasiada extensa por lo que solo debe devolver los datos 
                      claves. Para ello necesito que incluyas las palabras o frases 
                      claves, que incluyan estudios realizados, establecimientos o 
                      empresas en las que trabajo o datos personales relevantes como 
                      su edad o fecha de nacimiento (Datos como telefonos o hijos no 
                      se deben incluir). La longitud de tu respuesta 
                      no debe superar las 300 palabras y no debe haber tabulaciones,
                      saltos de linea o caracteres del tipo * o #. Ejemplo: IVÁN NAHUEL 
                      ARES ROSSI - Especializado en Ciencia, Tecnología e 
                      Innovación orientada el Desarrollo Local - Licenciado en 
                      Administración - Vinculador Tecnológico - Magíster en 
                      Gestión de la Ciencia, la Tecnología y la Innovación 
                      Experiencia en el sector publico: Ministerio de Producción, 
                      Ciencia e Innovación  Tecnológica. Provincia de Buenos Aires, etc
                      **Fuente**: ${textoCV}`;
      //const prompt = `Resumen del siguiente texto: ${textoCV}`;
      const result =  await model.generateContent(prompt);
      const response =  await result.response;
      const respuesta = response.text();
      return respuesta;
}

async function responderIA(pregunta, fuente){
  const prompt = `Responde la siguiente pregunta: ${pregunta} 
                  teniendo en cuanta la fuente: ${fuente}`;

//const prompt = `Resumen del siguiente texto: ${textoCV}`;
const result =  await model.generateContent(prompt);
const response =  await result.response;
const respuesta = response.text();
return respuesta;
}


async function getPalabrasClaves(texto){
  const prompt = `El siguiente texto corresponde a un formulario con
                  los datos de un proyecto para poder financiarlo.
                  Necesito que me retornes SOLO los datos que te voy a pasar a continuacion
                  sin ningun caracter especial como comillas \` o *:
                  1. Codigo del proyecto
                  2. Titulo del proyecto
                  3. Postulante (Nombre o Razon social)
                  4. Persona a cargo de la direccion del proyecto
                  7.D Palabras claves.
                  Deberas devolvermelo el siguiente formato:
                  {
                    "Codigo del proyecto": "XXXX",
                    "Titulo del proyecto": "XXXX",
                    "Postulante": "XXXX",
                    "Persona a cargo de la direccion del proyecto": "XXXX",
                    "Palabras claves": ["Palabra clave 1", "Palabra clave 2", "Palabra clave 3", ...]
                  }
                  La fuente de texto es: ${texto}`;
  const result =  await model.generateContent(prompt);
  const response =  await result.response;
  const respuesta = response.text();
  return respuesta;
}

export { resumirTexto, responderIA, getPalabrasClaves }