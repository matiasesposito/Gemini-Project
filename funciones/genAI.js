import { GoogleGenerativeAI } from "@google/generative-ai";

const api_key = 'AIzaSyCpCTNhzw8P1wrygLOFpoWh1JS2brQQcUc';
const genAI = new GoogleGenerativeAI(api_key);
const generationConfig = {
  temperature: 0.5,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 5000000,
  responseMimeType: "text/plain",
};
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" },generationConfig);

async function responderIA(pregunta, fuente) {
  const prompt = `Responde la siguiente pregunta: ${pregunta} 
                  teniendo en cuanta la fuente: ${fuente}`;

  //const prompt = `Resumen del siguiente texto: ${textoCV}`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const respuesta = response.text();
  return respuesta;
}


async function extraerDatosCV(texto) {
  const prompt = `El siguiente texto corresponde a los datos de un CV y necesito que el resultado sea lo mas extenso posible.
                  Necesito que me retornes SOLO los datos que te voy a pasar a continuacion
                  sin ningun caracter especial como comillas \` o *:
                  1. Nombre y Apellido
                  2. DNI de la persona (DNI:Entero de 8 digitos sin guiones, espacios ni puntos. Si no tiene DNI, colocar el CUIL)
                  3. Fecha de Nacimiento
                  4. Correo electronico
                  5. Ciudad y Provincia
                  6. Instituciones, Universidades o Empresas en las que trabajó, estudio o tuvo algun tipo de participacion.
                  7. Perfil academico, Especialidades, Estudios, Habilidades, Idiomas o Experiencias
                  En caso de no encontrar alguno de estos datos, coloca null en su lugar.
                  Deberas devolvermelo en el siguiente formato:
                  {
                    "nombre_apellido": "XXXX",
                    "dni": "NNNNNNNN",
                    "fecha_nacimiento": "aaaa-mm-dd",
                    "correo_electronico": "XXXX",
                    "ciudad_provincia": "XXXX",
                    "instituciones_empresas": ["Institucion 1", "Institucion 2", "Institucion 3", ...],
                    "perfiles_especialidades": ["Especialidad 1", "Especialidad 2", "Especialidad 3", ...]
                  }
                  La fuente de texto es: ${texto}`;
  const result = await model.generateContent(prompt);
  const response = await result.response;
  var respuesta = response.text();

  // Borrar patrones no deseados: ` , 'json' y espacios al principio y final
  respuesta = respuesta.replace(/`/g, '');
  respuesta = respuesta.replace(/json/g, '');
  respuesta = respuesta.trim();
  return respuesta;
}

async function extraerDatosCVPdf(blob) {
  // Formatear el blob para quitar el prefijo de data:image/png;base64,
  var base64 = blob.split(",")[1];

  const result = await model.generateContent([
    {
      inlineData: {
        data: base64,
        mimeType: "application/pdf"
      }
    },

    `El siguiente texto corresponde a los datos de un CV y necesito que el resultado sea lo mas extenso posible.
                  Necesito que me retornes SOLO los datos que te voy a pasar a continuacion
                  sin ningun caracter especial como comillas \` o *:
                  1. Nombre y Apellido
                  2. DNI de la persona (DNI:Entero de 8 digitos sin guiones, espacios ni puntos. Si no tiene DNI, colocar el CUIL)
                  3. Fecha de Nacimiento
                  4. Correo electronico
                  5. Ciudad y Provincia
                  6. Instituciones, Universidades o Empresas en las que trabajó, estudio o tuvo algun tipo de participacion.
                  7. Perfil academico, Especialidades, Estudios, Habilidades, Idiomas o Experiencias
                  En caso de no encontrar alguno de estos datos, coloca null en su lugar.
                  Deberas devolvermelo en el siguiente formato:
                  {
                    "nombre_apellido": "XXXX",
                    "dni": "NNNNNNNN",
                    "fecha_nacimiento": "aaaa-mm-dd",
                    "correo_electronico": "XXXX",
                    "ciudad_provincia": "XXXX",
                    "instituciones_empresas": ["Institucion 1", "Institucion 2", "Institucion 3", ...],
                    "perfiles_especialidades": ["Especialidad 1", "Especialidad 2", "Especialidad 3", ...]
                  }
    `
  ]);

  const response = await result.response;
  var respuesta = response.text();

  // Borrar patrones no deseados: ` , 'json' y espacios al principio y final
  respuesta = respuesta.replace(/`/g, '');
  respuesta = respuesta.replace(/json/g, '');
  respuesta = respuesta.trim();
  return respuesta;
}

export { responderIA, extraerDatosCV, extraerDatosCVPdf}


