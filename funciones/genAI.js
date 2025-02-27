import {GoogleGenerativeAI} from "@google/generative-ai";

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

async function resumirCV(textoCV) {
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
  const result = await model.generateContent(prompt);
  const response = await result.response;
  var respuesta = response.text();
  var respuesta = respuesta.trim();
  return respuesta;
}

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
  const prompt = `El siguiente texto corresponde a los datos de un CV.
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
                  Deberas devolvermelo el siguiente formato:
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

// async function nombreDuplicado(nombreEvaluador) {
//   var nombresEvaluadores = await getNombresEvaluadores();
//   var arrayNombres = []
//   nombresEvaluadores.map((value) => { arrayNombres.push(value.nombre)});


//   const prompt = `Verifica si este nombre ${nombreEvaluador.toLowerCase()} se encuentra en la 
//                   siguiente lista : ${arrayNombres.toString()}. El nombre a verificar puede estar en 
//                   distinto orden. 
//                   Por ejemplo, si el nombre a verificar es "Griselda Alejandra Eimer" y en
//                   la lista se encuentra como "Eimer Grisleda" o "Eimer griselda alejandra" 
//                   deberas darlo como duplicado.
//                   Por el contrario si el nombre a verificar es "Griselda Eimer" y 
//                   en la lista esta "Eimer Daniela" o "Daniela Maria Eimer" debes devolver
//                   que no es duplicado.
//                   Solo debes devolverme el resultado en el siguiente formato.
//                   {
//                     "nombre_duplicado": 
//                   }
//                   `;
//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   var respuesta = response.text();
  
//   // Borrar patrones no deseados: ` , 'json' y espacios al principio y final
//   respuesta = respuesta.replace(/`/g, '');
//   respuesta = respuesta.replace(/json/g, '');
//   respuesta = respuesta.trim();
//   // Convertir respuesta a JSON
//   var jsonRes = JSON.parse(respuesta);
//   // Devolver el resultado
//   return jsonRes.nombre_duplicado;
// }

export { resumirCV, responderIA, extraerDatosCV}


