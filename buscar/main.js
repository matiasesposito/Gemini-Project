import { resumirTexto, responderIA } from '/Gemini-Project/funciones/genAI.js'
import { guardarResumenEvaluador, getResumenEvaluadores } from '/Gemini-Project/funciones/http_requests.js'
import { notiflixBlock } from '/Gemini-Project/funciones/notiflix.js'
// ******** Evento para buscar un evaluador mediante IA en la BD ********
const input_search = document.getElementById("search");
input_search.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    // Limpiar el editor
    document.getElementById("iblize_editor").innerHTML = "";
    notiflixBlock("enable", ".iblize_editor");
    let arrayEvaluadores = await getResumenEvaluadores();
    let txtEvaluadores = JSON.stringify(arrayEvaluadores);
    let respuesta = await responderIA(input_search.value, txtEvaluadores);
    notiflixBlock("disable", ".iblize_editor");
    // Mostrar la respuesta en el editor
    typeWriter(respuesta, "editor");
  }
});

