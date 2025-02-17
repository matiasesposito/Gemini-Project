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
  background-size: 80%;
  background-repeat: no-repeat;
  color: white;
  transition: all 0.3s ease;
  filter: invert(15%) sepia(5%) saturate(4136%) hue-rotate(183deg) brightness(100%) contrast(81%);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  row-gap: 45px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Cambria;
}

section .card:hover{
  filter: invert(25%) sepia(5%) saturate(4136%) hue-rotate(183deg) brightness(100%) contrast(81%);
  box-shadow: 0 0rem 1.4rem 0.1rem rgb(225, 227, 230);
}




</style>

<body style="background: #222639;" class="h-100vh grid rows-10 px-5 py-2">

  <header class="r-start-1 r-end-4">
    
  </header>

  <article class="r-start-4 r-end-8">
    <section class="grid px-15 py-3 h-100%" md="cols-auto" lg="cols-3">
      <div class="bg-img-img/curriculum-vitae.png card">
        <h2 class="text-xxl">Cargar Evaluador</h2>
        <h5 class="text-lg">Cargar los datos de un evaluador y subir su CV</h5>
      </div>
      <div class="bg-img-img/curriculum-vitae.png card">
      
      </div>
      <div class="bg-img-img/curriculum-vitae.png card">
      
      </div>
    </section>
  </article>

  <footer class="r-start-8 r-end-11">
    
  </footer>

</body>
<script>mojo();</script>

</html>