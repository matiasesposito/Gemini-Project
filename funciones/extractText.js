const docToText = new DocToText();

async function extraerTexto(src, type){
  return await docToText.extractToText(src, type);
}

export { extraerTexto };