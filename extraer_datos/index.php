<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Subir Archivo</title>

  <!-- Iblize-->
  <link rel="stylesheet" href="/Gemini-Project/librerias/iblize-main/themes/iblize-dark.css"/>
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

<body>


<form id="formFile" enctype="multipart/form-data" method="POST" class="container-lg">
  <div class="d-flex flex-column align-items-center p-5">
    <input class="form-control" type="file" name="archivo" id="archivo" accept=".docx" required>
    <input class="btn btn-primary mt-3 w-25" type="submit" id="submit" value="Subir">
  </div>
</form>

<div class="container-xl visually-hidden">
  <div class="d-flex flex-column align-items-center p-5">
    <h2>Datos extraídos</h2>
    <textarea id="text_area_json" class="form-control"></textarea>
    <button class="btn btn-success mt-3 w-25">Completar datos</button>
  </div>
  <!-- Formulario de carga con los datos del proyecto -->
   <div class="">
    <div class="input-group mb-3">
      <span class="input-group-text">Codigo</span>
      <input type="text" class="form-control me-3" id="codigo">
      <span class="input-group-text">Postulante</span>
      <input type="text" class="form-control" id="postulante">
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">Titulo</span>
      <input type="text" class="form-control" id="titulo">
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text">Persona a cargo</span>
      <input type="text" class="form-control me-3" id="persona_a_cargo">
      <span class="input-group-text">Palabras Claves</span>
      <input type="text" class="form-control" id="palabras_claves">
    </div>
   </div>
</div>




<script src="main.js" type="module"></script>

</body>

</html>