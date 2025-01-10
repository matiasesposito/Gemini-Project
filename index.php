<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  
  <!-- Iblize-->
  <link rel="stylesheet" href="iblize/iblize-dark.css"/>
  <script src="iblize/iblize.js"></script>

  <!-- docToText -->
  <script src="docToText/docToText.js"></script>

  <!-- Funciones -->
  <script src="funciones/typeWriter.js"></script>
  <script src="funciones/extractText.js"></script>

</head>

<style>
  .blinking-cursor {
    margin-left: 5px;
    background-color: #fff;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    50.1%, 100% {
      opacity: 0;
    }
  }
</style>

<body>



<div id="iblize_editor">
  
</div>



  <script type="importmap">
    {
    "imports": {
        "@google/generative-ai": "https://esm.run/@google/generative-ai"
    }
  }
    </script>
  <script src="index.js" type="module"></script>
</body>

</html>