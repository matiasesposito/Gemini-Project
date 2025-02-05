var cvSRC = [
  { src: "documentos/Ares_Rossi_Nahuel.pdf", type: "pdf" },
  { src: "documentos/Curriculum_vitae_Paulo_Maffia.pdf", type: "pdf" },
  { src: "documentos/Curriculum_Vitae_Juan_Errequerena_resumido_2021.pdf", type: "pdf" },
  { src: "documentos/Curriculum_Vitae_Sanz_Ferramola.pdf", type: "pdf" },
  { src: "documentos/CV_-_COPELLO_GUILLERMO_JAVIER.pdf", type: "pdf" },
  { src: "documentos/CV_-_TELLEZ_MARIA_TERESA.pdf", type: "pdf" },
  { src: "documentos/CV_AimarMaria.pdf", type: "pdf" },
  { src: "documentos/CV_Alejandra_Garrido.pdf", type: "pdf" },
  { src: "documentos/CV_ALICIA_CARRANZA.pdf", type: "pdf" },
  { src: "documentos/CV_Angel_Quiles.pdf", type: "pdf" },
  { src: "documentos/CV_Bacigalupe_Alejandro.pdf", type: "pdf" },
  { src: "documentos/CV_Barbosa_Silvia_2021.pdf", type: "pdf" },
  { src: "documentos/CV_Braidot_Nestor_Bruno.pdf", type: "pdf" },
  { src: "documentos/CV_Campos_Eleonora.pdf", type: "pdf" },
  { src: "documentos/CV_CASTRO_GUILLERMO.pdf", type: "pdf" },
  { src: "documentos/CV_Chavez_Monica.pdf", type: "pdf" },
  { src: "documentos/CV_Daniel_Kirschbaum.pdf", type: "pdf" },
  { src: "documentos/CV_Daniela_Hozbor.pdf", type: "pdf" },
  { src: "documentos/CV_Di_Bella_Carla_E.pdf", type: "pdf" },
  { src: "documentos/CV_Donolo_Pablo.pdf", type: "pdf" },
  { src: "documentos/CV_Dra_Laura_Marcela_Machuca.pdf", type: "pdf" },
  { src: "documentos/CV_Dra_Victoria_Guadalupe_Sánchez.pdf", type: "pdf" },
  { src: "documentos/CV_Farber_Marisa.pdf", type: "pdf" },
  { src: "documentos/CV_Francisco_Fabian_Nigro.pdf", type: "pdf" },
  { src: "documentos/CV_Gallo_Juan_E.pdf", type: "pdf" },
  { src: "documentos/CV_Garbarini_OIM.pdf", type: "pdf" },
  { src: "documentos/CV_GREGORIO_FERNANDO_HUGO.pdf", type: "pdf" },
  { src: "documentos/CV_Griselda_Alejandra_Eimer.pdf", type: "pdf" },
  { src: "documentos/CV_Gurini_2020.pdf", type: "pdf" },
  { src: "documentos/CV_Hector_Alcar_2021.pdf", type: "pdf" },
  { src: "documentos/CV_Ignacio_Sartori.pdf", type: "pdf" },
  { src: "documentos/CV_Javier_Luis_Mroginski.pdf", type: "pdf" },
  { src: "documentos/CV_Leandro_Mocchegiani_Feb_2022.pdf", type: "pdf" },
  { src: "documentos/CV_Marciszack.pdf", type: "pdf" },
  { src: "documentos/CV_Nusbist_Resumido_2021.pdf", type: "pdf" },
  { src: "documentos/CV_Pablo_Fillottrani.pdf", type: "pdf" },
  { src: "documentos/CV_pbarrera_(completo_ultimo)2021.pdf", type: "pdf" },
  { src: "documentos/CV_RAYA_TONETTI,_Gabriel.pdf", type: "pdf" },
  { src: "documentos/CV_Renzini_2021.pdf", type: "pdf" },
  { src: "documentos/CV_Revollo_Natalia.pdf", type: "pdf" },
  { src: "documentos/CV_ROMANELLI2019.pdf", type: "pdf" },
  { src: "documentos/CV_Sonia_Bruhl_02-2021.pdf", type: "pdf" },
  { src: "documentos/CV_Szerman_Natalia_oct2020.pdf", type: "pdf" },
  { src: "documentos/CV_TACCA_1pag_20.pdf", type: "pdf" },
  { src: "documentos/CV_Vega_Marcela_2021.pdf", type: "pdf" },
  { src: "documentos/CV_Wannaz_Eduardo.pdf", type: "pdf" },
  { src: "documentos/CV_ZARITZKY.pdf", type: "pdf" },
  { src: "documentos/CV_SSALINAS_022022.pdf", type: "pdf" },
  { src: "documentos/cv_faguilera.pdf", type: "pdf" },
  { src: "documentos/CV_Genovese.pdf", type: "pdf" },
  { src: "documentos/CV_Hugo_Guillermo_Castro.pdf", type: "pdf" },
  { src: "documentos/CV_Julia_Yanez2021.pdf", type: "pdf" },
  { src: "documentos/CV-OSCAR-GALANTE-Actualizado-Sept-2012.pdf", type: "pdf" },
  { src: "documentos/Pablo_Bianchi_CV.pdf", type: "pdf" },
  { src: "documentos/Ramirez,_Maria_Rosana.pdf", type: "pdf" },
  { src: "documentos/Schlotthauer,_Gastón.pdf", type: "pdf" }
];



