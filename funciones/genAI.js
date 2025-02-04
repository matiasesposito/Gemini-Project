import {
    GoogleGenerativeAI
  } from "@google/generative-ai";

const api_key = 'AIzaSyCpCTNhzw8P1wrygLOFpoWh1JS2brQQcUc';
const genAI = new GoogleGenerativeAI(api_key);
const generationConfig = {
    temperature: 0.5,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 50000,
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
                      su edad o fecha de nacimiento. La longitud de la respuesta 
                      no debe superar las 300 palabras y no debe haber tabulaciones,
                      saltos de linea o caracteres especiales como "*". Ejemplo: IVÁN NAHUEL 
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

export { resumirTexto }