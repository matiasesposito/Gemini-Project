import {
  GoogleGenerativeAI
} from "@google/generative-ai";

class Model {
    constructor() {
        this.api_key = 'AIzaSyCpCTNhzw8P1wrygLOFpoWh1JS2brQQcUc';
        this.genAI = new GoogleGenerativeAI(this.api_key);
        this.generationConfig = {
            temperature: 0.5,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 50000,
            responseMimeType: "text/plain",
        };
        this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, this.generationConfig);

    }

    async useGoogleAI(text,question) {

    
      const restrictions = `1) Solo debes limitarte a responder la pregunta desde la fuente de texto proporcionada.
                            2) Si la respuesta incluye a 2 o mas personas, debes listar a cada uno de manera separada con caracteres especiales, por ejmeplo con '•' o '-' ".
                            3) La informacion es un resumen de los CV de un conjunto de evaluadores`;

      const prompt = `Contesta la siguiente pregunta teniendo en cuenta las restricciones y la fuente de informacion desde la cual se generó el texto:
                      Pregunta: ${question}
                      Restricciones: ${restrictions}
                      Fuente: ${text}`;
    
      const result =  await this.model.generateContent(prompt);
      const response =  await result.response;
      const respuesta = response.text();
      return respuesta;
    }
}

class View {
  constructor() {}
}

class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }
}

export { Model as Model_IA, View as View_IA, Controller as Controller_IA}