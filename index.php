<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="main.css">
  <script src="typeWriter.js"></script>
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

  pre {
    white-space: pre-wrap;       /* css-3 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
    font-family: "Helvetica", Helvetica, Arial, sans-serif;
  }
</style>

<body>

<div>
  <pre id="typewriter"></pre>
</div>






  <script type="text/javascript" src="main.js"></script>
  <script type="importmap">
    {
    "imports": {
        "@google/generative-ai": "https://esm.run/@google/generative-ai"
    }
  }
    </script>
  <script src="docToText/docToText.js"></script>
  <script src="extractText.js"></script>
  <script src="index.js" type="module"></script>
</body>

</html>