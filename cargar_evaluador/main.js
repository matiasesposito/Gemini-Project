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
  
  
  
  import { extraerDatosCV } from '/Gemini-Project/funciones/genAI.js'
  import { guardarDatosEvaluador } from '/Gemini-Project/funciones/http_requests.js'
  import { notiflixBlock, notiflixSuccess, notiflixError } from '/Gemini-Project/funciones/notiflix.js'
  import { extractText} from '/Gemini-Project/funciones/extractText.js'
  
  
  
  // ********Evento para cargar un archivo, resumirlo con IA y guardarlo en ld BD ********
  const btnSubmit = document.getElementById("cargar_cv");
  btnSubmit.addEventListener("click", async (e) => {
    e.preventDefault();
    const file = document.getElementById("archivo").files[0];
    const { name } = file;
    const ext = name.toLowerCase().substring(name.lastIndexOf('.') + 1);
  
    var reader = new FileReader();
    // Convertir archivo a blob. readASDataURL devuelve un base64
    reader.readAsDataURL(file);
    // Evento que se dispara cuando se termina de leer el archivo
    reader.addEventListener('load', async function() {
      // const blob = new Blob([reader.result], { type: file.type });
      const blob = reader.result;
      notiflixBlock("enable",".container-lg");
      // Extraer texto del archivo
      var textoCV = await extractText(file, ext);
      // Extraer datos del CV con IA
      var jsonDatosCV = await extraerDatosCV(textoCV);


      // Remover clase visually-hidden
      var container = document.querySelector(".visually-hidden");
      if(container != null){
        container.classList.remove("visually-hidden");
      }
      // Mostrar respuesta en el textarea
      var text_area_json = document.getElementById("text_area_json");
      text_area_json.value = jsonDatosCV;

      notiflixBlock("disable",".container-lg");

      // Completar el formulario con el json extraido con IA 
      completarFormulario();
      // Obtener los datos del formulario

      document.getElementById("guardar").addEventListener("click", async function() {
        const datosEvaluador = getDatosFormulario(blob);
        // Guardar datos en la BD
        var response = await guardarDatosEvaluador(datosEvaluador);
        console.log(response);
      })
      

      // if(response.status == 1){
      //   notiflixBlock("disable",".container-lg");
      //   notiflixSuccess("Archivo subido correctamente");
      // }else{
      //   notiflixBlock("disable",".container-lg");
      //   notiflixError("Error al subir el archivo" + response.error);
      // }
    });
  
    
  })

  function completarFormulario(){
    document.querySelector(".btn-success").addEventListener("click", function() {
      var text_area_json = document.getElementById("text_area_json");
      var json = text_area_json.value;
      var obj = JSON.parse(json);
  
      var nombre_apellido = document.getElementById("nombre_apellido");
      var dni = document.getElementById("dni");
      var fecha_nacimiento = document.getElementById("fecha_nacimiento");
      var correo_electronico = document.getElementById("correo_electronico");
      var ciudad_provincia = document.getElementById("ciudad_provincia");
      var instituciones_empresas = document.getElementById("instituciones_empresas");
      var perfiles_especialidades = document.getElementById("perfiles_especialidades");

      nombre_apellido.value = obj.nombre_apellido;
      dni.value = obj.dni;
      fecha_nacimiento.value = obj.fecha_nacimiento;
      correo_electronico.value = obj.correo_electronico;
      ciudad_provincia.value = obj.ciudad_provincia;
      instituciones_empresas.innerHTML = obj.instituciones_empresas;
      perfiles_especialidades.innerHTML = obj.perfiles_especialidades;
    });
  }

  function getDatosFormulario(blob){
    var nombre_apellido = document.getElementById("nombre_apellido").value;
    var dni = document.getElementById("dni").value;
    var fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
    var correo_electronico = document.getElementById("correo_electronico").value;
    var ciudad_provincia = document.getElementById("ciudad_provincia").value;
    var instituciones_empresas = document.getElementById("instituciones_empresas").value;
    var perfiles_especialidades = document.getElementById("perfiles_especialidades").value;

    var datosEvaluador = {
      "nombre": nombre_apellido,
      "dni": dni,
      "fecha_nacimiento": fecha_nacimiento,
      "correo_electronico": correo_electronico,
      "ciudad_provincia": ciudad_provincia,
      "instituciones_empresas": instituciones_empresas,
      "perfiles_especialidades": perfiles_especialidades,
      "blob": blob
    }

    return datosEvaluador;
  }
  
  
  // ********Recorrer todos los CVs, resumirlos con IA y guardarlos en la BD ********
  // for(const cv in cvSRC){
  //   const src = cvSRC[cv].src;
  //   const file = new File([src], src);
  //   const { name } = file;
  //   const ext = name.toLowerCase().substring(name.lastIndexOf('.') + 1);
  //   var reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.addEventListener('load', async function() {
  //     const blob = reader.result;
  //     // Extraer texto del archivo
  //     var textoCV = await extractText(cvSRC[cv].src, cvSRC[cv].type);
  //     // Resumir texto con IA
  //     var respuesta = await resumirTexto(textoCV);
  //     // Guardar resumen y blob en la BD
  //     guardarResumenEvaluador(respuesta,blob);
  //   });
  //   // Esperar tres segundos para no saturar el servidor
  //   await new Promise(resolve => setTimeout(resolve, 6000));
  // }

  
  