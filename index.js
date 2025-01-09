import {
    GoogleGenerativeAI
  } from "@google/generative-ai";

  const API_KEY = "AIzaSyCpCTNhzw8P1wrygLOFpoWh1JS2brQQcUc";

  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  });

  const generationConfig = {
    temperature: 0.5,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 5000,
    responseMimeType: "text/plain",
  };

  // Abrir el archivo y extraer el texto
  let src = "Proceso_Liquidación_Haberes_Pasivos_Municipales.docx"
  let type = "docx"
  let textoPDF = await extractText(src,type)

  async function run() {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig // Optional
    });

    let pregunta = `¿Como funciona el Ajuste a Mínima y Máxima?`;

    const prompt = `A partir del siguiente texto: ${textoPDF}, necesito que me 
                    contestes la siguiente pregunta: ${pregunta}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const respuesta = response.text();
    
    typeWriter(respuesta, "typewriter");
  }

  run();



  