const docToText = new DocToText();

// Función para extraer texto de un archivo
async function doc_to_text(src, type) {
  try {
    return await docToText.extractToText(src, type);
  } catch (error) {
    throw error; // Propagar el error para ser manejado en otro lugar
  }
}

async function extractText(src, type) {
  const texto = await doc_to_text(src, type);
  return texto;
}
