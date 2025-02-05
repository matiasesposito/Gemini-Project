<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <!-- Iblize-->
  <link rel="stylesheet" href="librerias/iblize-main/themes/iblize-dark.css"/>
  <script src="librerias/iblize-main/dist/iblize.js"></script>

  <!-- Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
  
  <!-- Librerias -->
  <script src="librerias/docToText/docToText.js"></script>
  <script src="librerias/notiflix/dist/notiflix-aio-3.2.8.min.js"></script>
  
  <!-- Funciones -->
  <script type="importmap">{"imports": {"@google/generative-ai": "https://esm.run/@google/generative-ai"}}</script>
  <script src="funciones/typeWriter.js"></script>
  <script src="funciones/extractText.js" type="module"></script>
  <script src="funciones/genAI.js" type="module"></script>
  <script src="funciones/notiflix.js" type="module"></script>

  <!-- Estilos -->
  <link rel="stylesheet" href="styles.css">

</head>

<body>

<div class="group">
  <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>

  <input
    id="search"
    class="input"
    type="search"
    placeholder="Buscar..."
    name="searchbar"
  />

</div>


<form id="uploadFile" enctype="multipart/form-data">
  <div class="mb-3 container-lg p-5">
    <input class="form-control" type="file" id="formFile">
  </div>
</form>

<div id="iblize_editor">
</div>






<script src="main.js" type="module"></script>

</body>

</html>