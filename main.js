import { Controller_extract } from './mvc_extracText.js'
import { Model_extract } from './mvc_extracText.js'
import { View_extract } from './mvc_extracText.js'

import { Controller_IA } from './mvc_generativeIA.js'
import { Model_IA } from './mvc_generativeIA.js'
import { View_IA } from './mvc_generativeIA.js'

const text_extract = new Controller_extract(new Model_extract(), new View_extract())
text_extract.model.getCvSrc().then(() => {
  const generativeIAController = new Controller_IA(new Model_IA(), new View_IA());
  const text = text_extract.model.cvText;

  const input_search = document.getElementById("search");
  input_search.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      // Limpiar el editor
      document.getElementById("iblize_editor").innerHTML = "";

      try {
        // Ejecutar la función de generación de texto
        let respuesta = await generativeIAController.model.useGoogleAI(text, input_search.value);
        typeWriter(respuesta, "editor");
      } catch (error) {
        console.error("Error en la generación de texto:", error);
      }
    }
  });
});



// Necesito un resumen del CV de esta persona. Como esta informacion la voy a guardar en una base de datos para su posterior consulta, necesito que seas lo mas detallada posible pero a su vez no debe ser demasiada extensa por lo que solo debe datos claves. Para ello necesito que incluyas las palabras o frases claves, que incluyan estudios realizados, establecimientos o empresas en las que trabajo o datos personales relevantes como su edad o fecha de nacimiento. La longitud de la respuesta debe de ser entre 200 y 300 palabras