import { resumirTexto } from './funciones/genAI.js'
import { responderAI } from './funciones/genAI.js'
import { extractText } from './funciones/extractText.js'
import { notiflixBlock } from './funciones/notiflix.js'

const formFile = document.getElementById("formFile");

// ********Evento para cargar un archivo, resumirlo con IA y guardarlo en ld BD ********
// formFile.addEventListener("change", async (e) => {
//   const file = e.target.files[0];
//   const { name } = file;
//   const ext = name.toLowerCase().substring(name.lastIndexOf('.') + 1);

//   notiflixBlock("enable",".container-lg");
//   var textoCV = await extractText(file, ext);
//   var respuesta = await resumirTexto(textoCV);
//   notiflixBlock("disable",".container-lg");
//   //typeWriter(respuesta, "editor");
//   guardarResumenEvaluador(respuesta);
// })

// ********Recorrer todos los CVs, resumirlos con IA y guardarlos en la BD ********
for(const cv in cvSRC){
  var textoCV = await extractText(cvSRC[cv].src, cvSRC[cv].type);
  var respuesta = await resumirTexto(textoCV);
  // Esperar tres segundos para no saturar el servidor
  await new Promise(resolve => setTimeout(resolve, 3000));
  guardarResumenEvaluador(respuesta);
}



// ******** Evento para buscar un evaluador mediante IA en la BD ********
const input_search = document.getElementById("search");
input_search.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
     let arrayEvaluadores = await getResumenEvaluadores();
     let txtEvaluadores = JSON.stringify(arrayEvaluadores);
     let respuesta = await responderAI(input_search.value, txtEvaluadores);
     typeWriter(respuesta, "editor");

  }
});


// ******** Función para guardar un resumen generado con IA en la BD ********
async function guardarResumenEvaluador(resumen){
  var datosEvaluador = {
    "nombre": "",
    "resumen":resumen
  }

  fetch('/Gemini-Project/php/addEvaluador.php', {
    method: 'POST',
    body: JSON.stringify({datosEvaluador}),
  }).then(response => response.json())
    .then(response => console.log(response))
}
// ******** Función para obtener todos los resumenes de evaluadores de la BD ********
async function getResumenEvaluadores() {
  return fetch('/Gemini-Project/php/getEvaluadores.php', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => data["array"]); 
}

