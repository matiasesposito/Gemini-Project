import { extraer_proyecto } from '/Gemini-Project/funciones/genAI.js'
import { notiflixBlock, notiflixSuccess } from '/Gemini-Project/funciones/notiflix.js'
import { extractText } from '/Gemini-Project/funciones/extractText.js'


// ********Evento para cargar un archivo word y resumirlo con IA ********
const btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", async (e) => {
  e.preventDefault();
  const file = document.getElementById("archivo").files[0];
  const { name } = file;
  const ext = name.toLowerCase().substring(name.lastIndexOf('.') + 1);


  notiflixBlock("enable", ".container-lg");
  // Extraer texto del archivo
  var textoCV = await extractText(file, ext);
  // Resumir texto con IA
  var respuesta = await extraer_proyecto(textoCV);
  notiflixBlock("disable", ".container-lg");

  // Remover clase visually-hidden
  var container = document.querySelector(".visually-hidden");
  if(container != null){
    container.classList.remove("visually-hidden");
  }
  // Mostrar respuesta en el textarea
  var text_area_json = document.getElementById("text_area_json");
  text_area_json.value = respuesta;
  extraerJSON();
})


function extraerJSON(){
  document.querySelector(".btn-success").addEventListener("click", function() {
    var text_area_json = document.getElementById("text_area_json");
    var json = text_area_json.value;
    var obj = JSON.parse(json);
    
    var codigo = document.getElementById("codigo");
    var postulante = document.getElementById("postulante");
    var titulo = document.getElementById("titulo");
    var persona_a_cargo = document.getElementById("persona_a_cargo");
    var palabras_claves = document.getElementById("palabras_claves");

    codigo.value = obj.Codigo;
    postulante.value = obj.Postulante;
    titulo.value = obj.Titulo;
    persona_a_cargo.value = obj.Persona_a_cargo;
    palabras_claves.value = obj.Palabras_claves;

  });
}