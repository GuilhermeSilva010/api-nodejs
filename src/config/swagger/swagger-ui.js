import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json" assert { type: 'json'};

export default {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerFile),
};
