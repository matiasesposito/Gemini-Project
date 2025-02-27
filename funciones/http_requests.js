// El resumen fue generado previamente con la funcion 'resumirTexto' de "genAI.js" 
async function guardarDatosEvaluador(datosEvaluador){
    var datosEvaluador = {
      "nombre": datosEvaluador.nombre,
      "dni": datosEvaluador.dni,
      "fecha_nacimiento": datosEvaluador.fecha_nacimiento,
      "correo_electronico": datosEvaluador.correo_electronico,
      "ciudad_provincia": datosEvaluador.ciudad_provincia,
      "instituciones_empresas": datosEvaluador.instituciones_empresas,
      "perfiles_especialidades": datosEvaluador.perfiles_especialidades,
      "blob": datosEvaluador.blob
    }

    return fetch('/Gemini-Project/php/addEvaluador.php', {
      method: 'POST',
      body: JSON.stringify({datosEvaluador}),
    }).then(response => response.json())
      .then(data => data)
      .catch(error => console.log('Error:', error));
  }
  // ******** Función para obtener todos los resumenes de evaluadores de la BD ********
  async function getResumenEvaluadores() {
    return fetch('/Gemini-Project/php/getEvaluadores.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => data["array"]); 
  }


  async function getNombresEvaluadores() {
    return fetch('/Gemini-Project/php/getNombresEvaluadores.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => data["array"]); 
  }

  async function getDuplicados(nombreCompleto){
    return fetch('../php/getDuplicados.php', {
      method: 'POST',
      body: JSON.stringify({nombreCompleto}),
    })
      .then(response => response.json())
      .then(data => data["arrayDuplicados"]);
  }

export { guardarDatosEvaluador, getResumenEvaluadores, getNombresEvaluadores, getDuplicados };