<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- mojocss -->
  <script src="https://unpkg.com/mojocss"></script>
  <!-- Card css -->
  <link rel="stylesheet" href="card.css">
  <!-- Fontawesome -->
  <link href="librerias/fontawesome-free-6.7.2-web/css/all.css" rel="stylesheet" />
  <!-- lordicon -->
  <script src="https://cdn.lordicon.com/lordicon.js"></script>

  <title>Menu</title>
</head>

<body class="h-100vh grid rows-11 px-5 py-2">

  <header class="r-start-1 r-end-4">

  </header>

  <article class="r-start-4 r-end-9">
    <section class="grid py-1 w-80% ma-auto h-100% gap-16 j-items-center" md="cols-auto" lg="cols-auto">

      <div class="card-wrap">
        <a href="cargar_evaluador/cargar.php">
          <div class="card-header one">
          <lord-icon
              src="https://cdn.lordicon.com/fjvfsqea.json"
              trigger="hover"
              state="hover-unfold"
              colors="primary:#e4e4e4,secondary:#08a88a"
              target=".card-wrap"
              style="width:90%;height:90%">
          </lord-icon>
          </div>
          <div class="card-content">
            <h1 class="card-title">Cargar Evaluador</h1>
            <p class="card-text">Cargar los datos de un evaluador y subir su CV</p>
          </div>
        </a>
      </div>




      <div class="card-wrap">
        <a href="buscar/buscar.php">
          <div class="card-header one">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">Buscar Evaluador</h1>
            <p class="card-text">Buscar evaluadores por</p>
          </div>
        </a>
      </div>

      <div class="card-wrap">
        <a href="buscar/buscar.php">
          <div class="card-header one">
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div class="card-content">
            <h1 class="card-title">Buscar Evaluador</h1>
            <p class="card-text">Buscar evaluadores por</p>
          </div>
        </a>
      </div>

    </section>

    <!-- <section class="grid py-1 w-80% ma-auto h-100% gap-16 j-items-center" md="cols-auto" lg="cols-auto">
      <div class="block">
        <div class="icon">
          <lord-icon
            class="current-color"
            trigger="hover"
            target=".block"
            src="https://cdn.lordicon.com/lbjtvqiv.json"></lord-icon>
        </div>
        <div class="card-content">
          <h1 class="card-title">Buscar Evaluador</h1>
          <p class="card-text">Buscar evaluadores por</p>
        </div>
      </div>

      <div class="block">
        <div class="icon">
          <lord-icon
            class="current-color"
            trigger="hover"
            target=".block"
            src="https://cdn.lordicon.com/lbjtvqiv.json"></lord-icon>
        </div>
        <div class="card-content">
          <h1 class="card-title">Buscar Evaluador</h1>
          <p class="card-text">Buscar evaluadores por</p>
        </div>
      </div>

      <div class="block">
        <div class="icon">
          <lord-icon
            class="current-color"
            trigger="hover"
            target=".block"
            src="https://cdn.lordicon.com/lbjtvqiv.json"></lord-icon>
        </div>
        <div class="card-content">
          <h1 class="card-title">Buscar Evaluador</h1>
          <p class="card-text">Buscar evaluadores por</p>
        </div>
      </div>
    </section> -->

  </article>

  <footer class="r-start-9 r-end-12">

  </footer>

</body>

<script>
  mojo();
</script>

</html>