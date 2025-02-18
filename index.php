<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- mojocss -->
  <script src="https://unpkg.com/mojocss"></script>
  <title>Menu</title>
</head>

<style type="text/css">

section .card{
  background-position: 50% 50%;
  background-repeat: no-repeat;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  row-gap: 45px;
  align-items: center;
  padding: 0px 15px;
  justify-content: center;
  text-align: center;
  font-family: Cambria;
  background-color: rgba(17, 24, 39, 1);
}

.bg-img-img\/curriculum-vitae2\.png {
  background-size: calc(80% - 2vw) !important;
}

.bg-img-img\/find2\.png{
  background-size: calc(90% - 2vw) !important;
}

section .card:hover{
  box-shadow: 0 0rem 1.4rem 0.1rem rgb(225, 227, 230);
  background-color: rgba(17, 24, 39, 1);
  scale: 1.05;
}




</style>

<body style="background: #222639;" class="h-100vh grid rows-10 px-5 py-2">

  <header class="r-start-1 r-end-4">
    
  </header>

  <article class="r-start-4 r-end-8">
    <section class="grid py-1 w-80% ma-auto h-100% gap-16 j-items-stretch" md="cols-auto" lg="cols-auto">
      <a class="bg-img-img/curriculum-vitae2.png card" href="cargar_evaluador/cargar.php">
        <h2 class="text-xl">Cargar Evaluador</h2>
        <h5 class="text-md">Cargar los datos de un evaluador y subir su CV</h5>
      </a>
      
      <a class="bg-img-img/find2.png card" href="buscar/buscar.php">
        <h2 class="text-xl">Buscar Evaluador</h2>
        <h5 class="text-md">Buscar evaluadores por</h5>
      </a>
      <div class="bg-img-img/find2.png card">
        <h2 class="text-xl">Buscar Evaluador</h2>
        <h5 class="text-md">Buscar evaluadores por</h5>
      </div>
    </section>
  </article>

  <footer class="r-start-8 r-end-11">
    
  </footer>

</body>
<script>mojo();</script>

</html>