function eliminarAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function typeWriter(text, idElement) {

  // Instanciar el editor
  const iblize = new Iblize("#iblize_editor", {
    language: 'javascript',
    lineNumber: false,
  })

  let index = 0;
  //let typewriter = document.getElementById(idElement);
  function type() {
    if (index < text.length) {
      //typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
      text_format = eliminarAcentos(text.slice(index - 1, index));
      iblize.insertText(text.length, text_format);
      index++;
      setTimeout(type, 2);
    } else {
      //typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
    }
  }
  type();
}