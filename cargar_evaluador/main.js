var cvSRC = [
    { src: "../documentos/Ares_Rossi_Nahuel.pdf", type: "pdf" },
    { src: "../documentos/Curriculum_vitae_Paulo_Maffia.pdf", type: "pdf" },
    { src: "../documentos/Curriculum_Vitae_Juan_Errequerena_resumido_2021.pdf", type: "pdf" },
    { src: "../documentos/Curriculum_Vitae_Sanz_Ferramola.pdf", type: "pdf" },
    { src: "../documentos/CV_-_COPELLO_GUILLERMO_JAVIER.pdf", type: "pdf" },
    { src: "../documentos/CV_-_TELLEZ_MARIA_TERESA.pdf", type: "pdf" },
    { src: "../documentos/CV_AimarMaria.pdf", type: "pdf" },
    { src: "../documentos/CV_Alejandra_Garrido.pdf", type: "pdf" },
    { src: "../documentos/CV_ALICIA_CARRANZA.pdf", type: "pdf" },
    { src: "../documentos/CV_Angel_Quiles.pdf", type: "pdf" },
    { src: "../documentos/CV_Bacigalupe_Alejandro.pdf", type: "pdf" },
    { src: "../documentos/CV_Barbosa_Silvia_2021.pdf", type: "pdf" },
    { src: "../documentos/CV_Braidot_Nestor_Bruno.pdf", type: "pdf" },
    { src: "../documentos/CV_Campos_Eleonora.pdf", type: "pdf" },
    { src: "../documentos/CV_CASTRO_GUILLERMO.pdf", type: "pdf" },
    { src: "../documentos/CV_Chavez_Monica.pdf", type: "pdf" },
    { src: "../documentos/CV_Daniel_Kirschbaum.pdf", type: "pdf" },
    { src: "../documentos/CV_Daniela_Hozbor.pdf", type: "pdf" },
    { src: "../documentos/CV_Di_Bella_Carla_E.pdf", type: "pdf" },
    { src: "../documentos/CV_Donolo_Pablo.pdf", type: "pdf" },
    { src: "../documentos/CV_Dra_Laura_Marcela_Machuca.pdf", type: "pdf" },
    { src: "../documentos/CV_Dra_Victoria_Guadalupe_Sánchez.pdf", type: "pdf" },
    { src: "../documentos/CV_Farber_Marisa.pdf", type: "pdf" },
    { src: "../documentos/CV_Francisco_Fabian_Nigro.pdf", type: "pdf" },
    { src: "../documentos/CV_Gallo_Juan_E.pdf", type: "pdf" },
    { src: "../documentos/CV_Garbarini_OIM.pdf", type: "pdf" },
    { src: "../documentos/CV_GREGORIO_FERNANDO_HUGO.pdf", type: "pdf" },
    { src: "../documentos/CV_Griselda_Alejandra_Eimer.pdf", type: "pdf" },
    { src: "../documentos/CV_Gurini_2020.pdf", type: "pdf" },
    { src: "../documentos/CV_Hector_Alcar_2021.pdf", type: "pdf" },
    { src: "../documentos/CV_Ignacio_Sartori.pdf", type: "pdf" },
    { src: "../documentos/CV_Javier_Luis_Mroginski.pdf", type: "pdf" },
    { src: "../documentos/CV_Leandro_Mocchegiani_Feb_2022.pdf", type: "pdf" },
    { src: "../documentos/CV_Marciszack.pdf", type: "pdf" },
    { src: "../documentos/CV_Nusbist_Resumido_2021.pdf", type: "pdf" },
    { src: "../documentos/CV_Pablo_Fillottrani.pdf", type: "pdf" },
    { src: "../documentos/CV_pbarrera_(completo_ultimo)2021.pdf", type: "pdf" },
    { src: "../documentos/CV_RAYA_TONETTI,_Gabriel.pdf", type: "pdf" },
    { src: "../documentos/CV_Renzini_2021.pdf", type: "pdf" },
    { src: "../documentos/CV_Revollo_Natalia.pdf", type: "pdf" },
    { src: "../documentos/CV_ROMANELLI2019.pdf", type: "pdf" },
    { src: "../documentos/CV_Sonia_Bruhl_02-2021.pdf", type: "pdf" },
    { src: "../documentos/CV_Szerman_Natalia_oct2020.pdf", type: "pdf" },
    { src: "../documentos/CV_TACCA_1pag_20.pdf", type: "pdf" },
    { src: "../documentos/CV_Vega_Marcela_2021.pdf", type: "pdf" },
    { src: "../documentos/CV_Wannaz_Eduardo.pdf", type: "pdf" },
    { src: "../documentos/CV_ZARITZKY.pdf", type: "pdf" },
    { src: "../documentos/CV_SSALINAS_022022.pdf", type: "pdf" },
    { src: "../documentos/cv_faguilera.pdf", type: "pdf" },
    { src: "../documentos/CV_Genovese.pdf", type: "pdf" },
    { src: "../documentos/CV_Hugo_Guillermo_Castro.pdf", type: "pdf" },
    { src: "../documentos/CV_Julia_Yanez2021.pdf", type: "pdf" },
    { src: "../documentos/CV-OSCAR-GALANTE-Actualizado-Sept-2012.pdf", type: "pdf" },
    { src: "../documentos/Pablo_Bianchi_CV.pdf", type: "pdf" },
    { src: "../documentos/Ramirez,_Maria_Rosana.pdf", type: "pdf" },
    { src: "../documentos/Schlotthauer,_Gastón.pdf", type: "pdf" }
  ];
  
  import { generarJson } from '/Gemini-Project/funciones/genAI.js'
  import { guardarDatosEvaluador, getDuplicados} from '/Gemini-Project/funciones/http_requests.js'
  import { notiflixBlock, notiflixSuccess, notiflixConfirmDuplicado } from '/Gemini-Project/funciones/notiflix.js'
  import { extraerTexto } from '/Gemini-Project/funciones/extractText.js'

  var blob = "";

  // ********Evento para cargar un archivo, resumirlo con IA y guardarlo en ld BD ********
  const btnCargar = document.getElementById("cargar_cv");
  btnCargar.addEventListener("click", async (e) => {
    var file = document.getElementById("archivo").files[0];
    var { name } = file;
    var ext = name.toLowerCase().substring(name.lastIndexOf('.') + 1);
    
    var reader = new FileReader();
    // Convertir archivo a blob. readASDataURL devuelve un base64
    reader.readAsDataURL(file);
    // Evento que se dispara cuando se termina de leer el archivo
    reader.addEventListener('load', async function() {
      blob = reader.result;
      notiflixBlock("enable",".container");
      // Extrar texto del archivo
      var textoCV = await extraerTexto(file, ext);
      // Generar JSON con IA a partir del texto extraido
      var jsonDatosCV = await generarJson(textoCV);
      // Mostrar formulario para completar los datos
      mostrarFormulario()
      // Desbloquear la pantalla
      notiflixBlock("disable",".container");
      // Completar formulario con los datos extraidos con IA
      completarFormulario(jsonDatosCV);
    });
  })

  document.getElementById("guardar_datos").addEventListener("click", guardarDatos);
  async function guardarDatos(){
    var datosEvaluador = {
      "nombre": formatearTexto(document.getElementById("nombre_apellido").value),
      "dni": document.getElementById("dni").value,
      "fecha_nacimiento": document.getElementById("fecha_nacimiento").value,
      "correo_electronico": document.getElementById("correo_electronico").value,
      "ciudad_provincia": document.getElementById("ciudad_provincia").value,
      "instituciones_empresas": document.getElementById("instituciones_empresas").value,
      "perfiles_especialidades": document.getElementById("perfiles_especialidades").value,
      "blob": blob
    }
    // Verificar si el evaluador ya existe en la BD
    var arrayDuplicados = await getDuplicados(datosEvaluador.nombre);
    //arrayDuplicados = [];
    notiflixBlock("enable",".container");
    if(arrayDuplicados.length > 0){
      // Mostrar mensaje de advertencia de duplicados
      confirm = await notiflixConfirmDuplicado(arrayDuplicados);
      if(confirm){
        // Guardar datos en la BD si se confirma la advertencia
        var response = await guardarDatosEvaluador(datosEvaluador);
        notiflixBlock("disable",".container");
        notiflixSuccess(response.message);
        ocultarFormulario();
      }
    }else{
      // Guardar datos en la BD si no hay duplicados
      var response = await guardarDatosEvaluador(datosEvaluador);
      notiflixBlock("disable",".container");
      notiflixSuccess(response.message);
      ocultarFormulario();
    }
  }

  async function completarFormulario(json){
    var obj = JSON.parse(json);

    var nombre_apellido = document.getElementById("nombre_apellido");
    var dni = document.getElementById("dni");
    var fecha_nacimiento = document.getElementById("fecha_nacimiento");
    var correo_electronico = document.getElementById("correo_electronico");
    var ciudad_provincia = document.getElementById("ciudad_provincia");
    var instituciones_empresas = document.getElementById("instituciones_empresas");
    var perfiles_especialidades = document.getElementById("perfiles_especialidades");

    // Formatear datos del nombre para quitarle los acentos y las comas
    nombre_apellido.value = formatearTexto(obj.nombre_apellido);
    dni.value = obj.dni;
    fecha_nacimiento.value = obj.fecha_nacimiento;
    correo_electronico.value = obj.correo_electronico;
    ciudad_provincia.value = obj.ciudad_provincia;
    instituciones_empresas.innerHTML = obj.instituciones_empresas;
    perfiles_especialidades.innerHTML = obj.perfiles_especialidades;
  }

  function mostrarFormulario(){
    // Remover clase visually-hidden
    var formularioContainer = document.querySelector(".formularioContainer");
    if(formularioContainer != null){
      formularioContainer.classList.remove("visually-hidden");
    }
  }

  function ocultarFormulario(){
    // Agregar clase visually-hidden
    var formularioContainer = document.querySelector(".formularioContainer");
    if(formularioContainer != null){
      formularioContainer.classList.add("visually-hidden");
    }
  }

  function formatearTexto(texto){
    // Quitar espacios al principio y al final
    texto = texto.trim();
    // Quitar acentos y comas del texto
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/,/g, "");
  }

  
  // ********Recorrer todos los CVs, resumirlos con IA y guardarlos en la BD ********
  // for(const cv in cvSRC){

  //     // Extraer texto del archivo
  //     var textoCV = await extractText(cvSRC[cv].src, cvSRC[cv].type);
  //     // Extraer datos del CV con IA
  //     var jsonDatosCV = await extraerDatosCV(textoCV);
  //     //Completar el formulario con el json extraido con IA
  //     var obj = JSON.parse(jsonDatosCV);
  //     var nombre_apellido = obj.nombre_apellido;
  //     var dni = obj.dni;
  //     var fecha_nacimiento = obj.fecha_nacimiento;
  //     var correo_electronico = obj.correo_electronico;
  //     var ciudad_provincia = obj.ciudad_provincia;
  //     var instituciones_empresas = obj.instituciones_empresas.toString();
  //     var perfiles_especialidades = obj.perfiles_especialidades.toString();
  //     // Guardar datos en la BD
  //     var datosEvaluador = {
  //       "nombre": nombre_apellido,
  //       "dni": dni,
  //       "fecha_nacimiento": fecha_nacimiento,
  //       "correo_electronico": correo_electronico,
  //       "ciudad_provincia": ciudad_provincia,
  //       "instituciones_empresas": instituciones_empresas,
  //       "perfiles_especialidades": perfiles_especialidades,
  //       "blob": ""
  //     }
  //     console.log(datosEvaluador)
  //     var response = await guardarDatosEvaluador(datosEvaluador);
  //     console.log(response);
  //     // Esperar tres segundos para no saturar el servidor (Maximo de 10 requests por minuto) 
  //     await new Promise(resolve => setTimeout(resolve, 6000)); 
  // }

