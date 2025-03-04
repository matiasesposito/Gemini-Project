<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subir Archivo</title>

  <!-- Iblize-->
  <link rel="stylesheet" href="/Gemini-Project/librerias/iblize-main/themes/iblize-dark.css" />
  <script src="/Gemini-Project/librerias/iblize-main/dist/iblize.js"></script>

  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

  <!-- Librerias -->
  <script src="/Gemini-Project/librerias/docToText/docToText.js"></script>
  <script src="/Gemini-Project/librerias/notiflix/dist/notiflix-aio-3.2.8.min.js"></script>

  <!-- Funciones -->
  <script type="importmap">{"imports": {"@google/generative-ai": "https://esm.run/@google/generative-ai"}}</script>
  <script src="/Gemini-Project/funciones/typeWriter.js"></script>
  <script src="/Gemini-Project/funciones/extractText.js" type="module"></script>
  <script src="/Gemini-Project/funciones/genAI.js" type="module"></script>
  <script src="/Gemini-Project/funciones/notiflix.js" type="module"></script>

  <!-- Estilos -->
  <link rel="stylesheet" href="styles.css">

</head>

<body class="container">

  <div class="container-xl">
    <form id="formFile" enctype="multipart/form-data" method="POST">
      <div class="d-flex flex-row align-items-center justify-center mt-2 pt-4 pb-3">
        <input class="form-control" type="file" name="archivo" id="archivo" accept=".pdf" required>
        <input class="btn btn-primary" id="cargar_cv" value="Cargar CV">
      </div>
    </form>
  </div>

  <div class="container-xxl visually-hidden formularioContainer">
    <!-- Formulario de carga con los datos del proyecto -->
    <div class="container-lg d-flex flex-column align-items-center">
      <div class="input-group mb-3">
        <span class="input-group-text">Nombre y Apellido</span>
        <input type="text" class="form-control me-3" id="nombre_apellido">
        <span class="input-group-text">DNI/CUIL</span>
        <input type="text" class="form-control" id="dni">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Fecha de Nacimiento</span>
        <input type="date" class="form-control" id="fecha_nacimiento">
        <span class="input-group-text">Correo Electrónico</span>
        <input type="text" class="form-control" id="correo_electronico">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Ciudad/Provincia</span>
        <input type="text" class="form-control me-3" id="ciudad_provincia">
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Instituciones/Empresas</span>
        <textarea class="form-control" id="instituciones_empresas" rows="10"></textarea>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text">Perfiles/Especialidades</span>
        <textarea class="form-control" id="perfiles_especialidades" rows="10"></textarea>
      </div>
      <input class="btn btn-warning mt-3 m-auto" id="guardar_datos" value="Subir datos">
    </div>
  </div>


  <script src="main.js" type="module"></script>

</body>

</html>