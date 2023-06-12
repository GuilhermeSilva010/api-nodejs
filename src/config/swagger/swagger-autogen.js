import swaggerAutogen from "swagger-autogen";
import fg from "fast-glob";

const doc = {
  info: {
    version: "1.0.0",
    title: "My API",
    description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      "name": "Livros",
      "description": "Endpoints about books"
    },
    {
      "name": "Autores",
      "description": "Endpoints about author"
    }
  ],
  definitions: {
    books: [
      {
        "_id": "777",
        "titulo": "curso de node",
        "autor": {
          "_id": "888",
          "nome": "Jubileu",
          "nacionalidade": "brasileiro"
        },
        "editora": "alura",
        "numeroPaginas": 150,
        "__v": 0
      },
      {
        "_id": "888",
        "titulo": "curso de  java node",
        "autor": {
          "_id": "999",
          "nome": "Jubileu",
          "nacionalidade": "brasileiro"
        },
        "editora": "chabala",
        "numeroPaginas": 150,
        "__v": 0
      }],
    authors: [
      {
        "_id": "145",
        "nome": "Tiago carbone",
        "nacionalidade": "brasileiro"
      },
      {
        "_id": "123",
        "nome": "Machado de Assis",
        "nacionalidade": "Brasileiro"
      }]  
  },
};

const outputFile = "./swagger-output.json";
const endpointsFiles = fg.sync("src/routes/**Routes.js");

swaggerAutogen()(outputFile, endpointsFiles, doc);