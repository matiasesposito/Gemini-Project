// El resumen fue generado previamente con la funcion 'resumirTexto' de "genAI.js" 
async function guardarResumenEvaluador(resumen,blob){
    var datosEvaluador = {
      "nombre": "",
      "resumen":resumen,
      "blob":blob
    }

    return fetch('/Gemini-Project/php/addEvaluador.php', {
      method: 'POST',
      body: JSON.stringify({datosEvaluador}),
    }).then(response => response.json())
      .then(data => data)
  }
  // ******** Función para obtener todos los resumenes de evaluadores de la BD ********
  async function getResumenEvaluadores() {
    return fetch('/Gemini-Project/php/getEvaluadores.php', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => data["array"]); 
  }




export { guardarResumenEvaluador, getResumenEvaluadores };