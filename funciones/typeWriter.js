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
      letter = eliminarAcentos(text.slice(index - 1, index));
      iblize.insertText(text.length, text.slice(index - 1, index));
      index++;
      setTimeout(type, Math.random() * 15);
    } else {
      //typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
    }
  }
  type();
}