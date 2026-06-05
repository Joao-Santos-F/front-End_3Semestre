// Importa a biblioteca 'axios', que é usada para fazer requisições HTTP de forma mais simples
import axios from "axios";

// Define a porta onde a API local está rodando
const apiPort = "3000"; //se estiver dando erro e tiver que utilizar o db.json, altera a apiPort para 3000

// Monta a URL base para a API local, usando a porta definida
const localApi = `http://localhost:${apiPort}`; // usar json-server em http

// Cria uma instância do axios configurada com a URL base apontando para a API local
const api = axios.create({
    baseURL: localApi,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;